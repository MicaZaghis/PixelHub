// Datos de los juegos
const juegos = [
    {
        id: "spiderman",
        nombre: "SpiderMan - Miles Morales",
        imagen: "./images/VIDEOGAMES/spiderman.jpg",
        precio: 8000
    },
    {
        id: "t-f",
        nombre: "The Forest",
        imagen: "./images/VIDEOGAMES/the-forest.jpg",
        precio: 4500
    },
    {
        id: "l4d2",
        nombre: "Left 4 Dead 2",
        imagen: "./images/VIDEOGAMES/l4d2.jpg",
        precio: 5500
    },
    {
        id: "ark",
        nombre: "ARK",
        imagen: "./images/VIDEOGAMES/ark.jpg",
        precio: 4500
    },
    {
        id: "rust",
        nombre: "Rust",
        imagen: "./images/VIDEOGAMES/rust.jpg",
        precio: 5300
    },
    {
        id: "t-i",
        nombre: "The Invisible",
        imagen: "./images/VIDEOGAMES/t-invisible.jpg",
        precio: 9300
    },
    {
        id: "cyberpunk2077",
        nombre: "CyberPunk 2077",
        imagen: "./images/VIDEOGAMES/cyberpunk.jpg",
        precio: 14000,
    },
    {
        id: "amongus",
        nombre: "Among Us",
        imagen: "./images/VIDEOGAMES/among-us.jpg",
        precio: 4000,
    },
    {
        id: "gtav",
        nombre: "Grand Theft Auto V",
        imagen: "./images/VIDEOGAMES/gtaV.jpg",
        precio: 8350,
    },
    {
        id: "r-d-r-II",
        nombre: "Red Dead Redemption II",
        imagen: "./images/VIDEOGAMES/R-D-R-II.jpg",
        precio: 18350,
    }
    // Agrega más juegos aquí
];

const detallesJuegos = {
    'cyberpunk2077': {
      nombre: "Cyberpunk 2077",
      imagen: "./images/VIDEOGAMES/cyberpunk.jpg",
      descripcion: "Cyberpunk 2077 es un juego de rol de acción desarrollado y publicado por CD Projekt. Ambientado en Night City, un mundo abierto y futurista, el jugador controla a V, un mercenario en busca de un implante único que permite la inmortalidad."
    },
    'amongus': {
      nombre: "Among Us",
      imagen: "./images/VIDEOGAMES/among-us.jpg",
      descripcion: "Among Us es un juego de misterio multijugador en línea desarrollado y publicado por InnerSloth. En el juego, los jugadores asumen roles de tripulantes de una nave espacial, pero hay impostores entre ellos cuyo objetivo es sabotear la nave y eliminar a los tripulantes."
    },
    'gtav': {
        nombre: "Grand Theft Auto V",
        imagen: "./images/VIDEOGAMES/gtaV.jpg",
        descripcion: "Grand Theft Auto V es un juego de acción-aventura desarrollado por Rockstar Games. Ambientado en la ficticia ciudad de Los Santos, el jugador sigue a tres criminales y sus intentos de realizar atracos bajo presión de una agencia gubernamental."
    },
    'r-d-r-II': {
        nombre: "Red Dead Redemption II",
        imagen: "./images/VIDEOGAMES/R-D-R-II.jpg",
        descripcion: "Red Dead Redemption II es un juego de acción y aventuras desarrollado por Rockstar Games. Situado en un mundo abierto en el año 1899, sigue la historia de Arthur Morgan, un forajido miembro de la banda de Van der Linde, y su vida en el fin de la era del Salvaje Oeste."
    },
    'spiderman': {
        nombre: "Spider Man - Miles Morales",
        imagen: "./images/VIDEOGAMES/spiderman.jpg",
        descripcion: "el adolescente Miles Morales se adapta a su nuevo barrio al tiempo que sigue los pasos de Peter Parker, su mentor, para convertirse en un nuevo Spider-Man. Pero cuando una feroz lucha de poderes amenaza con destruir su nuevo hogar, el aspirante a héroe se da cuenta de que un gran poder conlleva una gran responsabilidad. Para salvar la Nueva York de Marvel, Miles debe tomar el relevo de Spider-Man y estar a la altura."
    },
    't-f': {
        nombre: "The Forest",
        imagen: "./images/VIDEOGAMES/the-forest.jpg",
        descripcion: "Como único superviviente de un accidente de avión de pasajeros, te encuentras en un misterioso bosque luchando por mantenerte con vida contra una sociedad de mutantes caníbales. Construye, explora y sobrevive en este terrorífico simulador de survival horror en primera persona."
    },
    'l4d2': {
        nombre: "Left 4 Dead 2",
        imagen: "./images/VIDEOGAMES/l4d2.jpg",
        descripcion: "Jugarás como uno de los cuatro nuevos supervivientes, armado con un amplio y devastador arsenal de armas clásicas y mejoradas. Además de las armas de fuego, también tendrás la oportunidad de masacrar a los infectados con diversas armas de combate cuerpo a cuerpo, desde motosierras hasta hachas, e incluso una mortífera sartén."
    },
    'ark': {
        nombre: "ARK",
        imagen: "./images/VIDEOGAMES/ark.jpg",
        descripcion: "¡Ark se reinventa desde cero en esta próxima generación de tecnología de videojuegos con Unreal Engine 5! Forma una tribu, domestica y cría cientos de dinosaurios únicos y criaturas primitivas, exploran, cree, construyen y luchan hasta la cima de la cadena alimentaria. ¡Tu nuevo mundo te espera!"
    },
    'rust': {
        nombre: "Rust",
        imagen: "./images/VIDEOGAMES/rust.jpg",
        descripcion: "El único objetivo en Rust es sobrevivir. Todo quiere que mueras: la fauna de la isla y otros habitantes, el entorno, otros supervivientes. Haz lo que haga falta para aguantar una noche más."
    },
    't-i': {
        nombre: "The Invisible",
        imagen: "./images/VIDEOGAMES/t-invisible.jpg",
        descripcion: "Replantéate el dominio de la humanidad en The Invincible, una aventura de ciencia ficción basada en el mundo de Stanisław Lem. Descubre Regis III con Yasna, usa herramientas atompunk y supera amenazas. Toma decisiones en una historia filosófica y científica."
    }
  };

// Función para crear la tarjeta de cada juego
function crearTarjeta(juego) {
    const detallesUrl = `detallesjuegos.html?juego=${juego.id}`;

    return `
        <div class="product-1">
            <img src="${juego.imagen}" alt="${juego.nombre}">
            <div class="product-txt">
                <h3>${juego.nombre}</h3>
                <div class="price">
                    <p>$${juego.precio}</p>
                    <a href="${detallesUrl}" class="btn-2" data-juego-id="${juego.id}" >Ver detalles</a>
                </div>
            </div>
        </div>`;
}

function cargarDetallesJuego() {
    const params = new URLSearchParams(window.location.search);
    const gamesId = params.get('juego');

    const games = detallesJuegos[gamesId];
    if (games) {
        document.title = games.nombre + " - Detalles del Juego"; // Actualizar el título de la página
        document.getElementById('nombregames').textContent = games.nombre;
        document.getElementById('imagengames').src = games.imagen;
        document.getElementById('imagengames').alt = games.nombre;
        document.getElementById('descripciongames').textContent = games.descripcion;
    } else {
        // Manejar el caso en que no se encuentre el juego
        console.log('Juego no encontrado.');
    }
}

document.addEventListener('DOMContentLoaded', cargarDetallesJuego);

// Función para renderizar todos los juegos
function renderizarJuegos() {
    const contenedor = document.getElementById('productContainer');
    contenedor.innerHTML = juegos.map(juego => crearTarjeta(juego)).join('');
}

// Incrementa el contador de clics para un juego y lo guarda en sessionStorage
function incrementarContadorClics(idJuego) {
    // Obtiene los clics de sessionStorage o inicializa un objeto vacío si no existe
    let juegosClics = JSON.parse(sessionStorage.getItem('juegosClics') || '{}');
    juegosClics[idJuego] = (juegosClics[idJuego] || 0) + 1;
    sessionStorage.setItem('juegosClics', JSON.stringify(juegosClics));
}


// Muestra los juegos recomendados basados en la cantidad de clics
function mostrarJuegosRecomendados() {
    let juegosClics = JSON.parse(sessionStorage.getItem('juegosClics') || '{}'); // Cambiado a sessionStorage
    let juegosOrdenados = Object.keys(juegosClics).sort((a, b) => juegosClics[b] - juegosClics[a]);
    let juegosRecomendadosHTML = juegosOrdenados.map(id => {
        let juego = juegos.find(j => j.id === id);
        if (juego) {
            const detallesUrl = `detallesjuegos.html?juego=${juego.id}`;
            return `
            
                <div class="product-1" data-juego-id="${juego.id}">
                    <a href="${detallesUrl}">
                        <img src="${juego.imagen}" alt="${juego.nombre}">
                    </a>
                    <div class="product-txt-2">
                        <div class="price">
                            <p>Clics: ${juegosClics[id]}</p>
                        </div>
                    </div>
                </div>`;
        }
        return '';
    }).join('');
    document.getElementById('juegosRecomendados').innerHTML = juegosRecomendadosHTML;
}


// Asegúrate de que estás llamando a incrementarContadorClics() cuando se hace clic en el botón "Ver detalles"
document.addEventListener('DOMContentLoaded', () => {

    const enlacesPopulares = document.querySelectorAll('.popular-content a');
    // Agrega un controlador de eventos a cada enlace
    enlacesPopulares.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            // Obtiene el ID del juego del atributo data-juego-id
            const idJuego = this.dataset.juegoId;
            // Incrementa el contador de clics para ese juego
            incrementarContadorClics(idJuego);
        });
    });
    document.querySelectorAll('.btn-2').forEach(boton => {
        boton.addEventListener('click', () => {
            const idJuego = boton.getAttribute('data-juego-id');
            incrementarContadorClics(idJuego);
        });
    });

    mostrarJuegosRecomendados();
});

// Suponiendo que tienes enlaces para ver detalles de cada juego
document.querySelectorAll('.juego-enlace').forEach(enlace => {
    enlace.addEventListener('click', function() {
        let idJuego = this.dataset.juegoId; // Asegúrate de que cada enlace tenga un data-juego-id
        incrementarContadorClics(idJuego);
    });
});

function manejarClicsEnJuegos() {
    // Agrega un listener para los clics en toda la página
    document.addEventListener('click', function(event) {
        // Comprueba si el clic fue en un elemento que debería incrementar los clics de juegos
        if (event.target.matches('.btn-2') || event.target.closest('.popular-content a')) {
            const idJuego = event.target.dataset.juegoId || event.target.closest('[data-juego-id]').dataset.juegoId;
            incrementarContadorClics(idJuego);
        }
    });
}

// Event Listener para cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
    renderizarJuegos();
    manejarClicsEnJuegos();
    mostrarJuegosRecomendados();
});

