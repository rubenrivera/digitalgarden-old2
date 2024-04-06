---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-411411.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-411411/","title":"Por que no me funciona el DriveApp.searchFiles cuando le paso la query en una variable pero si que funciona si le paso un string?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:56.963-06:00"}
---

# Por que no me funciona el DriveApp.searchFiles cuando le paso la query en una variable pero si que funciona si le paso un string?

Lo primero que debes tener presente es que cuando se pasa una variable como argumento a `Logger.log` este la va a convertir a una cadena de texto, posiblemente usando `toString()`, `valueOf()` del objeto global Object o le que corresponda en la cadena de prototipos. Si a la variable se le va a asignar un objeto o bien para "pecar" de precabido, en lugar de

    Logger.log(query); 

mejor usa 

    Logger.log(JSON.stringify(query, null, '')); 

Habría que ver que se ha asignado a `query`. 

En cuanto a la parámetro de `searchFiles`, puedes construir tu string usando `'` pero habrá que usar `"` como delimitador de los valores con los que se compararan las palabras claves como `modifiedDate` y `mimeType`. Si has usado `"` como delimitador de tu cadena de texto, al usarlo como delimitador de los valores deberás escaparlo como has mencionado en tu respuesta.

<hr>

Ejemplo usando una variable en lugar de un literal como parámetro de `searchFiles`

```
function myFunction() {
  var query = 'title contains "prueba"';
  var files = DriveApp.searchFiles(query);
  var count = 0;
  while(files.hasNext()){
    var file = files.next();
    count++
  }
  console.log(count);
}
```

Relacionado

- https://es.stackoverflow.com/q/101855/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/411411\|https://es.stackoverflow.com/q/411411]]

