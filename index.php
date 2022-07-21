<?php
session_start();
$title = "Cinetech - Passion Films/Séries";
ob_start();
?>
<main class="container">

    <article class="movies-container trending-films">

        <h1>Films actuels</h1>

        <div class="movies-grid">
            <div class="card" data-id="123456">
                <div class="img">
                    <img src="https://unsplash.it/500/1000" alt="affiche du film">
                </div>
                <div class="info">
                    <h2>Titre</h2>
                    <div class="single-info">
                        <span>Note: </span>
                        <span>10 / 10</span>
                    </div>
                    <div class="single-info">
                        <span>Date de sortie: </span>
                        <span>10-04-2022</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="popup-container">
            <span class="x-icon">&#10006;</span>
            <div class="content">
                <div class="left">
                    <div class="poster-img">
                        <img src="https://unsplash.it/500/1000" alt="">
                    </div>
                    <div class="single-info">
                        <span>Ajouter aux favoris :</span>
                        <span class="heart-icon">&#9829;</span>
                    </div>
                </div>
                <div class="right">
                    <h1>Titre</h1>
                    <h3>Movie Tagline</h3>
                    <div class="single-info-container">
                        <div class="single-info">
                            <span>Langue:</span>
                            <span>English</span>
                        </div>
                        <div class="single-info">
                            <span>Durée :</span>
                            <span>120 minutes</span>
                        </div>
                        <div class="single-info">
                            <span>Note :</span>
                            <span>10 / 10</span>
                        </div>
                        <div class="single-info">
                            <span>Budget :</span>
                            <span>1350000$</span>
                        </div>
                        <div class="single-info">
                            <span>Date de sortie :</span>
                            <span>05-07-2022</span>
                        </div>
                    </div>
                    <div class="genres">
                        <h2>Genres</h2>
                        <ul>
                            <li>Action</li>
                            <li>Drama</li>
                            <li>Romance</li>
                        </ul>
                    </div>
                    <div class="overview">
                        <h2>Synopsis</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus, quos molestiae fuga voluptatem totam odit voluptates ullam et distinctio?</p>
                    </div>
                    <div class="trailer">
                        <h2>Bande annonce</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Kmo8NLKkfcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

    </article>

    <article class="movies-container trending-shows">
        <h1>Séries actuelles</h1>
        <div class="movies-grid">
            <div class="card" data-id="123456">
                <div class="img">
                    <img src="https://unsplash.it/500/1000" alt="affiche du film">
                </div>
                <div class="info">
                    <h2>Titre</h2>
                    <div class="single-info">
                        <span>Note: </span>
                        <span>10 / 10</span>
                    </div>
                    <div class="single-info">
                        <span>Date de sortie: </span>
                        <span>10-04-2022</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="popup-container">
            <span class="x-icon">&#10006;</span>
            <div class="content">
                <div class="left">
                    <div class="poster-img">
                        <img src="https://unsplash.it/500/1000" alt="">
                    </div>
                    <div class="single-info">
                        <span>Add to favorites:</span>
                        <span class="heart-icon">&#9829;</span>
                    </div>
                </div>
                <div class="right">
                    <h1>Movie Title</h1>
                    <h3>Movie Tagline</h3>
                    <div class="single-info-container">
                        <div class="single-info">
                            <span>Language:</span>
                            <span>English</span>
                        </div>
                        <div class="single-info">
                            <span>Length:</span>
                            <span>120 minutes</span>
                        </div>
                        <div class="single-info">
                            <span>Rate:</span>
                            <span>10 / 10</span>
                        </div>
                        <div class="single-info">
                            <span>Budget:</span>
                            <span>1350000$</span>
                        </div>
                        <div class="single-info">
                            <span>Release Date:</span>
                            <span>05-07-2022</span>
                        </div>
                    </div>
                    <div class="genres">
                        <h2>Genres</h2>
                        <ul>
                            <li>Action</li>
                            <li>Drama</li>
                            <li>Romance</li>
                        </ul>
                    </div>
                    <div class="overview">
                        <h2>Overview</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus, quos molestiae fuga voluptatem totam odit voluptates ullam et distinctio?</p>
                    </div>
                    <div class="trailer">
                        <h2>Trailer</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Kmo8NLKkfcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

    </article>

</main>
<?php
$content = ob_get_clean();
require('template.php');
?>