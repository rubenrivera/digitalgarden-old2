---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-294941.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-294941/","title":"¿Como sustituir en JavaScript caracteres nulos por nada?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:55.990-06:00"}
---

# ¿Como sustituir en JavaScript caracteres nulos por nada?

Para reemplazar todas las ocurrencias de un caracter en una cadena usa una expresión regular y la bandera `g`

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var cadena = "60                                                C"
    console.info(cadena.replace(/ /g,"")); // dentro de la expresión regular se incluye el tercer caracter de la cadena declarada previamente

<!-- end snippet -->

<hr>

Si quieres saber de que caracter se trata puedes usar `String.prototype.charCodeAt(index)`

Ejemplo

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var cadena = "60                                                C"
    console.info(cadena.charCodeAt(2));

<!-- end snippet -->

En este caso el primer caracter después de `60` tiene el código `32`.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/294941\|https://es.stackoverflow.com/q/294941]]

