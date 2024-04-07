---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-447148.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-447148/","title":"Actualizar filas automáticamente que contengan una formula","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:57.290-06:00"}
---

# Actualizar filas automáticamente que contengan una formula

`TRAERDATOS` es una función personalizada. Este tipo de funciones se recalculan cuando al menos uno de sus parámetros cambia.

Considerando lo anterior podrías agregar un parámetro que sirva para indicar que se debe recalcular, por ejemplo, `=TRAERDATOS(A1)`, entonces sólo tienes que cambiar el valor de A1 para hacer que `TRAERDATOS` se recalcule.

Ya sea que apliques lo anterior o decidas continuar usando tu función que reescribe la formula, para actualizar periódicamente use un activador basado en tiempo (time-driven trigger). Para esto, 

1. Abre tu proyecto en el editor de secuencia de comandos
2. En el panel de la izquierda, haz click en Activadores (tiene un ícono de un relog). Esto abrirá la página de activadores del proyecto activo.
3. En la página de activadores del proyecto activo haz clic en **Agregar activador**
4. En el diálogo, selecciona la función a ejecutar, en el tipo de activador selecciona basado en tiempo, y luego los parámetros correspondientes para establecer la frecuencia.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/447148\|https://es.stackoverflow.com/q/447148]]

