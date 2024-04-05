---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-51244.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-51244/","title":"¿Es posble crear un array dinámico o automático en javascript?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:49.160-06:00"}
---

# ¿Es posble crear un array dinámico o automático en javascript?

# Respuesta corta
Usa matrices anidadas e índices

# Explicación

Los elementos de una [matriz][1] (array) puede ser llamados usando un índice. Por ejemplo,

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->
    /* Matriz unidimensional */
    var reino = ["animal","vegetal"];
    /* Imprime elementos */
    for (var i = 0; i < reino.length; i++) console.log(reino[i]);

<!-- end snippet -->

Además, los elementos de una matriz pueden ser otras matrices y estas, pueden llamadas usando índices de igual forma que se hizo en el ejemplo anterior. Para llamar a un elemento del "cruce" de una "columna" y un "renglón", usar sus "coordenadas" o "indices ortogonales" o de forma similar al ejemplo anterior:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->
    /* Matriz unidimensional */
    var reino = ["animal","vegetal"];

    /* Matriz bidimensional
     * Al primer nivel le llamaremos renglón, al segundo columna */
    var especie = [["perro"],["árbol"\|"perro"],["árbol"]]; 
    for (var i = 0; i < reino.length; i++){
      // Imprime encabezados
      console.log(" --- " + reino[i] + " --- ");
      // Imprime valores de las celdas de la matriz bidimensional
      for (var j = 0; j < especie[i].length; j++){
        console.log(especie[i][j]);
      }
    }


<!-- end snippet -->


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/51244\|https://es.stackoverflow.com/q/51244]]

