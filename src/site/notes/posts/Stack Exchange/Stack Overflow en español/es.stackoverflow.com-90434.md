---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-90434.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-90434/","title":"Dar color con JavaScript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:52.335-06:00"}
---

# Dar color con JavaScript

En [Primeros pasos en la Web][1] se explica el propósito moderno de incluir HTML, CSS y JavaScript cuando se desarrolla una página web.

Si no hay un motivo para hacer dinámica una página web y no se desea usar CSS, entonces, podríamos decir que lo que estás buscando se puede lograr usando "HTML puro".

A continuación se presenta el caso usar el atributo `bgcolor` para dar color a las filas, rojo para el encabezado, verde para las demás, dejando el CSS original intacto.


  



<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-css -->

    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }

<!-- language: lang-html -->

    <table style="width:100%">
      <tr bgcolor="red">
        <th>Firstname</th>
        <th>Lastname</th> 
        <th>Age</th>
      </tr>
      <tr bgcolor="green">
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr bgcolor="green">
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr bgcolor="green">
        <td>John</td>
        <td>Doe</td>
        <td>80</td>
      </tr>
    </table>

<!-- end snippet -->

[1]: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/90434\|https://es.stackoverflow.com/q/90434]]

