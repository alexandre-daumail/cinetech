'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

    var favo = document.querySelector('.addFav');
    var favo2 = document.querySelector('.addFav2');


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
                if (data['code'] == 10) {
                    fetch('bdd.php?action=coeur', {
                        method: 'POST',
                        body: form
                    })
                        .then(response => response.json())
                        .then(data => {

                            if (data['code'] == 10) {
                                window.alert('Vous avez bien rajouté cet élément à vos favoris.')
                            } else if (data['code'] == 66) {
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
                if (data['code'] == 10) {
                    fetch('bdd.php?action=coeur', {
                        method: 'POST',
                        body: form
                    })
                        .then(response => response.json())
                        .then(data => {

                            if (data['code'] == 10) {
                                window.alert('Vous avez bien rajouté cet élément à vos favoris.')
                            } else if (data['code'] == 66) {
                                window.alert(data['message'])
                            }
                        })
                }

            })
    })
})