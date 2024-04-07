---
dg-publish: true
dg-hide: true
title: ¿Cómo medir el tiempo de ejecución del recálculo de una hoja de cálculo de Google?
Site: Stack Overflow en español
Stack Exchange Post ID: 3244
Stack Exchange Type: Answer
Stack Exchange Post Created: 27/01/16 20:43
Stack Exchange Post Last Edit: 23/05/17 12:39
Stack Exchange Edited By: Comunidad (-1)
Score: 2
Favorites: 
Views: 1447
Accepted: Accepted
CW: 
Closed: 
---
# ¿Cómo medir el tiempo de ejecución del recálculo de una hoja de cálculo de Google?

# Aclaración
Esta respuesta tiene la finalidad de compartir mis hallazgos mi investigación/búsqueda. Ojalá no desanime la publicación de respuestas.

# Respuesta corta

En lugar de usar un evento `onEdit(e)`, el cual por definición es una llamada al servidor, utiliza las herramientas de desarrollador del navegador, como [timeline-tool][1] de Google Chrome.

# Explicación

La hoja de cálculo de Google basa mucho de la interacción con el usuario en secuencias de comandos del lado del cliente por lo que que cuando las operaciones de interés no incluyen el uso de Google Apps Script, el incluir una función "mete ruido" innecesario, por otro lado, el usar una función como AHORA() junto con el método que se explica abajo introduce otros elementos que "meten ruido" además de resultar comparativamente muy poco preciso.

# Contenido previo

## Uso de eventos para determinar la finalización del recálculo
De acuerdo a [.getValue() return \#N\/A when reading ImportXML cell sometimes](https://stackoverflow.com/a/14321646/1595451), respondida en enero 14 de 2013 a las 15:42 por [Mogsdad](https://stackoverflow.com/users/1677912/mogsdad)

> No hay forma de que un script reciba una notificación cuando una hoja
> de cálculo terminó de recalcularse

## Alternativa
### Usar AHORA()
Con la configuración adecuada, la función `AHORA()` y un método adecuado se puede tener una medida aproximada del tiempo de recálculo de la la hoja de cálculo.

#### Ejemplo de método
1. Ir a Archivo > Configuración de Hoja de Cálculo
2. Seleccionar la opción de recálculo en Cambios y Cada Hora
3. De ser necesario insertar una fila. 
4. En la antepenúltima celda, supongamos que es `BF190`, escribir `=NOW()`
4. En la última celda escribir, `BH190`, escribir `=NOW()-BG190`.
5. Aplicar formato de duración a la celda `BH190`.
5. Copiar la celda `BF190`, pegar sólo el valor en la celda `BG190` y refrescar la página lo más rápido posible.

- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd>
- <kbd>F5</kbd>

<s>*Por hacer*: Probar y comparar contra el uso de un cronónometro.</s>

[1]: https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/3244\|https://es.stackoverflow.com/q/3244]]

