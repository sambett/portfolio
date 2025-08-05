@echo off
cls
echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                    🚀 SELMA'S PORTFOLIO                      ║
echo ║                   Starting Development Server                ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

:: Set the portfolio directory
set PORTFOLIO_DIR=%~dp0
cd /d "%PORTFOLIO_DIR%"

echo 📁 Portfolio Directory: %PORTFOLIO_DIR%
echo.

:: Check if Node.js is installed
echo 🔍 Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: Display Node.js version
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%
echo.

:: Check if package.json exists
if not exist "package.json" (
    echo ❌ package.json not found!
    echo Make sure you're in the correct directory.
    echo.
    pause
    exit /b 1
)

:: Check if node_modules exists, if not install dependencies
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    echo This might take a few minutes...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies!
        echo.
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed successfully!
    echo.
) else (
    echo ✅ Dependencies already installed
    echo.
)

:: Check for Next.js
echo 🔍 Checking Next.js installation...
if exist "node_modules\.bin\next.cmd" (
    echo ✅ Next.js found
) else (
    echo ❌ Next.js not found in node_modules
    echo Try running: npm install
    pause
    exit /b 1
)
echo.

:: Display available scripts
echo 📋 Available Scripts:
echo.
type package.json | findstr /C:"\"scripts\"" -A 10 | findstr /C:"\"dev\"" /C:"\"build\"" /C:"\"start\"" /C:"\"lint\""
echo.

:: Start the development server
echo 🚀 Starting development server...
echo.
echo ┌─────────────────────────────────────────────────────────────┐
echo │  Your portfolio will be available at:                      │
echo │  🌐 http://localhost:3000                                   │
echo │                                                             │
echo │  Press Ctrl+C to stop the server                           │
echo └─────────────────────────────────────────────────────────────┘
echo.

:: Wait a moment for server to potentially start
timeout /t 3 /nobreak >nul

:: Try to open browser automatically
echo 🌐 Opening browser...
start http://localhost:3000

:: Start Next.js development server
echo.
echo 🔧 Running: npm run dev
echo.
call npm run dev

:: If we reach here, the server was stopped
echo.
echo 🛑 Development server stopped.
echo.
pause