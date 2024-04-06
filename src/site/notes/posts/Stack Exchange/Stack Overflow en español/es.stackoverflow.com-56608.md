---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-56608.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-56608/","title":"Obtener una función en más de dos celdas en Excel","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:49.573-06:00"}
---

# Obtener una función en más de dos celdas en Excel

En Excel las matrices no se expanden automáticamente, contrario a lo que ocurre en otras aplicaciones como las Hojas de Cálculo de Google.

El procedimiento a seguir es el suguiente:

1. Conocer el tamaño de la matriz. En este caso, es sencillo porque el tamaño es fijo, y es de 9 renglones y 1 columna.
2. Seleccionar el rango en el que se desea que la matriz sea desplegada, cuidando que la celda de la esquina superior izquierda se mantenga como la celda activa.
3. Escribir `=`, seguido de la fórmula y presionar <kbd>Control</kbd> + <kbd>Mayúsculas</kbd> + <kbd>Entrar</kbd>. En este caso, la fórmula es el nombre de la función personaliza con los parámetros correspondientes.  

Se deberá mostrar la matriz.

Cabe mencionar que las funciones personalizadas no pueden alterar las propiedades de las celdas, pero lo que existe la opción de usar una macro / sub procedure para automatizar la introducción de una fórmula de matriz, para ello usar la propiedad [Range.formulaArray][1]

Referencia

[Instrucciones y ejemplos de fórmulas de matriz en Excel 2016 para Windows][2]


  [1]: https://msdn.microsoft.com/es-mx/library/office/ff837104.aspx
  [2]: https://support.office.com/es-es/article/Instrucciones-y-ejemplos-de-f%C3%B3rmulas-de-matriz-en-Excel-2016-para-Windows-bc6b94c5-f1e2-40fd-8513-cc8c452d4d89

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/56608\|https://es.stackoverflow.com/q/56608]]

