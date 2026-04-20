<?php
/**
 * Script d'envoi d'email pour formulaire de contact via SMTP Gmail
 * Utilisant oumamaagdour00@gmail.com
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée. Utilisez POST.']);
    exit();
}

$smtpHost      = 'smtp.gmail.com';
$smtpPort      = 465;
$senderEmail   = 'oumamaagdour00@gmail.com';
$appPassword   = 'cfku kkoq apjz hvmc';
$receiverEmail = 'abdlhadi.laassi@gmail.com';

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Données JSON invalides.']);
    exit();
}

$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$subject = isset($data['subject']) ? trim($data['subject']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Tous les champs requis ne sont pas remplis.']);
    exit();
}

// L'email s'affiche de manière très simple et normale
$email_body = "
<html>
<body style='font-family: Arial, sans-serif; font-size: 14px; color: #111;'>
    <p><strong>Nom :</strong> " . htmlspecialchars($name) . "</p>
    <p><strong>Email :</strong> " . htmlspecialchars($email) . "</p>
    <br/>
    <p><strong>Message :</strong></p>
    <p>" . nl2br(htmlspecialchars($message)) . "</p>
</body>
</html>
";

function sendSmtpMail($server, $port, $user, $password, $from, $to, $replyTo, $replyToName, $subject, $htmlMessage, $senderDisplayEmail) {
    if (!extension_loaded('openssl')) {
        return ['success' => false, 'message' => 'L\'extension OpenSSL est requise sur le serveur PHP.'];
    }

    $context = stream_context_create([
        'ssl' => ['verify_peer' => false, 'verify_peer_name' => false]
    ]);

    $socket = stream_socket_client("ssl://{$server}:{$port}", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $context);
    
    if (!$socket) {
        return ['success' => false, 'message' => "Erreur de connexion SMTP: $errstr"];
    }

    function read_res($socket) {
        $data = "";
        while ($str = fgets($socket, 515)) {
            $data .= $str;
            if (substr($str, 3, 1) == " ") { break; }
        }
        return $data;
    }

    read_res($socket);
    fputs($socket, "EHLO localhost\r\n");
    read_res($socket);
    fputs($socket, "AUTH LOGIN\r\n");
    read_res($socket);
    fputs($socket, base64_encode($user) . "\r\n");
    read_res($socket);
    fputs($socket, base64_encode($password) . "\r\n");
    $authRes = read_res($socket);
    
    if (strpos($authRes, '235') === false) {
        fclose($socket);
        return ['success' => false, 'message' => "Erreur d'authentification SMTP."];
    }

    fputs($socket, "MAIL FROM: <$from>\r\n");
    read_res($socket);
    fputs($socket, "RCPT TO: <$to>\r\n");
    read_res($socket);
    fputs($socket, "DATA\r\n");
    read_res($socket);

    // Titre de l'email : on utilise exactement le sujet sélectionné par le client, pas de préfixe.
    $encodedSubject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

    // Nom de l'émetteur : On utilise l'email du visiteur pour que ça s'affiche "de : oumamaagdour00@gmail.com"
    $encodedFromName = "=?UTF-8?B?" . base64_encode($senderDisplayEmail) . "?=";

    $headers = "From: $encodedFromName <$from>\r\n";
    $headers .= "Reply-To: =?UTF-8?B?" . base64_encode($replyToName) . "?= <$replyTo>\r\n";
    $headers .= "Subject: $encodedSubject\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = $headers . "\r\n" . $htmlMessage . "\r\n.\r\n";

    fputs($socket, $body);
    $sendRes = read_res($socket);
    fputs($socket, "QUIT\r\n");
    fclose($socket);

    if (strpos($sendRes, '250') === false) {
        return ['success' => false, 'message' => "L'envoi a échoué: $sendRes"];
    }

    return ['success' => true];
}

$result = sendSmtpMail(
    $smtpHost, 
    $smtpPort, 
    $senderEmail, 
    $appPassword, 
    $senderEmail, 
    $receiverEmail, 
    $email, // Reply-to email
    $name,  // Reply-to name
    $subject, 
    $email_body,
    "$name ($email)" // L'affichage sera "Nom (Email) <oumamaagdour00@gmail.com>"
);

if ($result['success']) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Votre message a été envoyé avec succès.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $result['message']
    ]);
}
