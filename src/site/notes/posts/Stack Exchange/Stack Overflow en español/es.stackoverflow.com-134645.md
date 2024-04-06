---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-134645.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-134645/","title":"¿Cómo puedo enviar un array completo como parámetro de una función?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:52.830-06:00"}
---

# ¿Cómo puedo enviar un array completo como parámetro de una función?

Al tener dentro de un for

    ciudadArr = response[i]['Ciudad'];

en cada iteración modifica el valor de ciudadArr 

Dado que inicializas la variable con un array vacío, una de las cosas que debes hacer es remplazar la línea en cuestión por

    ciudadArr.push(response[i]['Ciudad']);


Otro punto que podría ser problemático en tu código es 

    '<tr onclick="setCity(ciudadArr[i])">'

Pero el código no está completo como para saber si `ciudadArr` e `i` son variables globales.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/134645\|https://es.stackoverflow.com/q/134645]]

