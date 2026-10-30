param (
    [int]$Port = 3000
)

$Folder = $PSScriptRoot
if (-not $Folder) { $Folder = (Get-Location).Path }

# Test ports to find an available one
$availablePort = $Port
foreach ($p in @($Port, 8080, 8000, 5000, 3001)) {
    $tempListener = $null
    try {
        $tempListener = New-Object System.Net.HttpListener
        $tempListener.Prefixes.Add("http://localhost:$($p)/")
        $tempListener.Start()
        $availablePort = $p
        $tempListener.Stop()
        $tempListener.Close()
        break
    } catch {
        if ($tempListener) { try { $tempListener.Close() } catch {} }
    }
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$($availablePort)/")

try {
    $listener.Start()
} catch {
    Write-Host "Failed to start listener on port ${availablePort}: $_"
    exit 1
}

$url = "http://localhost:$($availablePort)/"
Write-Host "================================================="
Write-Host "Server running at: $url"
Write-Host "Serving directory: $Folder"
Write-Host "================================================="

# Automatically launch browser
try {
    Start-Process $url
} catch {
    Write-Host "Could not open browser automatically: $_"
}

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".jsx"   = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".gif"   = "image/gif"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/" -or [string]::IsNullOrWhiteSpace($urlPath)) {
            $urlPath = "/index.html"
        }

        $cleanPath = $urlPath.TrimStart('/').Replace('/', '\')
        $localPath = Join-Path $Folder $cleanPath

        if (Test-Path $localPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $contentType = $mimeTypes[$ext]
            if (-not $contentType) { $contentType = "application/octet-stream" }

            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = "<!DOCTYPE html><html><body><h1>404 Not Found</h1><p>Path not found: $urlPath</p></body></html>"
            $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes($msg)
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $notFoundBytes.Length
            $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # ignore transient client disconnects
    }
}
