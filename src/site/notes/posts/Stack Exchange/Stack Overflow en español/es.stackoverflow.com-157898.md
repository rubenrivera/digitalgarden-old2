---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-157898.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-157898/","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:53.655-06:00"}
---

---
title: ¿A qué se debe el error "TypeError: No se puede llamar al método "getRange" de null. (línea 9, archivo "practicando")
Site: Stack Overflow en español
Stack Exchange Post ID: 157898
Stack Exchange Type: Answer
Stack Exchange Post Created: 20/04/18 21:37
Stack Exchange Post Last Edit: 
Stack Exchange Edited By: 
Score: 1
Favorites: 
Views: 1076
Accepted: 
CW: 
Closed: 
---
# ¿A qué se debe el error "TypeError: No se puede llamar al método "getRange" de null. (línea 9, archivo "practicando")

Si la línea `rango = Registrodenotas.getRange('D7');` devuelve el error indicado, se debe a que Registrodenotas tiene null asignado lo cual a su vez se debe a que en la línea anterior no se encontró una hoja con nombre `Registro de Notas`.

Ten presente que Google Apps Script es muy riguroso con las minúsculas y mayúsculas.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/157898\|https://es.stackoverflow.com/q/157898]]

