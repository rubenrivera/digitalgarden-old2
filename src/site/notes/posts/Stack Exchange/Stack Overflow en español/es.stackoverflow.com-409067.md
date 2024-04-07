---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-409067.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-409067/","title":"Cargar dato de un input a una variable","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:56.857-06:00"}
---

# Cargar dato de un input a una variable

Tu código tiene varios problemas. A continuación te menciono un par de ellos que corresponden al JavaScript:

1. la función `inicio`, debería cerrar su bloque de código antes de la declaración de la función `agregarSerie`


Esta parte es incorrecta. ya que la expresión de la que se habla tiene un `!=` en lugar de un `=`

> ! 2. la expresión que has incluido en el `if` es una asignación cuando debería ser una comparación.
> !
> !    En JavaScript :
> !
> !    - el operador `=` se usa para asignar una valor o un objeto a una variable
> !    - hay dos operadores de comparación de igualdad `==` y `===`

Para ayudar a los lectores de tu código y a tí mismo pon espacios en blanco antes y después de cada operador así como también antes y después de cada `{` y cada `}`

3. sistema no está declarado así que ok devolverá `undefined` el cuál es un `falsy` así que el bloque de `if(ok)` no se va a ejecutar.

Relacionado

- https://es.stackoverflow.com/q/331/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/409067\|https://es.stackoverflow.com/q/409067]]

