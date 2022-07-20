<?php

if (isset($_SESSION["id"])){
    header('location:profil.php');
    exit();
}
else {

$title = "Inscription";
ob_start();

?>

<main>

   <form action="controller/signup_controller.php" method="post">

        <fieldset>

                <legend>Création d'un compte utilisateur</legend>
                
                    <label for="login"> Login </label>
                    <input type="text" class="box-input" name="login" id="login" placeholder="Nom d'utilisateur" required>
                    
                    <label for="password"> Mot de passe </label> <input type="password" placeholder="Mot de passe" name="password" id="password" required>

                    <label for="pwdrepeat"> Confirmation Mdp </label>
                    <input type="password" placeholder="Confirmation Mdp" name="pwdrepeat" id="pwdrepeat" required>
                    
                    <button type="submit" name="inscription">inscription</button>

                <p class="box-register">Déjà inscrit? <a href="login.php">Connectez-vous ici</a></p>

        </fieldset>

    </form>

</main>

<?php
$content = ob_get_clean();
}
require('template.php');
?>