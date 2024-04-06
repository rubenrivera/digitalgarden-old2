---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-283569.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-283569/","title":"Publicar un complemento de google spreadsheets en dominio secundario","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:55.817-06:00"}
---

# Publicar un complemento de google spreadsheets en dominio secundario

He publicado varios complementos pero no he me topado aún con la necesidad de publicar uno para una organización como dominios secundarios. Lo que he visto en las opciones de configuración es que es posible limitar los complementos a los usuarios de un dominio con una única casilla de verificación, quizás no sea posible tener un único complemento privado que sea accesible para los otros dominios de la misma organización.

Una alternativa es que tu complemento sea público pero mediante código limites lo que se puede hacer. Si esto es viable o no depende de lo que haga tu complemento y las políticas de tu empresa / depto. de TI.

Una solución provisional sería hacer copias del proyecto del complemento y para mantener el código sincronizado usar CLASP, una extensión para Chrome o directamente usar la API de Google Apps Script.

Para lo anterior camino es que cada copia para cada dominio utilices una cuenta del dominio correspondiente para crear el proyecto de Cloud Console de tal forma que se asocie a la organización correspondiente, luego podrás compartir el proyecto con tu cuenta principal, pero la publicación al Chrome WebStore seguramente tendrás que hacerla una cuenta del dominio al que corresponde la copia.

Otro camino probable es que un superadministrador le de permiso a tu cuenta de desarrollador para crear proyectos de Cloud Console en cada en las organizaciones que corresponden a los subdominios.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/283569\|https://es.stackoverflow.com/q/283569]]

