---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-400.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-400/","title":"Número de preguntas y respuestas por mes","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.373-06:00","updated":"2024-04-05T16:43:58.657-06:00"}
---

# Número de preguntas y respuestas por mes

Entre los queries destacados está

[Total Questions and Answers per Month for the last 12](http://data.stackexchange.com/es/query/6134/total-questions-and-answers-per-month-for-the-last-12) el cual incluye como descripción 

> Total number of questions and answers for the last 12 months (in 30 day chunks)

Dicho query estaba dando datos incorrectos ya que incluída entre las publicaciones contadas otras publicaciones además de preguntas y respuestas.

Lo [edité](http://data.stackexchange.com/es/revision/425031/541530/total-questions-and-answers-per-month-for-the-last-12) y los números ya son más aproximados a los que se muestran en la página de inicio de SOes. La diferencia se debe a los datos en SEDE se renuevan periodicamente.


[![Estadísticas en SEDE][1]][1]


[![Estadísticas en SOes][2]][2]


El cambio fue modificar las últimas dos cláusulas `where ParentId is null`  y `where ParentId is not null` por `where PostTypeId = 1` y `where PostTypeId = 2` los cuales corresponden a preguntas y respuestas respectivamente

  [1]: https://i.stack.imgur.com/S0tNl.png
  [2]: https://i.stack.imgur.com/33nll.png

# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/400\|https://es.meta.stackoverflow.com/q/400]]

