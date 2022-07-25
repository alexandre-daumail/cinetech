'use strict'
document.addEventListener('DOMContentLoaded', function loaded(){
    const api = '3e1f13aaa5db3499e23b1fd92e3bed82'
    var str = window.location.href
    var url = new URL(str)
    var id = url.searchParams.get("id");
    var type = url.searchParams.get("type");
    var article = document.getElementsByClassName('.container')

    let movieId = location.search.replace(/[^0-9\.]/g,'');
    fetch('https://api.themoviedb.org/3/movie/'+movieId+'?api_key='+api+'&language=en-US')
    .then(response => response.json())
    .then(data => {
        var container = document.querySelector('.container');

        let img2 = document.createElement('img');
        img2.src = 'https://image.tmdb.org/t/p/w500/'+data.backdrop_path

        let spanT = document.createElement('span');
        spanT.innerHTML = 'Titre:';
        let nom = document.createElement('p');
        nom.classList.add('nom');
        nom.innerHTML = data.title

        let spanO = document.createElement('span');
        spanO.innerHTML = 'Description:'
        let overview = document.createElement('p');
        overview.classList.add('over');
        overview.innerHTML = data.overview;

        let spanR = document.createElement('span');
        spanR.innerHTML = 'Date de sortie'
        let release = document.createElement('p');
        release.classList.add('rel');
        release.innerHTML = data.release_date;

        let spanK = document.createElement('span');
        spanK.innerHTML = 'Note:'
        let rank = document.createElement('p');
        rank.classList.add('rank')
        rank.innerHTML = data.vote_average+'/10';

        fetch('https://api.themoviedb.org/3/movie/'+movieId+'/credits?api_key='+api+'&language=en-US')
        .then(response => response.json())
        .then(data => {
            var container = document.querySelector('.container');
            let spanA = document.createElement('span');
            container.appendChild(spanA);

            spanA.innerHTML = 'Casting:'
            for (let j = 0; j < data.cast.length; j++) {

                let actors = document.createElement('p');
                actors.innerHTML = data.cast[j].name+'  '+'as'+'  '+data.cast[j].character
    
                
                container.appendChild(actors);
            }
            // console.log(data)
        })

        container.appendChild(img2)
        container.appendChild(spanT)
        container.appendChild(nom)
        container.appendChild(spanO)
        container.appendChild(overview)
        container.appendChild(spanR)
        container.appendChild(release)
        container.appendChild(spanK)
        container.appendChild(rank);
        // console.log(data)
    })
    // console.log(movieId);

function similar(movieId) {

fetch('https://api.themoviedb.org/3/movie/'+movieId+'/similar?api_key='+api+'&language=fr-FR')
.then(response => response.json())
.then(data => {
    var item = data.results
    var same = document.querySelector('.similar')
    for (let i = 0; i < item.length; i++) {
        let a = document.createElement('a');
        a.href = './detail.php?movie='+item[i].id;

        let img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w500/'+item[i].poster_path;
        img.alt = item[i].title;

        same.appendChild(a)
        a.appendChild(img)
    }
})
}
similar(movieId)

var search = document.querySelector('#search');
var ul = document.querySelector('.result');

search.addEventListener('keyup', (e) => {
    if(search.value.length == 0) {
        ul.classList.add('hidden');
    }
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    fetch('https://api.themoviedb.org/3/search/movie?api_key='+api+ "&language=fr-FR&query=" + search.value)
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

        fetch('https://api.themoviedb.org/3/search/tv?api_key='+api+ "&language=fr-FR&query=" + search.value)
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

var com = document.querySelector('.comm');
var addComment = document.querySelector('#sub');
var favo = document.querySelector('.addFav');
var favo2 = document.querySelector('.addFav2');

var formsearch = new FormData()
formsearch.append('idfilm', id)
formsearch.append('type', type)
fetch('bdd.php?action=searchcomment', {
    method: 'POST',
    body: formsearch
})
    .then(response => response.json())
    .then(data => {
        if (data['message'].length != 0) {
            for (var i = 0; data['message'].length; i++) {
                var li = document.createElement('li')
                com.prepend(li)
                var titre = document.createElement('h6')
                li.appendChild(titre)
                titre.textContent = "Ecrit par " + data['message'][i].login
                var date = new Date(data['message'][i].date).toLocaleDateString()
                var insertDate = document.createElement('h7')
                insertDate.textContent = "Ecrit le : " + date
                li.appendChild(insertDate)
                var content = document.createElement('p')
                li.appendChild(content)
                content.textContent = data['message'][i].comment

            }
        }
    })

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
                image.setAttribute('src', img + data.poster_path)
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
                        h4.textContent = 'Le cast principal'
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

    addComment.addEventListener('click', e => {
        e.preventDefault()
        var commentaire = document.querySelector('#addComment')
        var form = new FormData()
        form.append('type', type)
        form.append('id', id)
        if (commentaire.value != "") {
            fetch('bdd.php?action=addfilm', {
                method: 'POST',
                body: form
            })
                .then(response => response.json())
                .then(data => {
                    if (data['code'] == 10) {
                        var form2 = new FormData()
                        form2.append('text', commentaire.value)
                        form2.append('id_film', id)
                        form2.append('type', type)
                        fetch('bdd.php?action=addcomment', {
                            method: 'POST',
                            body: form2
                        })
                            .then(response => response.json())
                            .then(data => {
                                var li = document.createElement('li')
                                com.prepend(li)
                                var titre = document.createElement('h6')
                                li.appendChild(titre)
                                titre.textContent = "Ecrit par " + data['login']
                                var date = new Date().toLocaleDateString()
                                var insertDate = document.createElement('h7')
                                insertDate.textContent = "Ecrit le : " + date
                                li.appendChild(insertDate)
                                var content = document.createElement('p')
                                li.appendChild(content)
                                content.textContent = commentaire.value

                            })
                    }
                })
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
            image.setAttribute('src', img + data.poster_path)
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
            fetch(theMovieDb.common.base_uri + "movie/" + id + "/credits?api_key=" + theMovieDb.common.api_key + "&language=fr-FR")
                .then(response => response.json())
                .then(data => {
                    var section2 = document.createElement('section')
                    section2.classList.add('crew')
                    div.appendChild(section2)
                    var div2 = document.createElement('div')
                    section2.appendChild(div2)
                    var h4 = document.createElement('h4')
                    h4.textContent = 'Le cast principal'
                    div2.appendChild(h4)
                    for (var i = 0; i < 10; i++) {
                        var p = document.createElement('p')
                        p.textContent = data.cast[i].name
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
    fetch("https://api.themoviedb.org/3/movie/" + id + "/reviews" + "?api_key=" + api)
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
    addComment.addEventListener('click', e => {
        e.preventDefault()
        var commentaire = document.querySelector('#addComment')
        var form = new FormData()
        form.append('type', type)
        form.append('id', id)
        if (commentaire.value != "") {
            fetch('bdd.php?action=addfilm', {
                method: 'POST',
                body: form
            })
                .then(response => response.json())
                .then(data => {
                    if (data['code'] == 10) {
                        var form2 = new FormData()
                        form2.append('text', commentaire.value)
                        form2.append('id_film', id)
                        form2.append('type', type)
                        fetch('bdd.php?action=addcomment', {
                            method: 'POST',
                            body: form2
                        })
                            .then(response => response.json())
                            .then(data => {
                                var li = document.createElement('li')
                                com.prepend(li)
                                var titre = document.createElement('h6')
                                li.appendChild(titre)
                                titre.textContent = "Ecrit par " + data['login']
                                var date = new Date().toLocaleDateString()
                                var insertDate = document.createElement('h7')
                                insertDate.textContent = "Ecrit le : " + date
                                li.appendChild(insertDate)
                                var content = document.createElement('p')
                                li.appendChild(content)
                                content.textContent = commentaire.value

                            })
                    }
                })
        }
    })
}

    favo.addEventListener('click', e => {
        e.preventDefault()
        var form = new FormData()
        form.append('type', type)
        form.append('id', id)
        fetch('bdd.php?action=addfilm', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then(data => {
                if (data['code']==10){
                    fetch('bdd.php?action=coeur',{
                        method: 'POST',
                        body:form
                    })
                        .then(response=>response.json())
                        .then(data=> {

                            if (data['code']==10){
                                window.alert('Vous avez bien rajouté cet élément à vos favoris.')
                            }else if(data['code']==66){
                                window.alert(data['message'])
                            }
                        })
                }

            })
    })

    favo2.addEventListener('click', e => {
        e.preventDefault()
        var form = new FormData()
        form.append('type', type)
        form.append('id', id)
        fetch('bdd.php?action=addfilm', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then(data => {
                if (data['code']==10){
                    fetch('bdd.php?action=coeur',{
                        method: 'POST',
                        body:form
                    })
                        .then(response=>response.json())
                        .then(data=> {

                            if (data['code']==10){
                                window.alert('Vous avez bien rajouté cet élément à vos favoris.')
                            }else if(data['code']==66){
                                window.alert(data['message'])
                            }
                        })
                }

            })
    })

})