<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Include configuration
require_once 'config.php';

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'lastname', 'email', 'subject', 'message'];
$errors = [];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        $errors[] = "Campo '{$field}' é obrigatório";
    }
}

// Validate email format
if (!empty($input['email']) && !filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email inválido';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => 'Dados inválidos', 'details' => $errors]);
    exit();
}

// Sanitize input data
$name = htmlspecialchars(trim($input['name']));
$lastname = htmlspecialchars(trim($input['lastname']));
$email = htmlspecialchars(trim($input['email']));
$subject = htmlspecialchars(trim($input['subject']));
$message = htmlspecialchars(trim($input['message']));

// Include email sending class
require_once 'EmailSender.php';

try {
    $emailSender = new EmailSender();
    
    // Send email to company
    $companyEmailSent = $emailSender->sendToCompany($name, $lastname, $email, $subject, $message);
    
    // Send confirmation email to user
    $userEmailSent = $emailSender->sendConfirmationToUser($email, $name);
    
    if ($companyEmailSent && $userEmailSent) {
        // Log the contact (optional)
        logContact($name, $lastname, $email, $subject, $message);
        
        echo json_encode([
            'success' => true,
            'message' => 'Email enviado com sucesso!'
        ]);
    } else {
        throw new Exception('Erro ao enviar email');
    }
    
} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'error' => 'Erro interno do servidor',
        'message' => 'Tente novamente mais tarde'
    ]);
}

/**
 * Log contact submission (optional)
 */
function logContact($name, $lastname, $email, $subject, $message) {
    $log_entry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'name' => $name . ' ' . $lastname,
        'email' => $email,
        'subject' => $subject,
        'message' => substr($message, 0, 100) . '...',
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ];
    
    $log_file = 'logs/contacts.log';
    $log_dir = dirname($log_file);
    
    if (!is_dir($log_dir)) {
        mkdir($log_dir, 0755, true);
    }
    
    file_put_contents($log_file, json_encode($log_entry) . "\n", FILE_APPEND | LOCK_EX);
}
?>
