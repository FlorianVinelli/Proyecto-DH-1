window.addEventListener("load", function() {
    
    let queryString = new URLSearchParams(location.search);

    let numeroTrack = queryString.get("idTrack");

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + numeroTrack)
   
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    
    .then(
        function (information) {
            
            

            let cadaTrack = information
                
                let title = cadaTrack.title
                let idTrack = cadaTrack.id
                let album = cadaTrack.album.cover_xl
                let artist = cadaTrack.artist.name
                let idalbums = cadaTrack.album.id
                let nombreAlbum = cadaTrack.album.title
                let idArtist = cadaTrack.artist.id
                
                
                document.querySelector(".titulo").innerHTML = 
                `
                <img id= "foto-cancion" src="`+ album +`" alt="Foto de cancion`+ " " + title +`">
                <div>
                    <button class="add-playlist" type="button">Add <i class="fas fa-plus"></i></button>
                    <h1>`+ title +`</h1>
                    <h2>Album <a href="Albums.html?idAlbum=`+ idalbums +`">`+ nombreAlbum +`</a></h2>
                    <h3>By <a href="Albums.html?idAlbum=`+ idArtist +`">`+ artist +`</a></h3>
                </div>
                `

                let estreno = cadaTrack.release_date
                let duracion = cadaTrack.duration
                duracion = "Duracion: " + Math.floor(duracion/60) +  " " + "mins" + " " + duracion%60 + " " + "segs"
                let fotoArtista = cadaTrack.artist.picture_xl


                

                document.querySelector(".informacion-cancion").innerHTML = 
                `
                <ul>
                    <li>`+ estreno +`</li>
                    <li>`+ duracion +`</li>
                </ul>`
                
                document.querySelector(".reproCancion").innerHTML = 
                `<iframe scrolling="no" frameborder="0" allowTransparency="true" 
                src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=900&height=350&color=800080&layout=dark&size=medium&type=tracks&id=`+ idTrack +`&app_id=1" 
                width="100%" height="90"></iframe>`
        
              
        
        document.querySelector(".add-playlist").addEventListener("click", function(){
            let ArrayCancionesFavs

            if(localStorage.getItem("cancionesFavs") != null){
                ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")
                ArrayCancionesFavs.push(numeroTrack)
            }else{
                ArrayCancionesFavs = [numeroTrack]
            }

            localStorage.setItem("cancionesFavs", ArrayCancionesFavs);
        
            })

                
        
        
        
        
                
        
        
                /*let reproduccion = track.preview
        
                document.querySelector(".reproduccion").innerHTML = 
                `
                <audio src="`+ reproduccion +`"></audio>
                `*/
            })
        }
    )