---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-544033.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-544033/","title":"me sale un error al copiar una hoja de google sheets a otra hoja con google app script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.356-06:00","updated":"2024-04-05T16:43:57.866-06:00"}
---

# me sale un error al copiar una hoja de google sheets a otra hoja con google app script

El error se debe a que a la variable `value` se le ha asignado un objeto de tipo Array y dicho objeto no cuenta con el método `copyTo`.

Las clases [Sheet][1] y [Range][2] tienen métodos `copyTo`. Si bien el correspondiente a la clase Sheet permite copiar de un spreadsheet a otro, el correspondiente a Range me parece que sólo permite copiar en un mismo spreadsheet por lo que en lugar de usar copyTo quizás debas usar varios métodos para pegar los valores, los bordes de celda, color de fondo, etc.

Recursos

- https://developers.google.com/apps-script/reference/spreadsheet/sheet#copytospreadsheet
- https://developers.google.com/apps-script/reference/spreadsheet/range#copytodestination


  [1]: https://developers.google.com/apps-script/reference/spreadsheet/sheet
  [2]: https://developers.google.com/apps-script/reference/spreadsheet/range

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/544033\|https://es.stackoverflow.com/q/544033]]

