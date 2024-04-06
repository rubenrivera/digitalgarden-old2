---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-146642.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-146642/","title":"Calcular total puntos","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:53.269-06:00"}
---

# Calcular total puntos

El problema está en lo que se conoce el ámbito de la función, más específicamente estás inicializando las variables en la función puntuación por lo que cada vez que la llama se inicializa de nuevo. Una forma de resolver esto es usar variables globales.

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Inicializar

    var puntuacionTotal = 0;
    document.querySelector('input').addEventListener('click',puntuacion);

    // Funciones
    function puntuacion(){
      puntuacionTotal += 1; 
      console.info(puntuacionTotal);
    };

<!-- language: lang-html -->

    <input type="button" value="Suma 1">

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/146642\|https://es.stackoverflow.com/q/146642]]

