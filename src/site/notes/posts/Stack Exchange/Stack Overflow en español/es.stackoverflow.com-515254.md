---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-515254.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-515254/","title":"¿Cómo obtener los valores de una lista de Rangos en Apps Script?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.597-06:00"}
---

# ¿Cómo obtener los valores de una lista de Rangos en Apps Script?

Sólo "se pega" el primer valor porque el código está usando `setValue`. Para "pegar" todos los valores del Array ( este caso `rengeList`), tendrías que usar `Range.setValues` (con s al final). Entonces, lo primero es obtener de cada uno de los rangos, para esto puedes usar `RangeList.getRanges()` y usar un bucle para aplicar el método `setValues()`. Si encuentras que esto fuera demasiado lento, la forma de reducir el tiempo de ejecución sería usar el "Advanced Sheets Service" y más específicamente `batchUpdate`.

Relacionado

- https://es.stackoverflow.com/q/514332/65
- https://es.stackoverflow.com/q/201689/65
- https://es.stackoverflow.com/q/355240/65
- https://es.stackoverflow.com/q/474887/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/515254\|https://es.stackoverflow.com/q/515254]]

