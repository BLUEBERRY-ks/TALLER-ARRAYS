// Arreglo con mínimo ocho nombres de estudiantes
let estudiantes = [
    "Ana María López",
    "Carlos Ramírez",
    "Laura Gómez",
    "Juan Pablo Díaz",
    "Sofía Herrera",
    "Andrés Vargas",
    "Valentina Ruiz",
    "Mateo Castillo",
    "Camila Torres",
    "Daniela Morales"
];

let lista = document.getElementById("lista");
let formulario = document.getElementById("formulario");
let inputBusqueda = document.getElementById("busqueda");
let resultado = document.getElementById("resultado");

// Mostrar todos los nombres en una lista HTML
function mostrarEstudiantes() {
    lista.innerHTML = "";
    for (let i = 0; i < estudiantes.length; i++) {
        lista.innerHTML += `<li>${estudiantes[i]}</li>`;
    }
}

mostrarEstudiantes();

// Evento de búsqueda
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let texto = inputBusqueda.value.trim();

    // Validar que el campo de búsqueda no esté vacío
    if (texto === "") {
        alert("Escribe un nombre para buscar");
        resultado.textContent = "";
        resultado.className = "";
        return;
    }

    // Usar find() para localizar al estudiante (sin importar mayúsculas/minúsculas)
    let encontrado = estudiantes.find(function(nombre) {
        return nombre.toLowerCase() === texto.toLowerCase();
    });

    if (encontrado) {
        resultado.textContent = ` El estudiante "${encontrado}" está registrado.`;
        resultado.className = "encontrado";
    } else {
        resultado.textContent = ` El estudiante "${texto}" no se encuentra registrado.`;
        resultado.className = "no-encontrado";
    }
});
