// Guardo las id de los formularios de iniciar sesion y Registro
// Guardo las id de los botones crear cuenta y iniciar sesion
const formularioRegistro = document.getElementById("formularioRegistro")
const formularioLogin = document.getElementById("formularioLogin")
const enlaceLogin = document.getElementById("enlaceLogin")
const enlaceCrearCuenta = document.getElementById("enlaceCrearCuenta")


// evento para que al hacer click en iniciar sesion, desaparezca el login de inicio de sesion
//  y aparezca el login de registro


enlaceLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    formularioLogin.classList.remove("d-none")
    formularioRegistro.classList.add("d-none")

});

enlaceCrearCuenta.addEventListener("click",(e) => {
    e.preventDefault();
    formularioLogin.classList.add("d-none")
    formularioRegistro.classList.remove("d-none")

});



const BotonCrearCuenta=document.getElementById("BotonCrearCuenta");



// evento al hacer click en Registrarse se guarden los datos en las variables y meter los datos guardados en el json

BotonCrearCuenta.addEventListener  ("click", async (event)=>{
let usuarioRegistrado=false;

event.preventDefault();
    
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
        Swal.fire({
            title: '¡Error!',
            text: 'Tienes que ser mayor de edad para poder registrarte',
            icon: 'error',
            timer: 3000, 
            timerProgressBar: true,
            showConfirmButton: false 
          });
        return;
    }


// codigo para verificar que el email y el dni no este ya registrado

try {
    let respuesta = await axios.get ("http://localhost:3001/usuarios")

    usuarios=respuesta.data;
    emailEncontrado=false
    dniEncontrado=false;

    usuarios.forEach((usuario)=>{

        if (usuario.email==Email) {
            emailEncontrado=true;
        }else if(usuario.dni==Dni){
            dniEncontrado=true;

        }


    })
    
   } catch (error) {
    console.error("Error axios")
    
   }
// codigo para verificar que el usuario ingrese todos los campos
// codigo para verificar que la contraseña sea igual a confirmacion de contraseña
// codigo para verificar si el email ya esta registrado, no lo deje registrarse.

    if (Nombre && Apellido && FechaNac && Contraseña && Email && Nombre && ConfirmarContraseña) {
        if(Contraseña===ConfirmarContraseña){
            if (emailEncontrado==false) { 
                if (dniEncontrado==false) {
                    Swal.fire({
                        title: '¡Genial!',
                        text: 'Registro completado con éxito.',
                        icon: 'success',
                        timer: 3000
                      });
                      

                    
                    setTimeout( async () => {
                                            
                    try { 
                        let response = await axios.post("http://localhost:3001/usuarios",{
                        
                            nombre: Nombre,
                            apellido: Apellido,
                            fechaNacimiento: FechaNac,
                            dni: Dni,
                            email : Email,
                            contraseña: Contraseña,
                            })

                    } catch (error) {
                        
                        console.error("error al guardar los datos: ",error);
                        Swal.fire({
                            title: '¡Hola!',
                            text: 'Error al registrarse',
                            icon: 'error',
                            timer: 3000, 
                            timerProgressBar: true,
                            showConfirmButton: false 
                          });


                        
                    }
                         
                    }, 3500);

                    
                }else{
                    Swal.fire({
                        title: '¡Error!',
                        text: 'Dni ya registrado, por favor ingrese uno distinto',
                        icon: 'error',
                        timer: 3000, 
                        timerProgressBar: true,
                        showConfirmButton: false 
                      });
                    
                }

                
            }else{
                Swal.fire({
                    title: '¡Error!',
                    text: 'Email ya registrado, por favor ingrese uno distinto',
                    icon: 'error',
                    timer: 3000, 
                    timerProgressBar: true,
                    showConfirmButton: false 
                  });
            }
        }else{
            Swal.fire({
                title: '¡Error!',
                text: 'Las contraseñas son distintas',
                icon: 'error',
                timer: 3000, 
                timerProgressBar: true,
                showConfirmButton: false 
              });
        }
    }else{
        Swal.fire({
            title: '¡Error!',
            text: 'Debe rellenar todos los campos',
            icon: 'error',
            timer: 3000, 
            timerProgressBar: true,
            showConfirmButton: false 
          });
    }

});




//evento para que al iniciar sesion me mande a la pag productos

const BotonInicioSesion=document.getElementById("BotonInicioSesion");

BotonInicioSesion.addEventListener ("click",async (e) => {
    e.preventDefault();

    let EmailLogin=document.getElementById("emailLogin").value;
    let ContraseñaLogin=document.getElementById("contraseñaLogin").value;

    if (EmailLogin&&ContraseñaLogin) {
        try {

            let response = await axios.get("http://localhost:3001/usuarios");

            let usuarios=response.data;

            let usuarioEncontrado = false;


            usuarios.forEach((usuario)=>{
                if (usuario.email===EmailLogin && usuario.contraseña===ContraseñaLogin) {
                    usuarioEncontrado=true;
                    usuarioNombre=usuario.nombre;
                    
                    localStorage.setItem("usuarionombre",usuario.nombre)



                    
                }
            });

            if(usuarioEncontrado===true){
                Swal.fire({
                    title: "Iniciaste sesion con éxito.",
                    text: 'Aguarda un segundo, por favor',
                    icon: 'success',
                    timer:3000,
                    timerProgressBar:true
                 });
               setTimeout(()=> {
                window.location.href ="productos.html";
                localStorage.setItem("usuarioEncontrado","true")


               },3500) 

                  


            }else{
                Swal.fire({
                    title: '¡Error!',
                    text: 'Email o contraseña incorrectos',
                    icon: 'error',
                    timer: 3000, 
                    timerProgressBar: true,
                    showConfirmButton: false 
                  });
            }


       
        } catch (error) {
            console.error("Error al iniciar sesion, intetalo de nuevo, error: ",error);
            Swal.fire({
                title: '¡Error!',
                text: 'Error axios',
                icon: 'error',
                timer: 3000, 
                timerProgressBar: true,
                showConfirmButton: false 
              });
            
        }
        
    }else{
        Swal.fire({
            title: '¡Error!',
            text: 'Debe rellenar todos los campos',
            icon: 'error',
            timer: 3000, 
            timerProgressBar: true,
            showConfirmButton: false 
          });
    }

})






