---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-296120.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-296120/","title":"Script reenvio respuestas en formulario","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:56.067-06:00"}
---

# Script reenvio respuestas en formulario

El objeto evento del activador "Form Submit" incluye varias propiedades que te podrían servir:

- `namedValues`: Un objeto incluyendo los nombres de las preguntas y las respuestas
- `range`: Un objeto Range representando la celda o intervalo editados
- `values`: Un Array de los valores en el mismo orden en el que aparecen en la hoja de cálculo

Si tu objeto evento es `e` en tu código usa `e.range` para llamar el objeto Range.

Referencia

- https://developers.google.com/apps-script/guides/triggers/events#form-submit

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/296120\|https://es.stackoverflow.com/q/296120]]

