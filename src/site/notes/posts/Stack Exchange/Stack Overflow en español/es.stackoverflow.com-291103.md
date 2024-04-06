---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-291103.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-291103/","title":"Crear formulario de forma dinámica usando Google App Script y Google App Maker","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:55.924-06:00"}
---

# Crear formulario de forma dinámica usando Google App Script y Google App Maker

Entiendo que has creado una aplicación usando Google App Maker en la que cuentas con un modelo calculado y página en la que has colocado botones de radio (radio buttons) y que deseas que al hacer clic en un botón los valores de los botones de radio se envíen a una base de datos externa.

La pregunta concreta es cómo obtener los valores de los botones de radio.

Lo primero que debes hacer es asociar las propiedad "value" a una propiedad personalizada (custom property) de la página ya que no cuentas con datos de SQL en el que puedas escribir.

Luego deberás crear unos scripts ya sea locales (en la página o widgets) o globales (archivos de código del lado del cliente). Una forma de obtener lo valores, aprovechando que se han vinculado a las propiedades personalizadas de la página sería

    var radio1 = app.currentPage.properties.botonRadio1;

donde `botonRadio1` es el nombre de la propiedad personalizada.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/291103\|https://es.stackoverflow.com/q/291103]]

