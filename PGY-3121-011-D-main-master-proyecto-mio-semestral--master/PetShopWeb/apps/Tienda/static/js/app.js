// //variable que mantienen el estado visible del carrito 
// var carritoVisible = false;

// // esta es la funcion padre que llama la funcion de api(clima) y app(proximamente storage)
// function load(){
//     api();
//     ready();
// }

// //esperamos que todos los elementos de la pagina se carguen para continuar con el sccript
// if(document.readyState=='loading'){
//     document.addEventListener('DOMcontentLoaded',ready)
// }else{
//     ready();
// }

// function ready(){
//     var botonesEliminarItems = document.getElementsByClassName('btn-eliminar')
//     for (var i=0; i <botonesEliminarItems.length; i++ ){
//         var button = botonesEliminarItems[i];
//         button.addEventListener('click', eliminarItemCarrito); 
//     }
// }

// // elimino el item seleccionado del carrito
// function eliminarItemCarrito(event){
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();

// }

//variable que mantienen el estado visible del carrito 
var carritoVisible = false;

// esta es la funcion padre que llama la funcion de api(clima) y app(proximamente storage)
function load(){
    api();
    ready();
}

//esperamos que todos los elementos de la pagina se carguen para continuar con el sccript
if(document.readyState=='loading'){
    document.addEventListener('DOMcontentLoaded',ready)
}else{
    ready();
}

function ready(){
    var botonesEliminarItems = document.getElementsByClassName('btn-eliminar')
    for (var i=0; i <botonesEliminarItems.length; i++ ){
        var button = botonesEliminarItems[i];
        button.addEventListener('click', eliminarItemCarrito); 
    }
}

// elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

}
