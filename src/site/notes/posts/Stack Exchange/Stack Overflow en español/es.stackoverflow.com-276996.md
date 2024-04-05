---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-276996.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-276996/","title":"¿Cómo cambiar el parámetro de un temporizador para ponerle un tiempo determinado?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:55.474-06:00"}
---

# ¿Cómo cambiar el parámetro de un temporizador para ponerle un tiempo determinado?

Lo primero que debes hacer es incluir una forma de obtener el plazo, luego podrías lograr lo que estas buscando calculando el primer argumento de la función `countdown`. 

La parte de obtener el plazo puedes hacerlo con un prompt, un modal, etc. Para mostrar cómo calcular el plazo, voy a agregar la variable `sieteDias`


    var sieteDias = new Date().setDate(new Date().getDate() + 7);
    console.info(new Date(sieteDias)); // Esta línea sólo es para observar la fecha límite que calculamos
    countdown( sieteDias, 'clock', '¡Ya empezó!');

A continuación la demostración:

<!-- begin snippet: js hide: false console: true babel: null -->

<!-- language: lang-js -->

    const getRemainingTime = deadline => {
      let now = new Date(),
      remainTime = (new Date(deadline) - now + 1000)/ 1000,
      remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
      remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
      remainDays = Math.floor(remainTime / (3600 * 24));

      return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime };

    };

    const countdown = (deadline, elem, finalMessage) => {
      const el = document.getElementById(elem);
     

      const timerUpdate = setInterval(()=> {
        let t = getRemainingTime(deadline);
        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

        if (t.remainTime <= 1) {     
             clearInterval(timerUpdate);
             el.innerHTML = finalMessage;
             document.getElementById("av1").style.display="block";  
             document.getElementById("hr1").style.display="block";  
            }   

      }, 1000);
    };
    var sieteDias = new Date().setDate(new Date().getDate() + 7);
    console.info(new Date(sieteDias));
    countdown( sieteDias, 'clock', '¡Ya empezó!');

<!-- language: lang-html -->

        <div id="clock"></div>
        <script src="js/temporizador.js" type="text/javascript"></script>  

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/276996\|https://es.stackoverflow.com/q/276996]]

