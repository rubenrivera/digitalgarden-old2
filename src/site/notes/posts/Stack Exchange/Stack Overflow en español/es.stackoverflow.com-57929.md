---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-57929.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-57929/","title":"¿Cómo crear una tabla en una base de datos de MS-Access usando SQL?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:49.657-06:00"}
---

# ¿Cómo crear una tabla en una base de datos de MS-Access usando SQL?

Del [comentario][1]

> ¿Has seleccionado "Definición de datos" para el tipo de consulta? – Aprendiendo.NET 

Síntesis de la respuesta del OP: No.

Del [comentario][2]

> Entonces ese es el problema, está faltando un paso: Create > Query
> design > Data definition. En el siguiente enlace [►][3] tenés un
> ejemplo, paso a paso, para realizar una consulta de "Definición de
> datos" – [Aprendiendo.NET][4]


----------

La solución es correcta; sin embargo, en el caso particular del OP, la base de datos en Access está bloqueada como se puede apreciar en la siguiente *captura de pantalla #1*:

*Captura de pantalla #1*:
[![Captura de pantalla - base de datos bloqueada][5]][5]

Para ejecutar el script correctamente, es necesario:

 1. Cerrar la ventana modal "marcada con texto rojo" *(según la imagen)*.
 2. Habilitar el contenido *(ver captura de pantalla #2)*:

*Captura de pantalla #2*:
[![Captura de pantalla #2 - habilitar contenido][6]][6]

 3. Es posible que después de este cambio, deba cerrar la base de datos y Microsoft Access para guardar los cambios.
 4. Abrir nuevamente la base de datos y realizar los pasos descritos en el enlace.

  [1]: https://es.stackoverflow.com/questions/24334/c%C3%B3mo-crear-una-tabla-en-una-base-de-datos-de-ms-access-usando-sql/57927#comment39476_24334
  [2]: https://es.stackoverflow.com/questions/24334/c%C3%B3mo-crear-una-tabla-en-una-base-de-datos-de-ms-access-usando-sql/57927#comment39660_24334
  [3]: http://www.addictivetips.com/microsoft-office/create-tables-in-access-2010-using-sql-commands/
  [4]: https://es.stackoverflow.com/users/10998/aprendiendo-net
  [5]: https://i.stack.imgur.com/Sjm2E.png
  [6]: https://i.stack.imgur.com/JS8jI.png

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/57929\|https://es.stackoverflow.com/q/57929]]

