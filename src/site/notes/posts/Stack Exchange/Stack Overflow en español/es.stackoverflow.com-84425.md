---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-84425.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-84425/","title":"¿Cómo hacer clic a un botón que está en internet desde Excel usando querySelector?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.677-06:00"}
---

# ¿Cómo hacer clic a un botón que está en internet desde Excel usando querySelector?

Si bien una forma de hacer pruebas es variar manualmente los indices, uno como programador no debería estar adivinando el índice requerido. En cualquier caso, en lugar de usar getElementsByTagName usa [querySelector][1] ya que este además de la etiqueta permite especificar atributos y sus valores.

En la reciente edición mencionas que el elemento objetivo es

    <input type="submit" value="Request&nbsp;Price" class="button" onmouseover="checkState()" onclick="event.returnValue=false;(helpState)? getHelp(event,'hlp_601'):event.returnValue=true" style="cursor: help;">

Cambia

    ****pagina2.querySelector("input.button").Click****

por

    pagina2.querySelector("input[type=submit]").Click

Por otro lado en el código falta una sentencia para validar que la página cargada tenga la estructura esperada.


  [1]: https://msdn.microsoft.com/en-us/library/cc288169(v=vs.85).aspx

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/84425\|https://es.stackoverflow.com/q/84425]]

