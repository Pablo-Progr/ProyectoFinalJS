const mostrarProductos = async () => {
    try {
  
      let response = await axios.get("http://localhost:3001/productos");
      response.data.map((producto) =>
          (document.getElementById("seccionProductos").innerHTML += `
            <div class="card card-bebida" style="width: 18rem">
                <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                <div class="card-body">
                    <h5 class="card-title">${producto.categoria} -  ${producto.producto}</h5>
                    <h5 class="card-text">$${producto.precio}</h5>
                    <div class="agregar-carrito">
                        <input class="col-4" type="number" placeholder="0" style="height: 35px;">
                        <button class="btn btn-success ">Agregar al carrito</button>
                    </div>
                </div>
            </div>
      `)
      );
    } catch (error) {
      console.log(error)
    }
  };


mostrarProductos();
  


// traigo el valor de la variable usuarioEncontrado del js del login
//si el valor es true, me muestra bienvenido, si el valor es false,muestra el iniciar sesion
// para index.html y productos.html

usuarioEncontrado=localStorage.getItem("usuarioEncontrado")

console.log(usuarioEncontrado);

let Iniciar = document.getElementById("Iniciar")
let Iniciar2 = document.getElementById("Iniciar2")


if (usuarioEncontrado==="true") {
    Iniciar2.classList.add("d-none")
    
    Iniciar.innerHTML+=`

       <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
          <a class="nav-link links-navbar text-nowrap ms-3" >Logueado</a>
         </li>
        <li class="nav-item">
            <a id="CerrarSesion" class="nav-link links-navbar text-nowrap" href="">Cerrar sesion</a>
        </li>
    
    `
    let CerrarSesion =document.getElementById("CerrarSesion")
    
    CerrarSesion.addEventListener("click",(e)=>{
        e.preventDefault();

        Swal.fire({
            title: "Haz cerrado sesion con exito.",
            text: 'Gracias por tu visita, vuelve pronto',
            icon: 'success',
            timer:3000,
            timerProgressBar:true
         });


        setTimeout(()=>{
            localStorage.setItem("usuarioEncontrado","false")
            window.location.reload()
        },3500)






        
    
    
    
    })
    
}else{
    Iniciar2.classList.add("d-flex")
}
