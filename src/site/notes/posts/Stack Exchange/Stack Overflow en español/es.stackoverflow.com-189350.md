---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-189350.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-189350/","title":"¿Cómo enlazar un ID con varias spreadsheets con Apps Script?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.252-06:00"}
---

# ¿Cómo enlazar un ID con varias spreadsheets con Apps Script?

Puedes usar funciones de hoja de cálculo como [COINCIDIR (MATCH)][1] para encontrar la posición del primer valor de un rango que coincida con un valor especificado. 

Luego puedes usar otra función de hoja de cálculo como [INDICE][2] para obtener el un valor de un rango con base en la posición obtenida por COINCIDIR.

La fórmula quedaría de la siguiente forma

    =INDICE('Hoja 1'!A2:A,COINCIDIR(B2,'Hoja 1'!B2:B,FALSO))

Si por "spreadsheet" te refieres a otro archivo, primero deberás usar [IMPORTRANGE][3] para importar los datos del otro archivo. Podrías hacer la importación en Hoja 1 y así no tienes que modificar la fórmula anterior.

Podrías usar Apps Script para crear funciones personalizadas pero en muchos casos las funciones de hoja de cálculo se desempeñan mejor en particular porque la mayoría se ejecuta del lado del cliente mientras que las funciones personalizadas se ejecutan en el servidor, además estas tiene limitaciones como un máximo de 30 segundos de tiempo de ejecución.


  [1]: https://support.google.com/docs/answer/3093378?hl=es
  [2]: https://support.google.com/docs/answer/3098242?hl=es
  [3]: https://support.google.com/docs/answer/3093340?hl=es

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/189350\|https://es.stackoverflow.com/q/189350]]

