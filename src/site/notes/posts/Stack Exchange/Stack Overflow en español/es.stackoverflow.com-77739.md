---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-77739.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-77739/","title":"Mandar ID en la URL del Google Form y almacenarla","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:51.208-06:00"}
---

# Mandar ID en la URL del Google Form y almacenarla

Me parece que lo que quieres hacer es mas sencillo lograrlo usando el URL prellenado. En [Enviar un formulario a los encuestados][1] se indica como obtenerlo.

Por otro lado, también me parece que la fuente a la que has recurrido corresponde a una versión muy vieja ya que ahora el FORMKEY es llamado simplemente `id`. Si mal no recuerdo hace tiempo el id era el mismo para el formulario en modo de edición que en modo publicado, pero ahora no. Abajo pongo un ejemplos de estos URLs, pongo en formato normal los id's.


Edición

- `https://docs.google.com/forms/d/`1t-J3rvQDnsV6avLe-mn6Zf3QALmVp8iHnKz-UYH3Fow`/edit`

Publicado

- `https://docs.google.com/forms/d/e/`1FAIpQLScwZm_emVRyey8N9gzD_fj-OEs5hhOrRnVM7it1KUowWPk_4A`/viewform`

Si continuas con la intención de usar el id, te podría resultar conveniente obtenerlo mediante Google Apps Script con el método [getId][2].



  [1]: https://support.google.com/docs/answer/2839588?hl=es
  [2]: https://developers.google.com/apps-script/reference/forms/form#getid

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/77739\|https://es.stackoverflow.com/q/77739]]

