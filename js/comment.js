'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

    var com = document.querySelector('.comm');
    var addComment = document.querySelector('#sub');
    
    var str = window.location.href
    var url = new URL(str)
    var id = url.searchParams.get("id");
    var type = url.searchParams.get("type");

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
    })

})