<?php
session_start();
$title = "Cinetech - Films";
$js = 'movies';
$css = 'movies';
ob_start();
?>

<main>
    <ul id="list"></ul>
</main>

<?php
$content = ob_get_clean();
require('template.php');
?>