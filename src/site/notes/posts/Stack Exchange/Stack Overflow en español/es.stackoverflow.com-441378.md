---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-441378.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-441378/","title":"¿Es posible conectar Google Forms con una página HTML?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.221-06:00"}
---

# ¿Es posible conectar Google Forms con una página HTML?

No existe una API para acceder directamente a la gráficas de las respuestas de Google Forms pero hay varias opciones.

NOTA: Contrario a lo que algunos piensan los datos originals se guardan en un repositorio asociado al formulario. El enviar los datos a una hoja de cálculo de Google es opcional y cuando se vincula, los datos originales se mantiene en el repositorio asociado al formulario, así que se puede eliminar la hoja de cálculo o vincular el formulario a otra hoja de cálculo y los datos originales se mantienen.

1. Puedes usar el Class FormsApp de Google Apps Script para leer los datos de tu formulario sin necesidad de conectar el mismo a una hoja de cálculo.
   1. Podrías crear una web app con Google Apps Script y embeber esta en otra página web
   2. Podrías usar la API de Google Apps Script para conectar a Class FormsApp y que no tengas que publicar la web app con Google Apps Script
2. Si vinculas el formulario a una hoja de cálculo, 
   1. puedes leer los datos de dicha hoja y leerlos usando Google Apps Script o la API de Google Sheets
   2. puedes crear las gráficas en dicha hoja y publicar estas a la web para luego incrustrarlas en tu hoja de cálculo.
   3. puedes usar la API de Google Charts, esta incluye métodos para leer los datos directamente de una hoja de cálculo

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/441378\|https://es.stackoverflow.com/q/441378]]

