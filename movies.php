<?php
session_start();
$title = "Cinetech - Films";
ob_start();
?>
<main class="container">
</main>

<?php
$content = ob_get_clean();
require('template.php');
?>