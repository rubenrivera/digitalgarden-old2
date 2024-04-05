---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-352157.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-352157/","title":"Ordenar una tabla en spreadsheet, con una columna de números como referencia (externa) sin orden lógico?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:56.578-06:00"}
---

# Ordenar una tabla en spreadsheet, con una columna de números como referencia (externa) sin orden lógico?

Si la columna de referencia no está ordenada de forma lógica SORT y SORTN no te servirán.

En una solución basada en fórmulas podrías usar `VLOOKUP` o bien combinar `MATCH` e `INDEX`.

La fórmula usando `VLOOKUP` sería

<!-- language:lang-none -->

    =ArrayFormula(VLOOKUP(H3:H12;$B$3:$C$12;{1\2};FALSE))


Donde 

- `H3:H12` es el rango con los índices para indicar el orden requerido 
- `$B$3:$C$12` es el rango con los valores como están
- `{1\2}` es para indicar que debe devolver los valores de la primera y segunda columna
- `FALSE` para indicar que los datos fuente no están ordenados alfabéticamente (NOT10 debería aparcer antes de NOT2)
- `ARRAYFORMULA`  "Habilita la presentación de los valores obtenidos de una fórmula de matriz en varias filas o columnas y el uso de funciones que no sean de matriz con las matrices" (tomado del [artículo de ayuda][1]).

Por otro lado, en una solución basada en script (Google Apps Script / JavaScript) deberás hacer algo equivalente, pero lo primero que debes tener en mente es que debes procurar usar el menor número de llamadas a las clases y métodos de `SpreadsheetApp` pues estas son muy lentas, para lo cual seguramente tendrás que usar los métodos `getValues()` y `setValues(values)` de Class Range, que en palabras simples sería *evita usar métodos de `SpreadsheetApp` en bucles*.

Relacionado

- https://es.stackoverflow.com/q/351776/65


  [1]: https://support.google.com/docs/answer/3093275?hl=es

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/352157\|https://es.stackoverflow.com/q/352157]]

