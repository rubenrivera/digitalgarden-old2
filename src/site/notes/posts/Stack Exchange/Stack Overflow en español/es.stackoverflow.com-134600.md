---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-134600.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-134600/","title":"Cómo puedo hacer que cada vez que haga click en el numero salga cualquier letra","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:52.826-06:00"}
---

# Cómo puedo hacer que cada vez que haga click en el numero salga cualquier letra

Existen varias formas para que un botón realice una acción al hacer clic en él.

- Incluir el atributo onClick teniendo como valor el código JavaScript a ejecutar. Este código puede ser una llamada a una función o puede ser directamente la instrucción.

  Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-html -->

    <table>
      <tr>
        <td>
          <input type="text" id="txt">
        </td>
        <tr>
          <td>
            <input type="button" value="7" onClick="getElementById('txt').value='S';">
          </td>
        </tr>
    </table>

<!-- end snippet -->

- Usar un "listener". El segundo parámetro debe ser un objeto, el cual puede ser una llamada o una función.

  Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document
      .getElementById('btn')
      .addEventListener('click', function() {
        document.getElementById('txt').value = 'S';
      })

<!-- language: lang-html -->

    <table>
      <tr>
        <td>
          <input type="text" id="txt">
        </td>
        <tr>
          <td>
            <input type="button" id="btn" value="7">
          </td>
        </tr>
    </table>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/134600\|https://es.stackoverflow.com/q/134600]]

