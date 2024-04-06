---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-241972.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-241972/","title":"guardar, buscar y editar informacion en googlesheet","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.954-06:00"}
---

# guardar, buscar y editar informacion en googlesheet

Sobre la [revisión 5][1]
De lo mencionado en la sección sobre la revisión 1 mas abajo, las etiquetas `<script>` y `<meta>` en la revisión 5 del código siguen fuera de la etiqueta `<html>` lo cual es incorrecto.

Referencia

- https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML

<hr>
Sobre la [revisión 1][2] de la pregunta

El código del lado cliente tiene varios problemas, entre ellos saltan a la vista rápidamente que

1. Se han colocad etiquetas script y meta fuera de la etiqueta html
2. Estas llamando funciones usando la forma `$(..)` típica de jQuery, pero no se carga esta librería, ni ninguna otra.

Preguntas relacionadas

- https://es.stackoverflow.com/q/61006/65
- https://es.stackoverflow.com/q/65908/65

Referencias

- https://developers.google.com/apps-script/guides/html/


  [1]: https://es.stackoverflow.com/revisions/241544/5
  [2]: https://es.stackoverflow.com/revisions/241544/1

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/241972\|https://es.stackoverflow.com/q/241972]]

