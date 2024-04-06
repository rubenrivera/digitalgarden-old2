---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-477342.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-477342/","title":"Mostrar ID de carpeta/archivos y sus permisos","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:57.492-06:00"}
---

# Mostrar ID de carpeta/archivos y sus permisos

Considerando las asignaciones que usan la variable file para acceder a métodos de de Class File como `file.getSharingAccess()` están invertidos la asignación de valores/objetos en las siguientes líneas

```js
file = files.next().getId();
var id = DriveApp.getFileById(file);
```

debería ser

```js
id = files.next().getId();
var file = DriveApp.getFileById(id);
```

además hay un `=` fuera de lugar.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/477342\|https://es.stackoverflow.com/q/477342]]

