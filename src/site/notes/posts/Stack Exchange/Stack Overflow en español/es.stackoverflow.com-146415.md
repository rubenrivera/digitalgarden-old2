---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-146415.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-146415/","title":"Agregar secuencia de comandos de Apps en Google sites","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:53.243-06:00"}
---

# Agregar secuencia de comandos de Apps en Google sites

La pregunta tienes dos partes

1. En la página de secuencias de comandos del sitio no se muestran los nombres de los proyectos de secuencia de comandos
2. Aviso "Esta aplicación ha sido creada por otro usuario, no Google".

Sobre la **primera parte**, he podido reproducir el problema.

Inspeccionando el código de la página encontré que la liga al script existe pero el texto del "anchor" está vacío.

Una solución provisional es abrir el script desde https://script.google.com donde se puede encontrar por nombre, dueño y/o fecha de modificación.

Otra solución provisional es usar las herramientas de desarrollador del navegador por ejemplo para asignar un texto al enlace o extraer el URL.

Nota:

En el foro oficial de ayuda (en inglés) existen varios reportes similares de fechas recientes, pero al momento no tienen una respuesta que indique una solución o forma de proceder. 

Algunos reportes en el foro oficial de ayuda de Google Sites son los siguientes:

- https://productforums.google.com/forum/#!topic/sites/QiXpr9ZOu8s 6 de marzo
- https://productforums.google.com/forum/#!topic/sites/Z3jXgEoyubw 28 de febrero

Sobre la **segunda parte**, el aviso en cuestión ya tiene años que se muestra, esto ocurre tanto con aplicaciones web de proyectos vinculados (bounded) a un contenedor (sitio, documento, hoja de cálculo, presentación) como en proyectos independientes (stand alone).

Aquí una pregunta en Stack Overflow en inglés con fecha del 2015 

- [Google Apps Script remove warning banner](https://stackoverflow.com/q/33635284/1595451)

En la respuesta a la pregunta citada, se indica que esa alerta se muestra en cuentas gratuitas y la única forma de evitarla es usando una cuenta de G Suite. En otra respuesta se menciona un truco que es colocar la aplicación en un iframe y desfasarla para que la alerta quede oculta.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/146415\|https://es.stackoverflow.com/q/146415]]

