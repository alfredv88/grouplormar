@echo off
TITLE Grupo Lormar - Despliegue Local
COLOR 0A

echo ==========================================================
echo           GRUPO LORMAR - PORTAL CORPORATIVO
echo ==========================================================
echo.
echo Preparando entorno local...
echo.

:: Verificar si existe node_modules, si no, instalar dependencias
IF NOT EXIST "node_modules\" (
    echo [!] No se detectaron dependencias. Instalando...
    call npm install
) ELSE (
    echo [^] Dependencias verificadas.
)

echo.
echo [^] Iniciando Servidor de Desarrollo...
echo [^] La web estar disponible en: http://localhost:3000
echo.

:: Iniciar el navegador automticamente (opcional, pero mejora UX)
start http://localhost:3000

:: Ejecutar el servidor de Next.js
call npm run dev

pause
