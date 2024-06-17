let btnCarrito = document.getElementById("btnCarrito");

btnCarrito.addEventListener('click', function(){

    arrayStorage = [
        {
            sku:1,
            nombre:"Comida de gato",
            precio:1500,
            cantidad:5
        },
        {
            sku:2,
            nombre:"Comida de perro",
            precio:3500,
            cantidad:9
        },
        {
            sku:3,
            nombre:"Comida de oso",
            precio:4500,
            cantidad:3
        },
    ]

    let token = document.getElementsByName("csrfmiddlewaretoken")[0].value;

    fetch('/carrito',{
        method: 'POST',
        headers:{
            'content-type':'application/json',
            'X-CSRFToken': token
        },
        body:JSON.stringify(arrayStorage)
    })



})