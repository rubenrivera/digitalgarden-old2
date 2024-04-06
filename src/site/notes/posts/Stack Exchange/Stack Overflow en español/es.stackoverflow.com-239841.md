---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-239841.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-239841/","title":"Ordenar los datos despues de filtrar","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.915-06:00"}
---

# Ordenar los datos despues de filtrar

Básicamente tienes dos alternativas

1. Usar un método propio de Google Apps Script
2. Usar métodos de JavaScript

<hr>

# Método propio de Google Apps Script

Class Range incluye el método [sort(sortSpecObj)][1]. A continuación el ejemplo de la documentación oficial con los comentarios traducidos

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    var range = sheet.getRange("A1:C7");
    
    // Ordena por los valores en la primer columna (A)
    range.sort(1);
    
    // Ordena por los valores en la segunda columna (B)
    range.sort(2);
    
    // Ordena de forma descendiente por columna B
    range.sort({column: 2, ascending: false});
    
    //  Ordena de forma descendiente por columna B, luego ascendente por columna A
    // Note the use of an array
    range.sort([{column: 2, ascending: false}, {column: 1, ascending: true}]);
    
    // Para filas que son ordenadas en forma ascendente, el parámetro ascendente
    // es opcional, se puede usar sólo un entero con la columna. Observe que en
    // en general, mantener la especificación de ordenado resulta en código más
    // fácil de leer. El ordenado anterior se puede expresar de la siguiente forma:
    range.sort([{column: 2, ascending: false}, 1]);
    
    // Como alternativa, si quieres todas las columna en orden ascendente, puedes usar
    // lo siguiente (esto hace la columna 2 ascendente)
    range.sort([2, 1]);
    // ... lo que es equivalente a
    range.sort([{column: 2, ascending: true}, {column: 1, ascending: true}]);

# Usar métodos de JavaScript

Preguntas relacionadas

- https://es.stackoverflow.com/q/224771/65
 
  [1]: https://developers.google.com/apps-script/reference/spreadsheet/range#sortsortspecobj

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/239841\|https://es.stackoverflow.com/q/239841]]

