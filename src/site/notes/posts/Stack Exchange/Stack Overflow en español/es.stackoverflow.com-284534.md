---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-284534.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-284534/","title":"hora texto a hora fecha google sheets","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:55.848-06:00"}
---

# hora texto a hora fecha google sheets

La configuración regional predeterminada de mis hojas de cálculo es México con lo cual se hace la conversión de un valor como el mostrado de forma automática. En otras palabras, al pegar el valor `07/08/2019 02:20:00 p.m.` (sin comillas) en la barra de fórmulas se muestra como `7/8/2019 14:20:00`, como se puede ver en la siguiente imagen:

[![][1]][1]

Para que se muestre en la celda como se ve en la barra de fórmulas sólo hace falta aplicar el formato deseado desde el menú Formato > Número.

Repasemos algunos cuestiones básicas.

Los tipos de datos básicos en las hojas de cálculo de Google son:

- TEXTO
- NUMERO
- ERROR

Las fechas, tiempo y duración, se representan con números seriales y su formato de presentación dependen de la configuración de la hoja de cálculo.

Cuando se ingresa un valor ya sea de forma "manual" o por medio de un formulario, las hojas de cálculo de Google le asignaran el tipo de dato de forma automática. Si el valor `07/08/2019 02:20:00 p.m.` no es interpretado automáticamente como fecha es que el formato del valor no coincide con los formatos de fecha esperados con base en la configuración regional y en tal caso deberán usarse funciones de manejo de valores de tipo texto para extraer partes teniendo la opción de convertirlo a valor que pueda ser interpretado por la hoja de cálculo de Google como fecha-hora o bien guardarlo como texto. Hay muchas funciones quizás las mas directa sea usar DATEVALUE, pero su funcinnamiento está ligado a la configuración regional. Otras funciones que podrían ser útiles son MID, REGEXTRACT por mencionar sólo un par.

En cuanto a un script, te podría ser útil `new Date(fecha)` (JavaScript) o `Utilities.formatDate(date,timezone,format)`, donde date es un objeto tipo Date (JavaScript) timezone, una cadean de texto que indique la zona horaria, y format una cadena de texto indicando el formato del resultado.

  [1]: https://i.stack.imgur.com/riMBi.png

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/284534\|https://es.stackoverflow.com/q/284534]]

