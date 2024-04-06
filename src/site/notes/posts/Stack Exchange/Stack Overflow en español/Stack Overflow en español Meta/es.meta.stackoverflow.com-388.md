---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-388.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-388/","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.373-06:00","updated":"2024-04-05T16:43:58.646-06:00"}
---

---
title: SEDE: Bug que lleva a confusión sobre estadísticas de SOes
Site: Stack Overflow Meta en español
Stack Exchange Post ID: 388
Stack Exchange Type: Question
Stack Exchange Post Created: 16/01/16 1:11
Stack Exchange Post Last Edit: 11/06/20 10:53
Stack Exchange Edited By: Comunidad (-1)
Score: 0
Favorites: 
Views: 85
Answers: 2
CW: 
Closed: 
---
# SEDE: Bug que lleva a confusión sobre estadísticas de SOes

# En breve

Al acceder a queries en SEDE se muestra en la parte superior el favicon de SOes y en switch sites el favicon de meta SOes, o viceversa, cuando debería ser el mismo el que se mostrara en ambos.

Hay un bug porque al menos hay dos queries distintos en los que pasa lo mismo.

# Caso 1
En relación a la conmemoración del primer mes de SOes y quise revisar las estadísticas así que visité Stack Exchange Data Explorer (SEDE) por primera vez en los últimos meses.

En la página se inicio de SEDE se indica los siguientes números

[![Stack Overflow en español en página de inicio de SEDE][1]][1]

De ahí le dí click y navegando los queries destacados dí con [Total Questions and Answers per Month for the last 12](http://data.stackexchange.com/es/query/6134/total-questions-and-answers-per-month-for-the-last-12), el cual me mostró lo siguiente:

[![Total Questions and Answers per Month for the last 12][2]][2]

Recorté la gráfica y la subí a [mi respuesta](https://es.meta.stackoverflow.com/a/350/65) a https://es.meta.stackoverflow.com/questions/348/la-problem%C3%A1tica-de-los-temas-en-soes-y-la-inactividad-del-sitio. Gracias un comentario de JuanK me parcaté de que algo raro ocurre.

Cerca de la esquina superior derecha se muestra el log de SOes,

[![Compose query][3]][3]

Pero justo abajo del query se muestra el logo de Meta de SOes

[![Switch sites][4]][4]


# Caso 2

JuanK nos comparte un query en [su respuesta](https://es.meta.stackoverflow.com/a/387/65) a https://es.meta.stackoverflow.com/questions/386/n%C3%BAmero-de-preguntas-y-respuestas-por-mes, pero también ocurre algo extraño.

El siguiente URL incluye /es/ de lo cual infiero que los números corresponden a SOes.

http://data.stackexchange.com/es/query/424312/number-of-questions-and-answers-per-month-in-a-given-yyyy-mm-range?start=%272015%2F10%27%20&end=%272016%2F01%27

[![es][5]][5]

El siguiente URL incluye /esme/ de lo cual infiero que los números corresponden a Meta de SOes.

http://data.stackexchange.com/esme/query/424312/number-of-questions-and-answers-per-month-in-a-given-yyyy-mm-range?start=%272015%2F10%27+&end=%272016%2F01%27

[![esme][6]][6]
# Referencias

- https://es.meta.stackoverflow.com/questions/374/un-mes-de-beta-publico-ahora-qu%C3%A9


  [1]: https://i.stack.imgur.com/E77DN.png
  [2]: https://i.stack.imgur.com/7JpUf.png
  [3]: https://i.stack.imgur.com/W7oeO.png
  [4]: https://i.stack.imgur.com/x4pV6.png
  [5]: https://i.stack.imgur.com/YaNmi.png
  [6]: https://i.stack.imgur.com/ZchkI.png

# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/388\|https://es.meta.stackoverflow.com/q/388]]

