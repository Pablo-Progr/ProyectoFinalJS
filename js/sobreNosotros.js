let BtnLoginAdmin=document.getElementById("LoginAdmin");

BtnLoginAdmin.addEventListener("click",async (e)=>{


let usuarioAdmin=document.getElementById("usuarioAdmin").value
let contraseñaAdmin=document.getElementById("contraseñaAdmin").value

  let response=await axios.get("http://localhost:3000/usuarios")

  let usuarios=response.data;
  let AdminEncontrado=false;

  try {
    if (usuarioAdmin&&contraseñaAdmin) {
      usuarios.forEach((usuario)=>{

        if (usuarioAdmin===usuario.nombre&&contraseñaAdmin===usuario.contraseña&&usuario.rol==="admin") {

          AdminEncontrado=true;

        }

        

      })

      if (AdminEncontrado==true) {

        alert("Inicio como administrador correcto")

        window.location.href ="admin.html"
        
      }else{
        alert("Usuario o contraseña incorrectos")
      }

      }else{
        alert("Ingrese todos los datos")
      }

      
    } catch (error) {

      console.error(error);
    
    }
  
    
  }
  

)