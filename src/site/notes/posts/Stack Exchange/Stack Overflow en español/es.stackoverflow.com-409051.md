---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-409051.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-409051/","title":"Tengo un problema con una variable y no me doy cuenta de cuál es el error","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:56.824-06:00"}
---

# Tengo un problema con una variable y no me doy cuenta de cuál es el error

De la segunda actualización de progreso

> Ahora logro crear el archivo con el nombre del profesor, pero aún no
> logro abrirlo...

Para abrir un archivo usando Google Apps Script debes usar código del lado del cliente ya que esto no se puede hacer directamente usando sólo código del lado del servidor.

Por usar código del lado del cliente me refiero a usar el servicio HTML para crear un diálogo o panel lateral que al cargarse llame una función JavaScript que abra tu hoja de cálculo. Puedes ver un ejemplo del código en mi respuesta a https://es.stackoverflow.com/q/296965/65

<hr>

Con respecto a los métodos de la clase SpreadsheetApp que "abren" una hoja de cálculo:


- open(file)
- openById(id)
- openByUrl(url)

Los métodos anteriores no abren la hoja de cálculo en el navegador / computadora del usuario, lo que hacen es "abrirla" del lado del servidor. En lo personal a quienes están empezando con las hojas de cálculo de Google y Apps Script no les recomiendo utilizar los métodos que hacen referencia a algo activo / actual como :

- getActiveSheet()
- getActiveRange()
- getActiveCell()
- activate()
- getCurrentCell()

En su lugar usen los métodos que usan un valor u objeto para obtener el elemento deseado. Les ahorrá muchos dolores de cabeza.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/409051\|https://es.stackoverflow.com/q/409051]]

