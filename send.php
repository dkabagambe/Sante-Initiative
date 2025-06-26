<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $subject = htmlspecialchars(trim($_POST["subject"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  $to = "info@santeinitiative.org";
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $fullMessage = "You have a new message from the contact form:\n\n";
  $fullMessage .= "Name: $name\n";
  $fullMessage .= "Email: $email\n";
  $fullMessage .= "Subject: $subject\n";
  $fullMessage .= "Message:\n$message\n";

  if (mail($to, $subject, $fullMessage, $headers)) {
    echo "Thank you! Your message has been sent.";
  } else {
    echo "Sorry, there was a problem sending your message. Please try again later.";
  }
} else {
  echo "Invalid request.";
}
?>
