---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-432571.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-432571/","title":"Cómo almacenar datos de un formulario que se registran al mismo tiempo","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.143-06:00"}
---

# Cómo almacenar datos de un formulario que se registran al mismo tiempo

La solución es simple y directa, en lugar de usar cualquiera de las variantes de `getRange` usa el método `appendRow` de la clase Sheet.

En ciertos casos podría ser más conveniente usar el Lock Service pero esto añade complejidad y posiblemente riesgos. Complejidad porque deberás determinar un tiempo apropiado de espera y así como la forma de manejar los casos en que dicho tiempo de espera se exceda.

Recursos

- https://developers.google.com/apps-script/guides/sheets
- https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendRow

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/432571\|https://es.stackoverflow.com/q/432571]]

