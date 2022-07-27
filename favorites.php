<?php
session_start();
$title = "Cinetech - Mes Favoris";
ob_start();
?>
<main class="container">
<div class="movies-container favorites">
            <h1>Favorites</h1>
            <div class="movies-grid">
                <div class="card" data-id="123456">
                    <div class="img">
                        <img src="https://unsplash.it/500/1000" alt="">
                    </div>
                    <div class="info">
                        <h2>Movie Name</h2>
                        <div class="single-info">
                            <span>Rate: </span>
                            <span>10 / 10</span>
                        </div>
                        <div class="single-info">
                            <span>Release Date: </span>
                            <span>10-04-2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</main>

<?php
$content = ob_get_clean();
require('template.php');
?>