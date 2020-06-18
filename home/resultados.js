
window.addEventListener("load", function() {
    let queryString = new URLSearchParams(location.search)

    let loBuscado = queryString.get("buscador");
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado )
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log(informacion)
            let cancionesPopulares = informacion.data;

            if (cancionesPopulares.length == 0) {
                alert("No hay resultados");
            }


            for (let index = 0; index < cancionesPopulares.length; index++) {
                const cadaCancion = cancionesPopulares[index];
                
                let img = cadaCancion.album.cover_small
                let title = cadaCancion.title;
                let id = cadaCancion.id;

                let htmlNuevaCancion = `
                    <li class="nuevaCancion">
                        
                        <img src="` + img + `">

                        <a href="detalle.html?idDeCancion=` + id + `">
                            <p>` + title + `</p>
                        </a>
                    </li>
                `
                
                document.querySelector(".listadoDeResultados").innerHTML += htmlNuevaCancion
            }
            
            
        }
    )

})
