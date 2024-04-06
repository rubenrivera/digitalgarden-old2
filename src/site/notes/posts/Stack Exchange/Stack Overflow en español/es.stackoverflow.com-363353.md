---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-363353.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-363353/","title":"Como hago para que me retorne el valor en numero y no la palabra Range?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:56.690-06:00"}
---

# Como hago para que me retorne el valor en numero y no la palabra Range?

Debes usar `getValue()` / `getDisplayValue()`

El primero te devolverá un valor de tipo número, texto o fecha.

El segundo te devolverá un valor de tipo texto.

Por ejemplo, reemplaza 

    Logger.log(coil);

Por 

    Logger.log(coil.getValue());

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/363353\|https://es.stackoverflow.com/q/363353]]

