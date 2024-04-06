---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49109.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49109/","title":"Cómo determinar si una variable es 'undefined' o 'null' en JavaScript","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:49.100-06:00"}
---

# Cómo determinar si una variable es 'undefined' o 'null' en JavaScript

Deseo determinar si una variable no está definida o si tiene el valor nulo.


En el siguiente ejemplo, quiero que se ejecute la clásula correspondiente a la condición verdadera, es decir se imprima en la consola el mensaje "EmpName no está definido", sin embargo, se ejecuta la cláusula en "de otro modo" (else) ya que se imprime "EmpName está definido"

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var EmpName = $("div#esd-names div#name").attr('class');
    if(EmpName == 'undefined'){
      console.log("EmpName no está definido");
    } else {
      console.log("EmpName está definido");
    }

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <div id="esd-names">
      <div id="name"></div>
    </div>

<!-- end snippet -->

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var miVariable; //miVariable está definida pero tiene valor nulo.
    console.log(miVariable)

<!-- end snippet -->

¿Cuál es la forma correcta?

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49109\|https://es.stackoverflow.com/q/49109]]

