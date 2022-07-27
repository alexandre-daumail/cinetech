
document.addEventListener('DOMContentLoaded', function loaded() {
    const api = '69abcdc201c0712b6a89b7fe65700125'

    var article = document.querySelector('.film');
    var article2 = document.querySelector('.tv');

    fetch('./controller/favoris.php?action=sortmov')
        .then(response => response.json())
        .then(data => {

            if (data["code"] == 10) {
                if (data.movie.length != 0) {

                    var titre = document.createElement('h1')
                    titre.textContent = 'Vos films favoris'
                    
                    var cin = document.querySelector('.film')
                    cin.prepend(titre)

                    for (var i = 0; i < data.movie.length; i++) {
                        fetch("http://api.themoviedb.org/3/movie/" + data.movie[i] + "?api_key=" + api + "&language=fr-FR")
                            .then(response => response.json())
                            .then(data => {

                                var item = data;

                                let link = document.createElement('a');
                                link.href = './detail.php?movie=' + item.id;

                                let img = document.createElement('img');
                                img.src = 'https://image.tmdb.org/t/p/w500/' + item.poster_path;
                                img.alt = item.title;

                                // let title = document.createElement('p');
                                // title.innerHTML = item.title;

                                // let ranking = document.createElement('p');
                                // ranking.innerHTML = 'Note: '+item.vote_average+'/10';

                                article.appendChild(link);
                                link.appendChild(img);
                                // link.appendChild(title);
                                // link.appendChild(ranking);

                            })


                    }


                } else {
                    var h2 = document.createElement('h2')
                    h2.textContent = "Vous n'avez pas encore ajouté de film à vos favoris."
                    film.appendChild(h2)
                }

                if (data.tv.length != 0) {

                    var titre2 = document.createElement('h1')
                    titre2.textContent = 'Vos series favorites'

                    var tvshow = document.querySelector('.tv')
                    tvshow.prepend(titre2)

                    for (var i = 0; i < data.tv.length; i++) {

                        fetch("http://api.themoviedb.org/3/tv/" + data.tv[i] + "?api_key=" + api + "&language=fr-FR")
                            .then(response => response.json())
                            .then(data => {

                                var item = data;

                                let link = document.createElement('a');
                                link.href = './detail.php?tv=' + item.id;

                                let img = document.createElement('img');
                                img.src = 'https://image.tmdb.org/t/p/w500/' + item.poster_path;
                                img.alt = item.name;

                                // let title = document.createElement('p');
                                // title.innerHTML = item.name;

                                // let ranking = document.createElement('p');
                                // ranking.innerHTML = 'Note: '+item.vote_average+'/10';

                                article2.appendChild(link);
                                link.appendChild(img);
                                // link.appendChild(title);
                                // link.appendChild(ranking);

                            })
                    }

                } else {
                    var h2 = document.createElement('h2')
                    h2.textContent = "Vous n'avez pas encore ajouté de séries à vos favoris."
                    serie.appendChild(h2)
                }
            } else {

                var h1 = document.createElement('h1');
                h1.textContent = data['message'];
                article.appendChild(h1);
            }
        })
})
