---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-57027.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-57027/","title":"Ejecutar script de Google Sheets sin ser el propietario","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:49.605-06:00"}
---

# Ejecutar script de Google Sheets sin ser el propietario

# Respuesta corta
La forma de retirar temporalmente la protección es que tu mismo lo hagas manualmente, mediante un disparador instalable o una aplicación web. Una alternativa que la actualización de datos sobre el rango protegido, se realice mediante una aplicación web configurada para ser ejecutada con permisos del propietario.

# Explicación
En este caso se trata de un proyecto de secuencias de comando (scripts) "amarrado a un contenedor", en inglés a "container bounded script". En este tipo de proyectos, los scripts se ejecutan con los permisos que tiene el usuario sobre el documento, así que el usuario no tiene permiso para editar un rango, tampoco podrá hacerlo mediante un script que forme parte del *container bounded script*.

Cabe mencionar que para ejecutar un script con los permisos del propietario, lo que se suele hacer es crear una aplicación web (web app) ya que en estas es posible determinar si serán ejecutadas con los permisos del usuario o con los del dueño del script. Obviamente, en este caso habría que configurar la web app para que sea ejecutada como los permisos del propietario.

Lamentablemente el integrar la web app con la interfaz de usuario de la hoja de cálculo no es del todo apropiada, ya que si bien es posible incluir el enlace a la aplicación web, al hacer clic en este se abre una nueva ventana o bien se modifica el contenido del diálogo modal, lo que resulta poco intuitivo.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/57027\|https://es.stackoverflow.com/q/57027]]

