window.addEventListener('load', function () {

    let formulario = document.querySelector('form')
    let name = document.querySelector('form input')
    formulario.addEventListener('submit', function (e) {
        e.preventDefault()
        if (name.value.length > 2) {
            formulario.submit()
        } else {
            alert("El formulario no ha podido ser validado, intente nuevamente ingresando almenos tres caracteres")
        }
    })

    let palabra = new URLSearchParams(this.location.search)
    let id = palabra.get('id')
    let main = document.querySelector('main')
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            main.innerHTML =
                `<article>
                    <img src="${data.picture_xl}" alt="${data.name}">
                    <a>${data.name}</a>
                    <ul></ul>
                </article>`
            fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    let ul = document.querySelector('main article ul')
                    for (let i = 0; i < data.data.length; i++) {
                        ul.innerHTML +=
                            `<li>
                                <img src="${data.data[i].picture_xl}" alt="${data.data[i].name}">
                                <a href="detail-artist.html?id=${data.data[i].id}">${data.data[i].name}</a>
                            </li>`
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        })
        .catch(function (error) {
            console.log(error)
        })
}) 