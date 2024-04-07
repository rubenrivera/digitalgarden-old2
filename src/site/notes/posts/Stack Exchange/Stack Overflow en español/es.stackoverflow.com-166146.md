---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-166146.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-166146/","title":"Formato condicional para varios intervalos o una hoja completa","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.901-06:00"}
---

# Formato condicional para varios intervalos o una hoja completa

# Respuesta corta

Usa `=HALLAR("Sáb";$A:$A)` 

# Explicación
- Las referencias del tipo A1 son referencias relativas
- Las referencias del tipo $A$1 son referencias absolutas
- Las referencias mixtas tienen un elemento absoluto mientras que el otro es relativo, ejemplo $A1.

En el caso del la fórmula personalizada en el formato condicional se escribe dicha fórmula tomando como punto de referencia la celda de la esquina superior izquierda del rango seleccionado. 

En este caso la celda de referencia sería C1, dado que se ha colocado A:A este se interpreta como dos columnas a la izquierda, sin embargo, se requiere que siempre sea la columna A:A por lo que se debe usar la notación absoluta, en este caso $A:$A.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/166146\|https://es.stackoverflow.com/q/166146]]

