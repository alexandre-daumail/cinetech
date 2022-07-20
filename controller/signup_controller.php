<?php

require_once("../model/Dbh.php");
require_once("../model/User.php");

$user = new User;

var_dump($_POST);
try {

    if (isset($_POST)){
die();
            $login = $user->test_input($_POST["login"]);
            $password = $user->test_input($_POST["password"]);
            $pwdrepeat = $user->test_input($_POST["pwdrepeat"]);

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

            }
            
            else{			
            
            session_start();
            $_SESSION["success"] = "Votre profil a bien été créé";
            header("location:../login.php");
    
            }				
			
    }

} 

catch (Exception $e) {
    
    session_start();
    $_SESSION["error"] = $e->getMessage();
    header('location:../signup.php');
    
}

