---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-84551.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-84551/","title":"Como Hacer click a un boton web desde excel que no tiene ni id, ni name?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.718-06:00"}
---

# Como Hacer click a un boton web desde excel que no tiene ni id, ni name?

El código tiene dos errores


En lugar de 

    IE.document.getElementsByClassName("btn-primary")(0).click

deber ser

    IE.document.getElementsByClassName("btn-primary")(0).Click

> Nótese el uso de mayúscula inicial en `Click`.

y en lugar de 

    Application.Wait (Now + TimeValue("0:00:1000"))

deber ser

    Application.Wait (Now + TimeValue("0:00:10"))

Por cierto, lo probé en Excel 2016.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/84551\|https://es.stackoverflow.com/q/84551]]

