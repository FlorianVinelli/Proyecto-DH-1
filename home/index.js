
/* TOP TRACKS */
window.addEventListener("load", function(){
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
   
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    
    .then(
        function (information) {
            
            let topTracks = information.tracks.data
            

            for (let index = 0; index < topTracks.length; index++) {
                const cadaTrack = topTracks[index];
                
                let title = cadaTrack.title
                let idTrack = cadaTrack.id
                let album = cadaTrack.album.cover_xl
                let artist = cadaTrack.artist.name
                
                
                let htmlNuevoTrack =`
                  

                  <li>
                
                  <img class="lista-canciones" src="` + album + `" alt="">

                  <br>

                  <a href="../detalle/tracks.html?idTrack=` + idTrack + `">
                  <p class="albumTop">` + title + ` </p>
                  </a>
                  

                  <p class="artistaAlbum"> ` + artist + ` </p>
          
              </li>

              `
                

                

                document.querySelector(".lista-canciones").innerHTML += htmlNuevoTrack


                
            }
        }
        
    
    )

})

/* TOP ARTISTS */

window.addEventListener("load", function(){
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
   
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    
    .then(
        function (information) {
            
            let topArtists = information.artists.data
            

            for (let index = 0; index < topArtists.length; index++) {
                const cadaArtist = topArtists[index];
            
                let idArtist = cadaArtist.id
                let artist = cadaArtist.name
                let artistImg = cadaArtist.picture_xl
                
                
                let htmlNuevoArtist = `

                
                    <li class="topArtistas"> 
                        <a href="../detalle/artista.html?idArtist=` + idArtist + `">
                        <img src="` + artistImg + `" alt=""> 
                        </a>
                        <br>
                        <p class="artistaTop"> ` + artist + ` </p>
                    </li>
                
                    
                    

                
                `

                

                document.querySelector(".topArtistas").innerHTML += htmlNuevoArtist


               
            }
        }
    
    )}

        
)   


/* TOP ALBUMS */

window.addEventListener("load", function(){
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
   
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    
    .then(
        function (information) {
            
            let topAlbums = information.albums.data
            

            for (let index = 0; index < topAlbums.length; index++) {
                const cadaAlbum = topAlbums[index];
            
                let idAlbum = cadaAlbum.id
                let album = cadaAlbum.title
                let albumImg = cadaAlbum.cover_xl
                let artistAlbum = cadaAlbum.artist.name
        
                let htmlNuevoAlbum = `

                
                
                    <li class="lialbums">
                
                        <img class="imagenes-albums" src="` + albumImg + `" alt="">

                        <br>

                        <a href="../detalle/albums.html?idAlbums=` + idAlbum + `">
                        <p class="albumTop">` + album + ` </p>
                        </a>
                        

                        <p class="artistaAlbum"> ` + artistAlbum + ` </p>
                
                    </li>
                
                
                    
                `
                document.querySelector(".lista-albums").innerHTML += htmlNuevoAlbum


                console.log
            }
        }
    
    )}

        
) 





