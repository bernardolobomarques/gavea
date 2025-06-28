<?php
/**
 * Script de teste para verificar configuração de email
 */

require_once 'config.php';
require_once 'EmailSender.php';

// Configurar headers para JSON
header('Content-Type: application/json');

// Verificar se é uma requisição GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    $tests = [];
    
    // Teste 1: Verificar função mail()
    $tests['mail_function'] = function_exists('mail');
    
    // Teste 2: Verificar configurações
    $tests['config'] = [
        'smtp_host' => SMTP_HOST,
        'smtp_port' => SMTP_PORT,
        'smtp_username' => !empty(SMTP_USERNAME),
        'company_email' => COMPANY_EMAIL,
        'timezone' => date_default_timezone_get()
    ];
    
    // Teste 3: Verificar permissões de arquivo
    $tests['file_permissions'] = [
        'logs_writable' => is_writable(dirname(__FILE__)) || mkdir('logs', 0755, true),
        'config_readable' => is_readable('config.php')
    ];
    
    // Teste 4: Verificar PHPMailer
    $tests['phpmailer'] = class_exists('PHPMailer\PHPMailer\PHPMailer');
    
    // Teste 5: Teste básico de envio (apenas validação)
    $emailSender = new EmailSender();
    $tests['email_sender_ready'] = ($emailSender instanceof EmailSender);
    
    // Determinar status geral
    $overall_status = 'ready';
    $issues = [];
    
    if (!$tests['mail_function']) {
        $issues[] = 'Função mail() não disponível';
        $overall_status = 'warning';
    }
    
    if (!$tests['file_permissions']['logs_writable']) {
        $issues[] = 'Não é possível escrever logs';
        $overall_status = 'warning';
    }
    
    if (empty(SMTP_USERNAME) || empty(SMTP_PASSWORD)) {
        $issues[] = 'Credenciais SMTP não configuradas';
        $overall_status = 'needs_config';
    }
    
    echo json_encode([
        'status' => $overall_status,
        'tests' => $tests,
        'issues' => $issues,
        'timestamp' => date('Y-m-d H:i:s'),
        'php_version' => phpversion(),
        'server_info' => [
            'software' => $_SERVER['SERVER_SOFTWARE'] ?? 'unknown',
            'php_version' => phpversion(),
            'os' => php_uname('s')
        ]
    ], JSON_PRETTY_PRINT);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'error' => $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ]);
}
?>
