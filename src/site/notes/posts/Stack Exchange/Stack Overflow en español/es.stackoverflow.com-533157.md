---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-533157.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-533157/","title":"Evento onclick no llama a función","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:57.721-06:00"}
---

# Evento onclick no llama a función

`google.script.run` es asíncrono así que es muy probable `google.script.host.close()` se esté ejecutando antes de que la función `CrearParrafosV4` sea ejectutada.

Una solución simple sería reemplazar

```
 google.script.run.CrearParrafosV4(texto,cantidad);
 google.script.host.close();
```

por

```
 google.script.run
 .withSuccessHandler( () => google.script.host.close())
 .CrearParrafosV4(texto,cantidad);
 
```

Relacionado

- https://es.stackoverflow.com/q/429999/65
- https://es.stackoverflow.com/q/441853/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/533157\|https://es.stackoverflow.com/q/533157]]

