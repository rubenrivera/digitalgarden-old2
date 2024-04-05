---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-479981.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-479981/","title":"Estoy enviando un mail cuando se cambien dos celdas pero cuando las modifico no se envía","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:57.501-06:00"}
---

# Estoy enviando un mail cuando se cambien dos celdas pero cuando las modifico no se envía

Para que el correo se envíe de forma automática puedes usar los activadores de Google Apps Script. Hay de dos tipos, los simples que disparan una función que tenga uno de los nombres reservados, en este caso sería `onEdit` y los instalables que pueden llamar la función que especifiques, en este caso podrías usar el activador  editar (edit) o al cambiar (change). Los detalles en:

- https://developers.google.com/apps-script/guides/triggers
- https://developers.google.com/apps-script/guides/triggers/installable


P.D.

Al usar el activador simples o instalable editar puedes ahorrarte varias líneas de código y además hacer tu script más eficiente si en lugar de leer uno a uno los datos de la celda activa sacas provecho del objeto evento editar ya que este include la propiedad `range` que tiene asignado el rango que fue editado y esta propiedad además tiene las propiedades `rowStart`, `rowEnd`, `columnStart` y `columnEnd`. Los detalles en:

- https://developers.google.com/apps-script/guides/triggers/events

Relacionado

- https://es.stackoverflow.com/q/505/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/479981\|https://es.stackoverflow.com/q/479981]]

