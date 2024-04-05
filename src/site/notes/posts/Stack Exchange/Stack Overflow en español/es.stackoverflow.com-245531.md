---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-245531.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-245531/","title":"Como puedo llamar a una función en el Método OnOpen() de Google Apps Script?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:55.027-06:00"}
---

# Como puedo llamar a una función en el Método OnOpen() de Google Apps Script?

onOpen es el nombre reservado la el activador simple que se ejecuta al abrir el contenedor (documento, hoja de cálculo, presentación, editor de formulario).

Los activadores simples como onOpen y onEdit se ejecutan prácticamente de forma anónima, por lo que no pueden ejecutar servicios que requieran autorización implícita. Las alternativas son utilizar un activador instalable o bien llamar esos servicios que requieren autorización usando OAuth.

Hace poco Google cambió la forma de crear los activadores instalables, ahora se crean desde https://script.google.com > *Proyecto* > Activadores. También puedes acceder esta página desde el IDE haciendo clic en el menú Editar > Activadores del Proyecto Activo. El botón Añadir activador se encuentra en la esquina inferior derecha y el enlace para hacer lo mismo en la parte inferior (dependiendo del tamaño de la ventana lo verás en el centro o más cerca de la derecha).

[![][1]][1]

En mi opinión en casos como este lo más práctico es usar un activador instalable.

Relacionado

- https://es.stackoverflow.com/q/505/65

Referencias

- https://developers.google.com/apps-script/guides/triggers/
- https://developers.google.com/apps-script/guides/triggers/installable

  [1]: https://i.stack.imgur.com/h27jl.png

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/245531\|https://es.stackoverflow.com/q/245531]]

