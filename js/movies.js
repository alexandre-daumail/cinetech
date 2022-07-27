'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

    const API_KEY = '69abcdc201c0712b6a89b7fe65700125'
    const main = document.querySelector('main');
    const ul = document.querySelector('#list')

    function moviesGenres() {

        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY + '&language=fr')
            .then(response => response.json())
            .then(data => {


                for (var i = 0; i < data.genres.length; i++) {

                    let a = document.createElement('a');
                    let li = document.createElement('li');
                    
                    a.classList.add('list');
                    a.classList.add(data.genres[i].id);
                    a.href = '#';
                    a.innerHTML = data.genres[i].name;

                    li.appendChild(a);
                    ul.appendChild(li);
                }

                var a = document.querySelectorAll('.list');
                for (let j = 0; j < a.length; j++) {

                    a[j].addEventListener('click', (e) => {
                        e.preventDefault();
                        var idGenre = e.path[1].classList[1];

                        fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&language=en-US&with_genres=' + idGenre)
                            .then(response => response.json())
                            .then(data => {
                                var newContainer = document.createElement('div');
                                newContainer.classList.add('movies-grid');
                                main.appendChild(newContainer)

                                for (let k = 0; k < data.results.length; k++) {

                                    let cards = document.createElement('div');
                                    cards.classList.add('card');

                                    newContainer.appendChild(cards);

                                    let lien = document.createElement('a');
                                    lien.href = './movie.php?type=movie&id=' + data.results[k].id;

                                    let img = document.createElement('img');
                                    img.src = 'https://image.tmdb.org/t/p/w500/' + data.results[k].poster_path
                                    img.alt = data.results[k].title;

                                    let nom = document.createElement('p');
                                    nom.innerHTML = data.results[k].title

                                    cards.appendChild(lien);
                                    lien.appendChild(img);
                                    lien.appendChild(nom);
                                }
                            })


                    })
                }

            })
    }
    moviesGenres();

})