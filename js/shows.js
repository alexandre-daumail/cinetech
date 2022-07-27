'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

    const API_KEY = '69abcdc201c0712b6a89b7fe65700125';

    const main = document.querySelector('main');
    const ul = document.querySelector('#list')


    function tvGenres() {

        var container = document.querySelector('.container');

        fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=' + API_KEY + '&language=fr-FR')
            .then(response => response.json())
            .then(data => {

                for (var i = 0; i < data.genres.length; i++) {

                    let li = document.createElement('li');

                    let a = document.createElement('a');
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

                        fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + API_KEY + '&language=fr&with_genres=' + idGenre)
                            .then(response => response.json())
                            .then(data => {
                                console.log(data)
                                var newContainer = document.createElement('div');
                                newContainer.classList.add('movies-grid');
                                main.appendChild(newContainer)

                                for (let k = 0; k < data.results.length; k++) {
                                    let cards = document.createElement('div');
                                    cards.classList.add('card');

                                    newContainer.appendChild(cards);

                                    let lien = document.createElement('a');
                                    lien.href = './show.php?type=tv&id=' + data.results[k].id;

                                    let img = document.createElement('img');
                                    img.src = 'https://image.tmdb.org/t/p/w500/' + data.results[k].poster_path
                                    img.alt = data.results[k].name;

                                    let nom = document.createElement('p');
                                    nom.innerHTML = data.results[k].original_name

                                    cards.appendChild(lien);
                                    lien.appendChild(img);
                                    lien.appendChild(nom);
                                }
                            })
                        container.classList.add('hidden')
                    })
                }
            })
    }

    tvGenres();


})