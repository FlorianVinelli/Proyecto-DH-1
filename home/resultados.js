window.addEventListener("load", function() {

    /* Trabajar mas facil con JS */
    let queryString = new URLSearchParams(location.search)
    
    /* Agarramos lo que se escribe */
    let loBuscado = queryString.get("buscador");
    
    /* Agregamos lo que se escribe a la api */
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado )
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            /* "Entrar en la api" */
            let cancionesPopulares = informacion.data;

            if (cancionesPopulares.length == 0) {
                alert("No hay resultados");
            }

            /* Valor inicial, vueltas en array (lo que dura, el length), +1 */
            for (let index = 0; index < cancionesPopulares.length; index++) {
                /* Agarramos en variable el array */
                const cadaCancion = cancionesPopulares[index];
                
                /* Agarro en variables items api */    
                let img = cadaCancion.album.cover_small
                let title = cadaCancion.title;
                let id = cadaCancion.id;

                /* Modifico HTML */
                let htmlNuevaCancion = `
                    <li class="nuevaCancion">
                        
                        <img src="` + img + `">

                        <a href="detalle.html?idDeCancion=` + id + `">
                            <p>` + title + `</p>
                        </a>
                    </li>
                `
                
                /* Agarro lo que quiero modificar de HTML*/
                document.querySelector(".listadoDeResultados").innerHTML += htmlNuevaCancion
            }
            
            
        }
    )

})
