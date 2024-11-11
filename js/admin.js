

const handleClick = async (e) => {
    e.preventDefault()
    
    let categoria = document.getElementById("categoriaProducto").value
    let marca = document.getElementById("marcaProducto").value
    let producto = document.getElementById("nombreProducto").value
    let precio = document.getElementById("precioProducto").value
    let cantidad = document.getElementById("tamañoProducto").value

    e.target.reset()
    
        let response = await axios.post("http://localhost:3000/" + categoria, {
            producto,
            marca,
            precio,
            cantidad
        });
    
        console.log(response)

        if (response){
            alert("producto cargado")
        }else {
            alert("no se cargo")
        }
}


document.getElementById("guardarProducto").addEventListener("submit", handleClick)