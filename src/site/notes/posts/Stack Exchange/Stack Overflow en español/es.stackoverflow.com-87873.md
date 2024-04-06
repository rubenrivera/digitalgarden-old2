---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-87873.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-87873/","title":"¿Como puedo mover arrays que están dentro de un array?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:52.197-06:00"}
---

# ¿Como puedo mover arrays que están dentro de un array?

En primer lugar, no está bien declarado el arreglo.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    arr = [1,2],[3,4],[5,6];
    console.info(arr);

<!-- end snippet -->

Obsérvese que la hacer clic en ejecutar sólo se muestra el primer elemento. Los siguientes han quedado como literales sin ser asignados a una una variable.

Debería declararse de la siguiente forma

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    arr = [[1,2],[3,4],[5,6\|1,2],[3,4],[5,6]];
    console.info(arr);

<!-- end snippet -->

Para cambiar el orden, usar la función reverse.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    arr = [[1,2],[3,4],[5,6\|1,2],[3,4],[5,6]];
    console.info(arr.reverse());

<!-- end snippet -->

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/87873\|https://es.stackoverflow.com/q/87873]]

