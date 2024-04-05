---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-527720.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-527720/","title":"Función doPost para guardar valores desde URL","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:57.707-06:00"}
---

# Función doPost para guardar valores desde URL

En la función `doGet` te faltó incluir el parámetro para recibir el objeto evento. A continuación la versión modificada

```
function doGet(e){
 
 var HTMLString = "<style> h1,p {font-family: 'Helvetica', 'Arial'}</style>" 
 + "<h1>Hello World!</h1>"
 + "<p>Welcome to the Web App";
 
 doPost(e)

 HTMLOutput = HtmlService.createHtmlOutput(HTMLString);
 return HTMLOutput
}
```

En la función `doPost`, si bien esta incluye el parámetro para recibir el objeto evento, el Array que pasas a `appendRow` no debería tener el objeto evento ya que este sólo debería tener datos de tipo `number`, `string`, `boolean` y/o `Date`. Considerando esto podrías reemplazar
```
hoja.appendRow([ "Prueba 1 columna", o, "columna3" , "columna4" ]);
```
por
```
hoja.appendRow([ "Prueba 1 columna", JSON.stringify(o), "columna3" , "columna4" ]);
```
o bien, para pasar sólo el valor de `name`, por
```
hoja.appendRow([ "Prueba 1 columna", o.parameter.name, "columna3" , "columna4" ]);
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/527720\|https://es.stackoverflow.com/q/527720]]

