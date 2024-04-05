---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-430302.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-430302/","title":"Crear un botón que onClick envíe un email","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.120-06:00"}
---

# Crear un botón que onClick envíe un email

Me parece que has escogido un código "bastante" complicado para alguien que está empezando con Google Apps Script y HTML ya que está usando de un vue.js no de the JavaScript "puro" / "vainilla".


Ejemplo mínimo

Te sugiero empezar con el siguiente ejemplo que muestra el código del lado del servidor y del lado del cliente para una aplicación web que muestra un botón que al hacer click en él enviará un mensaje de correo electrónico.

Por simplicidad y debido que esto está enfocado a principiantes se hace uso del atributo `onclick` en lugar de una "event listener".

Código.gs

```
function doGet(e){
  return HTMLService.createHtmlOutputFromFile('index');
}

function sendEmail(){
  const recipient = 'alguien@example.com';
  const asunto = 'Envío de mensaje usando Google Apps Script';
  const body = 'Poner aquí el texto del cuerpo del mensaje'; 
  MailApp.sendEmail(recipient,subject,body);
}
```

index.html
```
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
     <button onclick="google.script.run.sendEmail()">Enviar email</button>
  </body>
</html>
```

Para utilizar el código anterior deberá primero ser publicado como aplicación web. Para esta tarea en lo personal prefiero el uso del editor anterior pues nos permite fácilmente reutilizar el mismo URL cuando se hagan cambios a la aplicación.

Cuando logres que el botón funcione te sugiero intentar incluir un `<form>...</form>` . En la documentación oficial se incluye un ejemplo completo (abajo se incluyen los enlaces)

Recursos

- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/guides/html/communication#forms

Relacionado

- https://es.stackoverflow.com/q/99483/65
- https://es.stackoverflow.com/q/142784/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/430302\|https://es.stackoverflow.com/q/430302]]

