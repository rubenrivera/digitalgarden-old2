---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-468932.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-468932/","title":"¿Cómo entro a una carpeta u obtengo el id de una carpeta creada?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:57.403-06:00"}
---

# ¿Cómo entro a una carpeta u obtengo el id de una carpeta creada?

reemplaza

    path.createFolder(actualSheetName + " 14");

por

    var carpetaCreada = path.createFolder(actualSheetName + " 14");

Para obtener el `id` de la carpeta creada, en lugar de

    var id = path.getId();

usa

    var id = carpetaCreada.getId();


    

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/468932\|https://es.stackoverflow.com/q/468932]]

