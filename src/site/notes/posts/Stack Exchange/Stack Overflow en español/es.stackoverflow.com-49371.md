---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49371.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49371/","title":"¿Cómo dar formato a una fecha en JavaScript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:49.146-06:00"}
---

# ¿Cómo dar formato a una fecha en JavaScript?

Usa `toLocaleDateString` con `es` como local y `replace` con expresiones regulares para hacer los ajustes finos ya que usando sólo `toLocaleDateString` el resultado sería `14 feb. 2017`

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var opciones = { year: 'numeric', month: 'short', day: 'numeric' };
    var fecha = new Date()
      .toLocaleDateString('es',opciones)
      .replace(/ /g,'-')
      .replace('.','')
      .replace(/-([a-z])/, function (x) {return '-' + x[1].toUpperCase()});
    console.log(fecha);

<!-- end snippet -->

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49371\|https://es.stackoverflow.com/q/49371]]

