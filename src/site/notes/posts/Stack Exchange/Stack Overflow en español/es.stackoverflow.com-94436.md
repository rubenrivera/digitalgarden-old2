---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-94436.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-94436/","title":"habilitar y deshabiltar div con hover","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:52.497-06:00"}
---

# habilitar y deshabiltar div con hover

Según entiendo `disabled` no es un propiedad estándar de `div` pero sí de `input`, esto por disable es para controles y un div es un elemento estructural cuya finalidad es agrupar elementos.

Dado que la clase "deshabilitar" está aplicada al `div`, para hacer el mínimo de cambios al código del OP se deberá usar algo como `$(this).children('input')` para inhabilitar el `input` que es hijo del `div` sobre el que se hace el "hover".



<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    $('.desabilitar').hover(
         function () {
            $(this).children('input').prop('disabled', true);
         },
         function () {
            $(this).children('input').prop('disabled', false);
         }
      );

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <div class="desabilitar">
      <input type="text" >
      <label>Input 1</label>
    </div>

    <div class="desabilitar">
      <input type="text" >
      <label>Input 2</label>
    </div>

    <div class="desabilitar">
      <input type="text" >
      <label>Input 3</label>
    </div>

    <div class="desabilitar">
      <input type="text" >
      <label>Input 4</label>
    </div>

<!-- end snippet -->

Referencia

[7.5.4 Grouping elements: the DIV and SPAN elements](https://www.w3.org/TR/html401/struct/global.html#h-7.5.4)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/94436\|https://es.stackoverflow.com/q/94436]]

