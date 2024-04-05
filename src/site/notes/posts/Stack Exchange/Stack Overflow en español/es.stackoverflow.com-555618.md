---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-555618.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-555618/","title":"Después de enviar formulario hace validación (error)","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:57.991-06:00"}
---

# Después de enviar formulario hace validación (error)

Si estás usando Bootstrap 5, retira la clase `was-validated` del elemento form. Una forma de hacerlo es la siguiente:

```javascript
document.querySelector('form').classList.remove('was-validated');
```

Lo anterior usualmente se coloca en un callback del evento submit del elemento form que corresponda luego de haber verificado que el elemento form sea válido.
 
Nota: El código del Stack Snippet está incompleto y tiene varios problemas:

1. Se está asignando un event listener tipo click al elemento button tipo submit. Usualmente lo que se hace es usar un event listener tipo submit al elemento form.
2. El callback de del evento anterior incluye un google.script.run y después de este la confirmación de que se envió correctamente, lo cual es incorrecto porque google.script.run es asíncrono y en caso de falla se le habría mostrado al usuario una confirmación de envío correcto siendo que ha ocurrido un error. Debería utilizarse los métodos withSuccessHandler y withFailureHandler de google.script.run para controlar lo que se hace en caso de éxito y/o falla de llamada a la función del lado del servidor. 
3. Aparentemente se está usando Bootstrap, este requiere de la asignación de la clase `.was-validated` al elemento form pero el código no incluye esto.
4. No se incluye el código para agregar la hoja de estilos de Bootstrap.

La documentación de Bootstrap cuenta con varios ejemplos sobre cómo realizar la validación de formularios.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/555618\|https://es.stackoverflow.com/q/555618]]

