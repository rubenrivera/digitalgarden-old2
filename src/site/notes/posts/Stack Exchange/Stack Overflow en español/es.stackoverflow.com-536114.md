---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-536114.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-536114/","title":"Sobre aplicación de macro y ubicación de botón","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.742-06:00"}
---

# Sobre aplicación de macro y ubicación de botón

Puedes usar el activador (trigger) simple usando el nombre de función `onEdit` o un activador instalable "edit".

Ejemplo simple:

```javascript
function onEdit(e){
  if(e.range.columnStart === 1 && e.range.rowStart === 1){
     // poner aquí lo que se debe hacer cuando se edite A1
  }
}
```
Preguntas Relacionadas

- https://es.stackoverflow.com/q/348476/65

Referencias

- https://developer.google.com/apps-script/guides/triggers
- https://developer.google.com/apps-script/guides/triggers/installable

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/536114\|https://es.stackoverflow.com/q/536114]]

