---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-85885.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-85885/","title":"¿Por que una función para recorrer un array ejecuta una accion para una palabra parecida a la buscada en JavaScript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:51.796-06:00"}
---

# ¿Por que una función para recorrer un array ejecuta una accion para una palabra parecida a la buscada en JavaScript?

Me parece que una forma más simple, y que te quitaría el problema es usar expresiones regulares para extraer la dirección del texto obtenido mediante el input.

Ejemplo:

Se usa usa la expresión regular `/norte|sur|este|oeste/` para declarar las direcciones válidas, luego se usa `match` para verificar si la cadena incluye una de esas palabras, en caso de que así sea, devuelve una matriz incluyendo la palabra, en caso contrario devuelve `null`.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    re = /norte|sur|este|oeste/;

    /*Caso de prueba 1 */

    str1 = "quiero ir al oeste";
    test1 = str1.match(re);
    output = Array.isArray(test1)?test1[0]:"Sin dirección";
    console.log(output);

    /*Caso de prueba 2 */

    str2 = "no quiero ir";
    test2 = str2.match(re);
    output = Array.isArray(test2)?test2[0]:"Sin dirección";
    console.log(output);
<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/85885\|https://es.stackoverflow.com/q/85885]]

