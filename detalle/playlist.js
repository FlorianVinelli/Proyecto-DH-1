window.addEventListener("load", function() {

    if(localStorage.getItem("cancionesFavs") != null) {

        let ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")

        for (let i = 0; i < ArrayCancionesFavs.length; i++) {

            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + ArrayCancionesFavs[i])
            
            .then(
                function(respuesta) {
                    return respuesta.json();            
                })

            .then(function(information) {

                let cadaTrack = information
                
                let title = cadaTrack.title
                let idTrack = cadaTrack.id
                let artist = cadaTrack.artist.name
                let idArtist = cadaTrack.artist.id
            
        
                //canciones de la playlist
                document.querySelector(".cancionesFavs").innerHTML += 
                `<li>
                <a href="tracks.html?idTrack=`+ idTrack +`">`+ title +`</a></h4>
                <h4> <a class="artista" href="Artists.html?idArtista=`+ idArtist +`">`+ artist +`</a></h4>
                </li>
 
         
            })

        } 

    //si no hay canciones guardadas
    }else{    
        alert("Aún no has agregado canciones a tu playlist")

        document.querySelector(".loader").style.display = "none"            

        document.querySelector("main").style.display = "block"   

        document.querySelector(".cancionesFavs").innerHTML =
            `
            <p>No se han encontrado canciones guardadas</p>
            ` 
        
    }
})