// Importa los estilos para que Vite los incluya en el build final
import './style.css'

// Función asíncrona: pide el JSON con los datos del sitio y los pinta en el HTML
async function cargarDatos(){
    // fetch() pide el archivo data.json al servidor; 'await' pausa la función
    // hasta que la respuesta llegue (sin bloquear el resto de la página)
    const response = await fetch('./src/data.json');
    // La respuesta llega en crudo; .json() la convierte en un objeto JS usable

    if(!response.ok){
        throw new Error('No se puede cargar data.json (HTTP ${response.status})');
    }
    const data = await response.json();

    console.log(data);//Ve los datos

    //Insertar en el html
    // Busca el <h1 class="mast-name"> en el DOM y le asigna el texto del nombre del sitio
    document.querySelector('h1.mast-name').textContent = data.site.nombre;
    // Busca el <p class="intro__tag"> y le asigna el texto de la descripción
    document.querySelector('p.intro__tag').textContent = data.site.descripcion;

    // Insertar comentarios
    const comentariosContainer = document.querySelector('.list');

    //borra  los comentariode prueba
    comentariosContainer.innerHTML = '';

    data.comentarios.forEach(comentario => {
           

            const li = document.createElement("li");
            li.classList.add("card");

            // crear el h3
            const nombre = document.createElement("h3");
            nombre.textContent = comentario.nombre;
            

            // crear el p
            const comentarioP = document.createElement("p");
            comentarioP.textContent = comentario.comentario;

            // agregar h3 y p al li
            li.appendChild(nombre);
            li.appendChild(comentarioP);


            // agregar li al contenedor
            comentariosContainer.appendChild(li);

        
    });

    //La copia
    const track = document.querySelector('.testimonials-track');
    const copia = comentariosContainer.cloneNode(true);
    copia.setAttribute('aria-hidden', 'true');

    track.appendChild(copia);


}
// Inicializa el mapa Leaflet y lo centra en las coordenadas de ejemplo
var map = L.map('map').setView([20.63917348193299, -87.06469827360385], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([20.63917348193299, -87.06469827360385]).addTo(map);
marker.bindPopup("<b>Hola☕︎</b><br><i>Bienvenido a mirante</i>").openPopup();


// Determina si el sitio está abierto o cerrado según la hora actual
// RN3: horario de atención = lunes a domingo, 8:00 (inclusive) a 21:00
// (exclusive). Se nombran como constantes en vez de dejar 8 y 21 sueltos en
// el if, para que el origen de la regla sea obvio y un cambio futuro de
// horario se edite en un solo lugar.
const HORA_APERTURA_RN3 = 8;
const HORA_CIERRE_RN3 = 21;

var horaActual = new Date();
if (horaActual.getHours() >= HORA_APERTURA_RN3 && horaActual.getHours() < HORA_CIERRE_RN3){

    // Bien: ahora sí agrega la clase 'abierto' además del texto — es lo que
    // hace que .estado tome el color verde de RN1 (definido en style.css).
    // Antes solo cambiaba el texto y el span se quedaba sin color.
    document.querySelector('.estado').classList.toggle('cerrado', false);
    document.querySelector('.estado').classList.add('abierto');
    document.querySelector('.estado').textContent = 'ABIERTO';

}else{

    // Bien: quita 'abierto' antes de agregar 'cerrado'. Esto asegura que el
    // <span> nunca tenga las dos clases (y por lo tanto los dos colores) a
    // la vez — es justo lo que pide RN4: "el mismo elemento, únicamente
    // cambia de color".
    document.querySelector('.estado').classList.toggle('abierto', false);
    document.querySelector('.estado').classList.add('cerrado');

    // Fix: antes decía la oración 'Mirante esta cerrado'; Job 4 (Escenario 2)
    // exige literalmente la palabra "CERRADO", igual que "ABIERTO" arriba.
    document.querySelector('.estado').textContent = 'CERRADO';
}


// Se ejecuta apenas carga el script, disparando la carga de datos
cargarDatos();