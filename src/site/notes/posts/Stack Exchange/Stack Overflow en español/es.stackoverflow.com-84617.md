---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-84617.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-84617/","title":"Permutar dos objetos cambiando el resultado en JavaScript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.742-06:00"}
---

# Permutar dos objetos cambiando el resultado en JavaScript

1. En JavaScript las variables hacen referencia a objetos
2. Si deseamos cambiar el objeto al cual hacer referencia una variable, debemos usar el nombre de esa variable en la asignación del objeto.

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var objeto_1 = {
      d: 2,
      e: 3
    }
    var objeto_2 = {
      f: 4
    }

    // Cambia el orden de los objetos y los devuelve como una arreglo (array)
    function permutar(a, b) {
      var permuta = [b, a];
      // Para asignar un objeto a una variable debemos usar el nombre de la 
      // variable en cuestión
      objeto_1 = permuta[0];
      objeto_2 = permuta[1];
      return permuta;
    }

    console.log(JSON.stringify([objeto_1, objeto_2]));
    var permuta = permutar(objeto_1, objeto_2);
    console.log(JSON.stringify(permuta));


    console.log(JSON.stringify([objeto_1, objeto_2]));

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/84617\|https://es.stackoverflow.com/q/84617]]

