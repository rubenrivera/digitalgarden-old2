---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-53817.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-53817/","title":"Definir celdas separadas en lugar de un rango en formula de Excel","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.353-06:00","updated":"2024-04-05T16:43:49.499-06:00"}
---

# Definir celdas separadas en lugar de un rango en formula de Excel

Usa matrices. Ejemplo

    =SUM(COUNTIF(INDIRECT({"A1","D1","F1"}),"s"))

Referencias

- [Directrices y ejemplos de fórmulas de matriz][1]
- [Respuesta][2] a [How to define a non continuous range in COUNTIF][3]


  [1]: https://support.office.com/es-es/article/Directrices-y-ejemplos-de-f%C3%B3rmulas-de-matriz-3be0c791-3f89-4644-a062-8e6e9ecee523
  [2]: https://stackoverflow.com/a/8422604/1595451
  [3]: https://stackoverflow.com/questions/8421139/how-to-define-a-non-continuous-range-in-countif

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/53817\|https://es.stackoverflow.com/q/53817]]

