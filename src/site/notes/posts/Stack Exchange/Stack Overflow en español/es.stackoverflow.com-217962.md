---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-217962.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-217962/","title":"¿Cómo hacer una celda en la que se guarda la fecha de modificación de un rango concreto de celdas?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:54.525-06:00"}
---

# ¿Cómo hacer una celda en la que se guarda la fecha de modificación de un rango concreto de celdas?

> Lo único que me falla es que me pone 1h de menos haga lo que haga.

Lo más probable es que esto se deba a que tu hoja de cálculo tiene una zona horaria distinta a la indicada en 

    var curDate = Utilities.formatDate(new Date(), "UTC+1", "hh:mm")

En [Configurar la ubicación regional y los ajustes de cálculo de una hoja de cálculo](https://support.google.com/docs/answer/58515?hl=es) se explica como consultar/modificar la zona horaria de tu hoja de cálculo.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/217962\|https://es.stackoverflow.com/q/217962]]

