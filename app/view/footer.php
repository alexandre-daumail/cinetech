<footer>

        <nav>

            <ul>

                <li><a href="index.html.php">🏠Accueil</a></li>

                <li><a href="planning.html.php">📅Planning</a></li>

                <?php

                if (isset($_SESSION["id"])) {

                    echo "<li><a href='reservation-form.html.php'>📝Réserver</a></li>";

                    echo "<li><a href='profil.html.php'>🆔Profil</a></li>";

                    echo "<li><a href='../includes/logout.inc.php'>🛑Déconnexion</a></li>";
                } else {

                    echo '<li><a href="inscription.html.php">Inscription</a></li>';

                    echo '<li><a href="connexion.html.php">Connexion</a></li>';
                }

                ?>

            </ul>

        </nav>

    </footer>
    </body>
    </html>