---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-13635.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-13635/","title":"¿Como puedo llamar a una función al recibir un correo nuevo en Gmail con AppScript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:48.622-06:00"}
---

# ¿Como puedo llamar a una función al recibir un correo nuevo en Gmail con AppScript?

Google Apps Script (GAS) no tiene eventos para el servicio Gmail por medio del cual se pueda llamar una función al recibir un nuevo correo. 

Dependiendo de cómo manejes tu casilla de correo y lo que quieras hacer al recibir un nuevo correo podría serte de utilidad un disparador dirigido por tiempo (time-driven trigger). Por ejemplo, si aplicas un enfoque de Ningún mensaje en la bandeja de entrada (Zero inbox) podrías usar `GmailApp.getInboxThreads()` para obtener todos los mensajes que estén pendientes de ser procesados.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/13635\|https://es.stackoverflow.com/q/13635]]

