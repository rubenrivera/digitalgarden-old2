---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-80791.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-80791/","title":"Por qué no funciona nextElementSibling en el gadget Cuadro HTML de Google Sites","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:51.334-06:00"}
---

# Por qué no funciona nextElementSibling en el gadget Cuadro HTML de Google Sites

En SO en inglés me encontré [JavaScript accordion on Google Sites (classic)][1]. Luego de trastear me dí cuenta que `nextElementSibling` no funciona en el gadget Cuadro HTML pero `nextSibling` sí.

En el foro oficial de Google Sites, [he preguntado][2] por qué no funciona. Al momento Steegle un antiguo Colaborador Principal, se ha limitado a decir que no todo el código funciona como uno esperaría.

Según entiendo el gadget Cuadro HTML hace uso de [Google Caja][3] para esterilizar el código huésped y sé que cosas como el llamar archivos externos con excepción de las librerías jQuery alojadas en Google está bloqueado.

`nextElementSibling` me parece unan propiedad inocua del HTML DOM y pienso que que debería permitirse su uso. ¿Estoy en lo correcto o estoy perdiendo algo de vista?

**Referencias**

- [Crear diseños de página o gadget personalizados][4]


  [1]: https://stackoverflow.com/q/44310096/1595451
  [2]: https://productforums.google.com/forum/#!topic/sites/-4r7kjEaQVE
  [3]: https://developers.google.com/caja/
  [4]: https://support.google.com/sites/answer/2500646?hl=es

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/80791\|https://es.stackoverflow.com/q/80791]]

