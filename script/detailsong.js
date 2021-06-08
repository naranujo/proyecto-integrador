window.addEventListener('load', function(){


   // selecciono el elemento que desencadenará la accion
const clickheart = document.querySelector('#heart')

const clickplay = document.querySelector("#play")

let clickHeWhi = document.querySelector(".heartConClick")


clickheart.addEventListener('click', function () {
// agrega/quita la clase OK
clickheart.classList.toggle("ok");
 alert("FUNCIONA")
    console.log(clickheart);
})


clickplay.addEventListener('click', function () {
  // agrega/quita la clase OK
clickplay.classList.toggle("ok");
alert("FUNCIONA")
   console.log(clickplay);
})




})

