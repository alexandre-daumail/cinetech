<!doctype html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="css/reset.css"> <!-- CSS reset -->
	<link rel="stylesheet" href="css/modal.css"> <!-- Header css -->
	<link rel="stylesheet" href="css/app.css"> <!-- Film and TV shows styles -->
	<?= (isset($css)) ?  '<link rel="stylesheet" href="css/' . $css . '.css">' : ""?>

	<script src="js/placeholders.min.js"></script> <!-- polyfill for the HTML5 placeholder attribute -->
	<script src="js/modal.js"></script> <!-- Script for the modal-->
	<script src="js/search.js"></script> <!-- Script for search module-->
	<?= (isset($js)) ?  "<script src='js/" . $js . ".js'></script>" : ""?>

	<title><?= $title ?></title>

</head>

<body>
	<header class="cd-main-header">
		<div class="cd-main-header__logo"><a href="index.php">Cinetech</a></div>

		<nav class="cd-main-nav js-main-nav">
			<ul class="cd-main-nav__list js-signin-modal-trigger">
				<li><a class="cd-main-nav__item" href="index.php">Accueil</a></li>
				<li><a class="cd-main-nav__item" href="movies.php">Films</a></li>
				<li><a class="cd-main-nav__item" href="shows.php">Séries</a></li>

				<?php if (isset($_SESSION['login'])) { ?>

					<li><a class="cd-main-nav__item" href="favorites.php">Favoris</a></li>
					<li><a class="cd-main-nav__item" href="account.php">Profil</a></li>
					<li><a class="cd-main-nav__item" href="logout.php">Déconnexion</a></li>

				<?php } else { ?>

					<li><a class="cd-main-nav__item cd-main-nav__item--signin" href="#0" data-signin="login">Connexion</a></li>
					<li><a class="cd-main-nav__item cd-main-nav__item--signup" href="#0" data-signin="signup">Inscription</a></li>
				<?php } ?>

			</ul>
		</nav>

	</header>
	<div class="search">
		<input type="text" id="search" placeholder="Rechercher un titre">
		<ul class="hidden result">
		<button>Go</button>
	</div>

	<?php require_once('modal.php'); ?>
	<aside>
		<?php
		if (isset($_SESSION["error"])) {
			echo $_SESSION["error"];
			unset($_SESSION["error"]);
		}

		if (isset($_SESSION["success"])) {
			echo $_SESSION["success"];
			unset($_SESSION["success"]);
		}
		?>
	</aside>