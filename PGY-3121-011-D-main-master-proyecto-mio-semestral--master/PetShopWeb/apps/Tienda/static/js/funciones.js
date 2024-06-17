const agregarClaseTema = (selector, clase) => {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.classList.add(clase);
    }
};

const removerClaseTema = (selector, clase) => {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.classList.remove(clase);
    }
};

const temaOscuro = () => {
    document.querySelector("#dl-icon").setAttribute("class", "bx bx-sun icon sun");
    document.querySelector("body").setAttribute("data-bs-theme", "dark");

    agregarClaseTema("#contCarusel", "bg-dark");
    agregarClaseTema("#contBienv", "bg-dark");
    agregarClaseTema("#contenedorNavbar", "bg-dark");
    agregarClaseTema("#productos", "bg-dark");
    agregarClaseTema("#contTips", "bg-dark");
    agregarClaseTema("#sectionNosotros", "bg-dark");
    agregarClaseTema("#contenedorLogin", "bg-dark");
};

const temaClaro = () => {
    document.querySelector("#dl-icon").setAttribute("class", "bx bx-moon icon moon");
    document.querySelector("body").setAttribute("data-bs-theme", "light");

    removerClaseTema("#contCarusel", "bg-dark");
    agregarClaseTema("#contCarusel", "bg-light");

    removerClaseTema("#contBienv", "bg-dark");
    agregarClaseTema("#contBienv", "bg-light");

    removerClaseTema("#contenedorNavbar", "bg-dark");
    agregarClaseTema("#contenedorNavbar", "bg-light");

    removerClaseTema("#productos", "bg-dark");
    agregarClaseTema("#productos", "bg-light");

    removerClaseTema("#contTips", "bg-dark");
    agregarClaseTema("#contTips", "bg-light");

    removerClaseTema("#sectionNosotros", "bg-dark");
    agregarClaseTema("#sectionNosotros", "bg-light");

    removerClaseTema("#contenedorLogin", "bg-dark");
    agregarClaseTema("#contenedorLogin", "bg-light");
};

const cambiarTema = () => {
    const temaActual = document.querySelector("body").getAttribute("data-bs-theme");
    if (temaActual === "light") {
        temaOscuro();
    } else {
        temaClaro();
    }
};

// Código para mostrar la hora local en tiempo real
const time = document.getElementById("time");
const interval = setInterval(() => {
    const local = new Date();
    time.innerHTML = local.toLocaleTimeString();
}, 1000);

