'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

    const api = '69abcdc201c0712b6a89b7fe65700125'

    var str = window.location.href
    var url = new URL(str)
    var id = url.searchParams.get("id");
    var com = document.querySelector('.comm');

    var article = document.querySelector('article')

    let movieId = location.search.replace(/[^0-9\.]/g, '');

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


    if (url.searchParams.get("type") == 'tv') {
        fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=" + api + "&language=fr-FR")
            .then(response => response.json())
            .then(data => {

                var h2 = document.createElement('h1')
                h2.textContent = data.name
                article.appendChild(h2)

                var figure = document.createElement('figure')
                article.appendChild(figure)

                var image = document.createElement('img')
                image.setAttribute('src', 'https://image.tmdb.org/t/p/w500/' + data.poster_path)
                image.classList.add('rounded')
                image.classList.add('float-start')
                image.setAttribute('alt', data.name)
                figure.appendChild(image)

                var div = document.createElement('div')
                article.appendChild(div)
                var section = document.createElement('section')
                div.appendChild(section)
                var p = document.createElement('p')
                p.textContent = 'nombres de saisons: ' + data.number_of_seasons
                section.appendChild(p)
                var p = document.createElement('p')
                p.textContent = 'nombres d\'épisodes: ' + data.number_of_episodes
                section.appendChild(p)
                var p = document.createElement('p')
                p.textContent = 'durée moyenne d\'un épisode: ' + data.episode_run_time[0] + " minutes"
                section.appendChild(p)
                var ul = document.createElement('ul')
                ul.textContent = "Genre:"
                section.appendChild(ul)
                for (var i = 0; i < data.genres.length; i++) {
                    var li = document.createElement('li')
                    li.textContent = data.genres[i].name
                    genre.push(data.genres[i].name)
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

                fetch("https://api.themoviedb.org/3/tv/" + id + "/aggregate_credits?api_key=" + api + "&language=fr-FR")
                    .then(response => response.json())
                    .then(data => {
                        var section2 = document.createElement('section')
                        section2.classList.add('crew')
                        div.appendChild(section2)

                        var div2 = document.createElement('div')
                        section2.appendChild(div2)

                        var h4 = document.createElement('h4')
                        h4.textContent = 'Principaux acteurs'
                        div2.appendChild(h4)

                        for (var i = 0; i < 12; i++) {

                            var p = document.createElement('p')
                            p.textContent = data.cast[i].name
                            div2.appendChild(p)

                        }

                        var div3 = document.createElement('div')
                        section2.appendChild(div3)

                        var h4 = document.createElement('h4')
                        h4.textContent = 'A la réalisation:'
                        div3.appendChild(h4)

                        var array = []

                        data.crew.forEach(element => {
                            if (element.department == "Directing") {
                                array.push(element.name)
                            }
                        })

                        const slicedArray = array.slice(0, 12);

                        for (var k = 0; k < slicedArray.length; k++) {

                            var p = document.createElement('p')
                            p.textContent = slicedArray[k]
                            div3.appendChild(p)
                        }


                    })

            })

        fetch("https://api.themoviedb.org/3/tv/" + id + "/reviews" + "?api_key=" + api)
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < 5; i++) {
                    var li = document.createElement('li')
                    com.appendChild(li)
                    var titre = document.createElement('h6')
                    li.appendChild(titre)
                    titre.textContent = "Ecrit par " + data.results[i].author
                    var date = new Date(data.results[i].updated_at).toLocaleDateString()
                    var insertDate = document.createElement('h7')
                    insertDate.textContent = "Ecrit le : " + date
                    li.appendChild(insertDate)
                    var content = document.createElement('p')
                    li.appendChild(content)
                    content.textContent = data.results[i].content
                }
            })

    } else if (url.searchParams.get("type") == 'movie') {
        fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api + "&language=fr-FR")
            .then(response => response.json())
            .then(data => {

                var h2 = document.createElement('h1')
                h2.textContent = data.title
                article.appendChild(h2)
                var figure = document.createElement('figure')
                article.appendChild(figure)
                var image = document.createElement('img')
                image.setAttribute('src', 'https://image.tmdb.org/t/p/w500/' + data.poster_path)
                image.classList.add('rounded')
                image.classList.add('float-start')
                image.setAttribute('alt', data.title)
                figure.appendChild(image)
                var div = document.createElement('div')
                article.appendChild(div)
                var section = document.createElement('section')
                div.appendChild(section)
                var p = document.createElement('p')
                var date = new Date(data.release_date).toLocaleDateString()

                p.textContent = 'date de sortie: ' + date
                section.appendChild(p)
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
                        console.log(data);
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
    }

})
