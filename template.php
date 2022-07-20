<?php
session_start();

include_once('header.php');

?>

<aside>
<?php 
if(isset($_SESSION["error"])) {
    echo $_SESSION["error"];
    unset($_SESSION["error"]);
}

if (isset($_SESSION["success"])){
    echo $_SESSION["success"];
    unset($_SESSION["success"]);
}
?>
</aside>

<?php

echo $content;

include_once('footer.php');

?>