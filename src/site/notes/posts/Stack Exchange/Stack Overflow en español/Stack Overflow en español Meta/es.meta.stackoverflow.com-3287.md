---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-3287.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-3287/","title":"Alerta muestra texto no decodificado al hacer clic a botón \"¡Esto resolvió mi problema!\"","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.374-06:00","updated":"2024-04-05T16:44:02.693-06:00"}
---

# Alerta muestra texto no decodificado al hacer clic a botón "¡Esto resolvió mi problema!"

Al hacer clic al botón ¡Esto resolvió mi problema! en una pregunta que fue votada para cerrar como duplicado de otra, se muestra una alerta con el siguiente téxto:

`Esto marcar&#225; tu pregunta como un duplicado, lo que redirigir&#225; a futuros lectores hacia la pregunta original y evitar&#225; que se publiquen futuras respuestas aqu&#237;.`

Nótese que:

- `&#225;` es &#225;
- `&#237;` es &#237;

Debería mostrarse de la siguiente forma

>Esto marcar&#225; tu pregunta como un duplicado, lo que redirigir&#225; a futuros lectores hacia la pregunta original y evitar&#225; que se publiquen futuras respuestas aqu&#237;.

<sub>Nota: El problema es que que las alertas usan texto plano y no HTML. <strike>Seguramente esto se debe a un cambio en la forma en la que se muestra el aviso al usuario</strike>.</sub>

Esta cadena si está en Transifex / traducir.win

<hr>
Reportado en MSE

https://meta.stackexchange.com/q/309124/289691

<hr>

Para validar que se ha corregido, fedorqui amablemente ha marcado como duplicada. 

En lugar de la alerta con el problema, ahora se muestra un aviso en azul directamente en la página de la pregunta, al seleccionar Sí y hacer clic en enviar se muestra el aviso siguiente:

[![][1]][1]


  [1]: https://i.stack.imgur.com/Q3nSL.png

# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/3287\|https://es.meta.stackoverflow.com/q/3287]]

