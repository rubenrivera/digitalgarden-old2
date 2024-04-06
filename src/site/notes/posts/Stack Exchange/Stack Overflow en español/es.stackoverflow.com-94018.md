---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-94018.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-94018/","title":"¿Cómo evitar que el navegador auto-rellene y auto-complete los campos de los formularios?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:52.480-06:00"}
---

# ¿Cómo evitar que el navegador auto-rellene y auto-complete los campos de los formularios?

Lo que estás intentando, inhabilitar el autocompletado, va contra las premisas que promueven compañías como Google en las que dicha prerrogativa le corresponde al usuario. 

Si persistes en la intención, lo primero es intentar lo que recomienda Mozilla Developer Network

1. Usar `autocomplete="off"` o `autocomplete="nope"`

Lo anterior puedes fallar en navegadores como Chrome pues, como se mencionó previamente para Google la prerrogativa del autocompletado es del usuario no del desarrollador. En este caso, cabe recordar que el autocompletado depende de pistas para poder empatar los datos almacenados en el navegador con los datos del formulario como

- la etiqueta `label` de los campos
- los atributos como `name` y `id`

Si te es posible usa etiquetas y nombres únicos.

En lugar de password o contraseña prueba con "santo y seña".
En lugar de Email prueba con identificador

Otra cosa a intentar es duplicar los campos poniendo los primeros escondidos ya que usualmente sólo la primera aparición es autocompletada.


Por otro lado, además de la función de autocompletado de formularios los navegadores modernos tienen como función independiente el guardado de nombres de usuario y contraseñas lo que viene aún más a dificultar que como desarrollador prevengas que estos datos sean llenados de forma automática.

**Sobre el código en stacksnippet**

El OP menciona que `autocomplete="off"` no funciona pero no se incluye en el código, pero por el contrario se incluye el atributo `appnoautocomplete=""`. 

**Referencias**

- [How to Turn Off Form Autocompletion](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion)
- [“AutoComplete=Off” not working on Google Chrome Browser [duplicate]](https://stackoverflow.com/q/18306052/1595451)
- [Chrome Browser Ignoring AutoComplete=Off](https://stackoverflow.com/q/12374442/1595451)
- [Disable browser 'Save Password' functionality](https://stackoverflow.com/q/32369/1595451)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/94018\|https://es.stackoverflow.com/q/94018]]

