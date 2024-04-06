---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-528097.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-528097/","title":"Contador en html y JavaScript","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:57.716-06:00"}
---

# Contador en html y JavaScript

El problema se debe a que el código usa una variable global pero esta no es reinicializada por la función `handleFormSubmit`. Una manera sencilla de resolverlo es al siguiente:

```
function handleFormSubmit(formObject){
clicks = 0;
document.getElementById("clicks").value = clicks;
}

```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/528097\|https://es.stackoverflow.com/q/528097]]

