// Guardo las id de los formularios de iniciar sesion y Registro
// Guardo las id de los botones crear cuenta y iniciar sesion
const formularioLogin = document.getElementById("formularioLogin")
const formularioRegistro = document.getElementById("formularioRegistro")
const enlaceLogin = document.getElementById("enlaceLogin")
const enlaceCrearCuenta = document.getElementById("enlaceCrearCuenta")


// evento para que al hacer click en iniciar sesion, desaparezca el login de inicio de sesion
//  y aparezca el login de registro

enlaceCrearCuenta.addEventListener("click",(e) => {
    e.preventDefault();
    formularioLogin.classList.add("d-none")
    formularioRegistro.classList.remove("d-none")

});

enlaceLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    formularioLogin.classList.remove("d-none")
    formularioRegistro.classList.add("d-none")

});

// evento al hacer click en Registrarse se guarden los datos en las variables y meter los datos guardados en el json

BotonCrearCuenta.addEventListener  ("click", async (e)=>{
    e.preventDefault();
let Nombre = document.getElementById("nombreRegistro").value;
let Apellido = document.getElementById("apellidoRegistro").value;
let FechaNac = document.getElementById("fechaRegistro").value;
let Dni = document.getElementById("dniRegistro").value;
let Email = document.getElementById("emailRegistro").value;
let Contraseña = document.getElementById("contraseñaRegistro").value
let ConfirmarContraseña = document.getElementById("confirmarContraseñaRegistro").value


formularioRegistro.reset();

// Validacion para saber si es mayor de edad

    let fechaActual = new Date();
    let fechaNacimiento = new Date(FechaNac);
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

    if (mes<0 || (mes === 0 && fechaActual.getDate()< fechaNacimiento.getDate())) {
        edad=edad-1;
    }

    if (edad<18) {
        alert("Debe ser mayor de edad para registrarse");
        return;
    }

// if para dar error si ponen contraseñas iguales o no ingresan todos los datos


    if (Contraseña && Email && Nombre && ConfirmarContraseña) {
        if(Contraseña===ConfirmarContraseña){
            try {
                let response = await axios.post("http://localhost:3000/usuarios",{
                
                    nombre: Nombre,
                    apellido: Apellido,
                    fechaNacimiento: FechaNac,
                    dni: Dni,
                    email : Email,
                    contraseña: Contraseña,
                      
                    })
                    console.log(response);
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    timer: 50000
                    });
                
            } catch (error) {
                alert("Error")
                console.error("error al guardar los datos: ",error);
                
            }

        }else{
            alert("Las contraseñas son distintas")
        }

    }else{
        alert("Debe llenar todos los campos")
    }


});

//evento para que al iniciar sesion me mande a la pag productos

BotonInicioSesion.addEventListener ("click",async (e) => {
    e.preventDefault();

    let EmailLogin=document.getElementById("emailLogin").value;
    let ContraseñaLogin=document.getElementById("contraseñaLogin").value;

    if (EmailLogin&&ContraseñaLogin) {
        try {

            let response = await axios.get("http://localhost:3000/usuarios");

            let usuarios=response.data;

            let usuarioEncontrado = false;


            usuarios.forEach((usuario)=>{
                if (usuario.email===EmailLogin && usuario.contraseña===ContraseñaLogin) {
                    usuarioEncontrado=true;

                    
                }
            });

            if(usuarioEncontrado===true){
                alert("Inicio de sesion correcto")
                window.location.href ="productos.html";
                localStorage.setItem("usuarioEncontrado","true")

            }else{
                alert("Email o contraseña incorrectos")
            }


       
        } catch (error) {
            console.error("Error al iniciar sesion, intetalo de nuevo, error: ",error);
            alert("Error al iniciar sesion, intentalo de nuevo")
            
        }
        
    }else{
        alert("Por favor rellene todos los campos")
    }

})






