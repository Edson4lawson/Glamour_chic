@echo off
echo Deploiement Glamour Chic
echo ==========================

:: Vérifier Railway CLI
where railway >nul 2>nul
if %errorlevel% neq 0 (
    echo Railway CLI non trouve. Installation...
    call npm install -g @railway/cli
)

:: Vérifier Vercel CLI  
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo Vercel CLI non trouve. Installation...
    call npm install -g vercel
)

echo.
echo Deploiement Backend Railway...
cd backend
railway up
cd ..

echo.
echo Deploiement Frontend Vercel...
cd frontend
vercel --prod
cd ..

echo.
echo Deploiement termine !
pause
