---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-87512.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-87512/","title":"Matrices VBA Subindice fuera del intervalo","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:52.132-06:00"}
---

# Matrices VBA Subindice fuera del intervalo

El problema es la variable `Matriz` es una matriz multidimensional, de hecho, bidimensional, y ReDim sólo redimensiona la última de las dimensiones.

Considerando que se trata de una matriz bidimensional, una posible solución es redimensionar una dimension y luego transponer la matriz para redimensionar la otra y luego volver a transponer para volver a la forma original. Esto tiene implicaciones en el desempeño, así que si resultara que se alenta mucho tu programa, deberías repensar acerca de si el uso de una matriz multidimensional es la estructura adecuada para lo que quieres lograr.

Pregunta similar en inglés

[ReDim Preserve to a Multi-Dimensional Array in Visual Basic 6][1]


  [1]: https://stackoverflow.com/q/16369217/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/87512\|https://es.stackoverflow.com/q/87512]]

