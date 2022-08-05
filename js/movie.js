'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

    const api = '69abcdc201c0712b6a89b7fe65700125'

    var str = window.location.href
    var url = new URL(str)
    var id = url.searchParams.get("id");

    var article = document.querySelector('article')

    let movieId = location.search.replace(/[^0-9\.]/g, '');

    fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api + "&language=fr-FR")
        .then(response => response.json())
        .then(data => {

            let image = article.querySelector('img')
            image.setAttribute('src', 'https://image.tmdb.org/t/p/w500/' + data.poster_path)
            image.setAttribute('alt', data.title)

            let title = article.querySelector('h1')
            title.textContent = data.title

            let release_date = article.querySelector('#release');
            let date = new Date(data.release_date).toLocaleDateString();
            release_date.textContent = date

            var ul = document.createElement('ul')
            ul.textContent = "Genre:"
            section.appendChild(ul)
            for (var i = 0; i < data.genres.length; i++) {
                var li = document.createElement('li')
                li.textContent = data.genres[i].name
                ul.appendChild(li)
            }
            if (data.homepage != "") {
                var a = document.createElement('a')
                a.textContent = "liens officiel"
                a.setAttribute('href', data.homepage)
                section.appendChild(a)
            }
            if (data.overview != "") {
                var h4 = document.createElement('h4')
                h4.textContent = 'Description'
                section.appendChild(h4)
                var p = document.createElement('p')
                p.textContent = data.overview
                section.appendChild(p)
            }

            var hr = document.createElement('hr')
            div.appendChild(hr)

            fetch('https://api.themoviedb.org/3/movie/' + id + "/credits?api_key=" + api + "&language=fr-FR")
                .then(response => response.json())
                .then(data => {
                    var section2 = document.createElement('section')
                    section2.classList.add('crew')
                    div.appendChild(section2)

                    var div2 = document.createElement('div')
                    section2.appendChild(div2)

                    var h4 = document.createElement('h4')
                    h4.textContent = 'Principaux acteurs :'
                    div2.appendChild(h4)

                    for (var i = 0; i < 10; i++) {

                        var p = document.createElement('p')
                        p.textContent = data.cast[i].name + ' (' + data.cast[i].character + ')';
                        div2.appendChild(p)
                    }

                    var div3 = document.createElement('div')
                    section2.appendChild(div3)

                    var h4 = document.createElement('h4')
                    h4.textContent = 'A la réalisation:'
                    div3.appendChild(h4)

                    for (var j = 0; j < data.crew.length; j++) {
                        if (data.crew[j].department == "Directing") {
                            var p = document.createElement('p')
                            p.textContent = data.crew[j].name
                            div3.appendChild(p)
                        }
                    }
                })
        })

    function similar(movieId) {

        fetch('https://api.themoviedb.org/3/movie/' + movieId + '/similar?api_key=' + api + '&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                var item = data.results
                var same = document.querySelector('.similar')
                for (let i = 0; i < item.length; i++) {
                    let a = document.createElement('a');
                    a.href = './movie.php?type=movie&id=' + item[i].id;
                    let img = document.createElement('img');
                    img.src = 'https://image.tmdb.org/t/p/w500/' + item[i].poster_path;
                    img.alt = item[i].title;

                    same.appendChild(a)
                    a.appendChild(img)
                }
            })
    }
    similar(movieId)
})
