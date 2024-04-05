---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-358921.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-358921/","title":"¿Cómo iterar en las celdas de una columna de una hoja de cálculo para obtener las preguntas de un formulario de Google?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:56.666-06:00"}
---

# ¿Cómo iterar en las celdas de una columna de una hoja de cálculo para obtener las preguntas de un formulario de Google?

Ya lo había mencionado en inglés en mi respuesta a [la publicación cruzada][1] de esta pregunta en SO, pero lo menciono ahora en español (no es una traducción de mi respuesta en inglés)

1. `require` no es un soportado por Google Apps Script pues no es un función de JavaScript estándar.
2. `await` tampoco es soportado por Google Apps Script pues aunque ahora es posible usar el Chrome V8 como runtime Google Apps Script no soporta métodos asíncronos.
3. No es recomendable leer una celda a la vez usando `getValue()` ya que este método es lento. En el documento de mejores prácticas de Google Apps Script se recomienda leer todos los valores de cada hoja usando métodos como `getValues()`  y luego iterar sobre la matriz devuelta por estos métodos.
4. Ya te he dejado varias observaciones sobre los formularios de Google en tu pregunta sobre Selenium -> https://es.stackoverflow.com/q/358244/65

  [1]: https://stackoverflow.com/q/61955306/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/358921\|https://es.stackoverflow.com/q/358921]]

