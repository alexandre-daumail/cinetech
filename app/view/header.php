<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- BOOTSTRAP AND CSS -->
    <link href="/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../../public/css/style.css">
    <link rel="stylesheet" href="../../public/css/bootstrap.min.css">

    <!-- JAVASCRIPT -->
    <script src="../../public/js/app.js" defer></script>

    <title><?= $title ?></title>
</head>

<body>

    <header class="p-3 bg-dark text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src="../../public/img/logo cinetech.png" alt="logo du site cinetech"></a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="index.php" class="nav-link px-2 text-secondary">Accueil</a></li>
                </ul>

                <form class="search col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" data-dashlane-rid="0a92745b09387db0" data-form-type="">
                    <input type="search" class="form-control form-control-dark" placeholder="Film ou Série" aria-label="Search" data-dashlane-rid="ca456560d6b36b2a" data-form-type="">
                </form>

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Connexion</button>
                    <button type="button" class="btn btn-warning">Inscription</button>
                </div>
            </div>
        </div>
    </header>