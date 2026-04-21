<?php
// Permite que o React mande dados se estiver no mesmo servidor.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Pegando os dados do formulário e limpando por segurança
    $name = strip_tags(trim($_POST["name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"] ?? 'Sin especificar'));
    $message = trim($_POST["message"] ?? '');

    // Verifica se os campos obrigatórios vazios
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Por favor, preencha todos os campos."]);
        exit;
    }

    // ==========================================
    // SUBSTITUA AQUI PELO E-MAIL REAL DA GÁVEA:
    $to = "contato@gaveatelecomunicacoes.com"; 
    // ==========================================

    $email_subject = "Novo Contato do Site: $subject";

    $email_content = "Você recebeu uma nova mensagem do site da Gávea Telecomunicações.\n\n";
    $email_content .= "Nome: $name\n";
    $email_content .= "Email de contato: $email\n\n";
    $email_content .= "Assunto: $subject\n\n";
    $email_content .= "Mensagem:\n$message\n";

    // Envia o email parecendo que o servidor mesmo enviou. ResponderVai pro email do cliente.
    $email_headers = "From: contato@gaveatelecomunicacoes.com\r\n";
    $email_headers .= "Reply-To: $email\r\n";

    if (mail($to, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Enviado com sucesso."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Falha no servidor da Hostinger. Verifique se o mail() está ativo."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Acesso negado."]);
}
?>
