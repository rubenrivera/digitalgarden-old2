---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-170123.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-170123/","title":"Puede compartirse carpetas utilizando la API Google Drive?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:54.069-06:00"}
---

# Puede compartirse carpetas utilizando la API Google Drive?

# Respuesta corta

Sí, es posible compartir carpetas

# Respuesta extendida

Google Drive maneja los archivos y carpetas de forma diferente a otras herramientas tales como FTP, Microsoft OneDrive, Dropbox, entre otros, por lo los programadores interesados en deberían valorar que tan habituados están a la forma de trabajar de las otras herramientas y de ser necesario dedicar tiempo a estudiar el modelo de Google Drive API así como las aplicaciones para usuario final de la plataforma Google Drive y las cuentas de Google.

En Google Drive API los archivos y carpetas son manejados con la clase [file][1]. Enfatizo, 

> las carpetas se manejan con la clase **file**. 

El acceso a archivos y carpetas se determina por listas de control de acceso (ACL por las siglas en inglés). Para más información, favor de leer las referencias.

# Referencias

- [About files and folders][2]
- [Permissions][3]


  [1]: https://developers.google.com/drive/api/v3/reference/files
  [2]: https://developers.google.com/drive/api/v3/about-files
  [3]: https://developers.google.com/drive/api/v3/about-permissions

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/170123\|https://es.stackoverflow.com/q/170123]]

