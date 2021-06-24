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
    let query = palabra.get('q')

    let principal = document.querySelector('.resultado-principal')
    let tituloPrincial = document.querySelector('.titulo-resultado-principal span')
    let noEncontrado = document.querySelector('.sin-resultado h1')
    let canciones = document.querySelector('.resultado-canciones')
    let tituloCanciones = document.querySelector('.titulo-resultado-canciones span')
    let albumes = document.querySelector('.resultado-albumes')
    let tituloAlbumes = document.querySelector('.titulo-resultado-albumes span')
    let artistas = document.querySelector('.resultado-artistas')
    let tituloArtistas = document.querySelector('.titulo-resultado-artistas span')
    let loading = document.querySelector('.loading')
    let bloque = document.querySelector('.bloque')

    if (query === null) {
        query = ''
        setTimeout(function () {
            noEncontrado.innerText = 'Lo sentimos, no hiciste ninguna busqueda'
            loading.style.display = 'none'
            bloque.style.display = 'none'
        }, 2000)
    }
    if (query === '') {
        // no debe hacer nada
    } else {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let total = [data.total]
                if (parseInt(total[0]) === 0) {
                    noEncontrado.innerText = `No se ha encontrado resultado para: ${query}`
                    loading.style.display = 'none'
                    bloque.style.display = 'none' // bloque es una caja que contiene los resultados
                } else {
                    let rank = []
                    let nombre = []
                    let id = []
                    let imagen = []
                    let artista = []
                    let idArtista = []
                    for (let i = 0; i < data.data.length; i++) {
                        rank[i] = data.data[i].rank
                        nombre.push(data.data[i].title)
                        id.push(data.data[i].id)
                        imagen.push(data.data[i].album.cover_xl)
                        artista.push(data.data[i].artist.name)
                        idArtista.push(data.data[i].artist.id)
                    }
                    let ranking = Math.max.apply(null, rank)
                    let position = rank.indexOf(ranking)

                    tituloPrincial.innerHTML += `${query}`

                    principal.innerHTML +=
                        `<article>
                                <a href="detail-track.html?id=${id[position]}"><img src="${imagen[position]}" alt="${nombre[position]}"></a>
                                <a href="detail-track.html?id=${id[position]}">${nombre[position]}</a>
                                <a href="detail-artist.html?id=${idArtista[position]}">${artista[position]}</a>
                            </article>`
                    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${query}`)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            let cancion = []
                            let idCanciones = []
                            let imagenCanciones = []
                            for (let i = 0; i < data.data.length; i++) {
                                cancion.push(data.data[i].title)
                                idCanciones.push(data.data[i].id)
                                imagenCanciones.push(data.data[i].album.cover_xl)
                            }
                            if (cancion.length === 0) {
                                tituloCanciones.innerHTML += `${query}`
                            } else {
                                tituloCanciones.innerHTML += `${query}`
                            }
                            if (cancion.length < 4) {
                                for (let i = 0; i < cancion.length; i++) {
                                    canciones.innerHTML +=
                                        `<article>
                                                <a href="detail-track.html?id=${idCanciones[i]}"><img src="${imagenCanciones[i]}" alt="${cancion[i]}"></a>
                                                <a href="detail-track.html?id=${idCanciones[i]}">${cancion[i]}</a>
                                            </article>`
                                }
                            } else {
                                for (let i = 0; i < 4; i++) {
                                    canciones.innerHTML +=
                                        `<article>
                                                <a href="detail-track.html?id=${idCanciones[i]}"><img src="${imagenCanciones[i]}" alt="${cancion[i]}"></a>
                                                <a href="detail-track.html?id=${idCanciones[i]}">${cancion[i]}</a>
                                            </article>`
                                }
                            }
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${query}`)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            let album = []
                            let idAlbum = []
                            let imagenAlbum = []
                            for (let i = 0; i < data.data.length; i++) {
                                album.push(data.data[i].title)
                                idAlbum.push(data.data[i].id)
                                imagenAlbum.push(data.data[i].cover_xl)
                            }
                            if (album.length === 0) {
                                tituloAlbumes.innerHTML += `${query}`
                            } else {
                                tituloAlbumes.innerHTML += `${query}`
                            }
                            if (album.length < 4) {
                                for (let i = 0; i < album.length; i++) {
                                    albumes.innerHTML +=
                                        `<article>
                                                <a href="detail-album.html?id=${idAlbum[i]}"><img src="${imagenAlbum[i]}" alt="${album[i]}"></a>
                                                <a href="detail-album.html?id=${idAlbum[i]}">${album[i]}</a>                                
                                            </article>`
                                }
                            } else {
                                for (let i = 0; i < 4; i++) {
                                    albumes.innerHTML +=
                                        `<article>
                                                <a href="detail-album.html?id=${idAlbum[i]}"><img src="${imagenAlbum[i]}" alt="${album[i]}"></a>
                                                <a href="detail-album.html?id=${idAlbum[i]}">${album[i]}</a>
                                            </article>`
                                }
                            }

                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${query}`)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            let artista = []
                            let idArtista = []
                            let imagenArtista = []
                            for (let i = 0; i < data.data.length; i++) {
                                artista.push(data.data[i].name)
                                idArtista.push(data.data[i].id)
                                imagenArtista.push(data.data[i].picture_xl)
                            }
                            if (artista.length === 0) {
                                tituloArtistas.innerHTML += `${query}`
                            } else {
                                tituloArtistas.innerHTML += `${query}`
                            }
                            if (artista.length < 4) {
                                for (let i = 0; i < artista.length; i++) {
                                    artistas.innerHTML +=
                                        `<article>
                                                <a href="detail-artist.html?id=${idArtista[i]}"><img src="${imagenArtista[i]}" alt="${artista[i]}"></a>
                                                <a href="detail-artist.html?id=${idArtista[i]}">${artista[i]}</a>
                                            </article>`
                                }
                            } else {
                                for (let i = 0; i < 4; i++) {
                                    artistas.innerHTML +=
                                        `<article>
                                                <a href="detail-artist.html?id=${idArtista[i]}"><img src="${imagenArtista[i]}" alt="${artista[i]}"></a>
                                                <a href="detail-artist.html?id=${idArtista[i]}">${artista[i]}</a>
                                            </article>`
                                }
                            }

                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    loading.style.display = 'none'
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
})