let listaNombres = []; // Crear un arreglo vacío

let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("nombre");
// Sin .value para poder modificar después el input.
let lista = document.getElementById("lista");
let cantidad = document.getElementById("cantidad");

// Evento del formulario.
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = inputNombre.value.trim().toUpperCase();

    if (nombre === "") {
        alert("Ingrese un nombre");
        inputNombre.style.borderColor = "red";

    } else if (listaNombres.includes(nombre)) {
            alert("El nombre ya está registrado");
            inputNombre.style.borderColor = "red";
    } else {
        listaNombres.push(nombre);
        mostrarNombres();

        inputNombre.value = "";
        inputNombre.focus();
        inputNombre.style.borderColor = "initial";
    }
});

// Función para mostrar los nombres.
function mostrarNombres() {
    lista.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        lista.innerHTML += `<li>${listaNombres[i]}</li>`;
    }

    cantidad.textContent = `Total registrados: ${listaNombres.length}`;
}
