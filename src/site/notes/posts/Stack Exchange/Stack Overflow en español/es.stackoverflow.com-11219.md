---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-11219.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-11219/","title":"Función dentro de otra función en javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:48.613-06:00"}
---

# Función dentro de otra función en javascript

En la primera versión del la pregunta se menciona que el código compartido no funcionó. Ello debe a que no se han separado las sentencias con punto y coma. 

En relación a si es posible incluir en un mismo proyecto varios archivos y colocar en esto distintas funciones si es posible. El llamar una función que se encuentra en otro archivo en el mismo proyecto es muy sencillo. Ejemplo:

Código.gs

    function principal() {
       //Llama la función llamada secundaria().
       secundaria(); 
    }

Código 2.gs

    function secundaria() {
       //Agrega al registro un mensaje de júbilo.
       Logger.log('Me llamaron. ¡Viva!'); 
    }


Considerando el tipo de error, podría ser conveniente que revisaras un curso de JavaScript o bien la [guía de JavaScript][1] publicadas Mozilla Developers Network (MDN), ya que Google Apps Script está basado en dicho lenguaje. 

En cuanto a recursos sobre Google Apps Script en español te podría ser de utilidad el siguiente playlist del canal de Google Developers: [Introducción a Google Apps Script][2]

[1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/.
[2]: https://www.youtube.com/playlist?list=PLuC7OUdarKuYq7VsyKrVPbsRSUrx25YvR
 


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/11219\|https://es.stackoverflow.com/q/11219]]

