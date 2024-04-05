---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-366770.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-366770/","title":"¿Como obtener un dato de un formulario, otorgando dos parámetros en google spreadsheet con HTML y google script?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:56.698-06:00"}
---

# ¿Como obtener un dato de un formulario, otorgando dos parámetros en google spreadsheet con HTML y google script?

Para tomar el email debes hacer los mismo que haces con el CURP

    document.getElementById("CURP").value

sólo cambia el "CURP" por el Id correspondiente.

Luego en 

    google.script.run.withSuccessHadler(updateCURP).getcurpstatus(statusinfo);

envía los dos parámetros, por ejemplo (estoy cambiando los nombres de las variables)_

    google.script.run.withSuccessHadler(updateCURP).getcurpstatus(curp, email);

lo anterior implica que modifiques la función `getcurpstatus` para recibir los dos parámetros.

Luego para encontrar el registro que coincida con esos dos valores puedes usar [Array.prototype.filter][1]

Relacionado

- https://es.stackoverflow.com/q/238667/65
- https://es.stackoverflow.com/q/300364/65

  [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/366770\|https://es.stackoverflow.com/q/366770]]

