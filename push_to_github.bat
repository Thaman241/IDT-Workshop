@echo off
title Push IDT Portfolio to GitHub
echo ========================================================
echo  Deploying Cyber-Emerald Portfolio to GitHub...
echo  Repository: https://github.com/Thaman241/IDT-Workshop.git
echo ========================================================
echo.

set "GIT_EXE=C:\Program Files\Git\cmd\git.exe"

if exist "%GIT_EXE%" (
    echo [OK] Located Git at %GIT_EXE%
    "%GIT_EXE%" push -u origin main
) else (
    git push -u origin main
)

echo.
echo ========================================================
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Your code has been pushed to GitHub!
    echo Visit: https://github.com/Thaman241/IDT-Workshop
) else (
    echo [FAILED] Push did not complete. Check messages above.
)
echo ========================================================
echo.
pause
