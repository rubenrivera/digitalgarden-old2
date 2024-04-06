---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-4335.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-4335/","title":"¿Qué hacer con las preguntas que confunden objeto de JavaScript con JSON?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.631-06:00","updated":"2024-04-05T16:44:04.251-06:00"}
---

# ¿Qué hacer con las preguntas que confunden objeto de JavaScript con JSON?

En la pregunta https://es.meta.stackoverflow.com/q/4331 el AP menciona:

> Además no ayuda que la gente confunda JSON con "objetos javascript".

Entiendo que esto se refiere a que es común encontrar preguntas como https://es.stackoverflow.com/q/287738 en la que tanto en el título como en el cuerpo de la pregunta y en las etiquetas, se incluye JSON cuando en realidad está refiriéndose a un objeto de JavaScript.

Para los que no están familiarizados, JSON son las siglas de "JavaScript Object Notation" (notación de objetos JavaScript) el cual es __un formato de texto__ (un tipo de cadena de texto / String) para el intercambio de datos. Por otro lado un objeto de JavaScript es una __colección de propiedades__ donde una propiedad es la relación entre un nombre (también llamado clave) y un valor el cual a su vez puede ser un objeto.

Para clarificar, un objeto JavaScript vacío (por brevedad) se declara de la siguiente forma:

<!-- language: lang-js -->

    var miObjeto = {};

Si en Stack Snippet usamos `document.write(miObjeto)` en el panel de salida tendremos `[object Object]`.

Para obtener la representación JSON del objeto anterior se puede usar:

<!-- language: lang-js -->

    JSON.stringify(miObjeto)

Si usamos `document.write(JSON.stringify(miObjeto))` tendremos `{}`.

En el caso particular de la pregunta citada arriba, esta ya cuenta con una respuesta aceptada, la cual no hace uso de JSON. Entonces, pensando en los lectores futuros ¿Qué se debería hacer?

Se me ocurren las siguientes:

 - Editar la pregunta y reemplazar JSON por objeto.

 - Agregar una nueva respuesta en la que expliquemos que se está confundiendo un objeto de JavaScript con "un JSON".  
    <sup>Nota: La pregunta referida como ejemplo ya cuenta con una segunda respuesta en la que menciona de forma muy breve que la pregunta trata sobre un objeto, no de un JSON.</sup>

 - Votar para cerrar la pregunta por "No está claro lo que se pregunta".

 - No hacer nada.

Referencias:

 - [JSON][1]
 - [Trabajando con objetos][2]

Demostraciones:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var miObjeto = {};
    document.write(miObjeto);

<!-- end snippet -->


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var miObjeto = {};
    document.write(JSON.stringify(miObjeto));

<!-- end snippet -->

  [1]: https://es.wikipedia.org/wiki/JSON
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos


# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/4335\|https://es.meta.stackoverflow.com/q/4335]]

