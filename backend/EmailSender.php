<?php
/**
 * Classe para envio de emails
 */

// Verificar se PHPMailer está disponível
if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    // Se PHPMailer não estiver disponível, usar mail() nativo
    require_once 'SimpleMailer.php';
} else {
    // Usar PHPMailer se disponível
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
}

class EmailSender {
    private $usePhpMailer;
    
    public function __construct() {
        $this->usePhpMailer = class_exists('PHPMailer\PHPMailer\PHPMailer');
    }
    
    /**
     * Enviar email para a empresa
     */
    public function sendToCompany($name, $lastname, $email, $subject, $message) {
        $full_name = $name . ' ' . $lastname;
        $email_subject = "[SITE] " . $subject;
        
        $email_body = $this->getCompanyEmailTemplate($full_name, $email, $subject, $message);
        
        if ($this->usePhpMailer) {
            return $this->sendWithPhpMailer(COMPANY_EMAIL, $email_subject, $email_body, $email, $full_name);
        } else {
            return $this->sendWithNativeMail(COMPANY_EMAIL, $email_subject, $email_body, $email, $full_name);
        }
    }
    
    /**
     * Enviar email de confirmação para o usuário
     */
    public function sendConfirmationToUser($email, $name) {
        $subject = "Confirmação de Contato - " . COMPANY_NAME;
        $body = $this->getConfirmationEmailTemplate($name);
        
        if ($this->usePhpMailer) {
            return $this->sendWithPhpMailer($email, $subject, $body, COMPANY_REPLY_EMAIL, COMPANY_NAME);
        } else {
            return $this->sendWithNativeMail($email, $subject, $body, COMPANY_REPLY_EMAIL, COMPANY_NAME);
        }
    }
    
    /**
     * Enviar com PHPMailer
     */
    private function sendWithPhpMailer($to, $subject, $body, $replyEmail, $replyName) {
        try {
            $mail = new PHPMailer(true);
            
            // Configurações do servidor
            $mail->isSMTP();
            $mail->Host = SMTP_HOST;
            $mail->SMTPAuth = true;
            $mail->Username = SMTP_USERNAME;
            $mail->Password = SMTP_PASSWORD;
            $mail->SMTPSecure = SMTP_ENCRYPTION;
            $mail->Port = SMTP_PORT;
            $mail->CharSet = 'UTF-8';
            
            // Destinatários
            $mail->setFrom(SMTP_USERNAME, COMPANY_NAME);
            $mail->addAddress($to);
            $mail->addReplyTo($replyEmail, $replyName);
            
            // Conteúdo
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $body;
            
            return $mail->send();
            
        } catch (Exception $e) {
            error_log("PHPMailer Error: " . $e->getMessage());
            return false;
        }
    }
    
    /**
     * Enviar com mail() nativo
     */
    private function sendWithNativeMail($to, $subject, $body, $replyEmail, $replyName) {
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: ' . COMPANY_NAME . ' <' . $replyEmail . '>',
            'Reply-To: ' . $replyName . ' <' . $replyEmail . '>',
            'X-Mailer: PHP/' . phpversion()
        ];
        
        return mail($to, $subject, $body, implode("\r\n", $headers));
    }
    
    /**
     * Template de email para a empresa
     */
    private function getCompanyEmailTemplate($name, $email, $subject, $message) {
        $template = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background-color: #2a5276; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .info-box { background-color: #f8f9fa; padding: 15px; border-left: 4px solid #2a5276; margin: 10px 0; }
                .message-box { background-color: #ffffff; padding: 15px; border: 1px solid #dee2e6; border-radius: 5px; }
                .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Novo Contato do Site</h1>
                <p>' . COMPANY_NAME . '</p>
            </div>
            
            <div class="content">
                <div class="info-box">
                    <h3>Informações do Contato:</h3>
                    <p><strong>Nome:</strong> ' . htmlspecialchars($name) . '</p>
                    <p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>
                    <p><strong>Assunto:</strong> ' . htmlspecialchars($subject) . '</p>
                    <p><strong>Data/Hora:</strong> ' . date('d/m/Y H:i:s') . '</p>
                </div>
                
                <div class="message-box">
                    <h3>Mensagem:</h3>
                    <p>' . nl2br(htmlspecialchars($message)) . '</p>
                </div>
            </div>
            
            <div class="footer">
                <p>Este email foi enviado automaticamente através do formulário de contato do site.</p>
                <p>' . COMPANY_NAME . ' - ' . date('Y') . '</p>
            </div>
        </body>
        </html>';
        
        return $template;
    }
    
    /**
     * Template de confirmação para o usuário
     */
    private function getConfirmationEmailTemplate($name) {
        $template = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background-color: #2a5276; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .highlight { background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin: 15px 0; }
                .contact-info { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
                .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
                .whatsapp { background-color: #25d366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Confirmação de Contato</h1>
                <p>' . COMPANY_NAME . '</p>
            </div>
            
            <div class="content">
                <p>Olá <strong>' . htmlspecialchars($name) . '</strong>,</p>
                
                <div class="highlight">
                    <p>Obrigado por entrar em contato conosco! Recebemos sua mensagem e nossa equipe retornará em breve.</p>
                </div>
                
                <p>Para agilizar ainda mais o atendimento, você também pode entrar em contato através dos nossos canais diretos:</p>
                
                <div class="contact-info">
                    <h3>Informações de Contato:</h3>
                    <p><strong>📞 Telefone:</strong> (21) 97198-4430</p>
                    <p><strong>📧 Email:</strong> contato@gaveatelecom.com.br</p>
                    <p><strong>📍 Endereço:</strong> Avenida Presidente Vargas 590/1309, Rio de Janeiro - RJ</p>
                    <p><strong>🕒 Horário:</strong> Segunda a Sexta, 8h às 18h</p>
                </div>
                
                <div style="text-align: center; margin: 20px 0;">
                    <a href="https://wa.me/5521971984430" class="whatsapp">
                        💬 Falar pelo WhatsApp
                    </a>
                </div>
                
                <p>Especializados em infraestrutura de telecomunicações, oferecemos soluções completas em:</p>
                <ul>
                    <li>Instalação de Small Cells</li>
                    <li>Construção de Sites de Telecomunicações</li>
                    <li>Consultoria Técnica</li>
                    <li>Licenciamento e Aquisição de Locais</li>
                    <li>Manutenção de Infraestrutura</li>
                </ul>
            </div>
            
            <div class="footer">
                <p>Este é um email automático, não responda este email.</p>
                <p>' . COMPANY_NAME . ' - ' . date('Y') . '</p>
            </div>
        </body>
        </html>';
        
        return $template;
    }
}
?>
