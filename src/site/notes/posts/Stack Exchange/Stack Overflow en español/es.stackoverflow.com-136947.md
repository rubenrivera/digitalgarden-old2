---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136947.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136947/","title":"¿Por que IE8 no me reconoce el evento .Click de JavaScript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:52.991-06:00"}
---

# ¿Por que IE8 no me reconoce el evento .Click de JavaScript?

Probablemente esté relacionado con un bug de IE 8 que tiene que ver con el color del fondo.

Dejo la cita textual, fuente: https://developer.mozilla.org/en-US/docs/Web/Events/click#Browser_compatibility

> ## Browser compatibility   
> ### Internet Explorer 
> Internet Explorer 8 & 9 suffer
> from a bug where elements with a computed background-color of
> transparent that are overlaid on top of other element(s) won't receive
> click events. Any click events will be fired at the underlying
> element(s) instead. See this live example for a demonstration.
> 
> ## Known workarounds for this bug:
> 
> For IE9 only: Set background-color: rgba(0,0,0,0) Set opacity: 0 and
> an explicit background-color other than transparent  
> For IE8 and IE9: Set filter: alpha(opacity=0); and an explicit background-color other
> than transparent


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136947\|https://es.stackoverflow.com/q/136947]]

