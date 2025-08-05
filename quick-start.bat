@echo off
title Selma's Portfolio - Quick Start

:: Navigate to portfolio directory
cd /d "%~dp0"

:: Quick start message
echo.
echo ⚡ QUICK START - Selma's Portfolio
echo ================================
echo.
echo 🚀 Starting development server...
echo 🌐 Will open http://localhost:3000
echo.

:: Install deps if needed (silently)
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install --silent
)

:: Open browser after 4 seconds
start /B timeout /t 4 /nobreak >nul && start http://localhost:3000

:: Start Next.js
npm run dev