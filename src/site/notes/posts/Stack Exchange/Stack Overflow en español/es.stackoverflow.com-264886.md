---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-264886.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-264886/","title":"Repetir trigger ejecutado al minuto de producirse","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:55.356-06:00"}
---

# Repetir trigger ejecutado al minuto de producirse

Como deseas que se ejecute un minuto después, en lugar de usar un activador usa

    Utilities.sleep(60000)

Esto porque la hora en la que se ejecuta un activador programado tiene una variación de +/- 15 minutos.

Para esto, se podría usar una función "orquestadora" que llame tu función, el comando indicado y luego vuelva a llamar tu función, por ejemplo, algo así:

    function director(){
      myFunction();
      Utilities.sleep(60 *1000);
      myFunction();
    }

Deberás cambiar tu activador al editar la hoja de cálculo para que en lugar de llamar `myFunction` llame `director`. Si procedes de esta forma `createTimeDrivenTriggers` no se requiere.

<hr>
Traducción de https://developers.google.com/apps-script/reference/script/clock-trigger-builder#after(Integer)

>**after(durationMilliseconds)**
>
>Especifica la duración (en milisegundos) después de la hora actual en la que el activador será ejecutado ( más / menos 15 minutos)
>
>````// Creates a trigger that will run 10 minutes later
>ScriptApp.newTrigger("myFunction")
  .timeBased()
  .after(10 * 60 * 1000)
  .create();


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/264886\|https://es.stackoverflow.com/q/264886]]

