---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-280524.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-280524/","title":"Más de dos contadores simultáneos","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:55.628-06:00"}
---

# Más de dos contadores simultáneos

Como se mencionó en la [respuesta previa][1] un problema del código, de hecho podríamos decir que es el problema principal, es que el código está sobre escribiendo la variable `x`. Para que funcione el código la segunda declaración no se requiere en este caso en el sentido de asignar el id del proceso que devuelve `setInterval` a una variable pues en el código de la pregunta no se usa.

Otro problema es que estás usando el valor del iterador `index` como el incremento a realizarse en cada intervalo siendo que el valor inicial de este es 0.

Los cambios mínimos a realizar en el código de la pregunta podrían ser

1. Eliminar el segundo `var x =` 
2. Cambiar `+= index` por `+= Math.max(1,index)` 

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var cntr1 = 1;
    var x = [300, 200, 400];
    for (let index = 1; index <= x.length; index++) {
      setInterval(function() {
        document.getElementById("time" + index).innerHTML = x[index] += Math.max(1,index);
      }, 1);
    }

<!-- language: lang-html -->

    <div id="time0"></div>
    <div id="time1"></div>
    <div id="time2"></div>

<!-- end snippet -->

<hr>

Referencias

- https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setInterval

  [1]: https://es.stackoverflow.com/a/280522/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/280524\|https://es.stackoverflow.com/q/280524]]

