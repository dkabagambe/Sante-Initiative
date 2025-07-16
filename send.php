<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $subject = htmlspecialchars(trim($_POST["subject"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo "All fields are required.";
    exit;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email address.";
    exit;
  }

  $to = "info@santeinitiative.org";
  $headers = "From: Sante Initiative <info@santeinitiative.org>\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $headers .= "MIME-Version: 1.0\r\n";

  $fullMessage = "You have a new message from the contact form:\n\n";
  $fullMessage .= "Name: $name\n";
  $fullMessage .= "Email: $email\n";
  $fullMessage .= "Subject: $subject\n";
  $fullMessage .= "Message:\n$message\n";

  if (mail($to, $subject, $fullMessage, $headers)) {
    // Redirect back to contact.html with a success query string
    header("Location: contact.html?status=success");
    exit;
  } else {
    // Redirect back with an error status
    header("Location: contact.html?status=error");
    exit;
  }
} else {
  echo "Invalid request.";
}
?>

