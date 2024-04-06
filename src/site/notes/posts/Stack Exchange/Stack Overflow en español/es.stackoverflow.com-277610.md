---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-277610.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-277610/","title":"Validación de enteros y decimales","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:55.535-06:00"}
---

# Validación de enteros y decimales

Como estás usando un `<input type="text">` para recibir como entrada un número ya sea entero o decimal puedes usar usar el atributo `pattern` para señalar con la pseudo-clase `invalid`si el valor capturado no es un número entero ni decimales con lo cual no requieres usar jQuery, ni siquiera JavaScript.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-css -->

    input:invalid{
     background-color:pink;
    }

<!-- language: lang-html -->

    <input type="text" pattern="^\d*,?\d*$">

<!-- end snippet -->

jQuery o JavaScript serían necesarios para hacer alguna acción determinada, como mostrar un mensaje personalizado o inhabilitar/habilitar un botón, otros campos, etc.



Referencia

- [Decimal number regular expression, where digit after decimal is optional](https://stackoverflow.com/q/12117024/1595451)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/277610\|https://es.stackoverflow.com/q/277610]]

