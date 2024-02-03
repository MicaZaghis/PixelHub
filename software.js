// Datos de los juegos
const software = [
    {
        id:"cross-v2",
        nombre: "Crosshair V2",
        imagen: "./images/SOFTWARE/crosshair-v2.jpg",
        precio: 8000
    },
    {
        id:"w-e",
        nombre: "Wallpaper Engine",
        imagen: "./images/SOFTWARE/w-e.jpg",
        precio: 4500
    },
    {
        id:"cross-x",
        nombre: "Crosshair X",
        imagen: "./images/SOFTWARE/crosshair-x.jpg",
        precio: 5500
    },
    {
        id:"my-dock",
        nombre: "MyDockFinder",
        imagen: "./images/SOFTWARE/dock.jpg",
        precio: 1500
    },
    {
        id:"obs",
        nombre: "OBS Studio",
        imagen: "./images/SOFTWARE/obs.jpg",
        precio: 3500
    },
    {
        id:"sharex",
        nombre: "ShareX",
        imagen: "./images/SOFTWARE/sharex.jpg",
        precio: 4200
    },
    {
        id:"soundpad",
        nombre: "Soundpad",
        imagen: "./images/SOFTWARE/soundpad.jpg",
        precio: 7200
    },
    {
        id:"vegas",
        nombre: "Vegas Pro Edit 21",
        imagen: "./images/SOFTWARE/vegas.jpg",
        precio: 9800
    },
    {
        id:"cyberlink",
        nombre: "CyberLink PowerDirector 2024 Ultra",
        imagen: "./images/SOFTWARE/powerdirector.jpg",
        precio: 10900
    },
    
    {
        id:"blender",
        nombre: "Blender",
        imagen: "./images/SOFTWARE/blender.jpg",
        precio: 1900
    },
];

const detallesSoftware = {
    'cross-v2': {
      nombre: "Crosshair V2",
      imagen: "./images/SOFTWARE/crosshair-v2.jpg",
      descripcion: "Crosshair V2 es una tecnología de superposición de miras que mejora la puntería, el tiempo de respuesta y la precisión de disparo desde la cadera para los jugadores. Elige entre una variedad de tamaños, formas y colores neón para encontrar la mira que te ofrece la mayor ventaja en tu juego favorito."
    },
    'w-e': {
      nombre: "Wallpaper Engine",
      imagen: "./images/SOFTWARE/w-e.jpg",
      descripcion: "Pon increíbles fondos animados en tu escritorio. Anima tus propias imágenes para crear nuevos fondos o importa vídeos/páginas web y compártelos en Steam Workshop."
    },
    'cross-x': {
        nombre: "Crosshair X",
        imagen: "./images/SOFTWARE/crosshair-x.jpg",
        descripcion: "Añade miras personalizadas a todos los juegos que juegues. Elige entre miles de miras únicas creadas por la comunidad de Crosshair X o diseña tu propia usando el diseñador."
    },
    'my-dock': {
        nombre: "MyDockFinder",
        imagen: "./images/SOFTWARE/dock.jpg",
        descripcion: "Este es un software para iniciar rápidamente el sistema y controlar y ver las funciones del sistema. Puede arrastrar y soltar para agregar sus programas favoritos, y arrastrar y soltar para usar directamente el programa para abrir el archivo. Utilice el renderizado de WinUI y GPU."
    },
    'obs': {
        nombre: "OBS Studio",
        imagen: "./images/SOFTWARE/obs.jpg",
        descripcion: "OBS Studio es un programa gratuito y de código abierto para la transmisión en directo y la grabación de video."
    },
    'sharex': {
        nombre: "ShareX",
        imagen: "./images/SOFTWARE/sharex.jpg",
        descripcion: "ShareX es un programa gratuito y de código abierto que puede capturar o grabar áreas seleccionadas de la pantalla con una sola pulsación de tecla, guardarlas automáticamente en tu disco duro/portapapeles y subirlas instantáneamente a un servicio de alojamiento de imágenes/archivos, pudiendo copiar la URL a tu portapapeles."
    },
    'soundpad': {
        nombre: "Soundpad",
        imagen: "./images/SOFTWARE/soundpad.jpg",
        descripcion: "Reproduce sonidos en chats de voz en alta calidad digital. Agrega sonidos o música a la señal de tu micrófono para que otros también lo escuchen."
    },
    'vegas': {
        nombre: "Vegas Pro Edit 21",
        imagen: "./images/SOFTWARE/vegas.jpg",
        descripcion: "VEGAS Pro Edit 21 Steam Edition. El estándar creativo para vídeo y audio. Un software intuitivo que convertirá los momentos destacados de sus retransmisiones y los gameplays en vídeos atractivos y entretenidos."
    },
    'cyberlink': {
        nombre: "CyberLink PowerDirector 2024 Ultra",
        imagen: "./images/SOFTWARE/powerdirector.jpg",
        descripcion: "Cuente su historia de la manera que la imaginó con herramientas de edición intuitivas que lo ayudarán a crear ediciones de nivel profesional sin esfuerzo."
    },
    'blender': {
        nombre: "Blender",
        imagen: "./images/SOFTWARE/blender.jpg",
        descripcion: "Blender es una suite de creación 3D gratuita y de código abierto. Es compatible con todo el proceso de creación 3D: modelado, rigging, animación, simulación, renderizado, composición, seguimiento de movimiento y edición de vídeo.",
    },
  };

// Función para crear la tarjeta de cada juego
function crearTarjeta(juego) {
    const detallesUrl = `detallesjuegos.html?software=${juego.id}`;

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
    const gamesId = params.get('software');

    const games = detallesSoftware[gamesId];
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
    contenedor.innerHTML = software.map(juego => crearTarjeta(juego)).join('');
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
        let juego = software.find(j => j.id === id);
        if (juego) {
            const detallesUrl = `detallesjuegos.html?software=${juego.id}`;
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
