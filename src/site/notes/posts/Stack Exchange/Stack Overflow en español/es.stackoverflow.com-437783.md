---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-437783.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-437783/","title":"Como depurar una aplicación web de apps script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.183-06:00"}
---

# Como depurar una aplicación web de apps script

Para depurar una aplicación web creada usando Google Apps Script debes mirar tanto en la página de ejecuciones del proyecto como en la consola del navegador.

En el nuevo editor, en el panel izquierdo haz clic en Ejecuciones.

En el navegador, abre el URL de tu aplicación web, luego abre las herramientas de desarrollador de tu navegador y en este la consola.

Para usar el depurador del nuevo editor, primero debes revisar si tu función `doGet` o `doPost` requieren de un objeto evento. Si es así, debes crear una función para inicializar el objeto evento. Luego marca una línea de código como "breakpoint" y haz clic en el botón depurar. Cuando la ejecución llegue al "breackpoint" en el panel de depuración que se mostrará a la derecha podrás ver los valores / objetos de cada variable y en la parte inferior se mostrarán los registros. Podrás pasar a la siguiente línea de código, "saltar", "salir", continuar o detener la ejecución.

Quizás debas agregar `console.log`, agregar `try...catch` a tu código o usar alguna otra técnica. Esto dependerá de tu aplicación, del problema que tenga la aplicación y tus preferencias / habilidades.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/437783\|https://es.stackoverflow.com/q/437783]]

