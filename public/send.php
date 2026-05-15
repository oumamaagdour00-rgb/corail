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
$senderEmail   = 'coraillocean5@gmail.com';
$appPassword   = 'qahf vejp aakn rfcz';
$receiverEmail = 'k.bouzoubaa@coraillocean.com';
$receiverEmail2 = 'contact@coraillocean.com'; // Deuxième destinataire

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Données JSON invalides.']);
    exit();
}

$name = isset($data['name']) ? trim($data['name']) : '';
$firstName = isset($data['firstName']) ? trim($data['firstName']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$subject = isset($data['subject']) ? trim($data['subject']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Tous les champs requis ne sont pas remplis.']);
    exit();
}

// Format de l'email
$email_body = "
<html>
<body style='font-family: Arial, sans-serif; font-size: 14px; color: #111;'>
    <p><strong>Email :</strong> " . htmlspecialchars($email) . "</p>
    <p><strong>Téléphone :</strong> " . htmlspecialchars($phone) . "</p>
    <br/>
    <p><strong>Message :</strong></p>
    <p>" . nl2br(htmlspecialchars($message)) . "</p>
    <br/>
    <p style='color: #666; font-size: 12px;'><em>Envoyé à " . date('d/m/Y à H:i') . "</em></p>
</body>
</html>
";

function sendSmtpMail($server, $port, $user, $password, $from, $to, $to2, $replyTo, $replyToName, $subject, $htmlMessage, $senderDisplayEmail) {
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
    fputs($socket, "RCPT TO: <$to2>\r\n"); // Deuxième destinataire
    read_res($socket);
    fputs($socket, "DATA\r\n");
    read_res($socket);

    // Titre de l'email : Nom Prénom
    $encodedSubject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

    // Nom de l'émetteur : Nom Prénom
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
    $receiverEmail2, // Deuxième destinataire
    $email, // Reply-to email
    "$firstName $name",  // Reply-to name
    $subject, 
    $email_body,
    "$name $firstName" // L'affichage sera "Nom Prénom"
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
