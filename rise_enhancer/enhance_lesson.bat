@echo off
Title Browse4Folder
Color 0A
Call :Browse4Folder "Choose source lesson to enhance" 
echo Enhancing Project "%Location%"
Call :CopyFiles 

@REM set Location="c:\dev\react\BeDa281.github.io\tmp"
Call :InsertIntoHtml

pause & exit




:InsertIntoHtml
Set "Ins=<script src="lib/main.bundle.js"></script>"
Set "New=<script type="text/javascript" src="jquery-2.1.1.min.js"></script>"
Powershell -Nop -C "(Get-Content %Location%.\index.html).replace($ENV:Ins,$ENV:Ins+\"`n\"+$ENV:New)|Set-Content %Location%.\index.html"
Set "New=<script type="text/javascript" src="zsolt.js"></script>"
Powershell -Nop -C "(Get-Content %Location%.\index.html).replace($ENV:Ins,$ENV:Ins+\"`n\"+$ENV:New)|Set-Content %Location%.\index.html"
Set "New=<link rel="stylesheet" type="text/css" href="dist/sweetalert.css">"
Powershell -Nop -C "(Get-Content %Location%.\index.html).replace($ENV:Ins,$ENV:Ins+\"`n\"+$ENV:New)|Set-Content %Location%.\index.html"
Set "New=<script src="dist/sweetalert.min.js"></script>"
Powershell -Nop -C "(Get-Content %Location%.\index.html).replace($ENV:Ins,$ENV:Ins+\"`n\"+$ENV:New)|Set-Content %Location%.\index.html"
goto :eof

:CopyFiles
xcopy ".\dist" "%Location%\dist\" /E
xcopy ".\jquery-2.1.1.min.js" "%Location%\" /E
xcopy ".\zsolt.js" "%Location%\" /E
goto :eof

::***************************************************************************
:Browse4Folder
set Location=
set vbs="%temp%\_.vbs"
set cmd="%temp%\_.cmd"
for %%f in (%vbs% %cmd%) do if exist %%f del %%f
for %%g in ("vbs cmd") do if defined %%g set %%g=
(
    echo set shell=WScript.CreateObject("Shell.Application"^) 
    echo set f=shell.BrowseForFolder(0,"%~1",0,"%~2"^) 
    echo if typename(f^)="Nothing" Then  
    echo wscript.echo "set Location=Dialog Cancelled" 
    echo WScript.Quit(1^)
    echo end if 
    echo set fs=f.Items(^):set fi=fs.Item(^) 
    echo p=fi.Path:wscript.echo "set Location=" ^& p
)>%vbs%
cscript //nologo %vbs% > %cmd%
for /f "delims=" %%a in (%cmd%) do %%a
for %%f in (%vbs% %cmd%) do if exist %%f del /f /q %%f
for %%g in ("vbs cmd") do if defined %%g set %%g=
goto :eof
::*****