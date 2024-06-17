

//variable que mantienen visible el estado del carrito
var carritoVisible = false;

// esperamos que todos los elementos de la pagina se carguen con el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)

}else{
    ready();
}

function ready(){
    //AGREGAMOS FUNCIONALIDAD AL BOTONES ELIMINAR DEL CARRITO
    var botnesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i<botnesEliminarItem.length;i++){
        var button = botnesEliminarItem[i];
        button.addEventListener('click', EliminarItemCarrito);
    }

    //AGREGAMOS FUNCIONALIDAD AL BOTON SUMAR CANTIDAD 
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0; i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad)
    }

     //le agrega os funcionalidad al boton restar cantidad
     var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
     for(var i=0; i<botonesRestarCantidad.length; i++){
         var button = botonesRestarCantidad[i];
         button.addEventListener('click',restarCantidad)
     }

    //AGREGAMOS FUNCIONALIDAD A LOS BOTONES AGREAGR 
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length; i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    //agregamos funcionalidad al boton pagar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked);
}

//ELIMINO EL ITEM SELECCIONADO DEL CARRITO
function EliminarItemCarrito(event){
    var buttonCliked = event.target;
    buttonCliked.parentElement.remove();

    //actualizamos total carrito una vez eliminado productos del carrito
    actualizarTotalCarrito();

    //esta funcion controla si hay elementos en el carrito dde no ser asi ocultara el carrito
    ocultarCarrito();
}

//actualizar total del carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor del carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    //recorrremos cada elemento del carrito para actualizar el total
    for(var i=0; i<carritoItems.length; i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        console.log(precioElemento);
        //quitamos simbolo peso y punto milesimo
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        console.log(precio);
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        console.log(cantidad);
        total = total + (precio * cantidad);
    }

    total = Math.round(total*100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total;
}

function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;

        //maximisamos los contenedores de los elemntos (los prroductos)
        var items = document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}

//aumento en uno la cantidad de elemento seleccionado
function sumarCantidad(event){
    var buttonCliked = event.target;
    var selector = buttonCliked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    
    //actualizamos total carrito
    actualizarTotalCarrito();
}

function restarCantidad(event){
    var buttonCliked = event.target;
    var selector = buttonCliked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual--;
    
    //Validamos que la cantidad no sea menor a 1
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        //actualizamos total carrito
        actualizarTotalCarrito();
    }
}

function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    console.log(titulo);
    var precio =  item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc =  item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    //CON ESTA FUNCION AGREGAMOS EL PRODUCTO SELECCIONADO AL CARRTIO . LE PASAMOS LOS VALORES POR PARAMETROS
    agregarItemAlCarrito(titulo,precio,imagenSrc);
    //HACEMOS VISIBLE EL CARRITO CUANDO AGREGA POR PRIMERA VEZ
    hacerVisibleCarrito();
    actualizarTotalCarrito();

}

function agregarItemAlCarrito(titulo,precio,imagenSrc){
    var item = document.createElement('div');
    item.classList.add = 'item';
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];
    //CONTROLAMOS QUE EL ITEM QUE ESTAMOS AGREGANDO NO SE ENCUENTRE YA AGREGADO 
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0; i < nombresItemsCarrito.length; i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }
    actualizarTotalCarrito();

    var itemCarritoContenido = `
        <div class="carrito-item">
        <img src="${imagenSrc}" alt="" width="80px">
        <div class="carrito-item-detalles">
            <span class="carrito-item-titulo">${titulo}</span>

            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input class="carrito-item-cantidad" type="text" value="1" disabled>
                <i class="fa-solid fa-plus sumar-cantidad"></i>
                <span class="carrito-item-precio">${precio}</span>
            </div>

        </div>
        <span class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
        </span>
    </div>
    `

    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);
    


    //AGREGAMOS LA FUNCIONALIDAD DE ELIMINAR DEL NUEVO ITEMS
    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click',EliminarItemCarrito);   

        //AGREGAMOS LA FUNCIONALIDAD DE sumar DEL NUEVO ITEMS
        var botonSumarCantidad =item.getElementsByClassName('sumar-cantidad')[0];
        botonSumarCantidad.addEventListener('click',sumarCantidad);   

        //AGREGAMOS LA FUNCIONALIDAD DE RESTAR DEL NUEVO ITEMS
        var botonRestarCantidad =item.getElementsByClassName('restar-cantidad')[0];
        botonRestarCantidad.addEventListener('click',restarCantidad);   

        actualizarTotalCarrito();

}

function pagarClicked(event){
    alert("Gracias por su compra");

    //ELIMINO TODOS LOS ELEMENTOS DEL CARRITO
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while(carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild);
    }
    actualizarTotalCarrito();

    //AGREGAMOS FUNCION QUE OCULTA EL CARRITO
    ocultarCarrito();
}

function hacerVisibleCarrito() {
    // Asumo que carritoVisible es una variable global que controla el estado de visibilidad del carrito
    var carritoVisible = true;

    // Obtener el elemento del carrito y verificar si existe
    var carrito = document.querySelector('.carrito');
    if (carrito) {
        carrito.style.marginRight = '0';
        carrito.style.opacity = '1';
    } else {
        console.error('No se encontró el elemento con clase "carrito"');
        return; // Salir de la función si no se encuentra el carrito
    }

    // Obtener el contenedor de items y verificar si existe
    var items = document.querySelector('.contenedor-items');
    if (items) {
        items.style.width = '60%';
    } else {
        console.error('No se encontró el elemento con clase "contenedor-items"');
        return; // Salir de la función si no se encuentra el contenedor de items
    }
}


