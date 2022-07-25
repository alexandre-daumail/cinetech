<?php
session_start();
$title = "Cinetech - Détails";
$js = 'detail';
$css = 'movies';
ob_start();
?>

<main>
    
</main>

<?php
$content = ob_get_clean();
require('template.php');
?>