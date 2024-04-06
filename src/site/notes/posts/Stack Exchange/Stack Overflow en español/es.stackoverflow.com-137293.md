---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-137293.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-137293/","title":"¿como puedo ver los resultados con formato pesos ($0.00)?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:52.992-06:00"}
---

# ¿como puedo ver los resultados con formato pesos ($0.00)?

Usa [Intl.NumberFormat][1] con las propiedades 

- style = currency
- currency = MXN o alguna la moneda que requieras.

Si deseas la cantidad sin centavos agrega las propiedades  

- minimumFractionDigits = 0
- maximumFractionDigits = 0

Ejemplos

Con centavos

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var monto = 1000
    console.info(Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(monto));

<!-- end snippet -->

Sin centavos

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var monto = 1000
    console.info(Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',minimumFractionDigits:0,maximumFractionDigits:0}).format(monto));

<!-- end snippet -->


  [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/137293\|https://es.stackoverflow.com/q/137293]]

