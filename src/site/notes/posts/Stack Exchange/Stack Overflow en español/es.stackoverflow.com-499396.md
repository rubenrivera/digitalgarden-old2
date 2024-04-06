---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-499396.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-499396/","title":"Copiar URL de un formulario completado de google forms para poder editarlo posteriormente desde una lista en pagina web","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.573-06:00"}
---

# Copiar URL de un formulario completado de google forms para poder editarlo posteriormente desde una lista en pagina web

Justo ayer publiqué una respuesta a una pregunta con cierta similitud en inglés... Aunque ya encontraste la solución para el caso específico del error, me parece apropiado compartir lo siguiente:

El problema de leer el *timestamp* en la hoja de cálculo de Google es que este tiene una precisión de segundos siendo que desde hace tiempo los formularios de Google internamente usan una precisión de milisegundos. Esto lo puedes comprobar usando [FormApp.FormResponse.getTimestamp()][1]

Una solución algo riesgosa si esperas muchos usuarios que envíen respuestas de forma casi simultánea es obtener los timestamp y "redondear" el timestamp a segundos, pero seguramente será menos riesgos hacer la relación de las repuestas en la hoja de cálculo con las del formulario con base en el orden en que se encuentran, sólo asegúrate que en la hoja la hoja de cálculo le orden sea con base en el *timestamp* de forma ascendente.


  [1]: https://developers.google.com/apps-script/reference/forms/form-response

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/499396\|https://es.stackoverflow.com/q/499396]]

