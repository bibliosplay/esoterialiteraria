@echo off
title Portal Esoteria Literaria - Coleccion Completa
echo ======================================================================
echo   Iniciando el Portal Maestro de Esoteria Literaria...
echo ======================================================================
where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Python detectado. Iniciando servidor web local sin bloqueos CORS...
    python "%~dp0serve.py"
) else (
    echo [INFO] Abriendo portal directamente en tu navegador...
    start "" "%~dp0index.html"
)
exit
