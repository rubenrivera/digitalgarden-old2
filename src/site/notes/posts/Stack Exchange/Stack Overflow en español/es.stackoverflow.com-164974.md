---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-164974.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-164974/","title":"Cómo actualizar tabla en un div con editor de secuencia de comandos (GAS)","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.846-06:00"}
---

# Cómo actualizar tabla en un div con editor de secuencia de comandos (GAS)

Para actualizar el HTML cuando se modifica una hoja de cálculo debes refrescar la hoja de cálculo o bien incluir algo que llame de nuevo 

     google.script.run.withSuccessHandler(checkAdmin).getDataRecogidas();

Por ejemplo, podrías poner un temporizador que esté consultando la fecha de última edición de la hoja de cálculo y si esa fecha es más reciente que la última vez que se efectuó la actualización ejecutarla.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/164974\|https://es.stackoverflow.com/q/164974]]

