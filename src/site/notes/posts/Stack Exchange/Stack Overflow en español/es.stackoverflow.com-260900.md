---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-260900.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-260900/","title":"Cambiar caracter específico en un array en JavasScript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:55.316-06:00"}
---

# Cambiar caracter específico en un array en JavasScript

Esta es similar a [la respuesta de Pablo][1] con las siguientes diferencias

- Se usa `forEach` en lugar de `map`.
- Se hace uso de una función anónima en lugar de una función flecha como *callback*
- Se usan vectores (arrays) e índices (nombre[i])
- Se usar `item` en lugar de `e` porque si bien para un programador con ciertas experiencia es claro que `e` se es una variable a la que se asigna un elemento del vector en cada iteración, para alguien que empieza podría resultar confuso además de que es un buena práctica usar nombres descriptivos (asumo que *item* es entendido por todos como un miembro de una lista, pero si no fuera así, se puede reemplazar por *elemento*, *miembro* o algún otro término siembre y cuando este no sea una palabra reservada de JavaScript o las APIs usadas por la plataforma en la que se ejecute el código.


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    const nombres = ['Cristian', 'Jorge', 'Pablo', 'Saulo'];
    nombres.forEach(function(item,i){
      return nombres[i] = item.replace(/i/g,'1').replace(/o/g,'0');
    });
    console.log(nombres);


<!-- end snippet -->

Sobre el código en la pregunta, se están usando for anidados y dos índices `nombres[i][j]` pero esto no tiene sentido porque el vector (Array) sólo tiene una dimensión, bastaría con un único for y `nombres[i]`.

  [1]: https://es.stackoverflow.com/a/260594/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/260900\|https://es.stackoverflow.com/q/260900]]

