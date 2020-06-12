/* BUSCADOR */

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
                
                let img = cadaCancion.album.cover
                let title = cadaCancion.title;
                let id = cadaCancion.id;

                let htmlNuevaCancion = `
                    <li class="amarillito">
                        <a href="detalleGif.html?idDeGif=` + id + `">
                            <h2>` + title + `</h2>
                        </a>
                        <img src="` + img + `">
                    </li>
                `
                
                document.querySelector(".listadoDeResultados").innerHTML += htmlNuevaCancion
            }
            
            
        }
    )

})
