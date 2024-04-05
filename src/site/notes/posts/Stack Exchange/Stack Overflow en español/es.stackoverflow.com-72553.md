---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-72553.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-72553/","title":"Porqué se usa [0] Javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:50.823-06:00"}
---

# Porqué se usa [0] Javascript

Entre los conceptos básicos de programación está el de colección. 

En JavaScript, a partir de ECMAScript 6,

- Las colecciones pueden ser ordenadas mediantes claves/llaves (en inglés keys) o mediante índices.
- A una colección ordenada mediante índices se le conoce como matriz o arreglo (en inglés array).
- La numeración de índices comienza en 0.
- El colocar los corchetes inmediatamente después de un objeto y entre estos una clave o número sirve para llamar al miembro correspondiente de la colección.

El método `getElementsByTagName(tagname)` devuelve una colección, la cual puede ser una colección vacía, de uno o más miembros.

Considerando lo anterior,

`document.getElementsByTagName('body')` devuelve una colección formada por todos los elementos con la etiqueta `body`, si sólo hay uno, como es el caso del HTML incluído en la pregunta, la colección tendrá un sólo miembro, para llamar a ese miembro se usa el índice `0`, que corresponde al primer miembro de la colección, lo cual se realiza de la siguiente forma:

`document.getElementsByTagName('body')[0]`

Si no quieres usar un método que devuelve una colección, usa `getElementById('id')`,pero para ello deberá agregar un el atributo id al elemento, que en este caso es `body`.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/72553\|https://es.stackoverflow.com/q/72553]]

