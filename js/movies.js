"use strict";

document.addEventListener("DOMContentLoaded", event => {

    const api = '69abcdc201c0712b6a89b7fe65700125';

    const main = document.querySelector('main');

    (function moviesGenres() {

        let container = document.querySelector('.container');

        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + api + '&language=fr')

            .then(response => response.json())
            .then(data => {


                for (var i = 0; i < data.genres.length; i++) {

                    let li = document.createElement('li');

                    li.setAttribute('data-genres', data.genres[i].id);
                    li.innerHTML = data.genres[i].name;

                    container.appendChild(li);
                }

                var a = document.getElementsByTagName('li');
                var list = Array.from(a)

                for (let j = 0; j < list.length; j++) {

                    list[j].addEventListener('click', (event) => {
                        
                        event.preventDefault();

                        var idGenre = event.path[1].classList[1];

                        fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + api + '&language=fr&with_genres=' + idGenre)
                            .then(response => response.json())
                            .then(data => {

                                var newContainer = document.createElement('div');
                                newContainer.classList.add('newC');
                                main.appendChild(newContainer)

                                for (let k = 0; k < data.results.length; k++) {

                                    let cards = document.createElement('div');
                                    newContainer.appendChild(cards);

                                    let lien = document.createElement('a');
                                    lien.href = './detail.php?type=movie&id=' + data.results[k].id;

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

                        container.classList.add('hidden')

                    })
                }

            })
    })();

    var search = document.querySelector('#search');
    var ul = document.querySelector('.result');

    search.addEventListener('keyup', (e) => {
        if (search.value.length == 0) {
            ul.classList.add('hidden');
        }
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        fetch('https://api.themoviedb.org/3/search/movie?api_key=' + api + "&language=fr-FR&query=" + search.value)
            .then(response => response.json())
            .then(data => {
                var h4 = document.createElement('h4');
                ul.appendChild(h4);
                h4.textContent = 'Films'

                for (var i = 0; i < 6; i++) {
                    if (data.results[i].length != 0) {
                        var li = document.createElement('li');
                        ul.appendChild(li);
                        var a = document.createElement('a');
                        a.innerHTML = data.results[i].title
                        li.appendChild(a);
                        a.setAttribute("href", './detail.php?type=movie&id=' + data.results[i].id)
                        ul.classList.remove('hidden');
                    }
                }
                var h4 = document.createElement('h4');
                ul.appendChild(h4);
                h4.textContent = 'Séries'

                fetch('https://api.themoviedb.org/3/search/tv?api_key=' + api + "&language=fr-FR&query=" + search.value)
                    .then(response => response.json())
                    .then(data => {
                        for (var j = 0; j < 6; j++) {
                            if (data.results[j].length != 0) {
                                var li = document.createElement('li');
                                ul.appendChild(li);
                                var a = document.createElement('a');
                                a.innerHTML = data.results[j].name
                                li.appendChild(a);
                                a.setAttribute("href", './detailTV.php?type=tv&id=' + data.results[j].id);
                                ul.classList.remove('hidden');
                            }
                        }
                    })
            })
    })

})
