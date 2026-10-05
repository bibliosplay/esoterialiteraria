@echo off
title Subir Esoteria Literaria a GitHub (bibliosplay)
cd /d "%~dp0"
echo ======================================================================
echo   Enviando archivos al repositorio https://github.com/bibliosplay/esoterialiteraria
echo ======================================================================
echo.
git push -u origin main
echo.
echo ======================================================================
echo   Proceso finalizado.
echo ======================================================================
pause
