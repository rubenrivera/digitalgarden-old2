---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-152306.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-152306/","title":"¿Por qué un parámetro se comporta como función?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:53.516-06:00"}
---

# ¿Por qué un parámetro se comporta como función?

En tu primer ejemplo estas agregando funciones como miembros de tu array, pero en los otros ejemplos los miembros de los arrays son literales.

Cuando asignas un primitivo u objeto a  una variable, si llamas esta variable sin paréntesis te devolverá el objeto al que hace referencia la variable, pero si llamas a la variable con paréntesis, primero se revisa que el primitivo u objeto llamado sea una función, si no es una función, lo cual es lo que pasa en el segundo ejemplo, te devuelve error, pero si es una función, te devolve el resultado de la ejecución de la función llamada.

Tal vez resulte mas sencillo verlo en el siguiente ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var funcion = function(){return prompt('¿Cómo te llamas?')};

    console.info(funcion) // Imprimirá en la consola la función
    console.info(funcion()); // Imprimirá en la consola el valor capturado por el usuario

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/152306\|https://es.stackoverflow.com/q/152306]]

