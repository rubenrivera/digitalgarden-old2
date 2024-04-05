---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-610666.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-610666/","title":"Error al intentar sumar un rango de una fila según color en Apps Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:58.147-06:00"}
---

# Error al intentar sumar un rango de una fila según color en Apps Script

La solución "rápida y sucia" es que en lugar de que la fórmula que escribas en la hoja de cálculo sea 

    =Prorrateo(F3:Q3)

en su lugar escribas

    =Prorrateo("F3:Q3")

---

"Lo **primero** que hay que entender", por decirlo de alguna forma, cuando se va a trabajar con funciones personalizada de hoja de cálculo de Google es que el editor de hojas de cálculo de Google y el editor de Google Apps Script funcionan complementamente diferente, cada uno se maneja con reglas diferentes, es decir, cada uno tiene su propia sintaxis y cada uno maneja los datos de forma diferente.


Cuando se escribe en una celda de hoja de cálculo de Google on el la barra de fórmulas el editor interpreta la secuencia de caracteres como literal o fórmula. Lo usual es empezar una fórmula con el signo de igual `=`. 

"Lo **segundo** que hay que entender" es que una referencia, por ejemplo A1, sólo funciona como referencia dentro de una fórmula. Si se escribe A1 o cualquier otra secuencia de caracteres que en una fórmula funcionaría como una referencia directamente en la barra de fórmulas o en una celda, esta será interpretda como un valor texto, no como una referencia.

"Lo **tercero** que hay que entender" es que la funciones personalizadas se escriben usando el lenguaje de programación JavaScript. Este lenguaje no entiende de origen el funcionamiento de las hojas de cálculo. Google Apps Script hace uso de la clase SpreadsheetApp para que JavaScript pueda "entender el funcionamiento" de las hojas de cálculo de Google.


"Lo **cuarto** que hay que entender" es que los parámetros de un fórmula escrita en el editor de la hoja de cálculo de Google se transforman a los tipos de datos de JavaScript y los resultados que Google Apps Script envía a la hoja de cálculo de Google son transformados a los tipos de datos que maneja la hoja de cálculo de Google. Esto se explica en https://developers.google.com/apps-script/guides/sheets/functions.

---

Recordatorio de las características de las funciones personalizadas de las hojas de cálculo de Google:

- Se escriben en un proyecto "encerrado" (bounded) de Apps Script en la hoja de cálculo, usando JavaScript.
- Siempre debe devolver un valor o una *matriz bidimensional* de valores.
- Su tiempo de ejecución no debe de exceder de 30 segundos.
- No debe llamar servicios que requieran autorización.
- No debe llamar métodos que modifiquen la hoja de cálculo.
- Las referencias en las fórmulas pasan los valores. Un truco es obtener la celda activa, leer la fórmula y esta extraer la cadena de texto.
   - Ejemplos: Mi [respuesta](https://es.stackoverflow.com/a/116479/65) a https://es.stackoverflow.com/q/115264/65.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/610666\|https://es.stackoverflow.com/q/610666]]

