@echo off
setlocal EnableDelayedExpansion
cls

:: Colors for better output (if supported)
for /F %%a in ('echo prompt $E ^| cmd') do set "ESC=%%a"
set "GREEN=%ESC%[92m"
set "RED=%ESC%[91m"
set "YELLOW=%ESC%[93m"
set "BLUE=%ESC%[94m"
set "MAGENTA=%ESC%[95m"
set "CYAN=%ESC%[96m"
set "WHITE=%ESC%[97m"
set "RESET=%ESC%[0m"

:MAIN_MENU
cls
echo.
echo %CYAN%╔══════════════════════════════════════════════════════════════╗%RESET%
echo %CYAN%║%RESET%                    %MAGENTA%🚀 SELMA'S PORTFOLIO%RESET%                      %CYAN%║%RESET%
echo %CYAN%║%RESET%                   %WHITE%Development Server Manager%RESET%                %CYAN%║%RESET%
echo %CYAN%╚══════════════════════════════════════════════════════════════╝%RESET%
echo.
echo %GREEN%📁 Directory:%RESET% %~dp0
echo.
echo %YELLOW%Choose an option:%RESET%
echo.
echo %WHITE%[1]%RESET% %GREEN%🚀 Start Development Server%RESET% (npm run dev)
echo %WHITE%[2]%RESET% %BLUE%🔧 Install/Update Dependencies%RESET% (npm install)
echo %WHITE%[3]%RESET% %CYAN%🏗️  Build for Production%RESET% (npm run build)
echo %WHITE%[4]%RESET% %MAGENTA%🌐 Start Production Server%RESET% (npm start)
echo %WHITE%[5]%RESET% %YELLOW%🔍 Check System Status%RESET%
echo %WHITE%[6]%RESET% %WHITE%📖 Open Browser Only%RESET%
echo %WHITE%[0]%RESET% %RED%❌ Exit%RESET%
echo.
set /p choice=%YELLOW%Enter your choice (0-6):%RESET% 

if "%choice%"=="1" goto START_DEV
if "%choice%"=="2" goto INSTALL_DEPS
if "%choice%"=="3" goto BUILD_PROD
if "%choice%"=="4" goto START_PROD
if "%choice%"=="5" goto CHECK_STATUS
if "%choice%"=="6" goto OPEN_BROWSER
if "%choice%"=="0" goto EXIT
goto MAIN_MENU

:CHECK_STATUS
cls
echo.
echo %CYAN%🔍 SYSTEM STATUS CHECK%RESET%
echo ═══════════════════════
echo.

:: Check Node.js
echo %YELLOW%Checking Node.js...%RESET%
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo %RED%❌ Node.js: NOT INSTALLED%RESET%
    echo %YELLOW%   Download from: https://nodejs.org/%RESET%
) else (
    for /f "tokens=*" %%i in ('node --version') do echo %GREEN%✅ Node.js: %%i%RESET%
)

:: Check npm
echo %YELLOW%Checking npm...%RESET%
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo %RED%❌ npm: NOT FOUND%RESET%
) else (
    for /f "tokens=*" %%i in ('npm --version') do echo %GREEN%✅ npm: v%%i%RESET%
)

:: Check package.json
echo %YELLOW%Checking package.json...%RESET%
if exist "package.json" (
    echo %GREEN%✅ package.json: EXISTS%RESET%
) else (
    echo %RED%❌ package.json: NOT FOUND%RESET%
    echo %YELLOW%   Make sure you're in the correct directory%RESET%
)

:: Check node_modules
echo %YELLOW%Checking dependencies...%RESET%
if exist "node_modules" (
    echo %GREEN%✅ node_modules: EXISTS%RESET%
) else (
    echo %RED%❌ node_modules: NOT FOUND%RESET%
    echo %YELLOW%   Run option [2] to install dependencies%RESET%
)

:: Check Next.js
echo %YELLOW%Checking Next.js...%RESET%
if exist "node_modules\.bin\next.cmd" (
    echo %GREEN%✅ Next.js: INSTALLED%RESET%
) else (
    echo %RED%❌ Next.js: NOT FOUND%RESET%
)

echo.
echo %GREEN%Status check complete!%RESET%
echo.
pause
goto MAIN_MENU

:INSTALL_DEPS
cls
echo.
echo %CYAN%📦 INSTALLING DEPENDENCIES%RESET%
echo ═══════════════════════════
echo.
echo %YELLOW%This might take a few minutes...%RESET%
echo.

call npm install
if %errorlevel% neq 0 (
    echo.
    echo %RED%❌ Failed to install dependencies!%RESET%
    pause
    goto MAIN_MENU
)

echo.
echo %GREEN%✅ Dependencies installed successfully!%RESET%
echo.
pause
goto MAIN_MENU

:BUILD_PROD
cls
echo.
echo %CYAN%🏗️ BUILDING FOR PRODUCTION%RESET%
echo ═══════════════════════════
echo.

call npm run build
if %errorlevel% neq 0 (
    echo.
    echo %RED%❌ Build failed!%RESET%
    pause
    goto MAIN_MENU
)

echo.
echo %GREEN%✅ Build completed successfully!%RESET%
echo %YELLOW%You can now run option [4] to start the production server%RESET%
echo.
pause
goto MAIN_MENU

:START_PROD
cls
echo.
echo %CYAN%🌐 STARTING PRODUCTION SERVER%RESET%
echo ══════════════════════════════
echo.

if not exist ".next" (
    echo %RED%❌ Production build not found!%RESET%
    echo %YELLOW%Please run option [3] to build first%RESET%
    echo.
    pause
    goto MAIN_MENU
)

echo %GREEN%🚀 Starting production server...%RESET%
echo.
echo %CYAN%Portfolio available at: http://localhost:3000%RESET%
echo %YELLOW%Press Ctrl+C to stop%RESET%
echo.

timeout /t 2 /nobreak >nul
start http://localhost:3000

call npm start
goto MAIN_MENU

:OPEN_BROWSER
echo.
echo %CYAN%🌐 Opening browser...%RESET%
start http://localhost:3000
echo %GREEN%✅ Browser opened!%RESET%
timeout /t 2 /nobreak >nul
goto MAIN_MENU

:START_DEV
cls
echo.
echo %CYAN%🚀 STARTING DEVELOPMENT SERVER%RESET%
echo ═══════════════════════════════
echo.

:: Quick checks
if not exist "package.json" (
    echo %RED%❌ package.json not found!%RESET%
    echo %YELLOW%Make sure you're in the portfolio directory%RESET%
    pause
    goto MAIN_MENU
)

if not exist "node_modules" (
    echo %YELLOW%⚠️  Dependencies not installed%RESET%
    echo %CYAN%Installing dependencies first...%RESET%
    call npm install
    if %errorlevel% neq 0 (
        echo %RED%❌ Failed to install dependencies!%RESET%
        pause
        goto MAIN_MENU
    )
)

echo %GREEN%🔧 Starting Next.js development server...%RESET%
echo.
echo %CYAN%┌─────────────────────────────────────────────────────────────┐%RESET%
echo %CYAN%│%RESET%  %GREEN%🌐 Portfolio URL: http://localhost:3000%RESET%                  %CYAN%│%RESET%
echo %CYAN%│%RESET%  %YELLOW%🎨 Auto-hide navigation ✅%RESET%                             %CYAN%│%RESET%
echo %CYAN%│%RESET%  %MAGENTA%🌓 Dark/light toggle ✅%RESET%                                %CYAN%│%RESET%
echo %CYAN%│%RESET%  %BLUE%✨ Micro-interactions ✅%RESET%                               %CYAN%│%RESET%
echo %CYAN%│%RESET%                                                             %CYAN%│%RESET%
echo %CYAN%│%RESET%  %WHITE%Press Ctrl+C to stop the server%RESET%                       %CYAN%│%RESET%
echo %CYAN%└─────────────────────────────────────────────────────────────┘%RESET%
echo.

:: Open browser after a short delay
timeout /t 3 /nobreak >nul
echo %GREEN%🌐 Opening browser...%RESET%
start http://localhost:3000

echo.
echo %WHITE%Running: npm run dev%RESET%
echo.

:: Start the development server
call npm run dev

echo.
echo %YELLOW%🛑 Development server stopped%RESET%
echo.
pause
goto MAIN_MENU

:EXIT
cls
echo.
echo %GREEN%Thanks for using Selma's Portfolio! 👋%RESET%
echo.
timeout /t 2 /nobreak >nul
exit /b 0