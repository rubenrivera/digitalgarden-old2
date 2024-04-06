---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-279785.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-279785/","title":"Iterar arreglo de objetos para obtener todos los valores","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:55.608-06:00"}
---

# Iterar arreglo de objetos para obtener todos los valores


Una opción más


<!-- begin snippet: js hide: false console: true babel: null -->

<!-- language: lang-js -->

    var obj = [{
      "level1": {
        first: "John",
        last: "Doe"
      }
    }, {
      "level2": {
        first: "juan",
        last: "perez"
      }
    }]

    // Primero iteramos en el arreglo obj
    obj.forEach(function(item) {
      // Luego iteramos las llaves de cada elemento del arreglo
      Object.keys(item).forEach(function(key){
        /* 
         * Registramos en la consola la llave y los valores de las propiedades first y
         * last de cada elemento del arreglo
         */
         console.log(key, item[key].first, item[key].last);
      });
    });

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/279785\|https://es.stackoverflow.com/q/279785]]

