---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-318468.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-318468/","title":"¿Cómo insertar variable en mailto usando Google Apps Script en Google Sheets?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:56.479-06:00"}
---

# ¿Cómo insertar variable en mailto usando Google Apps Script en Google Sheets?

Lo primero que debes saber es que Google Apps Script está basado en JavaScript.
Luego debes saber de cadenas, concatenación, escapado de caracteres y HTML, particularmente la creación de hipervínculos (enlaces) de tipo `mailto`.

Cambia la siguiente parte de de tu código

    "<a href=mailto:'correo'?Subject=ASUNTO>Contesta desde aquí</a>"


por

    "<a href=\"mailto:" + correo + "?Subject=ASUNTO\">Contesta desde aquí</a>"

Nótese que se han agregado `\"` (comilla doble escapada) y reemplazado `'correo'` por `" + correo + "` ( en JavaScript el signo más se usa para concatenar cadenas de texto ).

Referencias

- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String
- https://developer.mozilla.org/es/docs/Web/HTML/Elemento/a
- https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/318468\|https://es.stackoverflow.com/q/318468]]

