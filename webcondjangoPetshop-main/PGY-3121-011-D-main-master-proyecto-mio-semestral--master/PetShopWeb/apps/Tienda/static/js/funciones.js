const temaOscuro = () => {
    document.querySelector("#dl-icon").setAttribute("class", "bx bx-sun icon sun");

    document.querySelector("body").setAttribute("data-bs-theme", "dark");

    let contenedor = document.querySelector("#contCarusel");
    contenedor.classList.add("bg-dark");

    let contenedor1 = document.querySelector("#contBienv");
    contenedor1.classList.add("bg-dark");

    let contenedor2 = document.querySelector("#contenedorNavbar");
    contenedor2.classList.add("bg-dark");

    let contenedor3 = document.querySelector("#productos");
    contenedor3.classList.add("bg-dark");

    let contenedor4 = document.querySelector("#contTips");
    contenedor4.classList.add("bg-dark");

    let contenedor5 = document.querySelector("#sectionNosotros");
    contenedor5.classList.add("bg-dark");

    let contenedor6 = document.querySelector("#contenedorLogin");
    contenedor6.classList.add("bg-dark");
}


const temaClaro = () => {
    document.querySelector("#dl-icon").setAttribute("class","bx bx-moon icon moon");

    document.querySelector("body").setAttribute("data-bs-theme","light");

    let contenedor = document.querySelector("#contCarusel");
    contenedor.classList.remove("bg-dark");
    contenedor.classList.add("bg-light");

    let contenedor1 = document.querySelector("#contBienv");
    contenedor1.classList.remove("bg-dark");
    contenedor1.classList.add("bg-light");

    let contenedor2 = document.querySelector("#contenedorNavbar");
    contenedor2.classList.remove("bg-dark");
    contenedor2.classList.add("bg-light");

    let contenedor3 = document.querySelector("#productos");
    contenedor3.classList.remove("bg-dark");
    contenedor3.classList.add("bg-light");

    let contenedor4 = document.querySelector("#contTips");
    contenedor4.classList.remove("bg-dark");
    contenedor4.classList.add("bg-light");

    let contenedor5 = document.querySelector("#sectionNosotros");
    contenedor5.classList.remove("bg-dark");
    contenedor5.classList.add("bg-light");

    let contenedor6 = document.querySelector("#contenedorLogin");
    contenedor6.classList.remove("bg-dark");
    contenedor6.classList.add("bg-light")   
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro()


}

const time = document.getElementById("time");

const interval = setInterval(() => {

    const local = new Date();



    time.innerHTML = local.toLocaleTimeString();
}, 1000)


