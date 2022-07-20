<?php

require_once("../model/Dbh.php");
require_once("../model/User.php");

$user = new User;

var_dump($_POST);
try {
    foreach ($_POST as $key => $value) {
        echo $value;
        if (empty($value)) {
            echo "error";
        } else { echo $value; }
    }
die();
    $login = $user->test_input($_POST["signup-username"]);
    $email = $user->test_input($_POST["signup-email"]);
    $password = $user->test_input($_POST["signup-password"]);
    $pwdrepeat = $user->test_input($_POST["signup-password-confirmation"]);

    if (empty($login) || empty($password) || empty($pwdrepeat)) {

        throw new Exception("Veuillez remplir tous les champs", 1);
    }

    if (!preg_match("/^[a-zA-Z0-9]*$/", $login)) {

        throw new Exception("Pseudo incorrect", 1);
    }

    if ($password !== $pwdrepeat) {

        throw new Exception("Les mots de passe ne correspondent pas", 1);
    }


    $userCreated = $user->addUser($login, $password, $pwdrepeat);

    if ($userCreated === false) {

        throw new Exception("Impossible de créer l'utilisateur", 1);

    } else {

        header("location:index.php?signup=ok");
    }

} catch (Exception $e) {

    echo $e->getMessage();

}
