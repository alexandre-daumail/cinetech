<!doctype html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="css/reset.css"> <!-- CSS reset -->
	<link rel="stylesheet" href="css/style.css"> <!-- Resource style -->

	<title><?= $title ?></title>

</head>

<body>
	<header class="cd-main-header">
		<div class="cd-main-header__logo"><a href="index.php">Cinetech</a></div>

		<nav class="cd-main-nav js-main-nav">
			<ul class="cd-main-nav__list js-signin-modal-trigger">
				<li><a class="cd-main-nav__item" href="index.php" >Accueil</a></li>

				<?php if (!isset($_SESSION['id'])) { ?>
				<li><a class="cd-main-nav__item cd-main-nav__item--signin" href="signin.php" data-signin="login">Connexion</a></li>
				<li><a class="cd-main-nav__item cd-main-nav__item--signup" href="signup.php" data-signin="signup">Inscription</a></li>

				<?php } 
				
					else { ?> 
				
				<li><a class="cd-main-nav__item cd-main-nav__item--signin" href="account.php" data-signin="signup">Mon Compte</a></li>
				<li><a class="cd-main-nav__item cd-main-nav__item--signup" href="logout.php" data-signin="login">Déconnexion</a></li>

				<?php } ?>
			</ul>
		</nav>
	</header>