// Cada producto debe tener nombre, precio y cantidad.
let productos = [];

let formulario = document.getElementById("formulario");
let inputProducto = document.getElementById("producto");
let inputPrecio = document.getElementById("precio");
let inputCantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let total = document.getElementById("total");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Valida que el nombre no esté vacío.
    let nombre = inputProducto.value.trim();
    if (nombre === "") {
        alert("El nombre del producto no puede estar vacío");
        return;
    }

    // Valida que el precio sea un número mayor a cero.
    let precio = parseFloat(inputPrecio.value);
    if (isNaN(precio) || precio <= 0) {
        alert("El precio debe ser un número mayor a cero");
        return;
    }

    // Valida que la cantidad sea un entero positivo.
    let cantidad = parseInt(inputCantidad.value, 10);
    if (isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad)) {
        alert("La cantidad debe ser un número entero mayor a cero");
        return;
    }

    // Agrega el producto al arreglo
    productos.push({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    });

    // Limpia los campos
    inputProducto.value = "";
    inputPrecio.value = "";
    inputCantidad.value = "";
    inputProducto.focus();

    // Actualiza la tabla y los resultados
    mostrarProductos();
});

function mostrarProductos() {
    tabla.innerHTML = "";
    let valorTotal = 0;

    for (let i = 0; i < productos.length; i++) {
        let p = productos[i];
        let subtotal = p.precio * p.cantidad;
        valorTotal += subtotal;

        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${p.nombre}</td>
            <td>${p.precio.toFixed(2)}</td>
            <td>${p.cantidad}</td>
            <td>${subtotal.toFixed(2)}</td>
            <td class="acciones">
                <button type="button" data-index="${i}">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    }

    total.textContent = `Valor total del inventario: ${valorTotal.toFixed(2)}`;

    // Eventos para eliminar (usando splice)
    let botones = tabla.querySelectorAll("button[data-index]");
    botones.forEach(function(btn) {
        btn.addEventListener("click", function() {
            let index = parseInt(this.getAttribute("data-index"), 10);
            productos.splice(index, 1); // Elimina el elemento por posición
            mostrarProductos();
        });
    });
}
