---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-1240.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-1240/","title":"Como reducir las imágenes recibidas en el cuerpo de un mensaje de Gmail usando un bookmarklet","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:48.340-06:00"}
---

# Como reducir las imágenes recibidas en el cuerpo de un mensaje de Gmail usando un bookmarklet

El siguiente [bookmarklet](https://es.wikipedia.org/wiki/Bookmarklet) reduce el tamaño de las imágenes en el cuerpo del mensaje de un correo electrónico en la interfaz web de Gmail:

    javascript:(function(){ function zoomImage(image, amt) { if(image.initialHeight == null) { /* Evitar acumular el error de redondeo */ image.initialHeight=image.height; image.initialWidth=image.width; image.scalingFactor=1; } image.scalingFactor*=amt; image.width=image.scalingFactor*image.initialWidth; image.height=image.scalingFactor*image.initialHeight; } var i,L=document.images.length; for (i=0;i<L;++i) zoomImage(document.images[i], 2); if (!L) alert("Esta página no contiene imágenes."); })();

#Referencias  

- https://www.squarefree.com/bookmarklets/pagedata.html#zoom_images_out por [Jesse Ruderman](http://www.squarefree.com/)
- [Utilizar bookmarklets para realizar rápidamente tareas comunes de la páginas web](http://mzl.la/1xKsRw2) de la Ayuda de Mozilla.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/1240\|https://es.stackoverflow.com/q/1240]]

