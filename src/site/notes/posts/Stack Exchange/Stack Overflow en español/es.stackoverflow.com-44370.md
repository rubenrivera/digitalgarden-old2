---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-44370.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-44370/","title":"Script se \"traba\" al ejecutar Utilities.formatString('%s', \"texto\")","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:48.823-06:00"}
---

# Script se "traba" al ejecutar Utilities.formatString('%s', "texto")

En relación a que intentaste con `Utilites.formatString('%s', "abc")`, acabo de probar con lo siguiente:

    function myFunction() {
      var data = Utilities.formatString('%s', 'abc');
      Logger.log(data)
    }

Funcionó sin problemas. Por esta razón asumo que se trata de un error ajeno a tu código, así que como dice el mensaje, 

> ... aguarde un momento e inténtelo de nuevo

Si el problema persiste, intenta con el código que he indicado en esta respuesta.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/44370\|https://es.stackoverflow.com/q/44370]]

