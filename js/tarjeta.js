const agregarTarjeta = async () => {
  // Obtener valores de los campos
  let numTarjeta = document.getElementById("tarjetaRegistro").value;
  let nombreTitular = document.getElementById("nombreRegistro").value;
  let vencimiento = document.getElementById("vencimientoRegistro").value;
  let cvv = document.getElementById("cvvRegistro").value;
  let provincia = document.getElementById("provinciaRegistro").value;
  let ciudad = document.getElementById("ciudadRegistro").value;
  let postal = document.getElementById("postalRegistro").value;

  if (numTarjeta == " " ||nombreTitular == " " ||vencimiento == " " ||cvv == " " ||ciudad == " " ||provincia == " " || postal == " ") {
    Swal.fire({
      title: "Faltan Campos Por Completar!",
      text: "Por favor, complete todos los campos",
      icon: "error",
      timer: 1500,
    });
  } else {
    Swal.fire({
      title: "Gracias por su compra",
      text: "Esperamos verlo de nuevo",
      icon: "success",
      timer: 1500,
    });
  }
};

document.getElementById("btnTarjeta").addEventListener("click", agregarTarjeta);
