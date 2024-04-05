---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-171221.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-171221/","title":"Formulario HTML para buscar y editar datos en Google Sheets","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:54.074-06:00"}
---

# Formulario HTML para buscar y editar datos en Google Sheets

Si no lo has hecho aún es conveniente que revises las guías en la documentación oficial. Aunque están en inglés, tienen varios ejemplos de código que te pueden servir. En este caso en particular revisa

https://developers.google.com/apps-script/guides/html/communication#forms

Del código de index.html cabe destacar

    // Prevent forms from submitting.
    function preventFormSubmit() {
      var forms = document.querySelectorAll('form');
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function(event) {
          event.preventDefault();
        });
      }
    }
    window.addEventListener('load', preventFormSubmit);

A su vez donde podemos señalar que el truco está en

[event.preventDefault()][1]


  [1]: https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/171221\|https://es.stackoverflow.com/q/171221]]

