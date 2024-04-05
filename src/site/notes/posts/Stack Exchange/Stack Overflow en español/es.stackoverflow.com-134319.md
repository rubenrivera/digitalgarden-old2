---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-134319.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-134319/","title":"Problema con la asignación de una variable","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:52.785-06:00"}
---

# Problema con la asignación de una variable

Bienvenido al maravilloso mundo de JavaScript. En este caso entran en juego los conceptos de objeto, literal, variable y declaración.

`["a","b"]` es un literal de tipo array (en inglés "array literal")

El engine al ejecutar la declaración `var array = ["a","b"];` lo que hace es asignar el literal a una posición de memoria como un objeto y asigna una referencia de memoria a la variable array.

El agregar en la siguiente línea (enunciado / statement) `var backup = array;` lo que hace el engine es asignar la referencia de memoria asignada a array a backup.

En la siguiente línea `array.splice("b",1);` lo que ocurre es que se aplica la función splice al objeto referido por array el cual es el mismo que el objeto referido por backup.

Cuando el literal es conocido lo más sencillo sería escribir dos veces el literal, una vez por cada declaración.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var array = ["a","b"];
    var backup = ["a","b"];
      
    array.splice("b",1);
    console.log(array);
    console.log(backup);

<!-- end snippet -->


Cuando no se trata de literales sino de objetos habría que preguntarnos si nos interesa únicamente el valor o si nos interesan también otras propiedades del objeto que cuando se habla de realizar copias superficiales y profundas, pero esto ya sería de tema de otra pregunta.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/134319\|https://es.stackoverflow.com/q/134319]]

