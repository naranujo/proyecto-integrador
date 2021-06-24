window.addEventListener('load', function () {

    let palabra = new URLSearchParams(this.location.search)
    let id = palabra.get('id')

    let artistasPrincipales = document.querySelector('main');

    let artistas
    let idArtistas
    let urlArtistas
    let album = []
    let idAlbum = []
    let fans = []

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            artistas = data.name
            idArtistas = data.id
            urlArtistas = data.picture_xl

            artistasPrincipales.innerHTML +=
                `<article>
                    <img src="${urlArtistas}" alt="${artistas}">
                    <a href="detail-artist.html?id=${idArtistas} id="${idArtistas}">${artistas}</a>
                    <ul></ul>
                </article>`

            fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    
                    let topAlbums = document.querySelector('main article ul');
                    let posicionFan = []

                    for (i = 0; i < data.data.length; i++) {
                        album.push(data.data[i].title)
                        idAlbum.push(data.data[i].id)
                        fans.push(data.data[i].fans)
                        posicionFan.push(data.data[i].fans)
                    }

                    function comparacion(a,b) {
                        return b - a
                    }
                    fans.sort(comparacion)

                    for (let i = 0; i < 5; i++) {
                        topAlbums.innerHTML += `<li><a href="detail-album.html?id=${idAlbum[posicionFan.indexOf(fans[i])]}">${album[posicionFan.indexOf(fans[i])]}</a></li>`
                    }

                })
                .catch(function (error) {
                    console.log(error)
                })
        })
        .catch(function (error) {
            console.log(`aqui error: ${error}`)
        })
})
