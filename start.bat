@echo off
REM Quick start script for the portfolio on Windows

echo.
echo 🎨 Portfolio Website - Quick Start
echo ==================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🚀 Starting development server...
echo The app will open at: http://localhost:3000
echo.
echo 💡 Tips:
echo   - Edit components in src/components/
echo   - Update theme in src/theme.ts
echo   - Customize content in each section
echo.
echo 📚 Documentation:
echo   - README.md - Project overview
echo   - SETUP_GUIDE.md - Detailed setup and customization
echo   - CUSTOMIZATION_CHECKLIST.md - Quick checklist
echo.

call npm run dev
pause
