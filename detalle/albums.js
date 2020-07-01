window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search);

    let numeroAlbum = queryString.get("idAlbums");

    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + numeroAlbum)

    .then(function(response) {
        return response.json()
      })

    .then(function(information) {
        console.log(information);

        let album = information

        let nombreArtista = album.artist.name
        let nombreAlbum = album.title
        let fotoAlbum = album.cover_xl

        let idArtist = album.artist.id

        document.querySelector(".album").innerHTML = 
        `
        <div>
            <img id="foto-album" src="`+ fotoAlbum +`" alt="Foto del album` + " " + nombreAlbum +`">
        </div>
        <div> 
            <h1 class="nombreAlbum"> `+ nombreAlbum +` </h1>
            <h2>Album de <a href="artista.html?idArtist=`+ idArtist +`"> `+ nombreArtista +`</a></h2>
        </div>
        `
        let canciones = album.tracks.data
        
        for (let i = 0; i < canciones.length; i++) {
            const element = canciones[i];

            let tracks = element.title
            let idTrack = element.id

            document.querySelector(".tracks").innerHTML += 
            `
            <section>
                <article class="iconos">
                    <i class="fas fa-play"></i>
                </article>
                
                <article>
                    <a class="trackName" href="tracks.html?idTrack=`+ idTrack +`">`+ tracks +`</a> <h4><a href="artista.html?idArtist=`+ idArtist +`">`+ nombreArtista +`</a></h4>
                </article>
            </section>
            `
            
        }

        let estreno = album.release_date
        let duracion = album.duration
        duracion = Math.floor(duracion/60) +  " " + "mins" + " " + duracion%60 + " " + "segs"
        let fotoArtista = album.artist.picture_xl
        let genero = album.genres.data
        
       

        document.querySelector(".info-album").innerHTML =
        `
        <ul>
            <div>
                <li>Detalles del Album:</li>
                <li>`+ estreno +`</li>
                <li>`+ duracion +`</li
            </div>
        </ul>
        `

    })

})    
