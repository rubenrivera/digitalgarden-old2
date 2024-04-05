---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-453105.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-453105/","title":"Abrir formulario con los datos de la fila que tiene el ID seleccionado o con un botón","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:57.353-06:00"}
---

# Abrir formulario con los datos de la fila que tiene el ID seleccionado o con un botón

La pregunta tienes dos partes principales 

1. Leer los datos de la fila seleccionada y pasar estos al formulario 
2. Escribir los datos en la fila que corresponda según el id seleccionado.

Para la primera parte, el script debe leer los datos, esto se hace con `getValues()` y luego pasarlos al formulario. Como estás haciendo uso de `createTemplateFromFile` podrías incluir en el HTML scriptlets 

Para la segunda parte deberás implementar un algoritmo que encuentre la fila con el ID y usar esta fila para actualizar los datos según corresponda. En un algoritmo muy básico podrías asumir que la posición (columna) nunca va a cambiar, en un algoritmo más robusto podrías determinar la posición con base en los encabezados de la misma.


Recursos

- [HTML Service: Templated HTM](https://developers.google.com/apps-script/guides/html/templates)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/453105\|https://es.stackoverflow.com/q/453105]]

