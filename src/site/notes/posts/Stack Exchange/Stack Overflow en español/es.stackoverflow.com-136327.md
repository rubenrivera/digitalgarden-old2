---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136327.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136327/","title":"Separar una cantidad en millares, centenas, decenas y unidades","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:52.955-06:00"}
---

# Separar una cantidad en millares, centenas, decenas y unidades

> Me aparece el error
>
> >ReferenceError: longitud is not defined

El error señalado se muestra cuando el valor de entrada no es un número cuando debería ser lo contrario. Cambia

    if (!isNaN(cantidad.value)) {

por

    if (isNaN(cantidad.value)) {

Además el código cuenta con otros errores no relacionados con el título de la pregunta, algunos ya mencionados en comentarios como el uso de variables no definidas, tales como `longitud` y `primNum` y otros como la publicación del resultado.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136327\|https://es.stackoverflow.com/q/136327]]

