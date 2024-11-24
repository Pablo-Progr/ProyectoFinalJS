let ID = ""

const handleClick = () => {
  document.getElementById("primerBtnAgregar").style.display = "none";
  document.getElementById("segundoBtnAgregar").style.display = "block";
  document.getElementById("guardarProducto").style.display = "block";
  
}

const agregarProducto = async () => {

  let categoria = document.getElementById("categoriaProducto").value;
  let marca = document.getElementById("marcaProducto").value;
  let producto = document.getElementById("nombreProducto").value;
  let precio = document.getElementById("precioProducto").value;
  let tamanio = document.getElementById("tamañoProducto").value;
  let imagen = document.getElementById("imagenProducto").value;

  if (categoria == " " || marca == " " || producto == "" || precio == " " || tamanio == " " || imagen == ""){
    Swal.fire({
        title: "Faltan Campos Por Complentar!",
        text: "You clicked the button!",
        icon: "error",
      });
  } else {
    try {
    let response = await axios.post("http://localhost:3001/productos", {
      producto,
      marca,
      categoria,
      precio,
      tamanio,
      imagen,
    });
      if  (response) {
        await Swal.fire({
          title: "Producto Agregado!",
          icon: "success",
        });
      } else {
        alert("no se cargo");
      }
    } catch (error) {
      console.log(error);
    }
  }


  
};

const eliminarProducto = async (id) => {

  ID = id
  console.log(id);
  try {
    let response = await axios.delete("http://localhost:3001/productos/" + ID);

    if (response) {
      Swal.fire({
        title: "Producto Eliminado!",
        text: "You clicked the button!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "No Se Pudo Eliminar El Producto!",
        text: "You clicked the button!",
        icon: "error",
      });
    }
  } catch (error) {
    console.log(error)
  }
};

const editarProducto = (id,marca,producto,tamanio,precio,imagen) =>{

  ID = id
  console.log(ID)
  document.getElementById("guardarProducto").style.display = "block";
  document.getElementById("botonEditar").style.display = "block";
  document.getElementById("primerBtnAgregar").style.display = "none";
  document.getElementById("segundoBtnAgregar").style.display = "none";

 
  document.getElementById("marcaProducto").value = marca ;
  document.getElementById("nombreProducto").value = producto;
  document.getElementById("tamañoProducto").value = tamanio;
  document.getElementById("precioProducto").value = precio;
  document.getElementById("imagenProducto").value = imagen;

}

const ActualizarProducto = async () => {
  
  try {
    
    let marca = document.getElementById("marcaProducto").value;
    let producto = document.getElementById("nombreProducto").value;
    let categoria = document.getElementById("categoriaProducto").value;
    let tamanio = document.getElementById("tamañoProducto").value;
    let precio = document.getElementById("precioProducto").value;
    let imagen = document.getElementById("imagenProducto").value;

    console.log(ID)
    let response = await axios.put("http://localhost:3001/productos/" + ID,{
      marca,
      producto,
      categoria,
      tamanio,
      precio,
      imagen
    })

    if (response) {
      Swal.fire({
        title: "Producto Editado!",
        text: "You clicked the button!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "No Se Pudo Actualizar El Pedido!",
        text: "You clicked the button!",
        icon: "error",
      });
    }
  
  } catch (error) {
    console.log(error)
  }

  
}

const mostrarProducto = (id, producto, imagen) => {
  try {
    const existingModal = document.getElementById("exampleModal");
    if (existingModal) {
      existingModal.remove();
    }

    const modalHTML = `
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content" style= "background-color: #bca471">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
              <img src="${imagen}" alt="${producto}" class="img-fluid" style="max-height: 300px"; "color: black">
              <h2 class="modal-title fs-5" id="exampleModalLabel" style= "color: black">
                ID: #${id} - ${producto}
              </h2>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  } catch (error) {
    console.log(error);
  }
};


const getTablaProductos = async () => {
  try {
    let response = await axios.get("http://localhost:3001/productos");
    response.data.map(
      (producto) =>
        (document.getElementById("tablaProductos").innerHTML += `
        <tr>
            <th scope="row">${producto.id}</th>
             <td>${producto.marca}</td>
             <td>${producto.producto}</td>
             <td>${producto.categoria}</td>
             <td>${producto.tamanio}</td>
             <td>$${producto.precio}</td>
             <td class="iconos">
              <button class="icono icono-mirar" onClick="mostrarProducto('${producto.id}','${producto.producto}','${producto.imagen}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                 <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                 <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                </svg>
             </button>
             <button class="icono icono-editar"> 
                <svg xmlns="http://www.w3.org/2000/svg" onClick="editarProducto('${producto.id}','${producto.marca}','${producto.producto}','${producto.tamanio}','${producto.precio}','${producto.imagen}')" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
             </button>
             <button class="icono icono-eliminar" onClick="eliminarProducto('${producto.id}')">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                 </svg>
             </button>
            </td>
        </tr>
    `)
    );
  } catch (error) {
    console.log(error);
  }
};

getTablaProductos();

document.getElementById("segundoBtnAgregar").addEventListener("click", agregarProducto);

document.getElementById("primerBtnAgregar").addEventListener("click", handleClick);

document.getElementById("botonEditar").addEventListener("click", ActualizarProducto)
