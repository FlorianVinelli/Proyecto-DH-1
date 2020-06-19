window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search);

    let numeroArtista = queryString.get("idArtist");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + numeroArtista)
    
    .then(function(response) {
        return response.json()
    })

    .then(function(information) {
    
        let artistas = information

        console.log(artistas);
        
        let nombre = information.name
        let imagen = information.picture_xl
        let fans = information.nb_fan
        let topCanciones = information.tracklist
        

        document.querySelector(".position").innerHTML = `<img  id="foto-perfil" src="` + imagen +`" alt="foto de` + " " + nombre +`"></li> 
            <b>` + nombre +`</b>`

        document.querySelector(".detalle").innerHTML = `
            <li><b>` + nombre+`</b></li>
            <li>` + fans + " " +`fans</li>
            `

        document.querySelector(".top5").innerHTML = `<h2 class="populares"> Top 5 Canciones </h2>`


        
            fetch("https://cors-anywhere.herokuapp.com/" + topCanciones)

            .then(function(response) {
                return response.json()
            })
        
            .then(function(information) {
            console.log(information);
        
                let topCanciones = information.data
                
        
                for (let i = 0; i < 5; i++) {
                    const element = topCanciones[i];
        
                    let nombre = element.title
                    let idTrack = element.id
        
                    document.querySelector(".topCanciones").innerHTML += `<section>
                    
                        <article class="conteo" >` + (i+1) +`
                        <a href="Tracks.html?idTrack=`+ idTrack +`">` + nombre +`</a>
                        </article>`
                        
                }

                let botoncitos = document.querySelectorAll(".botoncito")
                
                for (let i = 0; i < botoncitos.length; i++) {
                    const element = botoncitos[i];

                    element.addEventListener("click", function () {
                        let idTrack = this.getAttribute("idCancion")
                        
                        let ArrayCancionesFavs

                        if(localStorage.getItem("cancionesFavs") != null){
                            ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")
                            ArrayCancionesFavs.push(idTrack)
                        }else {
                            ArrayCancionesFavs = [idTrack]
                        }
                
                        localStorage.setItem("cancionesFavs", ArrayCancionesFavs);
                    })
                }

            
                            
            }) 
    })

    

})


