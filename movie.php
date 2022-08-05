<?php
session_start();
$title = "Cinetech - Détails";
$js = 'movie';
$css = 'movie';
ob_start();
?>

<main>
    <?php if (isset($_SESSION['id'])) : ?>
        <button type="button" class="addFav2" name="addfav2">Ajouter aux favoris</button>
    <?php endif; ?>

    <article>

        <div class="content">

            <div class="left">
                <div class="poster-img">
                    <img>
                </div>
            </div>

            <div class="right">

                <h1></h1>
                <div class="single-info-container">
                    <div class="single-info">
                        <h2>Language:</h2>
                        <p id="lang"></p>
                    </div>
                    <div class="single-info">
                        <h2>Note:</h2>
                        <p id="rate"></p>
                    </div>
                    <div class="single-info">
                        <h2>Date de sortie :</h2>
                        <p id="release"></p>
                    </div>
                </div>

                <div class="genres">
                    <h2>Genres</h2>
                    <ul id="genres">
                        ${movie.genres.map(e => `<li>${e.name}</li>`).join('')}
                    </ul>
                </div>

                <div class="overview">
                    <h2>Overview</h2>
                    <p id="overview">${movie.overview}</p>
                </div>

            </div>
        </div>
    </article>

    <section class="com">
        <h3>Commentaires</h3>
        <ul class="comm"></ul>
        <input type="text" id="addComment" name="comment" placeholder="Votre commentaire" />
        <input type="button" name="submit" value="Envoyer" id="submit" />
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