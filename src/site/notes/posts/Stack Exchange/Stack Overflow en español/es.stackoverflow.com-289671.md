---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-289671.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-289671/","title":"¿Cómo veo cuál es el valor más común (moda) de una columna?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:55.920-06:00"}
---

# ¿Cómo veo cuál es el valor más común (moda) de una columna?

Para obtener el recuento del valor más común usar 

```none
=ArrayFormula(MAX(COUNTIF(A1:A7;A1:A7))
```

En una respuesta previa se menciona una forma de obtener *la tabla de frecuencias ordenada de forma descendente*. A continuación comparto otras formas:

**Tabla Dinámica**

Una característica muy interesante de las hojas de cálculo son las **tablas dinámicas** (pivot tables), pero esta requiere que los datos tengan un encabezado. Se agregaría los valores en la sección de filas y también en la sección de valores usando la función `CONTARA` (`COUNTA`), luego se ordenan  las filas de forma descendente con base en  `CONTARA`.  

[![][1]][1]

**Funciones estadísticas**

Existen las funciones `MODA` (`MODE`), `MODA.UNO` (`MODE.SNGL`) y `MODA.VARIOS` (`MODE.MULT`) pero estas requieren que el conjunto de valores sean números. Se podrían usar estas funciones si se "codifican" los valores de tipo `TEXTO` asignándoles un valor tipo `NÚMERO`.

**Matrices / ArrayFormula**  

Variante de la solución provista en la [respuesta de DjCrazi][2], en lugar de usar dos fórmulas, se usa sólo una aprovechando la característica de uso de matrices en la hoja de cálculo de Google y la función `ArrayFormula`.

```none
=ArrayFormula(UNIQUE({A1:A7,COUNTIF(A1:A7,A1:A7)}))
```

Mas abajo se explican sus partes.

**Funciones personalizadas, complementos, script**  

También es posible usar `JavaScript` mediante `Google Apps Script` ya sea directamente para crear una función personalizada o un script o de forma indirecta mediante un complemento. Por tratar esta pregunta de una fórmula no entraré en detalles en esta respuesta.

<hr>

A continuación una explicación de lo que está pasando con `=COUNTIF(A1:A7;A1:A7)` y cómo se llegó a la fórmula de matriz/ArrayFormula propuesta.

**¡Que no panda el cúnico!**

En una hoja de cálculo nueva colocando los datos en `A1:A7` y la fórmula `=COUNTIF(A1:A7;A1:A7)` en la celda `B1` devuelve el valor de `3`, pero si los datos se mueven, por decir un celda hacia abajo y se deja la fórmula en su posición original, no funciona.

[![][3]][3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[![][4]][4]


**Chanfle**

Resulta que hemos sido "víctimas" de una de las peculiaridades de las hojas de cálculo de Google, específicamente la forma en la que maneja las matrices. Poniendo la fórmula referida en la pregunta dentro de la función `ArrayFormula` devuelve una matriz de valores

[![][5]][5]

**Los sospeché desde un principio**

Para obtener *la tabla de frecuencias ordenada de forma descendente* utilizando una única fórmula podríamos usar `=ArrayFormula(UNIQUE({A1:A7,COUNTIF(A1:A7,A1:A7)}))`


[![][6]][6]

Lo bueno, es que incluso funciona si movemos los datos de su posición

[![][7]][7]


**Rechanfle**

- `{A1:A7,COUNTIF(A1:A7,A1:A7)}` Esta parte devuelve una matriz de seis filas por dos columnas. La primera columna incluye los valores a analizar y la segunda columna el número de frecuencias. NOTA: Si tu hoja de cálculo usa coma como separador de decimales usa `{A1:A7\COUNTIF(A1:A7;A1:A7)}`.
- `UNIQUE(...)` Devuelve una matriz incluyendo filas únicas.
- `ArrayFormula(...)` Despliega la matriz a lo alto y ancho requerido por la matriz resultante de su argumento.

**Recontrachanfle**  

Otra alternativa es crear una función personalizada usando Google Apps Script o bien un complemento en el que alguien ya haya creado esta función por nosotros. Cabe destacar que muy pronto los complementos dejarán de estar disponibles en el Chrome Webstore pero estarán disponibles en la sección [Funciona con Hojas de cálculo][8] en de G Suite Marketplace y en plantillas de Hoja de cálculo que tengan vinculado un complemento si el desarrollador del complemento hace lo que tiene que hacer para ello.

**Síganme los buenos**

Hoy día la solución más sencilla y seguramente más conveniente en una gran variedad de circunstancias es usar las **tablas dinámicas**

<hr>

**¿Es normal que `=COUNTIF(A1:A7;A1:A7)` devuelva `0`?**

Devuelve 0 si la fórmula está en cualquier otra fila que no abarque el intervalo con los valores, pero si se encuentra en una fila que abarque los valores devuelve el número correspondiente a la fila relativa, por ejemplo, 

Si el intervalo es A1:A7 y la fórmula se coloca en 

- `B8`, devuelve 0
- `B1` (foo), devuelve 3
- `B2` (bar), devuelve 2


  [1]: https://i.stack.imgur.com/8iIyU.png
  [2]: https://es.stackoverflow.com/a/289249/65
  [3]: https://i.stack.imgur.com/xKk1O.png
  [4]: https://i.stack.imgur.com/xg0qr.png
  [5]: https://i.stack.imgur.com/yErM4.png
  [6]: https://i.stack.imgur.com/KLkxC.png
  [7]: https://i.stack.imgur.com/DA9W5.png
  [8]: https://gsuite.google.com/marketplace/category/works-with-spreadsheet?hl=es

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/289671\|https://es.stackoverflow.com/q/289671]]

