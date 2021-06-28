window.addEventListener('load', function () {

   let palabra = new URLSearchParams(this.location.search)
   let id = palabra.get("id")

   let seccion = document.querySelector("main")

   fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
      .then(function (response) {
         return response.json();
      })
      .then(function (datos) {

         let cancion = datos.title
         let album = datos.album.title
         let idAlbum = datos.album.id
         let artista = datos.artist.name
         let idArtista = datos.artist.id

         seccion.innerHTML =
            `<article>
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
            <a>${cancion}</a>
            <a href="detail-album.html?id=${idAlbum}">${album}</a>
            <a href="detail-artist.html?id=${idArtista}">${artista}</a>
               <div>
                  <a href="playlist.html">Playlist</a>
                  <button role="button" class="heart" id="heart"><i class="fa fa-heart"></i></button>
               </div>
            </article>`


         let favoritos = []

         let recuperoAlmacenamiento = localStorage.getItem('favoritos');

         if (recuperoAlmacenamiento != null) {

            favoritos = JSON.parse(recuperoAlmacenamiento);
         }

         if (favoritos.includes(id)) {
            document.querySelector('#heart').style.color = 'green'
         }

         let fav = document.querySelector('#heart');

         fav.addEventListener('click', function (e) {
            e.preventDefault();

            if (favoritos.includes(id)) {
               let idASacar = favoritos.indexOf(id);
               favoritos.splice(idASacar, 1);
               document.querySelector('#heart').style.color = 'black'
               console.log(favoritos);

            } else {
               favoritos.push(id);
               document.querySelector('#heart').style.color = 'green'
            }
            let favoritosParaStorage = JSON.stringify(favoritos);

            localStorage.setItem('favoritos', favoritosParaStorage);

            console.log(localStorage)
         })

      })
      .catch(function (error) {
         console.log('El error fue: ' + error);
      })
})