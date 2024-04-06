---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-134420.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-134420/","title":"como decodificar este texto en JavaScript (Hola, u00bfen quu00e9 puedo ayudarte?)","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:52.794-06:00"}
---

# como decodificar este texto en JavaScript (Hola, u00bfen quu00e9 puedo ayudarte?)

La cadena `Hola, u00bfen quu00e9 puedo ayudarte?` usa codificación Unicode pero está incompleta.

En lugar de 

- `u00bf` debe ser  `\u00bf`
- `u00e9` deber ser `\u00e9`

El siguiente código escribe la frase decodificada

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document.write('Hola, \u00bfen qu\u00e9 puedo ayudarte?')

<!-- end snippet -->

Referencia

- [String](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Referencia/Objetos_globales/String)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/134420\|https://es.stackoverflow.com/q/134420]]

