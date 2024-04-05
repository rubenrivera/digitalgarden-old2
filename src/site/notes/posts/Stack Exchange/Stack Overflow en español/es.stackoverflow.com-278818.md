---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-278818.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-278818/","title":"¿Es posble crear un array dinámico o automático en javascript?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:55.578-06:00"}
---

# ¿Es posble crear un array dinámico o automático en javascript?

Luego de leer un comentario del AP ahora entiendo que lo que está buscando es crear variables de forma dinámica, es decir, que sea el propio código el que asigne el nombre a la variables. Esto se puede hacer manipulando el objeto global

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Creamos las variables de forma dinámica asignando una Array vacío.
    for(let i = 0; i < 3; i++){
      this['miArray' + i] = [];
    }

    // A cada Array le agregamos un elemento
    miArray0.push('Uno');
    miArray1.push('Dos');
    miArray2.push('Tres');

    // Imprimimos en la consola cada una de las variables creadas y modificadas previamente
    for(let i = 0; i < 3; i++){
      console.info(this['miArray' + i]);
    }

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/278818\|https://es.stackoverflow.com/q/278818]]

