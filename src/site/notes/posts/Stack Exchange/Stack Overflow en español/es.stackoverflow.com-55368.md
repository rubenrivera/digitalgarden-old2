---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-55368.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-55368/","title":"Macro outlook, automatizar correo electronico","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:49.522-06:00"}
---

# Macro outlook, automatizar correo electronico

Primero asigna un recordatorio al mensaje. Para detalles consulta [Agregar o quitar un aviso para un mensaje de correo electrónico o contacto][1]. 

Para que automáticamente se realice una acción luego de occurrido el evento de recordatorio, usa [Application.Reminder][2].

Ejemplo tomado del enlace (he eliminado saltos de línea para ahorrar espacio)

> En este ejemplo de Microsoft Visual Basic para aplicaciones (VBA) se
> muestra el elemento que desencadena el evento **Reminder** cuando se
> desencadena el evento. El código de ejemplo debe ubicarse en un módulo
> de clase y se debe llamar a la rutina de Initialize_handler antes de
> que el procedimiento de evento puede ser llamado por Microsoft
> Outlook.
> 
>     Dim WithEvents myolapp As Outlook.Application 
>   
>     Sub Initialize_handler() 
>      Set myolapp = Outlook.Application      
>     End Sub 
> 
>     Private Sub myolapp_Reminder(ByVal Item As Object) 
>      Item.Display 
>     End Sub


  [1]: https://support.office.com/es-es/article/Agregar-o-quitar-un-aviso-para-un-mensaje-de-correo-electr%C3%B3nico-o-contacto-ae5bc786-d60b-476f-ac63-7b94cc5a4f42?ui=es-ES&rs=es-ES&ad=ES
  [2]: https://msdn.microsoft.com/es-mx/library/office/ff870058.aspx

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/55368\|https://es.stackoverflow.com/q/55368]]

