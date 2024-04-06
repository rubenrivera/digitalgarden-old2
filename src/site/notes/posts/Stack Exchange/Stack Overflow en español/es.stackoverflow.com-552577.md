---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-552577.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-552577/","title":"adjuntar varios archivos de una carpeta de drive y enviarlos como pdf por correo con google script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.418-06:00","updated":"2024-04-05T16:43:57.965-06:00"}
---

# adjuntar varios archivos de una carpeta de drive y enviarlos como pdf por correo con google script

Cambia

```
archivosarray[j]=file;
```

por
```
archivosarray[j] = file.getAs(MimeType.PDF);
```
y
```
 attachments: [file.getAs(MimeType.PDF)],
```
por
```
 attachments: archivosarray,
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/552577\|https://es.stackoverflow.com/q/552577]]

