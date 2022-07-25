<?php
session_start();
$title = "Cinetech - Séries";
$js = 'show';
$css = 'details';
ob_start();
?>

<main>

<div class="container">

        </div>
        
        <hr>
        
        <section class="com">
        <h3>Commentaires</h3>
            <ul class="comm">
                
            </ul>

            
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

