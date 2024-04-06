---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-68224.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-68224/","title":"Problema con formato de fecha al transcribirlo a casilla con VBA - Excel","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:50.565-06:00"}
---

# Problema con formato de fecha al transcribirlo a casilla con VBA - Excel

Lo que está pasando es que un dato de fecha lo estás convirtiendo a texto y al pasarlo a Excel, este lo interpreta siguiendo sus propios algoritmos para ello en lo cual interviene la configuración regional del equipo del usuario. Lo mejor sería que pasaras un objeto de fecha y que usaras las opciones de formato de número de la celda para mostrar el dato en la forma que lo deseas.


Información adicional:

De acuerdo a [Tipos de datos Date][1] (énfasis mío)

> Las variables Date muestran fechas según el formato corto de fecha **reconocido por el equipo**. Las horas se muestran según el formato de hora (de 12 horas o de 24 horas) **reconocido por el equipo**.

para entender que es lo que está pasando, lo habría  que hacer es conocer la configuración regional de tu equipo, sin embargo, como la configuración de cada equipo puede variar y en un mismo equipo puede variar de un momento a otro, el uso del formato corto resulta muy poco conveniente. 


  [1]: https://msdn.microsoft.com/es-es/library/office/gg278460(v=office.15).aspx

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/68224\|https://es.stackoverflow.com/q/68224]]

