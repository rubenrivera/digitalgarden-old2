---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-71523.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-71523/","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:50.641-06:00"}
---

---
title: iterables predefinidos: implicaciones con la propiedad length y el operador de acceso []
Site: Stack Overflow en español
Stack Exchange Post ID: 71523
Stack Exchange Type: Answer
Stack Exchange Post Created: 19/05/17 22:08
Stack Exchange Post Last Edit: 
Stack Exchange Edited By: 
Score: 1
Favorites: 
Views: 54
Accepted: 
CW: 
Closed: 
---
# iterables predefinidos: implicaciones con la propiedad length y el operador de acceso []

Considerando `length` es una propiedad de `Object`, `[]` se puede usar en todos los objetos indexables, así que en cuando a excepciones de sobre la posibilidad de usar `length` y `[]` en objetos indexables, no las hay.

Varios de los objetos de los incluídos son objetos globales pero otros no, y algunos son objetos indexados de ECMAScript 6 y otros no. Puedes consultar la lista de objetos globales en varios sitios sobre JavaScript, por ejemplo la página [Objetos Globales][1] de Mozilla Developer Network, o bien directamente en la especificación [ECMAScript 6][2].

Sobre los objetos citados en la pregunta

- Array es un objeto global del tipo colección indexada.
- String es un objeto global del tipo procesamiento de texto.
- TypedArray no es un objeto global pero sí es un objeto del tipo colección indexada
- Set y Map son objetos globales del tipo colección con llave
- HTMLCollection no forma parte de ECMASCript 6, se trata de una API.

Otros objetos globales indexables son WeakMap y WeakSet.


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales
  [2]: https://www.ecma-international.org/ecma-262/6.0/

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/71523\|https://es.stackoverflow.com/q/71523]]

