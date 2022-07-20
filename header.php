<!doctype html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="css/reset.css"> <!-- CSS reset -->
	<link rel="stylesheet" href="css/style.css"> <!-- Resource style -->

	<script src="js/placeholders.min.js"></script> <!-- polyfill for the HTML5 placeholder attribute -->
	<script src="js/main.js"></script> <!-- Resource JavaScript -->

	<title><?= $title ?></title>

</head>

<body>
	<header class="cd-main-header">
		<div class="cd-main-header__logo"><a href="index.php">Cinetech</a></div>

		<nav class="cd-main-nav js-main-nav">
			<ul class="cd-main-nav__list js-signin-modal-trigger">
				<li><a class="cd-main-nav__item" href="index.php">Accueil</a></li>
				<li><a class="cd-main-nav__item cd-main-nav__item--signin" href="#0" data-signin="login">Connexion</a></li>
				<li><a class="cd-main-nav__item cd-main-nav__item--signup" href="#0" data-signin="signup">Inscription</a></li>
			</ul>
		</nav>
	</header>

	<div class="cd-signin-modal js-signin-modal">
		<!-- this is the entire modal form, including the background -->

		<div class="cd-signin-modal__container">
			<!-- this is the container wrapper -->

			<ul class="cd-signin-modal__switcher js-signin-modal-switcher js-signin-modal-trigger">
				<li><a href="#0" data-signin="login" data-type="login">Connexion</a></li>
				<li><a href="#0" data-signin="signup" data-type="signup">Inscription</a></li>
			</ul>

			<!-- log in form -->
			<div class="cd-signin-modal__block js-signin-modal-block" data-type="login">
				<form class="cd-signin-modal__form" >
					<p class="cd-signin-modal__fieldset">
						<label class="cd-signin-modal__label cd-signin-modal__label--email cd-signin-modal__label--image-replace" for="signin-email">Pseudo</label>
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-login" type="email" placeholder="Pseudo">
						<span class="cd-signin-modal__error">Error message here!</span>
					</p>

					<p class="cd-signin-modal__fieldset">
						<label class="cd-signin-modal__label cd-signin-modal__label--password cd-signin-modal__label--image-replace" for="signin-password">Mot de passe</label>
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-password" type="password" placeholder="Mot de passe">
						<a href="#0" class="cd-signin-modal__hide-password js-hide-password">Afficher</a>
						<span class="cd-signin-modal__error">Error message here!</span>
					</p>

					<p class="cd-signin-modal__fieldset">
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width" type="submit" value="Connexion">
					</p>
				</form>

			</div> <!-- cd-signin-modal__block -->

			<!-- sign up form -->
			<div class="cd-signin-modal__block js-signin-modal-block" data-type="signup">

				<form class="cd-signin-modal__form" id="signup" action="controller/signup.php" method="POST">

					<p class="cd-signin-modal__fieldset">
						<label class="cd-signin-modal__label cd-signin-modal__label--username cd-signin-modal__label--image-replace" for="signup-username">Pseudo</label>
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-username" type="text" placeholder="Pseudo" name="signup-username">
						<span class="cd-signin-modal__error">Error message here!</span>
					</p>

					<!-- <p class="cd-signin-modal__fieldset">
						<label class="cd-signin-modal__label cd-signin-modal__label--email cd-signin-modal__label--image-replace" for="signup-email">E-mail</label>
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-email" type="email" placeholder="E-mail" name="signup-email">
						<span class="cd-signin-modal__error">Error message here!</span>
					</p> -->

					<p class="cd-signin-modal__fieldset">
						<label class="cd-signin-modal__label cd-signin-modal__label--password cd-signin-modal__label--image-replace" for="signup-password">Mot de passe</label>
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-password" type="password" placeholder="Mot de passe" name="signup-password">
						<a href="#0" class="cd-signin-modal__hide-password js-hide-password">Afficher</a>
						<span class="cd-signin-modal__error">Error message here!</span>
					</p>

					<p class="cd-signin-modal__fieldset">
						<label class="cd-signin-modal__label cd-signin-modal__label--password cd-signin-modal__label--image-replace" for="signup-password">Confirmation mot de passe</label>
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-password-confirmation" type="password" placeholder="Confirmation mot de passe" name="signup-password-confirmation">
						<a href="#0" class="cd-signin-modal__hide-password js-hide-password">Afficher</a>
						<span class="cd-signin-modal__error">Error message here!</span>
					</p>

					<p class="cd-signin-modal__fieldset">
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding" type="submit" value="Valider" form="signup">
					</p>

				</form>
			</div> <!-- cd-signin-modal__block -->

			<a href="#0" class="cd-signin-modal__close js-close">Quitter</a>

		</div> <!-- cd-signin-modal__container -->

	</div> <!-- cd-signin-modal -->

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