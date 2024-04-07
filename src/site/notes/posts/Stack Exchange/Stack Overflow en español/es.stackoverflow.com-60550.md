---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-60550.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-60550/","title":"Encontrar primer y último mes con valores distintos a 0","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:49.865-06:00"}
---

# Encontrar primer y último mes con valores distintos a 0

# Fórmulas de matriz

> NOTA: Luego de escribir la fórmula, oprimir <kbd>CTRL</kbd> + <kbd>Mayúsculas</kbd> + <kbd>Intro</kbd>

Inicio: `=INDEX(C1:N1,,MIN(IF(C2:N2>0,COLUMN(C2:N2)-2,13)))`  

> NOTA: Se ha indicado `13` como valor para FALSO asumiendo que siempre habrá un mes con un valor mayor que `0`.

Fin: `=INDEX(C1:N1,,MAX(IF(C2:N2>0,COLUMN(C2:N2)-2,0)))`

> NOTA: Se ha indicado `0` como valor para FALSO asumiendo que siempre habrá un mes con un valor mayor que `0`.

# Referencia

- [Crear una fórmula de matriz][1]


  [1]: https://support.office.com/es-es/article/Crear-una-f%C3%B3rmula-de-matriz-e43e12e0-afc6-4a12-bc7f-48361075954d

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/60550\|https://es.stackoverflow.com/q/60550]]

