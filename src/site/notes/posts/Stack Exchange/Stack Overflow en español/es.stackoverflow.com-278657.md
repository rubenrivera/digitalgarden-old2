---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-278657.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-278657/","title":"Cómo cargar dinámicamente el cálculo de ruta del mapa","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:55.572-06:00"}
---

# Cómo cargar dinámicamente el cálculo de ruta del mapa

El problema se debe a que la declaración de la función `calcularRuta` la has puesto dentro de la función anónima  que a su vez has puesto como argumento de `$(document).ready()` lo cual provoca que no esté disponible en el ámbito global sino sólo dentro del ámbito de la función anónima en cuestión.

Por otro lado, desde hace tiempo ya no se aconseja el uso de propiedades como `onclick`. Lo que se recomienda es crear "listeners" usando `addEventListener`.

Una forma de resolver el problema sin modificar el HTML de tu código es mover la declaración de la función al ámbito global, esto es, bórrala de donde se encuentra ahora y ponla al mismo nivel que `$(document).ready()`.

Referencia

- https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener (Nota: El artículo aún no ha sido traducido por completo al español)

Relacionado

- https://es.stackoverflow.com/q/25696/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/278657\|https://es.stackoverflow.com/q/278657]]

