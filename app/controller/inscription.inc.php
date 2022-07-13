<?php
//require_once('./model/user.class.php');
require_once('class-autoload.inc.php');
function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
 
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";


try {

    if (isset($_POST)){

            $login = test_input($_POST["login"]);
            $password = test_input($_POST["password"]);
            $pwdrepeat = test_input($_POST["pwdrepeat"]);

            if (empty($login) || empty($password) || empty($pwdrepeat)) {

                throw new Exception("Veuillez remplir tous les champs", 1);

            }

            if (!preg_match("/^[a-zA-Z0-9]*$/", $login)) {

                throw new Exception("Pseudo incorrect", 1);
            }

            if ($password !== $pwdrepeat) {

                throw new Exception("Les mots de passe ne correspondent pas", 1);

            }

            $user = new User;

            $userCreated = $user->addUser($login, $password, $pwdrepeat);

            if ($userCreated === false) {

                throw new Exception("Impossible de créer l'utilisateur", 1);

            }
            
            else{			
            
            session_start();
            $_SESSION["success"] = "Votre profil a bien été créé";
            header("location:..\html\profil.html.php");
    
            }				
			
    }

} 

catch (Exception $e) {
    
    session_start();
    $_SESSION["error"] = $e->getMessage();
    header('location:../html/inscription.html.php');
    
}

