---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-238966.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-238966/","title":"Cómo seleccionar sólo los checkboxes que pertenecen a un grupo","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:54.875-06:00"}
---

# Cómo seleccionar sólo los checkboxes que pertenecen a un grupo

El "problema" con la función `marcarHijos` es que en el HTML no hay ningún elemento con `id="form2"`. Una forma "rápida y sucia" de arreglarlo es agregar esto a la primera etiqueta `details` y algo similar a la segunda. También de forma "rápida y sucia" para que funcione el checkbox del segundo grupo es replicar la función marcarHijos y ajustarla para dicho grupo.


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function marcar(source) {
      var checkboxes = document.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input
      for (i = 0; i < checkboxes.length; i++) //recorremos todos los controles
      {
        if (checkboxes[i].type == "checkbox") //solo si es un checkbox entramos
        {
          checkboxes[i].checked = source.checked; //si es un checkbox le damos el valor del checkbox que lo llamó (Marcar/Desmarcar Todos)
        }
      }
    }

    function marcarHijos1(source) {
      var form2 = document.getElementById("form2");
      var checkboxes = form2.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input
      for (i = 0; i < checkboxes.length; i++) //recorremos todos los controles
      {
        if (checkboxes[i].type == "checkbox") //solo si es un checkbox entramos
        {
          checkboxes[i].checked = source.checked; //si es un checkbox le damos el valor del checkbox que lo llamó (Marcar/Desmarcar Todos)
        }
      }
    }

    function marcarHijos2(source) {
      var form2 = document.getElementById("form3");
      var checkboxes = form2.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input
      for (i = 0; i < checkboxes.length; i++) //recorremos todos los controles
      {
        if (checkboxes[i].type == "checkbox") //solo si es un checkbox entramos
        {
          checkboxes[i].checked = source.checked; //si es un checkbox le damos el valor del checkbox que lo llamó (Marcar/Desmarcar Todos)
        }
      }
    }

<!-- language: lang-html -->

    <details>
      <summary>
        Grupo 1.
      </summary>
      <details  id="form2">
        <summary><input type="checkbox" onclick="marcarHijos1(this);">Grupo 1.1</summary>
        <input type="checkbox" name="check1">Primera Información.
        <input type="checkbox" name="check1">Segunda Información.
        <input type="checkbox" name="check1">Tercera Información.
      </details>
      <summary>
        Grupo 2.
      </summary>
      <details  id="form3">
        <summary><input type="checkbox" onclick="marcarHijos2(this);">Grupo 2.1</summary>
        <input type="checkbox" name="check1">Primera Información.
        <input type="checkbox" name="check1">Segunda Información.
        <input type="checkbox" name="check1">Tercera Información.
      </details>
    </details>

<!-- end snippet -->

Es recomendable que estudies el [Modelo de Objeto de Documento](https://developer.mozilla.org/es/docs/DOM) (Document Object Model / DOM), los id y otras propiedades de etiquetas y el uso de métodos como `getElementById` y similares.

Nota: marcarHijos viene de [mi respuesta](https://es.stackoverflow.com/a/238959/65) a https://es.stackoverflow.com/q/238949/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/238966\|https://es.stackoverflow.com/q/238966]]

