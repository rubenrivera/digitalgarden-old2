---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-513387.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-513387/","title":"¿Cómo ocultar varias columnas usando Apps Scripts?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.591-06:00"}
---

# ¿Cómo ocultar varias columnas usando Apps Scripts?

Cambia

```
var column = hoja.getMaxColumns();
```

por

```
var column = 31; // Índice de las columna AE
```
y
```
hoja.hideColumns(column, (ct-column));
```

por

```
hoja.hideColumns(ct, (ct-column + 1));
```

Lo anterior porque el primer parámetro de `hideColums` debe ser el índice de la columna inicial y el segundo parámetro el número de columnas a ocultar.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/513387\|https://es.stackoverflow.com/q/513387]]

