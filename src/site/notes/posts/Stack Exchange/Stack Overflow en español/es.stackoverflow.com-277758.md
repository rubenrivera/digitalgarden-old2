---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-277758.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-277758/","title":"Almacenamiento de datos en una variable desde un array con javascript","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:55.559-06:00"}
---

# Almacenamiento de datos en una variable desde un array con javascript

Como se mencionó en un comentario el operador `+=` realiza una suma o una concatenación dependiendo si los objetos valores se pueden interpretar como número o cadena de texto.

Para agregar un elemento un objeto tipo Array debes hacerlo de otra forma

- Array.prototype.push (ejemplo `miArray.push('miValor'`)
- indices ( ejemplo `miArray[1] = 'mi valor'`)

En lugar de `'miValor`' puedes incluir un objeto del tipo `{mipropiead:'miValor'}` para que se muestre en la consola ya que objetos de tipos complejos no se mostrarán como `[object object]`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/277758\|https://es.stackoverflow.com/q/277758]]

