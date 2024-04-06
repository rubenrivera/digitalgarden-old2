---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136758.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136758/","title":"Error al enviar Newsletter por mailing","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:52.981-06:00"}
---

# Error al enviar Newsletter por mailing

Por lo que se ve en la imagen de la pregunta estás usando un "image map". De acuerdo a [Image Map Support in HTML Email](https://www.emailonacid.com/blog/article/email-development/image-map-support-in-html-email) estos son soportados por la mayoría de los clientes de correo, sin embargo tienen limitaciones, como por ejemplo, los clientes de dispositivos móviles escalan las imágenes lo cual "romperá" el mapa de imagen. 

Cabe mencionar que en Gmail podemos usar `<style>`, estilos en línea y un subconjunto de CSS. La lista completa de los selectores soportados por Gmail está en https://developers.google.com/gmail/design/reference/supported_css

En la [respuesta aceptada](https://stackoverflow.com/a/8243403/1595451) a [Gmail image map - only the last area works](https://stackoverflow.com/q/8243291/1595451) sugieren

- Siempre usar tablas
- Nunca usar `<p>`
- Siempre poner `display:block` en las imágenes para evitar espacios entre imágenes

También valdría la pena que consultaras

https://developers.google.com/gmail/design/

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136758\|https://es.stackoverflow.com/q/136758]]

