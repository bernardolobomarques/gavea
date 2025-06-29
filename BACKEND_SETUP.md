# Configuração do Backend

## Como configurar o backend localmente

1. **Crie a pasta `backend/` na raiz do projeto**

2. **Configure o arquivo `backend/config.php`** com suas credenciais:

```php
<?php
// Configurações de email - SUBSTITUA PELOS SEUS DADOS
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'seu-email@gmail.com'); 
define('SMTP_PASSWORD', 'sua-senha-de-app');
define('SMTP_ENCRYPTION', 'tls');

// Emails da empresa - SUBSTITUA PELOS SEUS DADOS  
define('COMPANY_EMAIL', 'contato@suaempresa.com');
define('COMPANY_NAME', 'Sua Empresa');
define('COMPANY_REPLY_EMAIL', 'noreply@suaempresa.com');

// Configurações gerais
define('TIMEZONE', 'America/Sao_Paulo');
define('DEBUG_MODE', false);
```

3. **Arquivos necessários no backend:**
   - `config.php` - Configurações
   - `contact.php` - Endpoint do formulário
   - `EmailSender.php` - Classe de envio de email
   - `SimpleMailer.php` - Auxiliar de email

## Como obter os arquivos do backend

Entre em contato para receber os arquivos completos do backend, pois eles contêm a lógica de negócio e não estão no repositório por segurança.

## Estrutura esperada

O frontend espera que o backend esteja disponível em `/backend/contact.php` e retorne JSON com:

```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!"
}
```

Ou em caso de erro:

```json
{
  "success": false,
  "error": "Mensagem de erro"
}
```
