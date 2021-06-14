window.addEventListener("load", function () {
    

const contgen = document.querySelector("section")

let img;
let nombre;
let id;

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
    for (let i = 0; i < datos.data.length; i++) {
        
img = datos.data[i].picture_medium
console.log(img);

nombre = datos.data[i].name
console.log(nombre);

id = datos.data[i].id
console.log(id);
        
        
let inHTML = contgen.innerHTML += `<article class="contenedor-genres">       
<a href="detail-genres.html#${id}"><img src="${img}" alt="${nombre}"></a>
<h5>${nombre}</h5>
</article>`
console.log(inHTML);
    }
   
})
.catch(function (error) {
    console.log("El error fue: " + error);
})
})