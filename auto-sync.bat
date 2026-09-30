@echo off
cd /d C:\CompleteWebDevelopment

:loop
git add .
git diff --cached --quiet

if %errorlevel% neq 0 (
    git commit -m "Auto sync"
    git push origin main
)

timeout /t 60 /nobreak >nul
goto loop