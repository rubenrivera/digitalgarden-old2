---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-277217.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-277217/","title":"ImportJSON no incluye objetos \"null\"","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:55.485-06:00"}
---

# ImportJSON no incluye objetos "null"

NOTA: Este respuesta es considerando la información adicional inicialmente proporcionada por el AP a través de comentarios a la pregunta.

La función personalizada IMPORTJSON del proyecto que refieres tiene un alcance limitado es por ello que los autores del proyecto han incluido la función `ImportJSONAdvanced` la cual incluye los argumentos

- url
- fetchOptions
- query
- parseOptions
- includeFunc
- transformFunc

Usa `includeFunc` y `transformFunc` para pasar funciones para determinar que es lo que que se debe incluir en la importación y cómo transformar los datos luego de que ha sido importado.

`includeFunc` debe ser una función con el patrón `func(query, path, options)`  que devuelva verdero si el elemento de datos in una ruta determinada debe ser incluído o falso en caso contrario.

`transformFunc` debe ser una función con el patrón `func(data, row, column, options)` donde data es un objeto de tipo Array de dos dimensiones (2D) de los datos y row y column son la fila y columnas que actualmente están siendo procesadas. Cualquier valor "return" es ignorado.

NOTA: `ImportJSONAdvanced` no puede usarse como función personalizada ya que no es posible pasar como funciones JavaScript como argumentos en formulas de hoja de cálculo de Google.

Si todo esto te resulta demasiado complicado, tal vez deberías considerar crear tu propia función IMPORTJSON y aprender lo necesario para poder hacerlo.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/277217\|https://es.stackoverflow.com/q/277217]]

