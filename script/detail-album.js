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

    let articulo = document.querySelector('main');

    let canciones = []; // Array porque supongo que un album tiene varias
    let idCanciones = []; // Array para almacenar cada ID

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let album = data.title;
            let url = data.cover_xl;
            let genero = data.genres.data[0].name;
            let idGenero = data.genres.data[0].id;
            let artista = data.contributors[0].name;
            let idArtista = data.contributors[0].id;
            let fpub = data.release_date;
            for (let i = 0; i < data.tracks.data.length; i++) {
                canciones.push(data.tracks.data[i].title)
                idCanciones.push(data.tracks.data[i].id)
            }
            articulo.innerHTML = `
                <h1>Detalle del álbum: ${album}</h1>
                <article>
                    <img src="${url}" alt="${album} - ${artista} - ${genero}">
                    <a>${album}</a>
                    <a href="detail-genre.html?id=${idGenero}">${genero}</a>
                    <a href="detail-artist.html?id=${idArtista}">${artista}</a>
                    <p>Fecha de publicación: ${fpub}</p>
                    <ul></ul>
                </article>
            `
            let listaCanciones = document.querySelector('main article ul');

            for (let i = 0; i < data.tracks.data.length; i++) {
                listaCanciones.innerHTML += `
                    <li><a href="detail-track.html?id=${idCanciones[i]}">${canciones[i]}</a></li>
                `
            }
        })
        .catch(function (error) {
            console.log(`Este es el error: ${error}`)
        })
})