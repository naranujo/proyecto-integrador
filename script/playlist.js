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

    let main = document.querySelector('main')

    let recuperoIdCanciones = localStorage.getItem('favoritos')
    let idCanciones = JSON.parse(recuperoIdCanciones)

console.log(localStorage);
console.log(idCanciones);

    if (idCanciones == null) {
        main.innerHTML = 'No has agregado canciones a tu playlist'
        setTimeout(function () {
            let confirmacion = confirm('¿Deseas comenzar a agregar canciones ahora?')
            if (confirmacion == true) {
                let dblconfirmacion = confirm('Serás redireccionado al inicio, si estás de acuerdo presiona aceptar')
                if (dblconfirmacion == true) {
                    return location.href = 'index.html'
                }
            }
        }, 3000)
    } else {
        for (let i = 0; i < idCanciones.length; i++) {
            fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${idCanciones[i]}`)
                .then(function (response) {
                    console.log(response);
                    return response.json()
                    
                })
                .then(function (data) {
                    let cancion = data.title
                    let album = data.album.title
                    let idAlbum = data.album.id
                    let imagenAlbum = data.album.cover_xl
                    let artista = data.artist.name
                    let idArtista = data.artist.id

                    console.log(cancion);

                    main.innerHTML +=
                        `<article>
                            <img src="${imagenAlbum}" alt="${album}">
                            <a href="detail-track.html?id=${idCanciones[i]}">${cancion}</a>
                            <a href="detail-album.html?id=${idAlbum}">${album}</a>
                            <a href="detail-artist.html?id=${idArtista}">${artista}</a>
                        </article>`

                })
                .catch(function (error) {
                    console.log(`Este es el error: ${error}`)
                })
        }
    }
})