let paginaExtra = document.querySelector(".verMas");
let contenedor = document.querySelector(".coleccionDetalles");

let ciudadDetalles = document.querySelector("#ciudadCotidina");
let contenedorCiudad = document.querySelector("#ciudad");

let clavelesDetalles = document.querySelector("#claveles");
let contenedorClaveles = document.querySelector("#pinturaClaveles");

paginaExtra.addEventListener("click", function () {
  contenedor.innerHTML = "<h6>Estamos trabajando en esta sección</h6>";
  contenedor.style.color = "pink";
  contenedor.style.backgroundColor = "grey";
});

ciudadDetalles.addEventListener("click", function () {
  contenedorCiudad.innerHTML =
    "<p>Arte Contemporáneo- Concepto: Azules de rojo-Dimensiones: 24 x 36</p>";
  contenedorCiudad.style.color = "white";
  contenedorCiudad.style.backgroundColor = "grey";
});

clavelesDetalles.addEventListener("click", function () {
  contenedorClaveles.innerHTML =
    "<p>Arte Abstracto-Concepto: Luz y espacio-Dimensiones: 30 x 40</p>";
  contenedorClaveles.style.color = "white";
  contenedorClaveles.style.backgroundColor = "grey";
});
