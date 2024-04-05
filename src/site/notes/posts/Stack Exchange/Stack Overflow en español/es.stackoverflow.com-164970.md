---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-164970.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-164970/","title":"¿Cómo enviar un correo de respuesta automática de un formulario?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.809-06:00"}
---

# ¿Cómo enviar un correo de respuesta automática de un formulario?

El problema ocurre porque tu script está recorriendo todos los datos.

Tienes varias alternativas

1. **Mejor opción** Usa [objeto evento][1] del activador "form submit" de la hoja cálculo como argumento de tu función y en lugar de usar getDataRange usa alguna de las propiedades de dicho objeto. Tal vez lo más sencillo sea usar la propiedad range pues haciendo esto serían mínimos los cambios que deberás realizar a tu código. En mi respuesta a https://es.stackoverflow.com/q/505/65 hay un ejemplo además que trata sobre cómo probar este tipo de funciones.
2. Agrega una columna para registrar el estado de enviado y una condición para hacer que el envío ocurra sólo para las filas que no tengan dicho estado. Esto podría causar problemas si tienes envíos de respuesta simultáneos o varios usuarios modificando la hoja de cálculo.



  [1]: https://developers.google.com/apps-script/guides/triggers/events#form-submit

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/164970\|https://es.stackoverflow.com/q/164970]]

