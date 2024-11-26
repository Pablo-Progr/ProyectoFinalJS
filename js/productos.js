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
                        <input class="col-4" type="number" id="cantidad${producto.id}" value="0" placeholder="0" style="height: 35px;">
                        <button class="btn btn-success" onClick="agregarCarrito('${producto.id}','${producto.marca}','${producto.producto}','${producto.precio}')">Agregar al carrito</button>
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

const agregarCarrito = (id,marca, producto, precio, cantidad) => {
    
    cantidad = document.getElementById('cantidad'+id).value;

    if (cantidad == 0 ) {
        alert("debe ingresar una cantidad")
    } else {
        const total = cantidad * precio;
        const productoCarrito = { marca, producto, cantidad, precio, total };
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(productoCarrito);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto agregado al carrito');  
    }

  };


let aperitivos=document.getElementById("Aperitivos");

aperitivos.addEventListener("click", async (e)=>{

    try {
        let response = await axios.get("http://localhost:3001/productos");
        let productos=response.data;

        document.getElementById("seccionProductos").innerHTML = "";

        productos.forEach((producto)=>{
            if (producto.categoria==="Aperitivo") {
                (document.getElementById("seccionProductos").innerHTML += `
                <div class="card card-bebida" style="width: 18rem">
                    <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                    <div class="card-body">
                        <h5 class="card-title">${producto.categoria} -  ${producto.producto}</h5>
                        <h5 class="card-text">$${producto.precio}</h5>
                        <div class="agregar-carrito">
                            <input class="col-4" type="number" id="cantidad${producto.id}" value="0" placeholder="0" style="height: 35px;">
                            <button class="btn btn-success" onClick="agregarCarrito('${producto.id}','${producto.marca}','${producto.producto}','${producto.precio}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
          `)         
            }

        })
        } catch (error) {
            console.error("Error axios");
        }
    
});


let cervezas=document.getElementById("Cervezas");

cervezas.addEventListener("click", async (e)=>{

    try {
        let response = await axios.get("http://localhost:3001/productos");
        let productos=response.data;

        document.getElementById("seccionProductos").innerHTML = "";

        productos.forEach((producto)=>{
            if (producto.categoria==="Cerveza") {
                (document.getElementById("seccionProductos").innerHTML += `
                <div class="card card-bebida" style="width: 18rem">
                    <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                    <div class="card-body">
                        <h5 class="card-title">${producto.categoria} -  ${producto.producto}</h5>
                        <h5 class="card-text">$${producto.precio}</h5>
                        <div class="agregar-carrito">
                            <input class="col-4" type="number" id="cantidad${producto.id}" value="0" placeholder="0" style="height: 35px;">
                            <button class="btn btn-success" onClick="agregarCarrito('${producto.id}','${producto.marca}','${producto.producto}','${producto.precio}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
          `)         
            }

        })
      
    } catch (error) {

        console.error("Error axios");
        
    }
    
});

let champage=document.getElementById("Champage");

champage.addEventListener("click", async (e)=>{

    try {
        let response = await axios.get("http://localhost:3001/productos");
        let productos=response.data;

        document.getElementById("seccionProductos").innerHTML = "";

        productos.forEach((producto)=>{
            if (producto.categoria==="Champage") {
                (document.getElementById("seccionProductos").innerHTML += `
                <div class="card card-bebida" style="width: 18rem">
                    <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                    <div class="card-body">
                        <h5 class="card-title">${producto.categoria} -  ${producto.producto}</h5>
                        <h5 class="card-text">$${producto.precio}</h5>
                        <div class="agregar-carrito">
                            <input class="col-4" type="number" id="cantidad${producto.id}" value="0" placeholder="0" style="height: 35px;">
                            <button class="btn btn-success" onClick="agregarCarrito('${producto.id}','${producto.marca}','${producto.producto}','${producto.precio}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
          `)         
            }

        })
    } catch (error) {
        console.error("Error axios");
    }
});

let Ginebra=document.getElementById("Ginebra");

champage.addEventListener("click", async (e)=>{

    try {
        let response = await axios.get("http://localhost:3001/productos");
        let productos=response.data;

        document.getElementById("seccionProductos").innerHTML = "";

        productos.forEach((producto)=>{
            if (producto.categoria==="Ginebra") {
                (document.getElementById("seccionProductos").innerHTML += `
                <div class="card card-bebida" style="width: 18rem">
                    <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                    <div class="card-body">
                        <h5 class="card-title">${producto.categoria} -  ${producto.producto}</h5>
                        <h5 class="card-text">$${producto.precio}</h5>
                        <div class="agregar-carrito">
                            <input class="col-4" type="number" id="cantidad${producto.id}" value="0" placeholder="0" style="height: 35px;">
                            <button class="btn btn-success" onClick="agregarCarrito('${producto.id}','${producto.marca}','${producto.producto}','${producto.precio}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
          `)         
            }
        })
    } catch (error) {
        console.error("Error axios");
    }
});

let SinAlcohol=document.getElementById("SinAlcohol");

SinAlcohol.addEventListener("click", async (e)=>{

    try {
        let response = await axios.get("http://localhost:3001/productos");
        let productos=response.data;

        document.getElementById("seccionProductos").innerHTML = "";

        productos.forEach((producto)=>{
            if (producto.categoria==="SinAlcohol") {
                (document.getElementById("seccionProductos").innerHTML += `
                <div class="card card-bebida" style="width: 18rem">
                    <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                    <div class="card-body">
                        <h5 class="card-title">${producto.categoria} -  ${producto.producto}</h5>
                        <h5 class="card-text">$${producto.precio}</h5>
                        <div class="agregar-carrito">
                            <input class="col-4" type="number" id="cantidad${producto.id}" value="0" placeholder="0" style="height: 35px;">
                            <button class="btn btn-success" onClick="agregarCarrito('${producto.id}','${producto.marca}','${producto.producto}','${producto.precio}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
          `)         
            }

        })
      
    } catch (error) {
        console.error("Error axios");
    }
});

let Vinos=document.getElementById("Vino");

Vinos.addEventListener("click", async (e)=>{

    try {
        let response = await axios.get("http://localhost:3001/productos");
        let productos=response.data;

        document.getElementById("seccionProductos").innerHTML = "";

        productos.forEach((producto)=>{
            if (producto.categoria==="Vino") {
                (document.getElementById("seccionProductos").innerHTML += `
                <div class="card card-bebida" style="width: 18rem">
                    <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                    <div class="card-body">
                        <h5 class="card-title">${producto.categoria} -  ${producto.producto}</h5>
                        <h5 class="card-text">$${producto.precio}</h5>
                        <div class="agregar-carrito">
                            <input class="col-4" type="number" id="cantidad${producto.id}" value="0" placeholder="0" style="height: 35px;">
                            <button class="btn btn-success" onClick="agregarCarrito('${producto.id}','${producto.marca}','${producto.producto}','${producto.precio}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
          `)         
            }

        })
      
    } catch (error) {

        console.error("Error axios");
        
    }
    
});

let Vodkas=document.getElementById("Vodka");

Vodkas.addEventListener("click", async (e)=>{

    try {
        let response = await axios.get("http://localhost:3001/productos");
        let productos=response.data;

        document.getElementById("seccionProductos").innerHTML = "";

        productos.forEach((producto)=>{
            if (producto.categoria==="Vodka") {
                (document.getElementById("seccionProductos").innerHTML += `
                <div class="card card-bebida" style="width: 18rem">
                    <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                    <div class="card-body">
                        <h5 class="card-title">${producto.categoria} -  ${producto.producto}</h5>
                        <h5 class="card-text">$${producto.precio}</h5>
                        <div class="agregar-carrito">
                            <input class="col-4" type="number" id="cantidad${producto.id}" value="0" placeholder="0" style="height: 35px;">
                            <button class="btn btn-success" onClick="agregarCarrito('${producto.id}','${producto.marca}','${producto.producto}','${producto.precio}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
          `)         
            }
        })
    } catch (error) {
        console.error("Error axios");
    }
    
});

let Whiskys=document.getElementById("Whisky");

Whiskys.addEventListener("click", async (e)=>{

    try {
        let response = await axios.get("http://localhost:3001/productos");
        let productos=response.data;

        document.getElementById("seccionProductos").innerHTML = "";

        productos.forEach((producto)=>{
            if (producto.categoria==="Whisky") {
                (document.getElementById("seccionProductos").innerHTML += `
                <div class="card card-bebida" style="width: 18rem">
                    <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                    <div class="card-body">
                        <h5 class="card-title">${producto.categoria} -  ${producto.producto}</h5>
                        <h5 class="card-text">$${producto.precio}</h5>
                        <div class="agregar-carrito">
                            <input class="col-4" type="number" id="cantidad${producto.id}" value="0" placeholder="0" style="height: 35px;">
                            <button class="btn btn-success" onClick="agregarCarrito('${producto.id}','${producto.marca}','${producto.producto}','${producto.precio}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
          `)         
            }

        })
    } catch (error) {
        console.error("Error axios");
    }
});


let MostrarProductos=document.getElementById("Productos");

MostrarProductos.addEventListener("click", ()=>{

    mostrarProductos()
    
});


usuarioEncontrado = localStorage.getItem("usuarioEncontrado")

console.log(usuarioEncontrado);

let Iniciar = document.getElementById("Iniciar")
let Iniciar2 = document.getElementById("Iniciar2")


if (usuarioEncontrado==="true") {
    nombreusuario = localStorage.getItem("usuarionombre")
    console.log("nombre:"+nombreusuario);
    Iniciar2.classList.add("d-none")
    Iniciar.innerHTML+=`

       <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
          <a class="nav-link links-navbar text-nowrap ms-3" >Bienvenido, ${nombreusuario}</a>
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
            timerProgressBar:true,
            showConfirmButton: false 

         });


        setTimeout(()=>{
            localStorage.setItem("usuarioEncontrado","false")
            window.location.reload()
        },3500)
    })
    
}else{
    Iniciar2.classList.add("d-flex")
}
