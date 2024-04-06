---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136426.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136426/","title":"Acercamiento o alejamiento según el botón pulsado","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:52.974-06:00"}
---

# Acercamiento o alejamiento según el botón pulsado

Por lo que se está preguntando es acerca de cómo diferenciar con cual botón se hizo clic. Para ello nos sirve el evento `mousedown` el cual asigna a la propiedad `which` los valores siguientes:  

1: Si se hace clic con el botón izquierdo.  
2: Si se hace clic con el botón central.  
3: Si se hace clic con el botón derecho.  

A continuación un ejemplo sencillo:

Se muestra un mensaje de alerta específico según se haga clic con el botón izquierdo, central o derecho sobre el texto.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var zona = document.getElementById('zona');
    zona.addEventListener('mousedown',valida);
    function valida(e){
      switch(e.which){
        case 1:
          alert('¡Error! Hiciste click con el botón izquierdo');
          break;
        case 2:
          alert('¡Error! Hiciste click con el botón central');
          break;
        case 3:
          alert('¡Correcto!');
          break;
      }
    }

<!-- language: lang-html -->

    <div id="zona">Haz clic con el botón derecho aquí</div>

<!-- end snippet -->


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136426\|https://es.stackoverflow.com/q/136426]]

