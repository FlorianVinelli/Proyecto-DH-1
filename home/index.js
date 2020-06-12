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
                let album = cadaTrack.album.cover
                let artist = cadaTrack.artist.name
                
                
                let htmlNuevoTrack = `

                
                    <li>
                        <img class="lista-canciones" src="`+ album +`">
                        <div class="uk-position-center uk-panel"">
                            `+ title +`
                            <br>
                            <br>
                            <p class="artista">
                            ` + artist + `
                            </p>
                        </div>
                  </li>
                
             
                
    
                 

                    `/*
                    <a href="../detalle/detalle.html?idDeTrack=` + idTrack + `">
                    <li>     
                    
                    <img class="lista-canciones" src="` + album + `">

                    ` + title + ` 

                    <br>
                    <br>
                    
                    
                    <p class="artista">` + artist + `</p>

                    </li>
                    </a>
                    
                    */

                
                

                

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
                let artistImg = cadaArtist.picture_small
                
                
                let htmlNuevoArtist = `

                <a href="../detalle/detalle.html?idDeTrack=` + idArtist + `">
                    <li class="topArtistas"> 
                        <img src="` + artistImg + `" alt=""> 
                        ` + artist + `
                    </li>
                </a>
                    
                    

                
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
                let albumImg = cadaAlbum.cover
        
                let htmlNuevoAlbum = `

                <a href="../detalle/detalle.html?idDeTrack=` + idAlbum + `">
                
                    <li class="lialbums">
                
                        <img class="imagenes-albums" src="` + albumImg + `" alt="">
                        
                        ` + album + ` 
                
                    </li>

                </a>
                    
                `
                document.querySelector(".lista-albums").innerHTML += htmlNuevoAlbum


                console.log
            }
        }
    
    )}

        
) 



