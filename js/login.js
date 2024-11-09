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
let Email = document.getElementById("emailRegistro").value;
let Contraseña = document.getElementById("contraseñaRegistro").value
let ConfirmarContraseña = document.getElementById("confirmarContraseñaRegistro").value

alert("guardando datos")

formularioRegistro.reset();

// if para dar error si ponen contraseñas iguales o no ingresan todos los datos


    if (Contraseña && Email && Nombre && ConfirmarContraseña) {
        if(Contraseña===ConfirmarContraseña){
            try {
                let response = await axios.post("http://localhost:3000/usuarios",{
                
                    nombre: Nombre,
                    email : Email,
                    contraseña: Contraseña,
                      
                    })
                    console.log(response);
                    alert("Usuario creado correctamente")
                
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
    





})






