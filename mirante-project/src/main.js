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

// Se ejecuta apenas carga el script, disparando la carga de datos
cargarDatos();