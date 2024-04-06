---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-280016.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-280016/","title":"¿Cómo puedo hacer que mi tabla tenga un estilo permanente y no cambie?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:55.616-06:00"}
---

# ¿Cómo puedo hacer que mi tabla tenga un estilo permanente y no cambie?

Me parece que la propiedades clave a usar son [overflow](https://developer.mozilla.org/es/docs/Web/CSS/overflow), por ejemplo con el valor `hidden` y las correspondientes al tamaño máximo de las celdas, por ejemplo para el ancho máximo sería [max-width](https://developer.mozilla.org/es/docs/Web/CSS/max-width).

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-css -->

    table,
    td,
    th {
      border-collapse: collapse;
      overflow: hidden;
    }

    td,
    th {
      border: 1px solid black;
      max-width: 10px;
    }

<!-- language: lang-html -->

    <table>
      <tr>
        <th>Frutas</th>
        <th>Animales</th>
      </tr>
      <tr>
        <td>Naranja</td>
        <td>Perro</td>
      </tr>
    </table>

<!-- end snippet -->





# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/280016\|https://es.stackoverflow.com/q/280016]]

