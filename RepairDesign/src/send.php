<?php 

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userEmail = $_POST['userEmail'];
$userQuestion = $_POST['userQuestion'];


// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                     // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'rbojcenko2018@gmail.com';                     // SMTP username
    $mail->Password   = '49&k&Rna';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;       
    $mail->CharSet    = "utf-8";                           // TCP port to connect to

    //Recipients
    $mail->setFrom('rbojcenko2018@gmail.com', 'Роман');
    $mail->addAddress('rbojcenko2018@gmail.com');     // Add a recipient


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}. его телефон:  ${userPhone}. Его электронная почта:  ${userEmail}, Его вопрос: ${userQuestion}";

    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}