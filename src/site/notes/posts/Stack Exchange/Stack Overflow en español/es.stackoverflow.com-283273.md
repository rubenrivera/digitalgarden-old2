---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-283273.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-283273/","title":"¿Porqué getElementsByClassName no se puede combinar con getElementsByTagName?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:55.779-06:00"}
---

# ¿Porqué getElementsByClassName no se puede combinar con getElementsByTagName?

No se puede porque `getElementsByClassName` devuelve una `HTMLCollection` y este tipo de objeto no cuenta con la función `getlElementsByTagName` entre sus propiedades.

Para que se pueda podrías usar un bucle para iterar por cada uno de los elementos del `HTMLCollection`, por ejemplo

    var enlacesSidebar = document.getElementByClassName('sidebar');
    for(var i = 0; enlacesSidebar.length; i++){
      var anchorsSidebar = enlacesSidebar[i].getElementsByTagName('a');
      // lo que vayas a hacer con los anchors
    }

Quizás en lugar de declarar la variable `anchorsSidebar` dentro del bucle y hacer la asignación, podrías crear un `Array` que donde pongas todos los elementos  del `HTMLCollection` resultado de `getElementsByTagName` pero eso dependerá de lo que quieras hacer con ellos.

Referencia

* [ElementsByClassName](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName)


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/283273\|https://es.stackoverflow.com/q/283273]]

