---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-469560.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-469560/","title":"Cómo disparo una función con google forms?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:57.428-06:00"}
---

# Cómo disparo una función con google forms?

Podría ser que el que no encuentres un error se deba a un bug de Google Apps Script que en ciertos casos no se registran los errores cuando se usa el proyecto predeterminado de Google Cloud Platform y el runtime V8.

Para ver los errores podrías intentar cambiar el runtime para usar el antiguo (Rhino) o bien crear un proyecto de Google Cloud Platform estándar.

Por otro lado, los activadores cuenta con el envío del mensaje de error por correo electrónico de forma predeterminada, sólo que el envío es sólo una vez al día, pero es posible cambiar la frecuencia a inmediatamente. Este ajuste no se puede hacer mediante código, sólo mediante la interface web, para esto 

1. Abre el proyecto de Apps Script
2. Ve a la página de activadores del proyecto
3. Edita el activador
4. Modifica la configuración de la notificación y guarda.

En cuanto a tu código, este tiene un problema, no es posible llamar `getUi()` desde un activador "on form submit", así que debes quitar la línea

    SpreadsheetApp.getUi().alert("El formulario ha sido enviado exitosamente");

Quitando esa línea ya debería funcionar tu script.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/469560\|https://es.stackoverflow.com/q/469560]]

