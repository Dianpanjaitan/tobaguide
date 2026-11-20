@echo off
title TobaGuide Server
echo ========================================================
echo    TobaGuide - Marketplace Pemandu Wisata Danau Toba
echo    "Satu Langkah, Beribu Keajaiban Toba"
echo ========================================================
echo.
echo [1] Membuka browser ke http://localhost:8080/ ...
start http://localhost:8080/
echo [2] Menjalankan server lokal TobaGuide pada Port 8080...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
