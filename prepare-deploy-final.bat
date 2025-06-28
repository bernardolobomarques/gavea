@echo off
echo ========================================
echo    GAVEA TELECOM - PREPARACAO DEPLOY
echo ========================================
echo.

REM Criar pasta de deploy
if not exist "deploy-ready" mkdir "deploy-ready"
if not exist "deploy-ready\public_html" mkdir "deploy-ready\public_html"

echo [1/4] Copiando arquivos do build React...
xcopy "dist\*" "deploy-ready\public_html\" /E /Y > nul
echo     ✓ Frontend copiado

echo [2/4] Copiando backend PHP...
xcopy "backend\*" "deploy-ready\public_html\backend\" /E /Y > nul
echo     ✓ Backend copiado

echo [3/4] Copiando .htaccess existente...
copy "dist\.htaccess" "deploy-ready\public_html\.htaccess" > nul 2>&1
echo     ✓ .htaccess criado

echo [4/4] Copiando documentacao...
copy "DEPLOY_HOSTINGER.md" "deploy-ready\" > nul
copy "DEPLOY_FINAL.md" "deploy-ready\" > nul
echo     ✓ Documentacao copiada

echo.
echo ========================================
echo           DEPLOY PREPARADO!
echo ========================================
echo.
echo Pasta criada: deploy-ready\
echo.
echo PROXIMOS PASSOS:
echo 1. Acesse o File Manager da Hostinger
echo 2. Va ate public_html/
echo 3. Delete todos os arquivos existentes
echo 4. Upload todo o conteudo de deploy-ready\public_html\
echo 5. Configure o email em backend\config.php
echo 6. Teste o site!
echo.
echo Documentacao completa em: deploy-ready\DEPLOY_FINAL.md
echo.
pause
