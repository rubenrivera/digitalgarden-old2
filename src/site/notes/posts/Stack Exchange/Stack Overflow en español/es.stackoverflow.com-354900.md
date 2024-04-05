---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-354900.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-354900/","title":"Cómo renderizar varias listas html con Apps Script?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:56.601-06:00"}
---

# Cómo renderizar varias listas html con Apps Script?

Si no vas a hacer uso de scriptlets, en lugar de `createTemplateFromFile` usa `createHtmlOutputFromFile` 

Observaciones adicionales:

Aparentemente sale sobrando `getTemplate` pues no es llamada en ninguna otra parte del código. 

En el siguiente código llamas `readAreaPRE` pero este no se incluye en la pregunta

    window.onload = function () {
            google.script.run
            .withSuccessHandler(run_This_On_Success)
            .withFailureHandler(onFailure)
            .readAreaPRE();
    };

Como se mencioné en comentarios el código está incompleto como para darte una respuesta más específica.

Relacionado

- https://es.stackoverflow.com/q/13811/65
- https://es.stackoverflow.com/q/99483/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/354900\|https://es.stackoverflow.com/q/354900]]

