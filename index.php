<?php
$title = "Cinetech - Passion Films/Séries";
ob_start();
?>




<?php
$content = ob_get_clean();
require('template.php');
?>