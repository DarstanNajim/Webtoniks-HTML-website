<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $phone = $_POST['phone-number'];
    $mailFrom = $_POST['email'];
    $message = $_POST ['message'];

    $mailTo = "contact@webtoniks.com";
    $headers = "From: ".$mailfrom;
    $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $phone, $txt, $headers);
    header('Location: index.html');
}
