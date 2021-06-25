window.addEventListener('load', function () {

   let palabra = new URLSearchParams(this.location.search)
   let id2 = palabra.get("id")

   // selecciono el elemento que desencadenará la accion
   let clickheart;

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


         let inHTML = imgcua.innerHTML +=
            `<article class="contenedor-detail-track">
   <h5>${nombre}</h5>
  
   <h6><a>${artist}</a></h6>
   
   <h6>${album}</h6>
   <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
   <div>
   <a class = "frame" href="playlist.html"><button class="custom-btn btn-13">Playlist</button></a>  
   <button role="button" class="heart" id="heart"><i class="fa fa-heart"></i></button>
   </div>
   </article>`

   clickheart = clickheart.document.querySelector('.heart')
  
   console.log(clickheart);

         console.log(inHTML);

      })
      .catch(function (error) {
         console.log('El error fue: ' + error);
      })

   let favoritos = []

   let recuperoStorage = localStorage.getItem('favoritos')

   if (recuperoStorage != null) {
      favoritos = JSON.parse(recuperoStorage)
   }

   if (favoritos.includes(id2)) {
      clickheart.classList.toggle("ok");
   }


   clickheart.addEventListener('click', function (e) {

      e.preventDefault();

      if (favoritos.includes(id2)) {

         let idS = favoritos.indexOf(id2)

         favoritos.splice(idS, 1)

         clickheart.classList.toggle("ok");
         alert("FUNCIONA")
         console.log(clickheart);

         console.log(favoritos);

      } else {

         favoritos.push(id2)

         clickheart


         let idtoStringify = JSON.stringify(id)

         localStorage.setItem("idCancion", idtoStringify)

         console.log(localStorage);
      }
   })



   localStorage.getItem






})