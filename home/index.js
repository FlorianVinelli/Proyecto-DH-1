window.addEventListener("load", function(){
    fetch (" https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
   
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    
    .then(
        function (information) {
            
            let topTracks = information.tracks.data
            console.log(topTracks)

            for (let index = 0; index < topTracks.length; index++) {
                const cadaTrack = topTracks[index];
                
                let title = cadaTrack.title
                let id = cadaTrack.id
                let album = cadaTrack.album.cover
                let artist = cadaTrack.artist.name
                
                console.log(title)
                console.log(id)

                let htmlNuevoTrack = `
                 

                   
                    <a href="../detalle/detalle.html?idDeTrack=` + id + `">
                    <li>     
                    
                    <img class="lista-canciones" src="` + album + `">

                    ` + title + ` 

                    <br>
                    <br>
                    
                    
                    <p class="artista">` + artist + `</p>

                    </li>
                    </a>
                    
                    

                
                `

                

                document.querySelector(".lista-canciones").innerHTML += htmlNuevoTrack


                console.log(htmlNuevoTrack)
            }
        }
        
    
    )





})