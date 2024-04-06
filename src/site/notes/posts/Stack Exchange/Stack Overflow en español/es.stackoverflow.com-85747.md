---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-85747.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-85747/","title":"Retornar Array en mayusculas","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.766-06:00"}
---

# Retornar Array en mayusculas

El código en la pregunta tiene varios problemas.

Por un lado se asigna un valor a d, pero luego inmediatamente después se asigna otro valor. El segundo valor asignado a d es un cadena de longitud uno, y join devuelve error porque es un método de `Array`, no de `String`

Otro problema es que se utiliza la palabra `string` siendo que no es recomendable usar palabras clave ni como valores de variable ni como nombres de variable porque esto conduce a confusiones.

En el siguiente ejemplo, para evitar confusiones en lugar de `string` como valor se está usando `montaña`.

Nótese que se utilizan sólo dos variables, `a` y `b`.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var a = "montaña";
    var b = a.split('');
    b[2] = b[2].toUpperCase();
    console.log(b.join(''));

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/85747\|https://es.stackoverflow.com/q/85747]]

