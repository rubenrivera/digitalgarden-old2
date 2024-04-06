---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-144540.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-144540/","title":"¿Cómo hacer un contador binario?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:53.131-06:00"}
---

# ¿Cómo hacer un contador binario?

Podría ser que el origen de la pregunta esté en llamarle "contador" cuando lo que se requiere es lo que en inglés se conoce como "toggle button" que en español se podría traducir como botón de activación.

A continuación un ejemplo.

Al hacer clic en el botón se cambia el color del div de aguamarina a gris oscuro y viceversa. Para esto se utiliza el [operador condicional (ternario)][1] cuya sintaxis es

    condición ? expr1 : expr2 

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document.getElementById('boton').addEventListener('click', activar);

    function activar() {
      var elDiv = document.getElementById('elDiv');
      
      // Se utiliza un operador ternario para asignar un valor o el otro
      (elDiv.className=='cero')?elDiv.className='uno':elDiv.className='cero';
 
    }

<!-- language: lang-css -->

    .cero, .uno {
      width: 50px;
      height: 50px;
    }

    .cero {
      background-color: darkgrey;
    }

    .uno {
      background-color: aquamarine;
    }

<!-- language: lang-html -->

    <input id="boton" type="button" value="Cambiar color">
    <div id="elDiv" class="cero"></div>

<!-- end snippet -->


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/144540\|https://es.stackoverflow.com/q/144540]]

