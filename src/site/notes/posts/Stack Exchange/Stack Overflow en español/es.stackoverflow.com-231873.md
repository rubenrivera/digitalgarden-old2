---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-231873.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-231873/","title":"¿Cómo filtrar texto en un body de google docs para cambiar su estilo?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:54.648-06:00"}
---

# ¿Cómo filtrar texto en un body de google docs para cambiar su estilo?

En el siguiente ejemplo en lugar de usar `body.getText();` estoy usando `paragraphs[i].editAsText();` con la finalidad de que el cambio se aplique al texto de cada párrafo y he agregado la condición de que sólo se aplique el formato de texto a los párrafos que inicien empaten con el siguiente patrón: `\.*{`.


    function myFunction() {
      var doc = DocumentApp.getActiveDocument();
      var body = doc.getBody();
      var paragraphs = body.getParagraphs();
      // Define a custom paragraph style.
      var style = {};
      style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
        DocumentApp.HorizontalAlignment.RIGHT;
      style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
      style[DocumentApp.Attribute.FONT_SIZE] = 18;
      style[DocumentApp.Attribute.BOLD] = true;
      var searchPattern1 = '\.*{';
      var searchPattern2 = '}';
      for(var i = 0; i < paragraphs.length; i++){
        var text = paragraphs[i].editAsText();
        if(text.findText(searchPattern1)){
          text.replaceText(searchPattern1, '');
          text.replaceText(searchPattern2, '');
          text.setAttributes(style);
        }
      }
      doc.saveAndClose();
    }

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/231873\|https://es.stackoverflow.com/q/231873]]

