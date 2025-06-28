<?php
/**
 * Configurações do sistema de contato
 */

// Configurações de email
define('SMTP_HOST', 'smtp.gmail.com'); // Altere para seu servidor SMTP
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'seu-email@gmail.com'); // Altere para seu email
define('SMTP_PASSWORD', 'sua-senha-app'); // Use senha de app do Gmail
define('SMTP_ENCRYPTION', 'tls');

// Emails da empresa
define('COMPANY_EMAIL', 'contato@gaveatelecom.com.br'); // Email para receber contatos
define('COMPANY_NAME', 'Gávea Telecomunicações');
define('COMPANY_REPLY_EMAIL', 'noreply@gaveatelecom.com.br'); // Email para enviar confirmações

// Configurações gerais
define('TIMEZONE', 'America/Sao_Paulo');
define('DEBUG_MODE', false); // Altere para true para debug

// Configurar timezone
date_default_timezone_set(TIMEZONE);

// Configurações de segurança
define('MAX_DAILY_SUBMISSIONS', 10); // Máximo de submissões por IP por dia
define('HONEYPOT_FIELD', 'website'); // Campo honeypot para spam protection

// Configurações de rate limiting
define('RATE_LIMIT_WINDOW', 3600); // 1 hora em segundos
define('MAX_SUBMISSIONS_PER_HOUR', 5);

/**
 * Função para verificar rate limiting
 */
function checkRateLimit($ip) {
    $rate_file = "logs/rate_limit.json";
    $rate_dir = dirname($rate_file);
    
    if (!is_dir($rate_dir)) {
        mkdir($rate_dir, 0755, true);
    }
    
    $current_time = time();
    $rate_data = [];
    
    if (file_exists($rate_file)) {
        $rate_data = json_decode(file_get_contents($rate_file), true) ?: [];
    }
    
    // Limpar entradas antigas
    $rate_data = array_filter($rate_data, function($timestamp) use ($current_time) {
        return ($current_time - $timestamp) < RATE_LIMIT_WINDOW;
    });
    
    // Contar submissões do IP atual
    $ip_submissions = array_filter($rate_data, function($timestamp, $stored_ip) use ($ip) {
        return $stored_ip === $ip;
    }, ARRAY_FILTER_USE_BOTH);
    
    if (count($ip_submissions) >= MAX_SUBMISSIONS_PER_HOUR) {
        return false;
    }
    
    // Adicionar nova submissão
    $rate_data[$ip . '_' . $current_time] = $current_time;
    
    // Salvar dados atualizados
    file_put_contents($rate_file, json_encode($rate_data), LOCK_EX);
    
    return true;
}

/**
 * Função para validar honeypot
 */
function validateHoneypot($input) {
    return empty($input[HONEYPOT_FIELD]);
}

/**
 * Função para sanitizar entrada
 */
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

/**
 * Função para validar email
 */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Função para gerar token CSRF (se necessário)
 */
function generateCSRFToken() {
    if (!isset($_SESSION)) {
        session_start();
    }
    
    $token = bin2hex(random_bytes(32));
    $_SESSION['csrf_token'] = $token;
    return $token;
}

/**
 * Função para validar token CSRF
 */
function validateCSRFToken($token) {
    if (!isset($_SESSION)) {
        session_start();
    }
    
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}
?>
