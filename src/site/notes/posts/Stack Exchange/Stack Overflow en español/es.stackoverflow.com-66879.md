---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-66879.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-66879/","title":"¿Por qué el combobox que tengo vinculado a SQL muestra el símbolo ¶ (salto de párrafo), y cómo quitarlo?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:50.452-06:00"}
---

# ¿Por qué el combobox que tengo vinculado a SQL muestra el símbolo ¶ (salto de párrafo), y cómo quitarlo?

El [calderón][1], ¶, (en inglés pilcrow) también llamado "marca de párrafo" puede ser simplemente un carácter más, posiblemente insertado involuntariamente al transferir datos de una forma de almacenamiento a otra. En algunos casos se trata de un salto de línea / retorno de carro (en inglés carriage return), que en una celda de Excel se puede insertar pulsando <kbd>Alt</kbd>+<kbd>Intro</kbd> o con `CHR(13)`.

Lo primero es verificar si los datos de origen incluyen el salto de línea u otros caracteres "invisibles". 

De ser así, deberás valorar las implicaciones de depurar los datos de origen y mientras tanto, o en caso de que no sea posible, eliminar el o los caracteres  antes de pasarlos al combobox, 

Si sólo se tratara de un caracter al final, podrías usar cambiar

    cb.AddItem rs.Fields("nombre"), i

por

    cb.AddItem LEFT(rs.Fields("nombre"),LEN(rs.Fields("nombre")) - 1), i

o algo equivalente

<hr>
**Formas de identificar si hay caracteres invisibles**

Una forma muy básica, en caso de que se traten de pocos datos, es importando los datos a una columna en Excel y midiendo la longitud con `LEN()` (creo que en español es `LARGO()`). También se puede intentar usando comparar la longitud del dato con con uno "recortado" usando `TRIM()`.

Una forma intermedia, es usar expresiones regulares para eliminar cualquier carácter que no corresponda a los caracteres válidos. Tal vez algo como

    [a-zA-ZáéíóúÁÉÍÓÚüUñÑ\-\(\)\,]

> Véase https://es.stackoverflow.com/q/49210/65

Técnicas más avanzadas implican el uso de herramientas como Notepad++ y OpenRefine y algunas requieren familiarizarse, al menos un poco con la codificación de textos (encoding) y la codificación predeterminada del sistema operativo utilizado así como de las bases de datos implicadas.


  [1]: https://es.wikipedia.org/wiki/Calder%C3%B3n_(tipograf%C3%ADa)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/66879\|https://es.stackoverflow.com/q/66879]]

