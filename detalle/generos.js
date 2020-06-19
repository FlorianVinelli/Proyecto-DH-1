window.addEventListener ("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(
        function(respuesta) {
            return respuesta.json();
        }
    )

    .then(
        function (informacion) {

            let todosGeneros = informacion.data
            console.log(todosGeneros)

            // LISTADO GENEROS //

            for (let index = 1; index < todosGeneros.length; index++) {
                const cadaGenero = todosGeneros[index];

                let id = cadaGenero.id
                let name = cadaGenero.name
                let picture = cadaGenero.picture_xl

                console.log(id)
                console.log(name)

                let htmlDeGeneros = `

                <a href="../detalle/generoSeleccion.html?idGenre=` + id + `">
                <img class="listadoDeGeneros" src= "`+ picture +`">

                <li> `+ name + `</li>

                </a>`

                document.querySelector(".listadoDeGeneros").innerHTML += htmlDeGeneros
             
                console.log(htmlDeGeneros)
            }
        }
    )
})