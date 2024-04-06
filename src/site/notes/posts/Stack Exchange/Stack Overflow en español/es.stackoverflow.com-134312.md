---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-134312.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-134312/","title":"Valor de boton dentro de tabla","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:52.756-06:00"}
---

# Valor de boton dentro de tabla

Si por valor te refieres al texto de un elemento del DOM, una opción es usar [textContent](https://developer.mozilla.org/es/docs/Web/API/Node/textContent). Ejemplo:

Se incluye una pequeña tabla con dos filas. La segunda fila cuenta con dos celdas, la segunda celda tiene como texto `5`. Se imprime al log de la consola el texto de la segunda celda de la segunda fila.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var celda = document.getElementById('miTabla').rows[1].cells[1];
    console.log(celda.textContent)

<!-- language: lang-html -->

    <table id="miTabla">
      <tr></tr>
      <tr>
        <td></td>
        <td>5</td> 
      </tr>
    </table>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/134312\|https://es.stackoverflow.com/q/134312]]

