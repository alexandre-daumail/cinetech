<?php
session_start();
$title = "Cinetech - Séries";
$js = 'shows';
$css = 'movies';
ob_start();
?>

<main class="container">
</main>

<?php
$content = ob_get_clean();
require('template.php');
?>