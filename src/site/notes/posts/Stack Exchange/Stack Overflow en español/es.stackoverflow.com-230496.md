---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-230496.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-230496/","title":"Mi script solo funciona en mi usuario","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:54.579-06:00"}
---

# Mi script solo funciona en mi usuario

Tu código tiene al menos un error

    e.Value

debería ser

    e.value

Lo anterior ocurre porque Google Apps Script es sensible a mayúsculas y minúsculas. El objeto evento tiene una propiedad `value`, no `Value`.

Para depurar tu código y encontrar este y posiblemente otros errores sigue las recomendaciones que se dan en https://es.stackoverflow.com/q/505/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/230496\|https://es.stackoverflow.com/q/230496]]

