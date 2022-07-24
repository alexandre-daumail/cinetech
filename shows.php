<?php
session_start();
$title = "Cinetech - Séries";
$js = 'shows';
ob_start();
?>

<main class="container">
</main>

<?php
$content = ob_get_clean();
require('template.php');
?>