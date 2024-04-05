---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-551304.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-551304/","title":"Insertar una Google Sheet en mi página WEB y MANIPULARLA","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.418-06:00","updated":"2024-04-05T16:43:57.957-06:00"}
---

# Insertar una Google Sheet en mi página WEB y MANIPULARLA

Usa una etiqueta `iframe` y al atributo src asígnale el URL  de tu hoja de cálculo (para editar debe terminar en `/edit`).

```html
<iframe src="url_de_tu_spreadsheet"></iframe>
```
Para ocultar el encabezado, los menús y la barra lateral agrega al URL de la hoja de cálculo un query-string con el parámetro `rm=minimal`

```html
<iframe src="url_de_tu_spreadsheet?rm=minimal"></iframe>
```

Si deseas especificar la hoja a mostrar, por ejemplo `#gid=0` (hash), el query-string debe indicarse primero, y el hash al final

```html
<iframe src="url_de_tu_spreadsheet?rm=minimal#gid=0"></iframe>
```

**Relacionado**

*Internos*

- https://es.stackoverflow.com/q/529076/65

*Externos*

- [Embed only cells from Google Spreadsheet and not application header](https://webapps.stackexchange.com/q/30644/88163)
- [Google sheet embed URL documentation](https://stackoverflow.com/q/23446449/1595451)
- [How to embed specific editable cells from a google sheet into a site](https://stackoverflow.com/q/65678620/1595451)


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/551304\|https://es.stackoverflow.com/q/551304]]

