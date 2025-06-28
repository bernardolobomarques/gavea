# 📧 Backend PHP - Formulário de Contato

Sistema completo de envio de emails para o formulário de contato do site Gávea Telecomunicações.

## 📋 Arquivos Inclusos

- `contact.php` - Endpoint principal para processar formulários
- `config.php` - Configurações do sistema
- `EmailSender.php` - Classe para envio de emails
- `SimpleMailer.php` - Fallback para envio sem PHPMailer
- `test-email.php` - Script de teste da configuração
- `.htaccess` - Configurações de segurança

## ⚙️ Configuração Inicial

### 1. Editar o arquivo `config.php`

```php
// Configurações SMTP (recomendado usar Gmail)
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'seu-email@gmail.com');
define('SMTP_PASSWORD', 'sua-senha-de-app');

// Emails da empresa
define('COMPANY_EMAIL', 'contato@gaveatelecom.com.br');
define('COMPANY_NAME', 'Gávea Telecomunicações');
```

### 2. Configurar Gmail (Recomendado)

1. Ativar verificação em 2 etapas
2. Gerar senha de app em: https://myaccount.google.com/apppasswords
3. Usar a senha gerada no `SMTP_PASSWORD`

### 3. Configurar Permissões

```bash
chmod 755 backend/
chmod 644 backend/*.php
chmod 755 backend/logs/
```

## 🚀 Instalação no Servidor

### Opção 1: Servidor com PHPMailer
```bash
composer require phpmailer/phpmailer
```

### Opção 2: Servidor sem Composer
O sistema funciona com `mail()` nativo do PHP.

## 🧪 Teste da Configuração

Acesse: `http://seudominio.com/backend/test-email.php`

Resposta esperada:
```json
{
    "status": "ready",
    "tests": {
        "mail_function": true,
        "phpmailer": true,
        "email_sender_ready": true
    }
}
```

## 📡 Integração com Frontend

No arquivo de contato React, usar a URL:

```javascript
const response = await fetch('/backend/contact.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'João',
        lastname: 'Silva',
        email: 'joao@email.com',
        subject: 'Contato',
        message: 'Mensagem de teste'
    })
});
```

## 🔒 Recursos de Segurança

- ✅ Validação de campos obrigatórios
- ✅ Sanitização de dados de entrada
- ✅ Rate limiting por IP
- ✅ Proteção contra spam (honeypot)
- ✅ Headers de segurança
- ✅ Log de tentativas
- ✅ CORS configurado

## 📊 Logs e Monitoramento

- `logs/contacts.log` - Log de contatos enviados
- `logs/rate_limit.json` - Controle de rate limiting
- Logs de erro do servidor

## 🔧 Troubleshooting

### Problema: Email não está sendo enviado
1. Verificar configurações SMTP no `config.php`
2. Testar com `test-email.php`
3. Verificar logs do servidor
4. Confirmar que função `mail()` está habilitada

### Problema: CORS Error
1. Verificar se `.htaccess` está configurado
2. Confirmar que o servidor suporta mod_headers
3. Ajustar `Access-Control-Allow-Origin` se necessário

### Problema: Rate Limit
1. Verificar permissões da pasta `logs/`
2. Aumentar `MAX_SUBMISSIONS_PER_HOUR` se necessário
3. Limpar arquivo `rate_limit.json`

## 📱 Funcionalidades

### Email para Empresa
- Notificação instantânea de novos contatos
- Template HTML profissional
- Todas as informações do formulário
- Data/hora do contato

### Email de Confirmação
- Confirmação automática para o usuário
- Informações de contato da empresa
- Link direto para WhatsApp
- Design responsivo

## 🌟 Recursos Avançados

- **Rate Limiting**: Máximo 5 submissões por hora por IP
- **Honeypot**: Campo oculto para detectar spam
- **Logs**: Registro completo de todas as interações
- **Fallback**: Funciona com ou sem PHPMailer
- **Mobile Ready**: Templates responsivos

## 📞 Suporte

Para dúvidas sobre a configuração, consulte os logs ou teste com `test-email.php`.

## 🚀 Deploy

1. Upload dos arquivos para pasta `backend/` no servidor
2. Configurar `config.php` com suas credenciais
3. Testar com `test-email.php`
4. Atualizar URL no frontend React
5. Testar formulário completo

## ⚡ Performance

- Resposta JSON rápida
- Envio assíncrono de emails
- Cache de configurações
- Logs otimizados
