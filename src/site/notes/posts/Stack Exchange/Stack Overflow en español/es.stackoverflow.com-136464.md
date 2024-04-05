---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136464.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136464/","title":"Como saber que tecla fue presionada","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:52.975-06:00"}
---

# Como saber que tecla fue presionada

# Respuesta corta

1. En lugar de usar la propiead global `event` declárala como argumento de tu función.

2. En lugar de `keyCode` usa `key` para las teclas de caracteres, `shiftKey`, `ctrlKey`, `altKey` y `metaKey`para las teclas mayúsculas, control, alt y Windows / Commmand (Mac) respectivamente.

# Explicación

En Firefox para Windows el código de la pregunta no funciona, devuelve 

> "ReferenceError: event is not defined"

Esto ocurre porque en Internet Explorer y Chrome `event` es una propiedad global pero no ocurre así en Firefox.

Por otro lado, de acuerdo a https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent tanto `keyCode` como `which` son propiedades obsoletas y en su lugar se recomienda el uso de `key`. Las propiedades `shiftKey`, `ctrlKey`, `altKey` y `metaKey` devolverán `true` si la tecla correspondiente ha sido oprimida.

Aparte de que sean obsoletas no todos los navegadores son compatibles con dichas propiedades.

Una alternativa adicional es el uso de una librería como jQuery la cual pretende hacerse cargo de manejar las variantes de los distintos navegadores.

## Ejemplo usando JavaScript "puro"

En el siguiente ejemplo se agrega el registro de las teclas presionadas al elemento `<input>` y se imprime el resultado a un elemento `<div>`.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var entrada = document.getElementById('entrada');
    entrada.addEventListener('keypress',anexar);
    var borrar = document.getElementById('borrar');
    borrar.addEventListener('click',limpiar);
    var salida = document.getElementById('salida');

    function anexar(e){
      salida.innerHTML += e.key + '<br />';
    }

    function limpiar(e){
      entrada.value = '';
      salida.innerHTML = '';
    }

<!-- language: lang-html -->

    <input id="entrada"> <input type="button" id="borrar" value="Borrar">
    <div id="salida"></div>

<!-- end snippet -->

Lo de poner "puro" es porque el objeto KeyboardEvent no es un objeto de la especificación del lenguaje JavaScript sino que es parte de las Web APIs.

# Ejemplo usando jQuery

Una de las finalidades de jQuery es dar soporte a múltiples navegadores de forma estandarizada. A continuación se muestra un ejemplo en el que se aplican las reomendaciones mencionadas en la sección respuesta corta, la declaración de la variable a la que se asignará el objeto evento y el uso de la propiedad `key`.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    $('#entrada').bind('keypress', function(e) {
      $('#salida').append(e.key + '<br />');
    });
    $('#borrar').bind('click',function(){
      $('#entrada').val('');
      $('#salida').text('');
    });

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <input id="entrada"> <input type="button" id="borrar" value="Borrar">
    <div id="salida"></div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136464\|https://es.stackoverflow.com/q/136464]]

