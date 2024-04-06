---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-238959.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-238959/","title":"Ayuda con Checkbox y JavaScript","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:54.870-06:00"}
---

# Ayuda con Checkbox y JavaScript

Me parece que tienes elementos form innecesarios que "complicarían" innecesariamente el uso de selectores, así que los quité, agregué una comillas faltantes y repliqué tu función marcar con un ligero ajuste.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function marcar(source) {
      var checkboxes = document.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input
      for (i = 0; i < checkboxes.length; i++) //recoremos todos los controles
      {
        if (checkboxes[i].type == "checkbox") //solo si es un checkbox entramos
        {
          checkboxes[i].checked = source.checked; //si es un checkbox le damos el valor del checkbox que lo llamó (Marcar/Desmarcar Todos)
        }
      }
    }

    function marcarHijos(source) {
      var form2 = document.getElementById("form2");
      var checkboxes = form2.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input
      for (i = 0; i < checkboxes.length; i++) //recoremos todos los controles
      {
        if (checkboxes[i].type == "checkbox") //solo si es un checkbox entramos
        {
          checkboxes[i].checked = source.checked; //si es un checkbox le damos el valor del checkbox que lo llamó (Marcar/Desmarcar Todos)
        }
      }
    }

<!-- language: lang-html -->

    <input type="checkbox" onclick="marcar(this);">Marcar/Desmarcar Todos

    <hr>
    <input type="checkbox" name="check1" value="valor1" onclick="marcarHijos(this);">Padre
    <hr>
    <form id="form2">
      <input type="checkbox" name="check1" value="valor1">Hijo 1<br>
      <input type="checkbox" name="check2" value="valor2">Hijo 2<br>
      <input type="checkbox" name="check3" value="valor3">Hijo 3<br>
      <input type="checkbox" name="check4" value="valor4">Hijo 4<br>
    </form>

    <hr>
    <input type="checkbox" name="check1" value="valor1" onclick="marcar(this);">Padre2
    <hr>
    <form id=form4>
      <input type="checkbox" name="check1" value="valor5">Hijo<br>
      <input type="checkbox" name="check2" value="valor6">Hijo<br>
      <input type="checkbox" name="check3" value="valor7">Hijo<br>
      <input type="checkbox" name="check4" value="valor8">Hijo<br>
    </form>

<!-- end snippet -->

Lo anterior se podría refinar para usar una única función pero para fines de facilitar el seguimiento por parte del OP así lo dejo.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/238959\|https://es.stackoverflow.com/q/238959]]

