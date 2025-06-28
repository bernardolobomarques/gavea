# 🚀 Guia Completo de Deploy - Hostinger

## 📂 Estrutura Final do Projeto

Após o build, sua estrutura de arquivos deve ser:

```
gavea-telecomunicacoes/
├── dist/                    # ← Build do React (upload para public_html)
│   ├── index.html
│   ├── assets/
│   │   ├── *.css
│   │   ├── *.js
│   │   └── *.png/.jpg
│   └── vite.svg
├── backend/                 # ← Upload para public_html/backend/
│   ├── contact.php
│   ├── config.php          # ← EDITAR ANTES DO UPLOAD
│   ├── EmailSender.php
│   ├── SimpleMailer.php
│   ├── test-email.php
│   ├── .htaccess
│   └── logs/               # ← Criar permissões 755
└── manifest.json           # ← Upload para public_html/
```

## 🔧 Passo a Passo para Deploy na Hostinger

### 1. **Preparar Arquivos para Upload**

#### A. Editar configurações do backend:
```php
// backend/config.php - EDITE ANTES DO UPLOAD

// Use suas credenciais de email
define('SMTP_HOST', 'smtp.hostinger.com');     // Hostinger SMTP
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'contato@seudominio.com'); // Seu email
define('SMTP_PASSWORD', 'SuaSenhaDeEmail');        // Sua senha
define('SMTP_ENCRYPTION', 'tls');

// Emails da empresa
define('COMPANY_EMAIL', 'contato@seudominio.com');
define('COMPANY_NAME', 'Gávea Telecomunicações');
define('COMPANY_REPLY_EMAIL', 'noreply@seudominio.com');
```

#### B. Verificar base path no React (se necessário):
Se o site não for no domínio raiz, edite `vite.config.js`:
```javascript
export default defineConfig({
  base: '/', // Para domínio raiz (recomendado)
  // base: '/gavea/', // Se for em subpasta
})
```

### 2. **Upload via File Manager da Hostinger**

#### Método 1: File Manager Web
1. Acesse o **hPanel** da Hostinger
2. Vá em **File Manager**
3. Navegue até `public_html/`

#### Método 2: FTP (Recomendado)
- **Host**: ftp.seudominio.com
- **Usuário**: Seu usuário FTP
- **Senha**: Sua senha FTP
- **Porta**: 21

### 3. **Estrutura de Upload**

```bash
public_html/
├── index.html              # ← dist/index.html
├── manifest.json           # ← public/manifest.json
├── vite.svg               # ← dist/vite.svg
├── assets/                # ← dist/assets/
│   ├── index-*.css
│   ├── index-*.js
│   └── *.png/.jpg
└── backend/               # ← backend/
    ├── contact.php
    ├── config.php         # ← EDITADO
    ├── EmailSender.php
    ├── SimpleMailer.php
    ├── test-email.php
    ├── .htaccess
    └── logs/              # ← Criar pasta e dar permissão 755
```

### 4. **Configuração de Email na Hostinger**

#### A. Criar conta de email:
1. No hPanel → **Email** → **Email Accounts**
2. Criar: `contato@seudominio.com`
3. Criar: `noreply@seudominio.com`

#### B. Configurações SMTP Hostinger:
```php
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'contato@seudominio.com');
define('SMTP_PASSWORD', 'SenhaDoEmail');
define('SMTP_ENCRYPTION', 'tls');
```

### 5. **Configurar Permissões de Arquivos**

Via File Manager ou FTP:
```bash
# Pastas
public_html/           → 755
public_html/backend/   → 755
public_html/backend/logs/ → 755

# Arquivos PHP
*.php                  → 644
backend/.htaccess      → 644

# Assets
*.html, *.css, *.js    → 644
*.png, *.jpg           → 644
```

### 6. **Testar a Instalação**

#### A. Teste básico:
- Acesse: `https://seudominio.com`
- Verifique se o site carrega

#### B. Teste do backend:
- Acesse: `https://seudominio.com/backend/test-email.php`
- Deve retornar JSON com status da configuração

#### C. Teste do formulário:
- Vá na página de contato
- Envie um teste pelo formulário
- Verifique se recebe os emails

## 🔧 Comandos de Upload via Terminal/FTP

### Upload do Frontend (dist):
```bash
# Conectar via FTP e executar:
cd public_html/
put dist/* .
```

### Upload do Backend:
```bash
cd public_html/
mkdir backend
cd backend/
put backend/* .
chmod 755 logs/
```

## 📧 Configuração Específica da Hostinger

### Arquivo .htaccess na raiz (public_html/):
```apache
# Redirecionar para HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Suporte ao React Router
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Headers de segurança
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options SAMEORIGIN
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# Compressão GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache de assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    ExpiresByType application/x-shockwave-flash "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresDefault "access plus 2 days"
</IfModule>
```

## 🚨 Checklist Pré-Deploy

- [ ] Build do React gerado (`npm run build`)
- [ ] `backend/config.php` editado com credenciais corretas
- [ ] Contas de email criadas na Hostinger
- [ ] Domínio apontado corretamente
- [ ] SSL certificado ativo

## 🚨 Checklist Pós-Deploy

- [ ] Site carrega em `https://seudominio.com`
- [ ] `https://seudominio.com/backend/test-email.php` retorna status OK
- [ ] Formulário de contato funciona
- [ ] Emails são recebidos
- [ ] Logs são criados em `backend/logs/`
- [ ] Menu mobile funciona
- [ ] WhatsApp buttons funcionam

## 🔍 Troubleshooting Comum

### ❌ Site não carrega:
- Verificar se index.html está na raiz (public_html/)
- Verificar permissões dos arquivos (644)
- Verificar .htaccess

### ❌ Backend não funciona:
- Verificar se PHP está habilitado
- Verificar permissões (755 para pastas, 644 para arquivos)
- Testar `test-email.php`

### ❌ Emails não enviados:
- Verificar credenciais SMTP no config.php
- Verificar se contas de email existem
- Verificar logs de erro do servidor

### ❌ CORS Error:
- Verificar .htaccess no backend/
- Verificar headers CORS
- Testar em navegador diferente

## 📞 URLs Finais

- **Site**: `https://seudominio.com`
- **Teste Backend**: `https://seudominio.com/backend/test-email.php`
- **API Contato**: `https://seudominio.com/backend/contact.php`

## ⚡ Otimizações Extras

### Cloudflare (Opcional):
1. Adicionar domínio no Cloudflare
2. Ativar SSL/TLS
3. Ativar cache automático
4. Minificação de assets

### Google Analytics (Opcional):
Adicionar tracking code no index.html antes do </head>

### Sitemap (Opcional):
Criar sitemap.xml na raiz para SEO

---

**🎉 Pronto! Seu site estará online na Hostinger com sistema de contato funcionando!**
