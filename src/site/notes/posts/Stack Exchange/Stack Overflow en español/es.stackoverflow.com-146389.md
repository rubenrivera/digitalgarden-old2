---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-146389.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-146389/","title":"Aplicar un estilo a el unico elemento pulsado","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:53.230-06:00"}
---

# Aplicar un estilo a el unico elemento pulsado

La solución lleva dos partes.

1. Agrega un monitor (event listener) a cada uno de los elementos. Una forma de hacerlo es usando forEach.
2. Usa la función `this` para para modificar las propiedades del elemento sobre el que se ha hecho clic.

Lo anterior se puede hacer con JavaScript puro. A continuación un ejemplo.

Se muestra una tabla de 3 x 3. Al hacer clic en un celda se agregará un texto y color de fondo a la celda cliqueada.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    [].forEach.call(document.getElementsByTagName('td'), function(td) {
      td.addEventListener('click', function() {
        this.innerHTML = '¡Clic!';
        this.style.background = '#4BD19B';
      });
    });

<!-- language: lang-css -->

    td {
      height: 50px;
      width: 100px;
      border: solid;
      background-color: yellow;
    }


<!-- language: lang-html -->

    <table>
      <tr>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
    </table>

<!-- end snippet -->

A continuación un ejemplo usando jQuery

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    $('td').on('click',function() {
        this.innerHTML = '¡Clic!';
        this.style.background = '#4BD19B';
      });


<!-- language: lang-css -->

    td {
      height: 50px;
      width: 100px;
      border: solid;
      background-color: yellow;
    }

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <table>
      <tr>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
    </table>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/146389\|https://es.stackoverflow.com/q/146389]]

