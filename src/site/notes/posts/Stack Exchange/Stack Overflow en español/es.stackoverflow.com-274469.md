---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-274469.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-274469/","title":"Ecuación cuadrática con Javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:55.457-06:00"}
---

# Ecuación cuadrática con Javascript

`quadraticCurveTo` no grafica directamente una ecuación de segundo grado, lo que hace es graficar una [curva cuatrática de Bézier][1] para ello toma como punto inicial la posición del "path", los primeros dos argumentos se utilizan para determinar el **punto de control** y los últimos dos argumentos para determinar el **punto final**.

De la [respuesta](https://stackoverflow.com/a/22238597/1595451) a [How to model quadratic equation using a bezier curve (calculate control point)][2] (Cómo modelar una ecuación cuatrática usand una curva de bezier (calcular el punto de control)), una forma aproximada de calcular el punto de control es la siguiente:

    // calc a control point
    var cpX = 2*anywhereOnCurveX -startX/2 -endX/2;
    var cpY = 2*anywhereOnCurveY -startY/2 -endY/2;

 
- `anywhereOnCurveX`  es la coordenada X de un punto conocido, esta podría ser una raíz.
- `anywhereOnCurveY`  es la coordenada Y de un punto conocido, si se usa una raíz, entonces esto sería 0
- `startX`, `startY` son las coordenadas del punto inicial, este punto deberás determinarlo, por ejemplo con base en la el tamaño del canvas
- `endX`, `endY` son las coordenadas del punto final, lo mismo del punto anterior.


  [1]: https://es.wikipedia.org/wiki/Curva_de_B%C3%A9zier#Curvas_cuadr%C3%A1ticas_de_B%C3%A9zier
  [2]: https://stackoverflow.com/q/22237780/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/274469\|https://es.stackoverflow.com/q/274469]]

