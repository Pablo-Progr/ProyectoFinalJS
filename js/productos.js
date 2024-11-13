const mostrarProductos = async () => {
    try {
  
      let response = await axios.get("http://localhost:3001/productos");
      response.data.map((producto) =>
          (document.getElementById("seccionProductos").innerHTML += `
            <div class="card card-bebida" style="width: 18rem">
                <img src="${producto.imagen}" class="card-img" alt="Imagen Campari" style="height: 340px;"/>
                <div class="card-body">
                    <h5 class="card-title">${producto.producto}6</h5>
                    <h5 class="card-text">$${producto.precio}</h5>
                    <div class="agregar-carrito row">
                    <input class="col-4" type="number" placeholder="0" style="height: 35px;">
                    <button class="btn btn-success col-6">Agregar al carrito</button>
                </div>
            </div>
      `)
      );
    } catch (error) {
      console.log(error)
    }
  };


mostrarProductos();
  