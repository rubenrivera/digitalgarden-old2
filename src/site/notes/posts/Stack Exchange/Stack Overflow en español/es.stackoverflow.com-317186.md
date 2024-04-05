---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-317186.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-317186/","title":"Problemas con el código para ocultar filas en sheets google","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:56.465-06:00"}
---

# Problemas con el código para ocultar filas en sheets google

Así es, sólo está evaluando una columna.

Hay muchas formas de evaluar si todos los valores de un Array ( fila en este caso que se trata de valores de una hoja de cálculo de Google) son cero, por ejemplo usando `Array.prototype.every`.

Pero quizás este es sólo el primer problema que encuentras con tu script.

Cabe mencionar que no es recomendable usar el activador simple `onOpen` para hacer tareas que no podrían tomar mucho tiempo ya que tienen limitaciones de tiempo de ejecución de 30 segundos.

Las llamadas a los métodos del servicio `Spreadsheet`, como `hideRows` toman relativamente mucho tiempo, y al usar referencias abiertas, como `C:F` que abarca todas las filas que tenga la hoja, podría ser demasiado.

El eliminar las filas que no son usadas podría disminuir la probabilidad de que ocurra el error pero quizás no sea suficiente.

Una alternativa es que en lugar de usar un activador simple uses un activador installable, que de 30 segundos llevaría el límite de tiempo de ejecución a 6 minutos o 30 minutos dependiendo del tipo de cuenta que uses.

Considerando lo anterior, me parece que es mejor usar una **vista de filtro** ya que una vista de filtro guarda sus criterios de filtrado (y ordenado) así que no los tienes que aplicar cada vez que lo vas a usar.

Por otro lado, también puedes aplicar un filtro usando Google Apps Script, seguramente esto será más rápido que esconder una fila a la vez.

[Class Filter][1] incluye varios métodos que serán muy útiles. Para agregar o modificar una vista de filtro deberás usar el servicio avanzado de hoja de cálculo para tener acceso a los recursos y métodos de Google Sheets API.

Referencias

- https://developers.google.com/apps-script/guides/triggers


  [1]: https://developers.google.com/apps-script/reference/spreadsheet/filter

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/317186\|https://es.stackoverflow.com/q/317186]]

