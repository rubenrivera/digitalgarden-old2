---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-287511.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-287511/","title":"Error al crear formulario en Google Apps Script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:55.850-06:00"}
---

# Error al crear formulario en Google Apps Script

El error está en 

    var hojaParametros = hojaParametros.getSheetByName('Parametros');

Muy probablemente se resuelva (depende de que  `SpreadsheetApp.openById("1r5UJJZcPL64JAmqyz8p1cV_e6m7QtlHT040pThF7QWw")` devuelva un objeto `Spreadsheet`) cambiado dicha línea por

    var hojaParametros = hojaCalculo.getSheetByName('Parametros');

Consejo: En lugar de incluir sentencias de código "complejas" entre `<?` y `?>` declara funciones en archivos `.gs` y llama estas entre los `<?` y `?>` de tal forma que sea más sencillo realizar la depuración del código usando el editor de Google Apps Script, más específicamente, podrías llamar la función a depurar desde el selector de funciones del editor de Google Apps Script.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/287511\|https://es.stackoverflow.com/q/287511]]

