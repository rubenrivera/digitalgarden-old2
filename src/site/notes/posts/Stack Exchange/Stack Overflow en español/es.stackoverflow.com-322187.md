---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-322187.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-322187/","title":"Script ha dejado de funcionar","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:56.490-06:00"}
---

# Script ha dejado de funcionar

De acuerdo al mensaje de error y la documentación de MailApp en https://developers.google.com/apps-script/reference/mail el problema es que el primer argumento es `Number[]` (una colección de números) siendo que los que se espera es un String.


El problema se origina en

    var email = sheet.getRange("N1:N5").getValues(); 

ya que `getValues()` devuelve un `Array[]` (array de arrays), y no un String.

Sin profundizar en porque funciona como funciona, primero revisar los valores de `N1:N5` quizás incluyen algo que no es una dirección de correo eletrónico.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/322187\|https://es.stackoverflow.com/q/322187]]

