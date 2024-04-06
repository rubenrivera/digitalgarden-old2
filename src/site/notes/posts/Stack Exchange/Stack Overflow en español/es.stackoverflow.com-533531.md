---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-533531.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-533531/","title":"¿Cómo puedo hacer que mi código se detenga si cumple con una condición?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.730-06:00"}
---

# ¿Cómo puedo hacer que mi código se detenga si cumple con una condición?

Una opción simple es el uso de sentencia `throw` para mostrar un error

```
  rgl.getRanges().forEach(r => {
     if(r.isBlank()){
      throw new Error(`${r.getA1Notation()} se encuentra vacía`)
  });
```
Si ejecutas la función mediante desde la interfaz de Google Sheets, por ejemplo mediante un menú personalizado, la interfaz mostrará una barra de color rojo con el mensaje. Esto podría ser mejor que usar alerta porque esta no detiene la ejecución del script y si el usuario tarda en descartarla podrías tener un error por exceder el tiempo de ejecución (6 minutos para cuentas gratuitas, 30 minutos para cuentas de Google Workspace).

En cualquier caso los registros de ejecución mostrarán el mensaje como un error.

Otra opción simple podría ser el uso de `Array.prototype.some` o `Array.prototype.every` en lugar the `Array.prototype.forEach`, para usar su resultado como condición de un `if`, pero habría que repensar lo de la notificación de cuál celda está vacía. Esto no sería problema si usas formato condicional, por ejemplo, para mostrar con fondo de color las celdas vacías.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/533531\|https://es.stackoverflow.com/q/533531]]

