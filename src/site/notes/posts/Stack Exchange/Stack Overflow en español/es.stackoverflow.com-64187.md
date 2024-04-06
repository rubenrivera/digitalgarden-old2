---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-64187.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-64187/","title":"Agregar clases diferentes a un listado de DIV","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:50.009-06:00"}
---

# Agregar clases diferentes a un listado de DIV

En el caso particular de agregar un elemento u otro, se puede hacer un bucle (loop) con una condición de si el iterador cumple con la condición, agregar una clase, en caso contrario agregar la otra. Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    /**
     * Actualiza la sección de noticias, al elemento non se le asigna
     * clase-1 y al elemento par se le asigna clase-2.
     *
     */
    function cargarNoticias(){
      //Inicializar variables
      var noticias = '';
      var limite = 4; // Para efectos del ejemplo seleccionado arbitrariamente.
      var clase = '';
      for (var i = 1; i <= limite; i++){
        // Si el iterador es uno o un múltiplo de 4, asigna una clase, en caso contrario la otra
        clase = (i == 1 || i%4 == 0) ? '"clase-1"' : '"clase-2"';
        //Cadena de noticias en formato HTML
        noticias += 
        '<div class=' + clase + '>\n' +
        '   <h2>Titulo</h2>\n'+
        '   <p>Bajada</p>\n'+
        '</div>'
      }
      //Actualizar la sección noticias
      document.getElementById('noticias').innerHTML = noticias;
    }

<!-- language: lang-css -->

    .clase-1 {
     color:red
     }

<!-- language: lang-html -->

    <input type="button" value="Cargar noticias" onclick="cargarNoticias()" >
    <br/>
    <div id="noticias">Sin noticias<div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/64187\|https://es.stackoverflow.com/q/64187]]

