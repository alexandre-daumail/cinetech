<?php
session_start();

require_once("../model/Dbh.php");
require_once("../model/User.php");

$user = new User;

try {

/*     foreach ($_POST as $key => $value) {

        if (empty($value)) {
            throw new Exception("Veuillez remplir tous les champs", 1);
        }
    }
 */
    switch ($_POST) {

        case isset($_POST["update-login"]):

            $login = $user->test_input($_POST["newLogin"]);
            $pwd = $user->test_input($_POST["password"]);

            if (empty($_POST["newLogin"]) || empty($_POST["password"])) {
                throw new Exception("Veuillez remplir tous les champs", 1);
            }

            if (!preg_match("/^[a-zA-Z0-9]*$/", $_POST["newLogin"])) {
                throw new Exception("Le pseudo doit être seulement contenir des caractères alphanumériques.", 1);
            }

            $user = new User;

            $user->modifyUser($_SESSION["login"], $login, $pwd);

            $_SESSION["success"] = 'Login modifié avec succès';

            header('location:../account.php');

            break;

        case isset($_POST["update-pwd"]):

            if (empty($_POST["password"]) || empty($_POST["newPwd"]) || empty($_POST["pwdRepeat"])) {
                throw new Exception("Veuillez remplir tous les champs", 1);
            }

            if ($_POST["newPwd"] !== $_POST["pwdRepeat"]) {
                throw new Exception("Les mots de passe ne correspondent pas", 1);
            }

            $userManager = new User();

            $pwdModification = $userManager->modifyPwd($_SESSION['login'], $_POST["password"], $_POST["newPwd"]);

            if ($pwdModification === false) {
                throw new Exception("Impossible de modifier le mot de passe", 1);
            }

            header('location:../profil.php');
        
            break;

        case isset($_POST["delete"]):

            if (empty($_POST["password"])) {
                throw new Exception("Veuillez remplir tous les champs", 1);
            }

            $user = new User;

            $user->deleteUser($_SESSION['login'], $_POST["password"]);

            break;

        default:
        header('location:../profil.php');
        }
} catch (Exception $e) {

    session_start();
    $_SESSION["error"] = $e->getMessage();
    header('location:../profil.php');
    exit();
}
