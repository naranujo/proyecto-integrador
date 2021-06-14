window.addEventListener('load', function () {

    let palabra = new URLSearchParams(this.location.search)
    let id = palabra.get('id')

    // Declaramos variables globales para insertar info en HTML

    let articulo = document.querySelector('main');

    // Declaramos variables que vamos a usar globalmente para captar la informacion de la API

    let url;
    let album;
    let genero;
    let idGenero;
    let artista;
    let idArtista;
    let fpub; // Fecha de publicación - formato AAAA/MM/DD
    let stop = []; // Para el stop del bucle for
    let canciones = []; // Array porque supongo que un album tiene varias
    let idCanciones = []; // Array para almacenar cada ID

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            album = data.title;
            console.log(`Nombre del album: ${album}`);
            url = data.cover;
            console.log(`Url de la imagen de portada ${url}`);
            genero = data.genres.data[0].name;
            console.log(`Género: ${genero}`);
            idGenero = data.genres.data[0].id;
            console.log(`ID del género: ${idGenero}`)
            artista = data.contributors[0].name;
            console.log(`Nombre del/los artistas ${artista}`);
            idArtista = data.contributors[0].id;
            console.log(`ID del género: ${idArtista}`)
            fpub = data.release_date;
            console.log(`Fecha de publicación: ${fpub}`);
            stop = data.tracks.data;
            for (let i = 0; i < stop.length; i++) {
                canciones.push(stop[i].title)
                idCanciones.push(stop[i].id)
            }
            console.log(`Nombre de la canción es: ${canciones}`)
            console.log(`ID de la canción: ${idCanciones}`)

            // ahora que tengo la info, la imprimo en el HTML
            articulo.innerHTML = `
                <h1>Detalle del álbum: ${album}</h1>
                <article>
                    <img src="${url}" alt="${album} - ${artista} - ${genero}">
                    <a>${album}</a>
                    <a href="detail-genre.html#${idGenero}">${genero}</a>
                    <a href="detail-artist.html#${idArtista}">${artista}</a>
                    <p>Fecha de publicación: ${fpub}</p>
                    <ul></ul>
                </article>
            `

            let listaCanciones = document.querySelector('main article ul');

            for (let i = 0; i < stop.length; i++) {
                listaCanciones.innerHTML += `
                    <li><a href="detail-track.html#${idCanciones[i]}">${canciones[i]}</a></li>
                `
            }
        })
        .catch(function (error) {
            console.log(`Este es el error: ${error}`)
        })
})