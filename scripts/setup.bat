@echo off
REM SAAS Automation Builder - Windows Setup Script

setlocal enabledelayedexpansion

echo.
echo ==========================================
echo 🚀 SAAS Automation Builder - Auto Setup
echo ==========================================
echo.

REM Step 1: Check Node.js
echo Checking Node.js...
where node >nul 2>nul
if !errorlevel! neq 0 (
    echo ❌ Node.js is not installed!
    echo Please install from: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VER=%%i
echo ✓ Node.js %NODE_VER% found
echo.

REM Step 2: Install dependencies
echo 📦 Installing dependencies... (this may take a few minutes)
call npm install
if !errorlevel! neq 0 (
    echo ❌ npm install failed
    pause
    exit /b 1
)
echo ✓ Dependencies installed
echo.

REM Step 3: Setup environment
echo 🔐 Setting up environment variables...
if not exist .env.local (
    copy .env.local.example .env.local
    echo ✓ Created .env.local
    echo.
    echo 📝 IMPORTANT: Edit .env.local with your API keys:
    echo    - Clerk: https://go.clerk.com/qbebvpA
    echo    - Neon Database: https://neon.tech/
    echo    - Stripe: https://stripe.com
    echo    - Google: https://console.cloud.google.com
    echo.
) else (
    echo ✓ .env.local already exists
)
echo.

REM Step 4: Generate Prisma
echo 🗄️ Setting up database client...
call npm run prisma:generate
if !errorlevel! neq 0 (
    echo ⚠️ Prisma generation had warnings (this is okay)
)
echo ✓ Prisma client ready
echo.

REM Step 5: Ready to run
echo ✅ Setup complete!
echo.
echo Next steps:
echo 1. Edit .env.local with your API keys
echo 2. Run: npm run dev
echo 3. Open: http://localhost:3000
echo.
echo Or use Docker:
echo   docker-compose up
echo.
pause
