window.addEventListener('load', function() {

let palabra = new URLSearchParams (this.location.search)
let id2 = palabra.get("id")

   // selecciono el elemento que desencadenará la accion
const clickheart = document.querySelectorAll('#heart')


let url;
let img;
let cancion;
let nombre;
let artist;
let album;
let preview;
let id;


let imgcua = document.querySelector("section")


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id2}`)
.then (function (response) {
   return response.json();
})
.then(function (datos) {
   console.log(datos);

  url = datos.link
   console.log(url);

  img = datos.album.cover_medium
  console.log(img);

   artist = datos.artist.name
   console.log(artist);

   album = datos.album.title
   console.log(album);

  cancion = datos.preview
   console.log(cancion);

  nombre = datos.title
   console.log(nombre);

   id = datos.id
   console.log(id);


   let inHTML = imgcua.innerHTML = `<article class="contenedor-detail-track">
   <h5>${nombre}</h5>
   <h6><a>${artist}</a></h6>
   <h6>${album}</h6>
   <br>
   <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
   <div>
  <a class"frame" href="playlist.html"<button class="custom-btn btn-13">Playlist</button></a>  

  <button role="button" class="heart" id="heart"><i class="fa fa-heart"></i></button>
   </div>
   </article>`

   inHTML[index]
   console.log(inHTML);
})
.catch (function (error) {
   console.log('El error fue: ' + error);
})




for (let i = 0; i < clickheart.length; i++) {
   const element = clickheart[i];
   console.log(element);
   element.addEventListener('click', function () {
      // agrega/quita la clase OK
    element.classList.toggle("ok");
       console.log(element);
    })
   }
    
})
