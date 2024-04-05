---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-50047.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-50047/","title":"Duda con tabla pivote en access","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:49.148-06:00"}
---

# Duda con tabla pivote en access

`Format([FechaCobro],"mmmm")` devuelve una cadena, es por ello que aparecen ordenados en orden alfabético. Para ordernar de acuerdo a la secuencia, deberás usar el número en lugar del nombre que corresponde a cada mes.

> NOTA: Asegurate de limitar el reporte a los datos de un sólo año o bien incluir año y mes, en lugar de sólo el mes.

Una forma de abordar casos como este, es producir el resultado deseado por partes, una para realizar los cálculos y obtener la estructura desea, en este caso una tabla pivote, y otra para reemplazar los valores numéricos de los meses por su nombre.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/50047\|https://es.stackoverflow.com/q/50047]]

