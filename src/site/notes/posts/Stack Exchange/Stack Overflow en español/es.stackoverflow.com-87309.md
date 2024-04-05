---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-87309.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-87309/","title":"Generar número autoincrementable falso","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:52.090-06:00"}
---

# Generar número autoincrementable falso

# Repuesta corta

Usa el [operador de incremento][1] `++` y [setTimeout][2] para hacer el incremento de forma automática.
  
# Código

A continuación un ejemplo de un "autoincrementador" que agrega uno cada medio segundo. Para simular que carga la página, se debe hacer click en ejecutar.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function contar() {
        document.getElementById('txt').innerHTML = cuenta++;
        setTimeout(contar, 500);
    }

    var cuenta = 0;
    contar();

<!-- language: lang-html -->

    <div id="txt"></div>

<!-- end snippet -->

En una página web, agrega la etiqueta div en la etiqueta body y el código JavaScript al final.

Te quedaría algo como lo que sigue:

    <html>
      <body>
        <div id="txt"></div>
        <script>
          function contar() {
            document.getElementById('txt').innerHTML = cuenta++;
            setTimeout(contar, 500);
          }
    
          var cuenta = 0;
          contar();
        </script>
      </body>
    </html>

# Explicación

1. Al cargarse la página
   1. Se asigna a `cuenta` el valor de 0.
   2. Se llama la función contar.
3. La función contar, 
   1. Asigna el valor de cuenta a un elemento de la página y le suma uno.
   2. Espera medio segundo y llama a la función contar.


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Aritm%C3%A9ticos#.2B.2B_.28incremento.29
  [2]: https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setTimeout

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/87309\|https://es.stackoverflow.com/q/87309]]

