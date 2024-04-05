---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-102310.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-102310/","title":"Instruccion DriveApp.searchfiles","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:52.595-06:00"}
---

# Instruccion DriveApp.searchfiles

El manejo de cadenas de texto en Google Apps Script es el mismo que se realiza en JavaScript. Usa el operador `+` para concatenar dos cadenas. En el caso de un literal y una variable sería de la siguiente forma

```javascript
'esta es una cadena literal ' + variable
```

Por otro lado, como se menciona en [la respuesta de Joan][1], el argumento de `searchFiles` requiere que el valor que se va a buscar en el título (`title`) se indique entre comillas dobles `"`

Aplicando lo anterior al código del OP

<!-- language: lang-js -->

    var variable = 'nombre';
    var files = DriveApp.searchFiles('title contains "' + variable + '"');
    while (files.hasNext())
    {
      var file = files.next();   
      var dato = file.getUrl();
    }


  [1]: https://es.stackoverflow.com/a/176525/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/102310\|https://es.stackoverflow.com/q/102310]]

