<?php

spl_autoload_register('myAutoLoader');

function myAutoLoader($className) {

    require_once "../classes/" . $className . ".class.php";

}