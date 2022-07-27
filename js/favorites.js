'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

    const heart_icon = document.querySelector('.heart-icon')

    const movie_ids = get_LS()
    
    for (let i = 0; i <= movie_ids.length; i++) {
        if (movie_ids[i] == movie_id) heart_icon.classList.add('change-color')
    }

    heart_icon.addEventListener('click', () => {
        if (heart_icon.classList.contains('change-color')) {
            remove_LS(movie_id)
            heart_icon.classList.remove('change-color')
        } else {
            add_to_LS(movie_id)
            heart_icon.classList.add('change-color')
        }
        fetch_favorite_movies()
    })

    // Local Storage
    function get_LS() {
        const movie_ids = JSON.parse(localStorage.getItem('movie-id'))
        return movie_ids === null ? [] : movie_ids
    }
    function add_to_LS(id) {
        const movie_ids = get_LS()
        localStorage.setItem('movie-id', JSON.stringify([...movie_ids, id]))
    }
    function remove_LS(id) {
        const movie_ids = get_LS()
        localStorage.setItem('movie-id', JSON.stringify(movie_ids.filter(e => e !== id)))
    }

    // Favorite Movies
    fetch_favorite_movies()
    async function fetch_favorite_movies() {
        main_grid.innerHTML = ''

        const movies_LS = await get_LS()
        const movies = []
        for (let i = 0; i <= movies_LS.length - 1; i++) {
            const movie_id = movies_LS[i]
            let movie = await get_movie_by_id(movie_id)
            add_favorites_to_dom_from_LS(movie)
            movies.push(movie)
        }
    }

    function add_favorites_to_dom_from_LS(movie_data) {
        main_grid.innerHTML += `
        <div class="card" data-id="${movie_data.id}">
            <div class="img">
                <img src="${image_path + movie_data.poster_path}">
            </div>
            <div class="info">
                <h2>${movie_data.title}</h2>
                <div class="single-info">
                    <span>Rate: </span>
                    <span>${movie_data.vote_average} / 10</span>
                </div>
                <div class="single-info">
                    <span>Release Date: </span>
                    <span>${movie_data.release_date}</span>
                </div>
            </div>
        </div>
    `
    }
})