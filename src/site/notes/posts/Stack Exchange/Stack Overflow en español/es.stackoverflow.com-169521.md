---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-169521.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-169521/","title":"onEdit varias hojas","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.970-06:00"}
---

# onEdit varias hojas

>Adaptación de mi publicación en https://productforums.google.com/d/msg/docs-es/n_u7ih1wH2U/7vz8Gbs0AAAJ

No me queda claro que es lo que quieres lograr, pero en relación a tener varios onEdit, te comparto lo siguiente:

1. En Google Apps Script / JavaScript un concepto importante es el ámbito. De forma muy general, están el ámbito global y el ámbito del objeto.
2. Todos los archivos en un proyecto de Google Apps Script comparten el mismo ámbito global
3. Por lo anterior y dado que los archivos se cargan uno a uno en un orden que sólo Google sabe, si defines varias funciones con el mismo nombre, sólo entrará en efecto la cargada al último.

No relacionado directamente con la pregunta, pero igual te puede servir para mejorar tu script: es mas eficiente usar event.range en lugar de event.source.getActiveRange() ya que te ahorras una llamada a los servicios de Google Apps Script lo cual es recomendable para minimizar el tiempo de ejecución. 


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/169521\|https://es.stackoverflow.com/q/169521]]

