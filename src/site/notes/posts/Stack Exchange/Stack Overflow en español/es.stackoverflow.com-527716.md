---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-527716.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-527716/","title":"Usar date-fns en un proyecto de Google Apps Script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:57.702-06:00"}
---

# Usar date-fns en un proyecto de Google Apps Script

Google Apps Script tiene dos "runtimes" el predeterminado es V8, el antiguo está basado en Mozilla Rhino. Lamentablemente ninguno de los dos soporta de manera directa a `date-fns` ni ninguna biblioteca de JavaScript que requiera [módulos][1] o [API Web][2].

Las bibliotecas que usan "Vanilla JavaScript" (JavaScript sin ningúna Web API ni frameworks como jQuery) se pueden importar con el siguiente comando:

```
eval(UrlFetchApp.fetch("my url").getContentText())
```

En el caso de bibliotecas como date-fns que usan import / export y otros comandos no soportados por V8 y/o Rhino deben primero de empaquetarse. Esto lo puedes hacer usando Node.js. Para más detalles https://pulse.appsscript.info/p/2021/07/using-npm-modules-inside-of-google-apps-script/.

Por cierto, en el artículo anterior se menciona https://github.com/classroomtechtools/appsscriptsModules pero el repositorio no include los archivos `*.Bundle.gs`, pero se pueden obtener de la librería de Google Apps Script referida https://script.google.com/home/projects/1flbxyhaMAWh_n_stUeo0GunO_mToDK5wdYR4OJ-3NZzmBX-wsFlqG9Zi/edit. A mí no me ha funcionado. La otra referencia en el artículo aún no la reviso.

Referencias

- https://github.com/classroomtechtools/appsscriptsModules

Relacioando

- [How to load javascript from external source and execute it in Google Apps Script](https://stackoverflow.com/q/15548124/1595451)

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules
  [2]: https://developer.mozilla.org/es/docs/Web/API

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/527716\|https://es.stackoverflow.com/q/527716]]

