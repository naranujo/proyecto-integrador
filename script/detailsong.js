window.addEventListener('load', function () {

   let palabra = new URLSearchParams(this.location.search)
   let id2 = palabra.get("id")

   // selecciono el elemento que desencadenará la accion
   const clickheart = document.querySelectorAll('#heart')

   let url;
   let nombre;
   let artist;
   let album;
   let id;

   let imgcua = document.querySelector("section")

   fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id2}`)
      .then(function (response) {
         console.log(response);
         return response.json();
      })
      .then(function (datos) {
         console.log(datos);

         url = datos.link
         console.log(url);

         artist = datos.artist.name
         console.log(artist);

         album = datos.album.title
         console.log(album);

         nombre = datos.title
         console.log(nombre);

         id = datos.id
         console.log(id);


         let inHTML = imgcua.innerHTML =
            `<article class="contenedor-detail-track">
   <h5>${nombre}</h5>
  
   <h6><a>${artist}</a></h6>
   
   <h6>${album}</h6>
   <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
  
   <div>
  <a class"frame" href="playlist.html"<button class="custom-btn btn-13">Playlist</button></a>  
  <button role="button" class="heart" id="heart"><i class="fa fa-heart"></i></button>
  </div>

   </article>`

   console.log(inHTML);

      })
      .catch(function (error) {
         console.log('El error fue: ' + error);
      })

let idtoStringify = JSON.stringify(id)

   localStorage.setItem("idCancion", idtoStringify)

})