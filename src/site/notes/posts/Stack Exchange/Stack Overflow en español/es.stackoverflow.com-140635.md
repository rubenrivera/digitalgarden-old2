---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-140635.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-140635/","title":"¿Cómo transferir la propiedad de un archivo automáticamente?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.001-06:00"}
---

# ¿Cómo transferir la propiedad de un archivo automáticamente?

Usando cuentas de usuario regular sólo se pueden cambiar el propietario de los archivos de los editores de Google (Documentos, Hojas de Cálculo, Presentaciones, Dibujos, Scripts) pero no archivos "cargados" (PDF, DOCX, PNG, MP3, etc,)

En el caso de archivos de los editores de Google, usando cuentas regulares sólo el propietario, ya sea de forma manual o mediante un script, sólo propietario puede hacer el cambio de propietario.

Usando cuentas de G Suite y "[domain-wide authority delegation][1]" (¿"delegación de autoridad a nivel dominio" ?) es posible hacer el cambio de propietario de un usuario a otro usuario del dominio pero no es posible de un usuario de un dominio ajeno a otro usuario del propio dominio ni viceversa.

Una alternativa es hacer copias de los archivos de los que no se es propietario.


  [1]: https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/140635\|https://es.stackoverflow.com/q/140635]]

