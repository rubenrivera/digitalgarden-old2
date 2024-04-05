---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-219030.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-219030/","title":"¿Como hacer que este script de google sheet funcione en varios rangos?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:54.541-06:00"}
---

# ¿Como hacer que este script de google sheet funcione en varios rangos?

De la [revisión 5 de la pregunta](https://es.stackoverflow.com/revisions/218357/5)

> Al intentar ejecutar este script me sale este error : No se puede leer la propiedad "range" de undefined. (línea 4, archivo "Dia1")

El error se debe a que estás ejecutando directamente el script, esto es, sin pasar un objeto evento, en este caso `e` es `undefined`. En https://es.stackoverflow.com/q/505/65 se explica cómo probar activadores simples.

Otro error potencial que pude observar a simple vista ocurre en la línea

    var range = e.getRange();

Si `e` fuera el objeto evento, no sería un objeto de tipo Spreadsheet ni de tipo Sheet, en lugar de esta línea podrías usar

    var range = e.range;

Sin embargo no le veo mucho sentido ahorrar dos caracteres, pero eso ya es cuestión de estilo.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/219030\|https://es.stackoverflow.com/q/219030]]

