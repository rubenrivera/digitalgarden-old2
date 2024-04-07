---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-193305.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-193305/","title":"Mostrar/Ocultar una fila spreadsheet al hacer clic","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.288-06:00"}
---

# Mostrar/Ocultar una fila spreadsheet al hacer clic

# Sobre el código en la pregunta

Dado que las variables globales se "reinicializan" cada vez que se ejecuta el script, no son apropiadas como almacenamiento persistente entre una ejecución y otra.

# Generalidades

Como se menciona en la pregunta los métodos para ocultar o mostrar una fila por su número de fila son

- showRows(numfila)
- hideRows(numfila)

Lamentablemente ni el servicio Spreadsheet ni Google Sheets API incluyen métodos para indicar si la fila está visible u oculta.

# Soluciones provisionales

## Del lado de la hoja de cálculo

- Se podría usar una columna para mantener una valor que indique se la fila se ha puesto visible u oculta
- Se podría usar fórmulas como `=SUBTOTAL(102,A1)` la cual devolverá 1 si A1 tiene un valor numérico y está a la vista y 0 si tiene un valor numérico y está oculta.

## Del lado de Google Apps Script 

Se podrían usar propiedades del documento para guardar el estado de la fila 

Lamentablemente las solucione provisionales anteriores no son confiables pues dependen de que el usuario use la hoja de cálculo de forma apropiada según fuera el caso.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/193305\|https://es.stackoverflow.com/q/193305]]

