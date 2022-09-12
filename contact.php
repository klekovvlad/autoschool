<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

if (mail("mail@yandex.ru", "Заявка с сайта", "Имя: $name \r\n Телефон: $phone" ,"From: info@domain.ru"))
 {     echo "OK";
} else {
    echo "Error";
}?>