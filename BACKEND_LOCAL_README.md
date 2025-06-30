# Backend - Documentação Local

## ⚠️ IMPORTANTE
Este backend **NÃO é versionado** no GitHub por segurança. Ele contém informações sensíveis e deve permanecer apenas no ambiente local/servidor.

## Estrutura do Backend

```
backend/
├── config.php              # Configurações SMTP e sistema
├── contact.php             # Endpoint para formulário de contato
├── EmailSender.php         # Classe principal para envio de emails
├── SimpleMailer.php        # Classe auxiliar de email
├── test-email.php          # Script de teste de email
└── README.md              # Este arquivo
```

## Configuração

1. **Edite o arquivo `config.php`** com suas credenciais:
   - SMTP_HOST: Servidor de email
   - SMTP_USERNAME: Seu email
   - SMTP_PASSWORD: Senha de app (não a senha normal)
   - COMPANY_EMAIL: Email para receber contatos

2. **Teste o sistema** usando `test-email.php`

## Deploy

- Para hospedar o backend, copie os arquivos para o servidor
- Configure as variáveis de ambiente no servidor
- Teste o funcionamento com `test-email.php`

## Segurança

- Nunca commite credenciais no Git
- Use senhas de aplicativo para Gmail/SMTP
- Configure rate limiting adequadamente
- Mantenha logs em diretório protegido
