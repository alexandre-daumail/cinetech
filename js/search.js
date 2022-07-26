'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

    const API_KEY = `69abcdc201c0712b6a89b7fe65700125`

    var main = document.querySelector('main')
    var search = document.querySelector('#search');
    var ul = document.querySelector('.result');

    search.addEventListener('keyup', (e) => {

        e.preventDefault();
        if (search.value.length == 0) {
            ul.classList.add('hidden');
        }

        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }

        fetch('https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + "&language=fr-FR&query=" + search.value)
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

                        a.setAttribute("href", './detail.php?type=movie&id' + data.results[i].id)

                        ul.classList.remove('hidden');

                    }
                }
                var h4 = document.createElement('h4');
                ul.appendChild(h4);
                h4.textContent = 'Séries'

                fetch('https://api.themoviedb.org/3/search/tv?api_key=' + API_KEY + "&language=fr-FR&query=" + search.value)
                    .then(response => response.json())
                    .then(data => {
                        for (var j = 0; j < 6; j++) {
                            if (data.results[j].length != 0) {
                                var li = document.createElement('li');
                                ul.appendChild(li);
                                var a = document.createElement('a');
                                a.innerHTML = data.results[j].name
                                li.appendChild(a);
                                a.setAttribute("href", './show.php?type=tv&id' + data.results[j].id);
                                ul.classList.remove('hidden');
                            }
                        }
                    })
            })
    })

})