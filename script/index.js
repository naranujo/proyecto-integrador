window.addEventListener('load', function () {

    //  Declaramos variables globales
    let seccionCanciones = document.querySelector('#cancionesIndex');
    let seccionAlbumes = document.querySelector('#albumesIndex');
    let seccionArtistas = document.querySelector('#artistasIndex');

    let canciones = [];
    let idCanciones = [];
    let albumes = [];
    let idAlbumes = [];
    let urlAlbumes = [];
    let artistas = [];
    let idArtistas = [];
    let urlArtistas = [];
    let randomCanciones = [];
    let randomIdCanciones = [];
    let randomAlbumes = [];
    let randomIdAlbumes = [];
    let randomUrlAlbumes = [];
    let randomArtistas = [];
    let randomIdArtistas = [];
    let randomUrlArtistas = [];

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/1279119721`) //  top-argentina

        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let i = 0; i < data.tracks.data.length; i++) {

                canciones.push(data.tracks.data[i].title)
                idCanciones.push(data.tracks.data[i].id)
                albumes.push(data.tracks.data[i].album.title)
                idAlbumes.push(data.tracks.data[i].album.id)
                urlAlbumes.push(data.tracks.data[i].album.cover)
                artistas.push(data.tracks.data[i].artist.name)
                idArtistas.push(data.tracks.data[i].artist.id)
                urlArtistas.push(`https://api.deezer.com/artist/${idArtistas[i]}/image`)
            }

            for (let i = 0; i < 5; i++) {
                let contadorCanciones = Math.floor(Math.random() * canciones.length)
                let contadorAlbumes = Math.floor(Math.random() * albumes.length)
                let contadorArtistas = Math.floor(Math.random() * artistas.length)

                randomCanciones[i] = canciones[contadorCanciones]
                randomIdCanciones[i] = idCanciones[contadorCanciones]

                randomUrlAlbumes[i] = urlAlbumes[contadorCanciones];

                randomArtistas[i] = artistas[contadorCanciones];
                randomIdArtistas[i] = idArtistas[contadorCanciones];

                seccionCanciones.innerHTML +=
                    `<article class="" id="">
                        <img src="${randomUrlAlbumes[i]}" alt="${randomCanciones[i]}">
                        <a href="detail-track.html?id=${randomIdCanciones[i]}" class="canciones" id="${randomIdCanciones[i]}">${randomCanciones[i]}</a>
                        <a href="dateil-artist.html?id=${randomIdArtistas[i]}" class="canciones" id="${randomIdArtistas}">${randomArtistas[i]}</a>
                    </article>`

                randomAlbumes[i] = albumes[contadorAlbumes];
                randomIdAlbumes[i] = idAlbumes[contadorAlbumes];
                randomUrlAlbumes[i] = urlAlbumes[contadorAlbumes];

                seccionAlbumes.innerHTML +=
                    `<article class="" id="">
                        <img src="${randomUrlAlbumes[i]}" alt="${randomAlbumes[i]}">
                        <a href="detail-album.html?id=${randomIdAlbumes[i]}" class="albumes" id="${randomIdAlbumes[i]}">${randomAlbumes[i]}</a>
                    </article>`

                randomArtistas[i] = artistas[contadorArtistas];
                randomIdArtistas[i] = idArtistas[contadorArtistas];
                randomUrlArtistas[i] = urlArtistas[contadorArtistas];


                seccionArtistas.innerHTML +=
                    `<article class="" id="">
                        <img src="${randomUrlArtistas[i]}" alt="${randomArtistas[i]}">
                        <a href="detail-artist.html?id=${randomIdArtistas[i]}" class="artistas" id="${randomIdArtistas[i]}">${randomArtistas[i]}</a>
                    </article>`
            }
            /*  función para limpiar repetidos en un array, proximamente...

                for (let i = contador.length - 1; i >= 0; i--) {
                    if (contador.indexOf(contador[i]) !== i) contador.splice(i, 1);
                }
            */

        })
        .catch(function (error) {
            console.log(`Este es el error: ${error}`)
        })
})