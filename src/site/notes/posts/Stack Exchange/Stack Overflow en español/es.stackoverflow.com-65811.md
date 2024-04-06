---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65811.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65811/","title":"Eliminar texto dentro de corchetes en javascript","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.259-06:00"}
---

# Eliminar texto dentro de corchetes en javascript

Una alternativa es el uso de `replace` en conjunto con la expresión regular<sup>1</sup> `/\[.+?]/g` donde:

- `\[`: escapar la corchete de apertura.
- `.` : Cualquier caracter
- `+` : Uno o más caracteres iguales al previo 
- `?` : Tacaño, el menor número de veces
- `g` : Global

> <sup>1</sup> Por expresión regular me estoy refiriendo a un objeto RegEx. Así como los objeto Array al ser declarados usando la forma corta, `[elemento1,elmento2]`, no llevan comillas, tampoco lo llevan los objetos RegEx `/expresionregular/banderas`.

En el siguiente código, se incluyen dos casos, uno similar al indicado por el OP y otro un poco más complejo.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    //Caso simple, una sóla ocurrencia
    var texto1 = "Conservar este texto [eliminar este] pero convervar esto otro";

    //Caso complejo, varias ocurrencias no consecutivas
    var texto2 = "manzana [melón] melocotón [membrillo] mora";

    // Asignar la expresión regular propuesta a una variable
    var re = /\[.+?]/g;

    //Realizar la eliminación mediante reemplazar para los dos casos.
    var salida1 = texto1.replace(re,'');
    var salida2 = texto2.replace(re,'');

    //Agregar el resultado a la página
    document.write('Caso 1: ' + salida1 + '<br/>Caso 2: ' + salida2);

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65811\|https://es.stackoverflow.com/q/65811]]

