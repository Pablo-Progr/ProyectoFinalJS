let BtnLoginAdmin=document.getElementById("LoginAdmin");

BtnLoginAdmin.addEventListener("click",async (e)=>{


let usuarioAdmin=document.getElementById("usuarioAdmin").value
let contraseñaAdmin=document.getElementById("contraseñaAdmin").value

  let response=await axios.get("http://localhost:3001/usuarios")

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
        Swal.fire({
          title: "Inicio como administrador correcto",
          text: 'Aguarda un segundo, por favor',
          icon: 'success',
          timer:3000,
          timerProgressBar:true,
          showConfirmButton: false 
       });
       setTimeout(()=>{
        window.location.href ="admin.html"   
       },3000)
      }else{
        Swal.fire({
          title: '¡Error!',
          text: 'Usuario o contraseña incorrectos',
          icon: 'error',
          timer: 3000, 
          timerProgressBar: true,
          showConfirmButton: false 
        });
      }

      }else{
        Swal.fire({
          title: '¡Error!',
          text: 'Por favor rellene todos los campos',
          icon: 'error',
          timer: 3000, 
          timerProgressBar: true,
          showConfirmButton: false 
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: '¡Error!',
        text: 'Error en axios, linea 71',
        icon: 'error',
        timer: 3000, 
        timerProgressBar: true,
        showConfirmButton: false 
      });
    
    }
  }
)








