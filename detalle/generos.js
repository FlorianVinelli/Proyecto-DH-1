window.addEventListener ("load", function() {

    const apiRoute = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/"
    fetch("https://api.deezer.com/genre/0")
    .then(
        function(respuesta) {
            return respuesta.json();
        }
    )

    .then (
        function(resultado) {
            let listaGeneros = resultado.genres_id;

            console.log(listaGeneros)
        }
    )
})