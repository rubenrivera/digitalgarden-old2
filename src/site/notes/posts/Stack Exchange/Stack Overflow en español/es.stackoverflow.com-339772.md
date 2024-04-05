---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-339772.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-339772/","title":"Creo que no me está tomando correctamente el valor del array en google apps script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.541-06:00"}
---

# Creo que no me está tomando correctamente el valor del array en google apps script

El problema es que has puesto menor o igual que en la condición del bucle for (`i <= dataContenidos.length`). Esto es debido a que como los indices de los miembros de un Array son base cero el último indice es el tamaño del Array menos uno.

Cambia

    for (var i = 0; i <= dataContenidos.length; i++) {


por

    for (var i = 0; i < dataContenidos.length; i++) {



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/339772\|https://es.stackoverflow.com/q/339772]]

