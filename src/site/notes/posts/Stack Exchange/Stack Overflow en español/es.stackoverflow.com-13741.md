---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-13741.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-13741/","title":"¿Por que una función que se llame \"Jerarquia\" no funciona en Google Apps Script?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:48.627-06:00"}
---

# ¿Por que una función que se llame "Jerarquia" no funciona en Google Apps Script?

# Respuesta corta

JERARQUIA es un nombre reservado debido a que una de las funciones incluidas (built-in function) se llama así. El nombre en inglés de esta función es RANK.

# Explicación

En lo que se refiere a las funciones incluídas, recientemente Google agregó a la aplicación Hojas de Cálculo de Google (Google Sheets) la posibilidad de utilizar el nombre en inglés o el nombre en otros idiomas, incluyendo el español. Esta característica incluye que el motor de la hoja de cálculo automáticamente identifica si el nombre de la función corresponde a alguna de la variantes de nombre de funciones incluídas y en caso contrario busca una función personalizada con dicho nombre. Si el nombre de la función incluida está en un idioma distinto al indicado a la configuración de la hoja de cálculo lo cambiará según corresponda.

Las funciones incluidas que tienen nombres en otros idiomas son las funciones "estándares" de hoja de cálculo. Funciones particulares de las hojas de cálculo de Google como IMPORTRANGE, IMPORTDATA, ARRAY_CONSTRAIN, GOOGLEFINANCE, entre otras, no tienen nombre en otro idioma.

# Referencias 

- [Custom functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [JERARQUIA (RANK)](https://support.google.com/docs/answer/3094098?hl=es)
- [Cambiar la configuración regional, la zona horaria, la frecuencia de cálculo y el idioma de una hoja de cálculo](https://support.google.com/docs/answer/58515?hl=es)



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/13741\|https://es.stackoverflow.com/q/13741]]

