---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-35094.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-35094/","title":"En hoja de calculo de Google ¿Cómo oculto una imagen que está en una columna?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:48.715-06:00"}
---

# En hoja de calculo de Google ¿Cómo oculto una imagen que está en una columna?

Como se menciona en la [otra respuesta][1], las imágenes agregadas mediante el menú Insertar > Imagen o mediante método insertImage(blob, column, row) no forman parte del contenido de las celdas, sino que flota sobre ellas.

Actualmente Google Apps Script no tiene métodos para manejar las imágenes insertadas. Una solución es que en lugar de insertar la imágen mediante los métodos mencionados previamente, se utilice la función [IMAGE][1] (`=IMAGE(url)`)

Nota: En lugar de usa una línea de código por cada una de las filas 5 a 11, usa una sólo línea, es más eficiente:

    sheet.hideColumns(5,7)

  [1]: https://es.stackoverflow.com/a/34930/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/35094\|https://es.stackoverflow.com/q/35094]]

