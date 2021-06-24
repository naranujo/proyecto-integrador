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

    let contador = []
    let contadorCanciones = []
    let contadorAlbumes = []
    let contadorArtistas = []

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/1279119721`) //  top-argentina
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            for (let i = 0; i < data.tracks.data.length; i++) {

                canciones.push(data.tracks.data[i].title)
                idCanciones.push(data.tracks.data[i].id)
                albumes.push(data.tracks.data[i].album.title)
                idAlbumes.push(data.tracks.data[i].album.id)
                urlAlbumes.push(data.tracks.data[i].album.cover_xl)
                artistas.push(data.tracks.data[i].artist.name)
                idArtistas.push(data.tracks.data[i].artist.id)
            }

            for (let i = 0; i < 5; i++) {
                contador = Math.floor(Math.random() * canciones.length)
                contadorCanciones.push(contador)
                for (let j = contadorCanciones.length - 1; j >= 0; j--) {
                    if (contadorCanciones.indexOf(contadorCanciones[j]) !== j) {
                        contadorCanciones.splice(j, 1);
                        i--
                    }
                }
            }
            console.log(contadorCanciones)

            for (let i = 0; i < 5; i++) {

                randomCanciones[i] = canciones[contadorCanciones[i]]
                randomIdCanciones[i] = idCanciones[contadorCanciones[i]]

                randomUrlAlbumes[i] = urlAlbumes[contadorCanciones[i]];

                randomArtistas[i] = artistas[contadorCanciones[i]];
                randomIdArtistas[i] = idArtistas[contadorCanciones[i]];

                seccionCanciones.innerHTML +=
                    `<article class="" id="">
                        <a href="detail-track.html?id=${randomIdCanciones[i]}"><img src="${randomUrlAlbumes[i]}" alt="${randomCanciones[i]}"></a>
                        <a href="detail-track.html?id=${randomIdCanciones[i]}" id="${randomIdCanciones[i]}">${randomCanciones[i]}</a>
                        <a href="detail-artist.html?id=${randomIdArtistas[i]}" id="${randomIdArtistas}">${randomArtistas[i]}</a>
                    </article>`
            }

            for (let i = 0; i < 5; i++) {
                contador = Math.floor(Math.random() * albumes.length)
                contadorAlbumes.push(contador)
                for (let j = contadorAlbumes.length - 1; j >= 0; j--) {
                    if (contadorAlbumes.indexOf(contadorAlbumes[j]) !== j) {
                        contadorAlbumes.splice(j, 1);
                        i--
                    }
                }
            }
            console.log(contadorAlbumes)

            for (let i = 0; i < 5; i++) {


                randomAlbumes[i] = albumes[contadorAlbumes[i]];
                randomIdAlbumes[i] = idAlbumes[contadorAlbumes[i]];
                randomUrlAlbumes[i] = urlAlbumes[contadorAlbumes[i]];

                seccionAlbumes.innerHTML +=
                    `<article class="" id="">
                        <a href="detail-album.html?id=${randomIdAlbumes[i]}"><img src="${randomUrlAlbumes[i]}" alt="${randomAlbumes[i]}"></a>            
                        <a href="detail-album.html?id=${randomIdAlbumes[i]}" id="${randomIdAlbumes[i]}">${randomAlbumes[i]}</a>
                    </article>`

            }
            for (let i = 0; i < 5; i++) {
                contador = Math.floor(Math.random() * artistas.length)
                contadorArtistas.push(contador)
                for (let j = contadorArtistas.length - 1; j >= 0; j--) {
                    if (contadorArtistas.indexOf(contadorArtistas[j]) !== j) {
                        contadorArtistas.splice(j, 1);
                        i--
                    }
                }
            }
            console.log(contadorArtistas)

            for (let i = 0; i < 5; i++) {

                randomArtistas[i] = artistas[contadorArtistas[i]];
                randomIdArtistas[i] = idArtistas[contadorArtistas[i]];
                randomUrlArtistas[i] = urlArtistas[contadorArtistas[i]];

                fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${randomIdArtistas[i]}`)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        let imagen = data.picture_xl

                        seccionArtistas.innerHTML +=
                            `<article class="" id="">
                                <a href="detail-artist.html?id=${randomIdArtistas[i]}"><img src="${imagen}" alt="${randomArtistas[i]}"></a>                    
                                <a href="detail-artist.html?id=${randomIdArtistas[i]}" id="${randomIdArtistas[i]}">${randomArtistas[i]}</a>
                            </article>`
                    })
                    .catch(function (error) {
                        console.log(`Este es el error del fetch artistas: ${error}`)
                    })
            }
        })
        .catch(function (error) {
            console.log(`Este es el error: ${error}`)
        })
})