---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-277005.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-277005/","title":"Mostrar mensaje de validacion HTML5 que salga desde un fieldset","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:55.478-06:00"}
---

# Mostrar mensaje de validacion HTML5 que salga desde un fieldset

No es posible mostrar "un mensaje de validación como el input pero en el área de fieldset" entendiendo por mensaje de validación la característica incluida de validación para etiquetas `input` y similares así como para la etiqueta `form` en HTML 5, pero tienes muchas alternativas.

Una alternativa es usar `appendChild` para agregar un nodo con el mensaje correspondiente.

El siguiente ejemplo se agrega el mensaje "Error de validación" al ejecutar. 

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    (function() {
      var e = document.getElementById('miFieldset');
      var miDiv = document.createElement('DIV');
      miDiv.style.color = 'red';
      var mensaje = document.createTextNode('Error de validación');
      miDiv.appendChild(mensaje);
      e.appendChild(miDiv);

    })()

<!-- language: lang-html -->

    <fieldset id="miFieldset">
      Nombres: <input type="text"> <br> Apellidos: <input type="text">
    </fieldset>

<!-- end snippet -->

Para adaptarlo a tu caso tu función que se haga cargo de la validación deberá agregar el elemento cuando se cumplan las condiciones correspondientes.

Referencias

- https://developer.mozilla.org/es/docs/Web/HTML/Elemento/fieldset
- https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input
- https://developer.mozilla.org/es/docs/Web/API/Node/appendChild

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/277005\|https://es.stackoverflow.com/q/277005]]

