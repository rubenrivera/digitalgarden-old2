---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-51849.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-51849/","title":"Cómo reemplazar con str_replace() si tengo un array con valores contenidos en otros","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:49.248-06:00"}
---

# Cómo reemplazar con str_replace() si tengo un array con valores contenidos en otros

>Solución agregada por el OP en la [revisión 4][1], la cual posteriormente fue mejorada.

Ya lo solucioné...

Lo que hice fue lo siguiente:

 1. Recorrí el array a la inversa con el método mencionado previamente
 2. Reemplace los enlaces con una secuencia unica
 3. Reemplace la secuencia con el texto original y el enlace

Lo que pasaba es que el código consideraba que Genesis 1:3 y Genesis 1:30 eran lo mismo, y se cortaba al llegar a 3, con una secuencia única se pueden diferenciar los versículos.

No sé si me explique bien, pero así fue como lo solucioné


  [1]: https://es.stackoverflow.com/revisions/50262/4

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/51849\|https://es.stackoverflow.com/q/51849]]

