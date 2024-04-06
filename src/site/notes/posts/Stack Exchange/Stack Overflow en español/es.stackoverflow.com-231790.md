---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-231790.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-231790/","title":"¿Cómo crear nuevas hojas en Google Sheets a partir de una hoja modelo, y variando datos en una celda?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:54.642-06:00"}
---

# ¿Cómo crear nuevas hojas en Google Sheets a partir de una hoja modelo, y variando datos en una celda?

Para crear una nueva hoja de cálculo puedes usar [SpreadsheetApp.create(name)][1], luego para copiar a esta una hoja de tu hoja de cálculo usa algo como

Antes del for

    var name = "Nombre de la nueva hoja de cálculo";
    var newSS = SpreadsheetApp.create(name);

dentro del for, en lugar de

    template.copyTo(ss).setName(employeeObjects[i]);

usa

    SpreadsheetApp.flush(); //Aplicar los cambios previos
    template.copyTo(newSS).setName(employeeObjects[i]);

  [1]: https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#createname

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/231790\|https://es.stackoverflow.com/q/231790]]

