<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = "Mail from website";
  $mailFrom = $_POST['email'];
  $message = $_POST['message'];

  if (empty($name) || empty($mailFrom) || empty($message)) {
  header("Location: contactus.html?emptyfields");
  exit();
  }
  else {
    if (filter_var ($email, FILTER_VALIDATE_EMAIL)) {
      header ("Location: contactus.html?invalidemailaddress");
      exit();
    }

  }

  $mailTo = "info@surreelcleaning.com";
  $headers = "From: ".$mailFrom;
  $txt = "Mail from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: ../index.php?mailsent");
}

else {
  header("Location: contactus.html?did not click submit");
  exit();
}
