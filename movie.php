<?php
session_start();
$title = "Cinetech - Détails";
$js = 'movie';
$css = 'movie';
echo $_SESSION['id'];
ob_start();
?>

<main>
    <article>

    </article>

    <section class="com">
        <h3>Commentaires</h3>
        <ul class="comm"></ul>
        <input type="text" id="addComment" name="comment" placeholder="Votre commentaire"/>
        <input type="button" name="submit" value="Envoyer" id="submit"/>
    </section>

    <hr>

    <h1>Dans le même genre</h1>
    <div class="similar">

    </div>
</main>

<?php
$content = ob_get_clean();
require('template.php');
?>