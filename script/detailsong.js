window.addEventListener('load', function() {


   // selecciono el elemento que desencadenará la accion
const clickheart = document.querySelectorAll('.heart')


const clickplay = document.querySelectorAll(".play")

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
