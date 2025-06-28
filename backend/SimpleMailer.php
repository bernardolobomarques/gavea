<?php
/**
 * Classe alternativa para envio de emails sem PHPMailer
 */

class SimpleMailer {
    
    /**
     * Enviar email simples
     */
    public static function send($to, $subject, $body, $fromEmail, $fromName) {
        // Configurar headers
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: ' . $fromName . ' <' . $fromEmail . '>',
            'Reply-To: ' . $fromName . ' <' . $fromEmail . '>',
            'X-Mailer: PHP/' . phpversion(),
            'X-Priority: 3',
            'Return-Path: ' . $fromEmail
        ];
        
        // Configurar subject com encoding
        $subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
        
        // Tentar enviar email
        $result = mail($to, $subject, $body, implode("\r\n", $headers));
        
        if (!$result) {
            error_log("Mail sending failed for: $to");
        }
        
        return $result;
    }
    
    /**
     * Validar configuração de email do servidor
     */
    public static function testMailConfiguration() {
        $test_email = 'test@example.com';
        $test_subject = 'Test Mail Configuration';
        $test_body = 'This is a test email to verify mail configuration.';
        
        // Não enviar realmente, apenas verificar função mail
        if (function_exists('mail')) {
            return true;
        }
        
        return false;
    }
    
    /**
     * Obter informações de configuração de email
     */
    public static function getMailInfo() {
        $info = [
            'mail_function_available' => function_exists('mail'),
            'smtp_configured' => false,
            'sendmail_path' => ini_get('sendmail_path'),
            'smtp_host' => ini_get('SMTP'),
            'smtp_port' => ini_get('smtp_port')
        ];
        
        // Verificar se SMTP está configurado
        if (!empty($info['smtp_host']) && !empty($info['smtp_port'])) {
            $info['smtp_configured'] = true;
        }
        
        return $info;
    }
}
?>
