---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-754.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-754/","title":"Cómo adaptar evenBetterBuildUrls() de Mogsdad para importar respuestas a un formulario","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.416-06:00","updated":"2024-04-05T16:43:48.316-06:00"}
---

# Cómo adaptar evenBetterBuildUrls() de Mogsdad para importar respuestas a un formulario

# Respuesta parcial

> 1. Obtener las respuestas de una hoja específica en lugar de la hoja predeterminada.

Dado que en la línea 8 se especifica la el nombre de la hoja con las repuestas, cambiar la línea 9

    var data = ss.getDataRange().getValues();  // Data for pre-fill

por

    var data = sheet.getDataRange().getValues();  // Data for pre-fill

donde `sheet` es la hoja de la que deseamos obtener los datos.

> 2. Incluir respuestas del tipo TIME, DURATION y GRID

En relación a TIME y Duration véase https://es.stackoverflow.com/q/780/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/754\|https://es.stackoverflow.com/q/754]]

