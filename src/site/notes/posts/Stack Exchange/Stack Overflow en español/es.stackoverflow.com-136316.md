---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136316.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136316/","title":"¿Poner etiqueta th sólo al principio o en otras partes de una tabla HTML?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:52.947-06:00"}
---

# ¿Poner etiqueta th sólo al principio o en otras partes de una tabla HTML?

# Respuesta corta
Para agrupar las filas de las secciones de tu tabla usa `<tbody>` y `<th>` para señalar las celdas que son encabezados de sección.

# Explicación

De acuerdo a [HTML 4][1], `<th>` es para especificar una celda de encabezado y `<td>` para especificar una celda de datos, por otro lado, para [agrupar filas][2]  se puede usar ,`<thead>` cuando se trata agrupar filas del encabezado de tabla, `<tfoot>`cuando se trata de agrupar filas del pie de tabla y `<tbody>` para agrupar las filas del cuerpo de la tabla.




  [1]: https://www.w3.org/TR/html4/struct/tables.html#edef-TH
  [2]: https://www.w3.org/TR/html4/struct/tables.html#rowgroups

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136316\|https://es.stackoverflow.com/q/136316]]

