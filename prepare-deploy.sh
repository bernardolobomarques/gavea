#!/bin/bash
# Script para preparar arquivos para deploy na Hostinger

echo "🚀 Preparando arquivos para deploy na Hostinger..."

# Criar pasta de deploy
mkdir -p deploy

# Copiar build do frontend
echo "📦 Copiando build do frontend..."
cp -r dist/* deploy/

# Copiar backend
echo "📧 Copiando backend..."
cp -r backend deploy/

# Copiar manifest
echo "📱 Copiando manifest..."
cp public/manifest.json deploy/

# Criar arquivo de instruções
cat > deploy/LEIA-ME.txt << 'EOF'
🚀 INSTRUÇÕES DE UPLOAD PARA HOSTINGER

1. PREPARAÇÃO:
   - Edite backend/config.php com suas credenciais
   - Crie contas de email na Hostinger: contato@seudominio.com

2. UPLOAD:
   - Faça upload de TODOS os arquivos para public_html/
   - Estrutura final:
     public_html/
     ├── index.html
     ├── manifest.json
     ├── .htaccess
     ├── assets/
     └── backend/

3. PERMISSÕES:
   - backend/ → 755
   - backend/logs/ → 755 (criar se não existir)
   - Arquivos .php → 644

4. TESTE:
   - Site: https://seudominio.com
   - Backend: https://seudominio.com/backend/test-email.php

5. CONFIGURAÇÃO EMAIL:
   - SMTP Host: smtp.hostinger.com
   - Porta: 587
   - Encryption: TLS
EOF

# Mostrar estrutura criada
echo ""
echo "✅ Arquivos preparados na pasta 'deploy/'"
echo ""
echo "📁 Estrutura criada:"
ls -la deploy/
echo ""
echo "📋 Próximos passos:"
echo "1. Edite deploy/backend/config.php"
echo "2. Faça upload da pasta deploy/ para public_html/"
echo "3. Configure permissões"
echo "4. Teste o site"
echo ""
echo "📚 Consulte DEPLOY_HOSTINGER.md para instruções completas"
