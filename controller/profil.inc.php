<?php
session_start();
require_once('class-autoload.inc.php');

try {

    switch ($_POST) {

        case isset($_POST["update-login"]):

            $login = $_SESSION["login"];

            if (empty($_POST["newLogin"]) || empty($_POST["password"])) {
                throw new Exception("Veuillez remplir tous les champs", 1);
            }

            if (!preg_match("/^[a-zA-Z0-9]*$/", $_POST["newLogin"])) {
                throw new Exception("Pseudo incorrect", 1);
            }

            $user = new User;

            $user->modifyUser($login, $_POST["newLogin"], $_POST["password"]);

            header("location:../html/profil.html.php");

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

            header("location:../html/profil.html.php");

            break;

        case isset($_POST["delete"]):

            if (empty($_POST["password"])) {
                throw new Exception("Veuillez remplir tous les champs", 1);
            }

            $user = new User;

            $user->deleteUser($_SESSION['login'], $_POST["password"]);

            break;

        default:
            header("location:index.html.php");
            break;
    }
} catch (Exception $e) {

    session_start();
    $_SESSION["error"] = $e->getMessage();
    header('location:../html/profil.html.php');
}
