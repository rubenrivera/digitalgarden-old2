---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-1601.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-1601/","title":"Cuáles navegadores están soportados y qué más necesito para usar los sitios de Stack Exchange?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.373-06:00","updated":"2024-04-05T16:44:00.203-06:00"}
---

# Cuáles navegadores están soportados y qué más necesito para usar los sitios de Stack Exchange?

> Adaptación de la [respuesta][1] a 
https://meta.stackexchange.com/questions/56161/ <!-- which-browsers-are-officially-supported-and-what-else-do-i-need -->

# ¿Cuáles navegadores son soportados?

Hay una línea base para esta pregunta: Stack Exchage soporta las últimas dos versiones de los navegadores que más populares entre los visitantes del sitio. Esto no incluye versiones beta/desarrollador, las cuáles no son soportadas.

Para el resto de los detalles véase la [respuesta][1] a 
https://meta.stackexchange.com/questions/56161/ <!-- which-browsers-are-officially-supported-and-what-else-do-i-need -->

## ¿Qué más se necesita?

Hay requisitos más allá de usar un navegador moderno para obtener *la mejor* experiencia posible :

- JavaScript debe estar habilitado 
- Cookies deben estar habilitadas
- Las imágenes no deben estar bloqueadas. (Dado que los CSS Sprites son usados ampliamente)
- Los siguientes sitios deber ser accesibles:

	- [`sstatic.net` (y sus subdominios) para los recursos estáticos JavaScript y CSS static de Stack Exchange](http://blog.stackoverflow.com/2009/08/a-few-speed-improvements/)

	- [`googleapis.com` para los efectos jQuery](//meta.stackexchange.com/questions/81546/stackoverflow-com-javascript-disabled-banner/81561#81561)

	- [`api.recaptcha.net` para visualizar los CAPTCHAs](//meta.stackexchange.com/questions/57846/captcha-is-broken-or-really-hard)

	- [`*.gstatic.com` y `apis.google.com` para visualizar la prueba "Not a Robot"](//meta.stackoverflow.com/questions/278633/captcha-broken-on-stack-overflow-no-challenge-shown)

	- [`i.stack.imgur.com` para visualizar la mayoría de las imágenes](//meta.stackexchange.com/questions/64402/cannot-see-pictures-on-stack-overflow/64404#64404)

	- [`stackauth.com` para el inicio de sesión automático de la red global](http://blog.stackoverflow.com/2010/09/global-network-auto-login/). Esta característica usa HTTPS, así que tu navegador debe aceptar [su certificado SSL](https://stackauth.com/). También se requiere que el navegodor soporte el almacenamiento local de HTML5, tales como Internet Explorer 8+, Chrome, Safari, Firefox 3.6+ ó Opera 10.61+, y necesitas aceptar algunas cookies de terceros. Véase pruebas automatizadas en [Network Login Troubleshooting](//meta.stackoverflow.com/network-login-help), y las notas acerca de permitir cookies de terceros [en, por ejemplo, Chrome](//meta.stackexchange.com/questions/156828/login-problem-in-stackoverflow-in-chrome-as-third-party-cookies-appear-to-be-di/156921#156921). Está conciente que los complementos [tales como los bloqueadores de anuncios](//meta.stackexchange.com/questions/156948/login-process-incompatible-with-adblock-plus) podrían interferir.

	- [`gravatar.com` para visualizar muchos gravatar de usuario](//meta.stackexchange.com/questions/33774/why-do-the-gravatars-get-blocked)

	- [`cdn.mathjax.org` para ver fórmulas en sitios que habilitados en MathJax](//meta.stackexchange.com/questions/133611/mathjax-is-not-defined-javascript-error-and-no-toolbar-is-shown-and-preview-do)

	- [`qa.sockets.stackexchange.com` para visualizar actualizaciones](//meta.stackexchange.com/questions/125677/new-feature-real-time-updates-to-questions-answers-and-inbox) en tu buzón de entrada, reputación, nuevas preguntas, respuestas y más. Esto también necesita tanto que tu navegador y tu red/seguridad soporte web sockets. Véase [websocketstest.com](http://websocketstest.com/) para probar eso.


  [4]: https://en.wikipedia.org/wiki/Internet_Explorer_versions
  [5]: //meta.stackexchange.com/a/168183/152859
  [6]: //meta.stackexchange.com/questions/130917/formatting-oddities-on-stackoverflow-com#comment360305_130917
  [7]: //meta.stackexchange.com/a/70032/131713
  [8]: //meta.stackexchange.com/questions/106760/stack-overflow-looks-odd-in-internet-explorer-for-mac-os-x
  [9]: https://en.wikipedia.org/wiki/Firefox_release_history
  [10]: //meta.stackexchange.com/a/124134/131713
  [11]: //meta.stackexchange.com/questions/124101/search-box-maximisation-changes-cursor-position-unintuitively#comment331638_124101

  [1]: https://meta.stackexchange.com/questions/56161/which-browsers-are-officially-supported-and-what-else-do-i-need#71208

# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/1601\|https://es.meta.stackoverflow.com/q/1601]]

