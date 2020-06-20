window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search); /*selecciona url*/

    let numeroDeGenero = queryString.get("idGenre"); /*define que modificar*/

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + numeroDeGenero)
    

    .then(function(response) { 
        return response.json()
    }) 

    .then(function(information) {
    
        let genero = information

        console.log(genero);
        
        let nombre = information.name
        let imagen = information.picture_big

        document.querySelector(".nombreGenero").innerHTML = nombre

        document.querySelector(".position").innerHTML = `<img  id="foto-perfil" src="` + imagen +`" alt="foto de` + " " + nombre +`">`

        document.querySelector(".tituloPrincipal").innerHTML += nombre


        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + numeroDeGenero + "/artists")

        .then(function(response) {
            return response.json()
        })

        .then(function(information) {
            let artistas = information.data

            console.log(artistas)

            for (let i=0; i < 10; i++) {
                let artista = artistas[i]
                let nombre = artista.name
                let id = artista.id
                let imagenArtista = artista.picture
                document.querySelector(".topArtistas").innerHTML += `<section>
                        
                    <article class="conteo" >`  +`
                    <img id="fotoDeArtista" src ="` +imagenArtista+ `">  
                    <a href="artista.html?idArtist=`+ id +`">` + nombre + `</a> 
  
                    </article></section>`
                        
            }
        })

}) 
})
