---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-1407.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-1407/","title":"Recibí notificación de comentario a mi respuesta en pregunta eliminada pero no puedo ver el comentario completo","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:59.163-06:00"}
---

# Recibí notificación de comentario a mi respuesta en pregunta eliminada pero no puedo ver el comentario completo

# Resumen

1. Bug<sup>1</sup>: El enlace a respuesta eliminada en la página de respuestas eliminadas en el perfil del usuario lleva a la pregunta no a la respuesta
2. Bug<sup>1</sup>: El URL a respuesta eliminada en cascada<sup>2</sup> devuelve error 404 página no encontrada.


NOTAS:  

- <sup>1</sup>: Le llamé bug a una característica que no funciona como me parece que es lógico esperar que funcione.   
- <sup>2</sup>: Por respuesta eliminada en cascada me refiero a que la respuesta no está disponible porque la pregunta fue eliminada, no la respuesta en sí.

# Original
El día de ayer publiqué una respuesta a una pregunta en Meta que fue eliminada ayer mismo. Recien recibí una notificación de un [comentario][1] pero no es posible verlo completo, ya que se muestra la página de error 404, no se encontró la página.


  
[![][2]][2]

Me parece que el sistema debería avisar al "comentador", quien seguramente tiene privilegios para ver publicaciones eliminadas que no todos los notificados podrán ver el comentario.

# Actualización

## 20170216
Cree una nueva pregunta en meta específica para la solicitud de característica y eliminé la misma de esta publicación.

## 20170214
Cambie el orden de las actualizaciones de la mas reciente a la mas antigua. Próximamente separaré los bugs de la solicitud de característica, porque según me dicen, esta publicación está muy confusa :D

## 20170213.3
Recién me doy cuenta que el enlace apunta a la pregunta no a la respuesta eliminada... ¡Que alguien me explique!

[![que alguien me explique  hansito][7]][7]


## 20170213.2

Recien encontré https://meta.stackexchange.com/questions/2645/ <!-- show-all-of-my-question-answers-to-me-even-if-they-are-deleted --> donde me dió la pista sobre donde buscar, la parte inferior de la página perfil-actividad-respuestas 

[![][4]][4]

la cual me llevó a  

[![][5]][5]

pero [el enlace][6] ahí incluido continua devolviendo error 404 página no encontrada

## 20170213.1 
Conversando/investigando sobre el tema averiguamos lo siguiente:

1. De acuerdo a [una respuesta][3] a https://meta.stackexchange.com/questions/161193/ <!-- how-long-can-you-see-your-own-deleted-answers/ --> el autor de las respuestas eliminadas debería poder acceder a ellas, pero para ello debería haber guardado el enlace a la respuesta, pues a los pocos minutos se elimina de su perfil-actividad
   - Se probaron los enlaces indicados a continuación, ambos redirigen:
          - https://es.meta.stackoverflow.com/a/1405/227
          - https://es.meta.stackoverflow.com/a/1405/
    
2. El url facilitado por un usuario con privilegios para ver publicaciones eliminadas me redirige al URL de la pregunta el cual me muestra error 404, página no encontrada.


  [1]: https://es.meta.stackoverflow.com/posts/comments/3796?noredirect=1
  [2]: https://i.stack.imgur.com/23km2.png
  [3]: https://meta.stackexchange.com/a/161196/289691
  [4]: https://i.stack.imgur.com/CTC34.png
  [5]: https://i.stack.imgur.com/Eksec.png
  [6]: https://es.meta.stackoverflow.com/questions/1404/se-puede-realizar-algo-contra-el-voto-serial-negativo/1405#1405
  [7]: https://i.stack.imgur.com/b1IvE.jpg

# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/1407\|https://es.meta.stackoverflow.com/q/1407]]

