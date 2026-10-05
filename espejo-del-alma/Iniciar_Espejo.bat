@echo off
title El Espejo del Alma - Tarot Junguiano
echo ========================================================
echo   Iniciando El Espejo del Alma...
echo ========================================================
where python >nul 2>nul
if %errorlevel% equ 0 (
    echo Iniciando servidor local en Python para evitar bloqueos CORS...
    python "%~dp0serve.py"
) else (
    echo Abriendo directamente en el navegador...
    start "" "%~dp0index.html"
)
exit
