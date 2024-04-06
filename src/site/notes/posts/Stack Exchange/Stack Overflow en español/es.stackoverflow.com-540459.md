---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-540459.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-540459/","title":"Ocultar valores que no tienen nada escrito","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.792-06:00"}
---

# Ocultar valores que no tienen nada escrito

En lugar de 

```
var fecha = new Date(registro.getRange("c16").getValue());
var fechaF = Utilities.formatDate(fecha, "GMT","DD-MM-YYYY");
```

usa
```
var fecha = new Date(registro.getRange("c16").getValue());
if(fecha instanceof Date){
   var fechaF = Utilities.formatDate(fecha, "GMT","DD-MM-YYYY");
   // agrega aquí el resto
} else {
  // pon aquí lo que se debe hacer en caso de C16 no tenga una fecha
}
```


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/540459\|https://es.stackoverflow.com/q/540459]]

