'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

    const API_KEY = '69abcdc201c0712b6a89b7fe65700125';

    const main = document.querySelector('main');
    function tvGenres () {
        var container = document.querySelector('.container');

        fetch('https://api.themoviedb.org/3/genre/tv/list?api_key='+ API_KEY +'&language=fr')
        .then(response => response.json())
        .then(data => {

            for(var i = 0; i < data.genres.length; i++) {

                let link = document.createElement('a');
                link.classList.add('list');
                link.classList.add(data.genres[i].id);
                link.href = '#';
    
                let nom = document.createElement('p');
                nom.innerHTML = data.genres[i].name;
                
                container.appendChild(link);
                link.appendChild(nom);
            }
    var a = document.querySelectorAll('.list');

            for(let j = 0; j < a.length; j++) {
                a[j].addEventListener('click', (e) => {
                    e.preventDefault();
                    var idGenre = e.path[1].classList[1];
              
                    fetch('https://api.themoviedb.org/3/discover/tv?api_key='+ API_KEY +'&language=fr&with_genres='+idGenre)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        var newContainer = document.createElement('div');
                        newContainer.classList.add('movies-grid');
                        main.appendChild(newContainer)

                        // console.log(data)
                        for(let k = 0; k < data.results.length; k++) {
                            let cards = document.createElement('div');
                            cards.classList.add('card');

                            newContainer.appendChild(cards);

                            let lien = document.createElement('a');
                            lien.href = './detailTV.php?type=tv&id='+data.results[k].id;

                            let img = document.createElement('img');
                            img.src = 'https://image.tmdb.org/t/p/w500/'+data.results[k].poster_path
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

    var search = document.querySelector('#search');
    var ul = document.querySelector('.result');

    search.addEventListener('keyup', (e) => {
        if(search.value.length == 0) {
            ul.classList.add('hidden');
        }
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        fetch('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY + "&language=fr-FR&query=" + search.value)
        .then(response => response.json())
        .then(data => {
            var h4 = document.createElement('h4');
            ul.appendChild(h4);
            h4.textContent = 'Films'

            for(var i =0; i < 6; i++) {
                if(data.results[i].length != 0) {
                    var li = document.createElement('li');
                    ul.appendChild(li);
                    var a = document.createElement('a');
                    a.innerHTML = data.results[i].title
                    li.appendChild(a);
                    a.setAttribute("href", './detail.php?type=movie&id' + data.results[i].id)
                    ul.classList.remove('hidden');
                }
            }
            var h4 = document.createElement('h4');
            ul.appendChild(h4);
            h4.textContent = 'Séries'

            fetch('https://api.themoviedb.org/3/search/tv?api_key='+ API_KEY + "&language=fr-FR&query=" + search.value)
            .then(response => response.json())
            .then(data => {
                for(var j = 0; j < 6; j++) {
                    if(data.results[j].length != 0) {
                        var li = document.createElement('li');
                        ul.appendChild(li);
                        var a = document.createElement('a');
                        a.innerHTML = data.results[j].name
                        li.appendChild(a);
                        a.setAttribute("href", './detailTV.php?type=tv&id' + data.results[j].id);
                        ul.classList.remove('hidden');
                    }
                }
            })
        })
    })

})