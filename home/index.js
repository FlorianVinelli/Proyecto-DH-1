/* TOP TRACKS */
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

/* TOP ARTISTS */

/* TOP TRACKS */
window.addEventListener("load", function(){
    fetch (" https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
   
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    
    .then(
        function (information) {
            
            let topArtists = information.artists.data
            console.log(topArtists)

            for (let index = 0; index < topArtists.length; index++) {
                const cadaArtist = topArtists[index];
            
                let id = cadaArtist.id
                let artist = cadaArtist.name
                let artistImg = cadaArtist.picture_small
                
                console.log(artist)
                console.log(id)

                let htmlNuevoArtist = `

                <a href="../detalle/detalle.html?idDeTrack=` + id + `">
                    <li class="topArtistas"> 
                        <img src="` + artistImg + `" alt="foto the weekend"> 
                        ` + artist + `
                    </li>
                </a>
                    
                    

                
                `

                

                document.querySelector(".topArtistas").innerHTML += htmlNuevoArtist


                console.log(htmlNuevoArtist)
            }
        }
    
    )}

        
)   

window.addEventListener("load", function(){
    fetch (" https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
   
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    
    .then(
        function (information) {
            
            let topAlbums = information.albums.data
            console.log(topAlbums)

            for (let index = 0; index < topArtists.length; index++) {
                const cadaAlbum = topAlbums[index];
            
                let id = cadaAlbum.id
                let album = cadaAlbum.name
                let albumImg = cadaAlbum.picture_small
                
                console.log(album)
                console.log(id)

                let htmlNuevoArtist = `

                <a href="../detalle/detalle.html?idDeTrack=` + id + `">
                    <li class="topArtistas"> 
                        <img src="` + artistImg + `" alt="foto the weekend"> 
                        ` + artist + `
                    </li>
                </a>
                    
                    

                
                `

                

                document.querySelector(".topArtistas").innerHTML += htmlNuevoArtist


                console.log(htmlNuevoArtist)
            }
        }
    
    )}

        
)   

