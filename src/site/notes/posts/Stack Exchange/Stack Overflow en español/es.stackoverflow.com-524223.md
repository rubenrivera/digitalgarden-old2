---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-524223.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-524223/","title":"Ejecución en Línea AppScript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:57.683-06:00"}
---

# Ejecución en Línea AppScript

Sí. Deberás usar un activador instalable tipo "change". Este tipo de activador lo puedes crear desde la interfaz de Google Apps Script o bien mediante código.

Estructura básica

```javascript
function respondToChange(e){
   if( /* poner aquí las condiciones */ ){
    // poner aquí lo que quieres que se haga cuando SÍ se cumplan las condiciones
  } else {
    // poner aquí lo que quieres que se haga cuando NO se cumplan las condiciones

  }
}
```

Evita usar nombres reservados para la función a ser llamada por el activador como `onEdit` porque podrías provocar que se ejecute la función por duplicado. Si tu App tendrá varios usuarios insertando filas de forma simultánea, considera usar el Lock Service para prevenir condiciones de carrera.

Recursos

- https://developers.google.com/apps-script/guides/triggers/installable

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/524223\|https://es.stackoverflow.com/q/524223]]

