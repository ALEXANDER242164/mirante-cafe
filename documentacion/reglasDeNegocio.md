# Reglas de negocio — Mirante Café

Reglas que definen el comportamiento del producto, independientes de cómo se implementen.
Los criterios de aceptación en [requerimientos.md](requerimientos.md) las referencian por su ID.

|ID|Regla|
|---|---|
|RN1|Si el establecimiento está **abierto**, el color usado para representarlo es `#2ecc71`.|
|RN2|Si el establecimiento está **cerrado**, el color usado para representarlo es `#FF3333`.|
|RN3|El horario de atención del establecimiento es de **lunes a domingo, de 8:00 (inclusive) a 19:00 (exclusive)**.|
|RN4|El elemento visual que representa el estado abierto/cerrado es **el mismo elemento**; únicamente cambia de color según RN1 y RN2.|
|RN5|Las imágenes deben ser **fotografías reales del establecimiento**, proporcionadas por el local. No se permiten imágenes de banco (stock).|
|RN6|Las imágenes deben corresponder a **productos que el local ofrece actualmente**. Si un producto deja de venderse, su imagen se retira del sitio.|
|RN7|La página principal muestra **exactamente 7** imágenes de productos.|
|RN8|El nombre del lugar es **"Mirante Café"**.|
|RN9|La página principal muestra la frase de concepto: **"Un rincón para un rato de calma"**.|
|RN10|El nombre del lugar y la frase de concepto son **visibles al cargar la página**, sin necesidad de hacer scroll.|
|RN11|La ubicación del establecimiento se muestra mediante un **mapa embebido** de un servicio externo (ej. Google Maps).|
|RN12|El cuadro de horario/estado (ver Job 4) se muestra **al mismo nivel** (misma sección/fila) que el mapa de ubicación (RN11).|
|RN13|La sección de comentarios de clientes se ubica **cerca del pie de página** (footer).|
|RN14|Los comentarios se muestran en un **carrusel continuo e infinito**: al llegar al final, reinicia el ciclo sin detenerse.|

## Notas

- **RN3** define el único origen de verdad del horario. Cualquier cambio de horario se hace aquí primero.
- **RN3** usa límites explícitos (inclusive/exclusive) para evitar ambigüedad al comparar la hora actual:
  a las 8:00 en punto ya está abierto; a las 19:00 en punto ya está cerrado.
- **RN14**: el mecanismo técnico para lograr el loop infinito (cómo se implementa) todavía no está decidido. Queda pendiente de diseño antes de implementarse.
- **Pendiente:** el lugar exacto de las imágenes de productos (Job 3) dentro del orden general definido en Job 1 todavía no está decidido.
