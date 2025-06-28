# 🚀 Configuração do Servidor Web

## Para Apache (.htaccess já incluído)

Certifique-se de que o módulo `mod_rewrite` está habilitado:

```apache
# No arquivo httpd.conf ou apache2.conf
LoadModule rewrite_module modules/mod_rewrite.so

# Para o diretório do projeto
<Directory "/caminho/para/gavea">
    AllowOverride All
    Require all granted
</Directory>
```

## Para Nginx

Adicione ao arquivo de configuração do site:

```nginx
server {
    listen 80;
    server_name seudominio.com;
    root /caminho/para/gavea;
    index index.html index.php;

    # Configuração para React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Configuração para backend PHP
    location /backend/ {
        try_files $uri $uri/ =404;
        
        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }

    # Headers de segurança
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";

    # CORS para API
    location /backend/contact.php {
        add_header Access-Control-Allow-Origin "*";
        add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
        add_header Access-Control-Allow-Headers "Content-Type";
        
        if ($request_method = 'OPTIONS') {
            return 204;
        }
        
        try_files $uri =404;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    # Negar acesso a arquivos sensíveis
    location ~ /\. {
        deny all;
    }
    
    location ~* \.(log|md)$ {
        deny all;
    }
}
```

## Para desenvolvimento local

### Usando XAMPP/WAMP:
1. Copie o projeto para `htdocs/gavea/`
2. Configure `backend/config.php` com suas credenciais
3. Acesse: `http://localhost/gavea/`

### Usando servidor PHP embutido:
```bash
# Na pasta do projeto
php -S localhost:8000

# Acesse: http://localhost:8000
```

## 📧 Configuração de Email

### Gmail (Recomendado):
1. Ative a verificação em 2 etapas
2. Gere uma senha de app em: https://myaccount.google.com/apppasswords
3. Use a senha gerada no `SMTP_PASSWORD`

### Outro provedor SMTP:
```php
// config.php
define('SMTP_HOST', 'mail.seudominio.com');
define('SMTP_PORT', 587); // ou 465 para SSL
define('SMTP_USERNAME', 'contato@seudominio.com');
define('SMTP_PASSWORD', 'sua-senha');
define('SMTP_ENCRYPTION', 'tls'); // ou 'ssl'
```

## 🧪 Teste da Configuração

1. Acesse: `http://seudominio.com/backend/test-email.php`
2. Verifique se todos os testes passaram
3. Configure as credenciais se necessário
4. Teste o formulário de contato

## 📂 Estrutura Final

```
gavea/
├── backend/
│   ├── contact.php          # Endpoint principal
│   ├── config.php           # Configurações (editar)
│   ├── EmailSender.php      # Classe de email
│   ├── SimpleMailer.php     # Fallback
│   ├── test-email.php       # Teste de configuração
│   ├── .htaccess           # Segurança Apache
│   ├── logs/               # Logs (criar automaticamente)
│   └── README.md           # Documentação
├── src/                    # Frontend React
├── public/                 # Assets estáticos
└── index.html             # Página principal
```

## 🔒 Checklist de Segurança

- [ ] Configurar HTTPS em produção
- [ ] Alterar senhas padrão
- [ ] Configurar firewall
- [ ] Definir permissões de arquivo corretas
- [ ] Configurar backup automático
- [ ] Monitorar logs de erro
- [ ] Testar rate limiting

## 📞 URLs Importantes

- **Site**: `http://seudominio.com/gavea/`
- **Teste Email**: `http://seudominio.com/backend/test-email.php`
- **Endpoint API**: `http://seudominio.com/backend/contact.php`
