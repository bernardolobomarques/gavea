@echo off
echo 🚀 Preparando arquivos para deploy na Hostinger...

REM Criar pasta de deploy
if not exist deploy mkdir deploy

REM Copiar build do frontend
echo 📦 Copiando build do frontend...
xcopy dist\* deploy\ /E /Y

REM Copiar backend
echo 📧 Copiando backend...
xcopy backend deploy\backend\ /E /I /Y

REM Copiar manifest
echo 📱 Copiando manifest...
copy public\manifest.json deploy\

REM Criar arquivo de instruções
echo 🚀 INSTRUÇÕES DE UPLOAD PARA HOSTINGER > deploy\LEIA-ME.txt
echo. >> deploy\LEIA-ME.txt
echo 1. PREPARAÇÃO: >> deploy\LEIA-ME.txt
echo    - Edite backend/config.php com suas credenciais >> deploy\LEIA-ME.txt
echo    - Crie contas de email na Hostinger: contato@seudominio.com >> deploy\LEIA-ME.txt
echo. >> deploy\LEIA-ME.txt
echo 2. UPLOAD: >> deploy\LEIA-ME.txt
echo    - Faça upload de TODOS os arquivos para public_html/ >> deploy\LEIA-ME.txt
echo    - Estrutura final: >> deploy\LEIA-ME.txt
echo      public_html/ >> deploy\LEIA-ME.txt
echo      ├── index.html >> deploy\LEIA-ME.txt
echo      ├── manifest.json >> deploy\LEIA-ME.txt
echo      ├── .htaccess >> deploy\LEIA-ME.txt
echo      ├── assets/ >> deploy\LEIA-ME.txt
echo      └── backend/ >> deploy\LEIA-ME.txt
echo. >> deploy\LEIA-ME.txt
echo 3. PERMISSÕES: >> deploy\LEIA-ME.txt
echo    - backend/ → 755 >> deploy\LEIA-ME.txt
echo    - backend/logs/ → 755 (criar se não existir) >> deploy\LEIA-ME.txt
echo    - Arquivos .php → 644 >> deploy\LEIA-ME.txt
echo. >> deploy\LEIA-ME.txt
echo 4. TESTE: >> deploy\LEIA-ME.txt
echo    - Site: https://seudominio.com >> deploy\LEIA-ME.txt
echo    - Backend: https://seudominio.com/backend/test-email.php >> deploy\LEIA-ME.txt
echo. >> deploy\LEIA-ME.txt
echo 5. CONFIGURAÇÃO EMAIL: >> deploy\LEIA-ME.txt
echo    - SMTP Host: smtp.hostinger.com >> deploy\LEIA-ME.txt
echo    - Porta: 587 >> deploy\LEIA-ME.txt
echo    - Encryption: TLS >> deploy\LEIA-ME.txt

echo.
echo ✅ Arquivos preparados na pasta 'deploy\'
echo.
echo 📁 Estrutura criada:
dir deploy
echo.
echo 📋 Próximos passos:
echo 1. Edite deploy\backend\config.php
echo 2. Faça upload da pasta deploy\ para public_html\
echo 3. Configure permissões
echo 4. Teste o site
echo.
echo 📚 Consulte DEPLOY_HOSTINGER.md para instruções completas
echo.
pause
