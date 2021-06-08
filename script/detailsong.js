window.addEventListener('load', function() {

   // selecciono el elemento que desencadenará la accion
const clickheart = document.querySelectorAll('.heart')

const clickplay = document.querySelectorAll(".play")

let url;
let img;
let cancion;
let nombre;



/*fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/top")
.then (function (response) {
   return response.json();
})
.then(function (datos) {
   console.log(datos);
for (let index = 0; index < datos.data.length; index++) {
  
  url = datos.data[index].link
   console.log(url);

  img = datos.data[index].album.cover_medium
   console.log(img);

  cancion = datos.data[index].preview
   console.log(cancion);

  nombre = datos.data[index].title
   console.log(nombre);

}

})
.catch (function (error) {
   console.log('El error fue: ' + error);
})*/



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
