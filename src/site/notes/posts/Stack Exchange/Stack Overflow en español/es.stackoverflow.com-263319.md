---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-263319.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-263319/","title":"Evento del google Form de dispara 1, 2 o mas veces","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:55.331-06:00"}
---

# Evento del google Form de dispara 1, 2 o mas veces

Hay un problema similar reportado en febrero 2019 en el "issue tracker" [Form submit triggers sporadically fired multiple times with empty events](https://issuetracker.google.com/issues/124283798) (Activadores al enviar formulario esporáticamente se disparan en múltiples ocasiones con eventos vacíos) el cual sigue abierto.

Cabe aclarar que por eventos vacíos se refieren a que propiedades correspondientes a la respuestas están vacías. Si fuera el mismo caso, uno de los eventos cuenta con datos de respuestas y el resto no, la solución provisional es agregar una condición al inicio de tu función para interrumpir su ejecución.

En el comentario #19 al issue citado  para el caso de evento de formulario en un script vinculado a una hoja de cálculo sugieren lo siguiente:

    function onFormSubmit(e) {
      if (e.range.columnStart == e.range.columnEnd) return;
      
      // El resto de tu código
      // ...
    }

La condición es que si el rango de la respuestas tiene sólo una columna terminar inmediatamente.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/263319\|https://es.stackoverflow.com/q/263319]]

