let btnComprar = document.getElementById("btnComprar")
btnComprar.addEventListener("click",(e)=>{
    window.location.href="../html/tarjeta.html"
})

window.onload = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const tablaCarrito = document.getElementById('tablaCarrito');
    const totalCompra = document.getElementById('totalCompra');
  
    carrito.forEach((item) => {
      tablaCarrito.innerHTML += `
        <tr>
          <td>${item.marca}</td>
          <td>${item.producto}</td>
          <td>${item.cantidad}</td>
          <td>$${item.precio}</td>
          <td>$${item.total}</td>
        </tr>
      `;
    });

    calcularTotal();

  };

  const calcularTotal = () => {
    // Obtener el carrito del Local Storage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    // Sumar los totales de todos los productos
    const total = carrito.reduce((sum, producto) => sum + producto.total, 0);
  
    // Mostrar el total en el DOM
    document.getElementById('totalCompra').innerText = ` $${total}`;
  };

  const limpiarCarrito = () => {
    // Eliminar el carrito del Local Storage
  localStorage.removeItem('carrito');

  // Opcional: Si tienes un contenedor para mostrar los productos en el carrito, límpialo
  const tablaCarrito = document.getElementById('tablaCarrito');
  if (tablaCarrito) {
    tablaCarrito.innerHTML = ''; // Limpiar la tabla o lista de productos
  }

  // Reiniciar el total en el DOM
  document.getElementById('totalCarrito').innerText = 'Total: $0';
  }

  document.getElementById('btnComprar').addEventListener("click", limpiarCarrito);
  
