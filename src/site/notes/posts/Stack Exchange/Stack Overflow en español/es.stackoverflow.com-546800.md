---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-546800.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-546800/","title":"Cambiar el valor de una celda bajo la condicion de otra en filas especificas apps script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.935-06:00"}
---

# Cambiar el valor de una celda bajo la condicion de otra en filas especificas apps script

Se trata de un problema con los índices. Mientras que JavaScript usa índices base 0, el método `Sheet.getRange` del servicio de hoja de cálculo de Google (SpreadsheetApp) usa índices base 1.

Para resolver el problema de manera muy simple cambia

```
destinoFSK.getRange(i,14).setValue(" ");
destinoFSK.getRange(i,15).setValue(" ");
```
por
```
destinoFSK.getRange(i + 1,14).setValue(" ");
destinoFSK.getRange(i + 1,15).setValue(" ");
```

Nota:

El script tiene varios problemas. A continuación algunos de ellos:

1. El usar Sheet.getRange dentro de un bucle es muy ineficiente, por lo que Google recomienda el uso de operaciones por lotes.
2. El agregar una espacio en blanco no cambia el valor a 0, en lugar de `" "` deberías poner `0` o si no quieres mostrar ningún valor usa `""` (cadena de texto vacía).

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/546800\|https://es.stackoverflow.com/q/546800]]

