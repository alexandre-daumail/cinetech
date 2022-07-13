<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- BOOTSTRAP AND CSS -->
    <link rel="stylesheet" href="public/css/style.css">
    <link rel="stylesheet" href="public/css/bootstrap.css">

    <!-- Fontawesome kit -->
    <script src="https://kit.fontawesome.com/2e455cc5f8.js" crossorigin="anonymous"></script>

    <!-- JAVASCRIPT -->
    <script src="public/js/app.js" defer></script>

    <title><?= $title ?></title>
</head>

<body>

    <nav class="py-2 bg-dark border-bottom">
        <div class="container d-flex flex-wrap">
            <ul class="nav me-auto">
                <li class="nav-item"><a href="index.php" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
            </ul>
            <ul class="nav">
                <li class="nav-item"><a href="login.php" class="nav-link link-dark px-2">Connexion</a></li>
                <li class="nav-item"><a href="signup.php" class="nav-link link-dark px-2">Inscription</a></li>
            </ul>
        </div>
    </nav>

    <header class="py-3 mb-4 border-bottom">

        <div class="container d-flex flex-wrap justify-content-center">
            <a href="index.php" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                <img src="public/img/logo cinetech.png" alt="logo du site de cinetech" />
                <span class="fs-4">Cinetech</span>
            </a>

            <div class="input-group rounded">
                <input id="searchInput" type="search" class="form-control rounded" placeholder="Film ou série" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
            </div>
        </div>
    </header>