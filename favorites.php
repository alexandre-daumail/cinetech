<?php
session_start();
$title = "Cinetech - Mes Favoris";
ob_start();
?>
<main class="container">
</main>

<?php
$content = ob_get_clean();
require('template.php');
?>