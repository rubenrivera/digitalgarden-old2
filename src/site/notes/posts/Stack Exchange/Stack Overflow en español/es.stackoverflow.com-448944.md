---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-448944.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-448944/","title":"Cómo dar formato de Hipervínculo a cada una de las URLS indicadas en una celda, separadas por comas y sin espacios (URL1,URL2,URL3...)","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:57.325-06:00"}
---

# Cómo dar formato de Hipervínculo a cada una de las URLS indicadas en una celda, separadas por comas y sin espacios (URL1,URL2,URL3...)

De la [respuesta](https://webapps.stackexchange.com/a/150147/88163) a [How do you dynamically add multiple URLs into rich text for Google Sheets using Google Apps Script?](https://webapps.stackexchange.com/q/150133/88163)

```
var fileList = ["www.file1.com", "www.file2.com", "www.file3.com"];
var richText = SpreadsheetApp.newRichTextValue();
var text = "";
var links = [];

for (i = 0; i < fileList.length; i++) {
  if (i == 0) { // Sets the start of the link.
    var start = text.length;
  } else {
    var start = text.length + 2;
  }
  if (i == 0) { // Sets the file number.
    text = "File 1"
  } else {
    var num = i + 1;
    text = text + ", File " + num.toString();
  }
  var end = text.length; // Sets the end of the link.
  links.push([start, end, fileList[i]]);
}

richText.setText(text);
for (l = 0; l < links.length; l++) {
  richText.setLinkUrl(links[l][0],links[l][1],links[l][2])
}

richText = richText.build();
```

Nótese que el código anterior primero agrega los textos de cada enlace y luego a cada uno de estos les agrega el URL del enlace usando `setLinkUrl`

A continuación un ejemplo de cómo usar el código anterior

```
/**
 * 
 * @param {Array} URLs Array que incluye los URLs de los enlaces
 */
function myFunction(URLs){

  var richText = SpreadsheetApp.newRichTextValue();
  var text = "";
  var links = [];

  for (i = 0; i < URLs.length; i++) {
    if (i == 0) { // Inicio del enlace
      var start = text.length;
    } else {
      var start = text.length + 2;
    }
    if (i == 0) { // Establece el texto del enlace.
      text = "Enlace 1"
    } else {
      var num = i + 1;
      text = text + ", Enlace " + num.toString();
    }
    var end = text.length; // Sets the end of the link.
    links.push([start, end, URLs[i]]);
  }

  richText.setText(text);
  for (l = 0; l < links.length; l++) {
    richText.setLinkUrl(links[l][0],links[l][1],links[l][2])
  }

  return richText.build();

}
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/448944\|https://es.stackoverflow.com/q/448944]]

