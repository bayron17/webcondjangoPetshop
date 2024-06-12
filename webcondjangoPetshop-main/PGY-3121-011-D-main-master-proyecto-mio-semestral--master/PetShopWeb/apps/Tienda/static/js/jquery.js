
$(function(){
    $("#miFormulario").validate({
        rules:{
            rut:{
                required: true,     
                minlength:8,
                maxlength:9
                
            },
            nombre:{
                required: true,
                minlength: 5
            },
            direccion:{
                required: true,
                minlength:6
            },
            comuna:{
                required: true,
                minlength: 5
            },
            correo:{
                required: true,
                minlength:14
            },
            numero:{
                required: true,
                minlength:9,
                maxlength:9
            }
        },
        messages:{
            rut:{
                required: "Debe ingresar su rut.",
                minlength: "el rut deve contener al menos 8 digitos",
                maxlength: "el rut no debe tener mas de 9 digitos"
                
            },
            nombre:{
                required: "Debe ingresar su nombre",
                minlength: "Nombre ingresado invalido"
            },
            direccion:{
                required: "Debe ingresar su direccion",
                minlength: "Direccion ingresada invalida"
            },
            comuna:{
                required: "Debe ingresar su comuna",
                minlength: "Comuna ingresada no valida"
            },
            correo:{
                required: "Debe ingresar su correo",
                minlength: "Correo ingresado no valido"
            },
            numero:{
                required: "Debe ingresar su numero",
                minlength: "Numero ingresado no valido",
                maxlength: "El numero no puede contener mas de 9 digitoa"
            }
        }
    
        
    })
})

