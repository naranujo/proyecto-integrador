window.addEventListener('load', function() {

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


let imgcua = document.querySelector("section article")


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/top")
.then (function (response) {
   return response.json();
})
.then(function (datos) {
   console.log(datos);
for (let index = 0; index < datos.data.length; index--) {
  
  url = datos.data[index].link
   console.log(url);

  img = datos.data[index].album.cover_medium
  console.log(img);

   artist = datos.data[index].artist.name
   console.log(artist);

   album = datos.data[index].album.title
   console.log(album);

  cancion = datos.data[index].preview
   console.log(cancion);

  nombre = datos.data[index].title
   console.log(nombre);

   id = datos.data[index].id
   console.log(id);


   let inHTML = imgcua.innerHTML = `<h5>${nombre}</h5>
   <h6><a>${artist}</a></h6>
   <h6>${album}</h6>
   <br>
   <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
   <div>
  <a class="btn-type-2" href="playlist.html">PLAYLIST</a>  
  <button role="button" class="heart" id="heart"><i class="fa fa-heart"></i></button>
   </div>`

   inHTML[index]
   console.log(inHTML);
}
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
    

for (let i = 0; i < clickplay.length; i++) {
   const element = clickplay[i];
   element.addEventListener('click', function () {
      // agrega/quita la clase OK
      element.classList.toggle("ok");
      if (element.classList.contains("ok")) {
        //element.classList.toggle("ok");
      }
    
       console.log(element);
   })
}
})
