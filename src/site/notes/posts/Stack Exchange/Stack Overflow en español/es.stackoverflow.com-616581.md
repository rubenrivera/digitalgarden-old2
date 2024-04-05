---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-616581.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-616581/","title":"Como disminuir en apps script tiempo de ejecución de una función cuando debes llamar continuamente a slidesApp y a SpreadsheetApp","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:48.274-06:00"}
---

# Como disminuir en apps script tiempo de ejecución de una función cuando debes llamar continuamente a slidesApp y a SpreadsheetApp

El código incluye varias veces `slides.getShapes()`. Declara una variable a la que asignes el resultados de dicha expresión y usa dicha variable en lugar de repetir la expresión tantas veces.

Ejemplo de declaración de variable:

Nota: debes ponerla después de la declaración de `slides` antes de llamarla.

```
const shapes = slides.getShapes();
```
luego, en lugar de un enunciado como el siguiente:

```
var obj = slide.getShapes().filter(s => s.getObjectId() == norteAmericatextId);
```

usa

```
var obj = shapes.filter(s => s.getObjectId() == norteAmericatextId);
```


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/616581\|https://es.stackoverflow.com/q/616581]]

