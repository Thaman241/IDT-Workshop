import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas Component
 * Renders an interactive matrix-dot grid that reacts to cursor position with
 * elastic displacement, subtle perspective shift, and ambient cyber-emerald ripples.
 */
const MatrixGridCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth interpolation (lerp)
    const mouse = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
      isHovered: false,
      radius: 170, // influence radius
    };

    // Click ripples array
    const ripples = [];

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 280,
        alpha: 0.8,
        speed: 4.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Grid configuration
    const spacing = 32; // distance between dots
    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Clear with subtle trail or crisp clear
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient vignette gradient
      const radialGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        420
      );
      radialGrad.addColorStop(0, 'rgba(16, 185, 129, 0.07)');
      radialGrad.addColorStop(0.5, 'rgba(163, 230, 53, 0.025)');
      radialGrad.addColorStop(1, 'rgba(13, 17, 23, 0)');

      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // Perspective tilt offset based on mouse
      const tiltX = (mouse.x / width - 0.5) * 14;
      const tiltY = (mouse.y / height - 0.5) * 14;

      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      // Update ripple rings
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= 0.015;
        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // Draw dots
      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const originX = i * spacing + tiltX;
          const originY = j * spacing + tiltY;

          // Distance to mouse
          const dx = mouse.x - originX;
          const dy = mouse.y - originY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Ambient wave
          const wave = Math.sin(time + originX * 0.008 + originY * 0.008) * 2;

          let posX = originX;
          let posY = originY + wave;
          let dotRadius = 1.25;
          let alpha = 0.18; // default subtle visibility
          let isNeon = false;

          // Mouse proximity effect (elastic displacement + glow)
          if (dist < mouse.radius) {
            const factor = 1 - dist / mouse.radius;
            const push = factor * 14;
            const angle = Math.atan2(dy, dx);

            // Push gently away from cursor
            posX -= Math.cos(angle) * push;
            posY -= Math.sin(angle) * push;

            // Enlarge and illuminate
            dotRadius = 1.25 + factor * 2.2;
            alpha = 0.25 + factor * 0.75;
            isNeon = true;
          }

          // Check click ripples
          for (let r = 0; r < ripples.length; r++) {
            const rip = ripples[r];
            const ripDist = Math.hypot(rip.x - posX, rip.y - posY);
            const ringDist = Math.abs(ripDist - rip.radius);
            if (ringDist < 25) {
              const ripFactor = (1 - ringDist / 25) * rip.alpha;
              dotRadius = Math.max(dotRadius, 1.25 + ripFactor * 2.5);
              alpha = Math.min(1, alpha + ripFactor * 0.8);
              isNeon = true;
            }
          }

          // Draw the dot
          ctx.beginPath();
          ctx.arc(posX, posY, dotRadius, 0, Math.PI * 2);

          if (isNeon) {
            // Neon Emerald to Lime gradient highlights
            if (dist < mouse.radius * 0.4) {
              ctx.fillStyle = `rgba(163, 230, 53, ${alpha})`; // Bright Lime center
            } else {
              ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`; // Crisp Neon Emerald
            }
          } else {
            // Subtle carbon-slate grid dots with green undertone
            ctx.fillStyle = `rgba(52, 211, 153, ${alpha * 0.6})`;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
};

export default MatrixGridCanvas;

