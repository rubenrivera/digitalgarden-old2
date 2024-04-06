---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136205.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136205/","title":"¿Es correcto el uso del close tag (cerrar todas las etiquetas) en HTML?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:52.933-06:00"}
---

# ¿Es correcto el uso del close tag (cerrar todas las etiquetas) en HTML?

#Respuesta corta

HTML es el "estándar para la creación de páginas web". Este es flexible en cuando al cierre de las etiquetas, pero hay algunas variantes de este que no lo son como XHTML, que pueden tener otros requisitos que no están en HTML 4 / 5

Desde el punto de vista técnico lo que marca si se debe o no cerrar una etiqueta es el estándar que quieras cumplir y los requisitos de herramientas y librerías que utilices.

# Respuesta extendida
En relación a los  casos mencionados en la pregunta como ejemplo `<meta>` y `<img>`, de acuerdo a [HTML 5.2][1] ambas son etiquetas vacías por lo que se "recomienda" que no se cierren. 

NOTA: HTML 5.2 es una recomendación, no una especificación.

La cita textual es la siguiente:

> Void elements only have a start tag; end tags must not be specified for void elements.

En el [XHTML™ 1.0 The Extensible HyperText Markup Language (Second Edition)][2] de la W3C se incluye una sección de diferencias con respecto a HTML 4 en el que "lo primero" que señala es que en XHTML ciertas prácticas deben cambiar.

> 4. Differences with HTML 4 This section is informative.
> 
> Due to the fact that XHTML is an XML application, certain practices
> that were perfectly legal in SGML-based HTML 4 [HTML4] must be
> changed.
> 

Luego una líneas más adelante habla acerca de que que se requieren etiquetas de cierre para los elementos que no son vacíos. Incluye ejemplos de correcto / incorrecto usando para tal efecto la etiqueta `<p>`.

> 
> 4.3. For non-empty elements, end tags are required
> 
> In SGML-based HTML 4 certain elements were permitted to omit the end
> tag; with the elements that followed implying closure. XML does not
> allow end tags to be omitted. All elements other than those declared
> in the DTD as EMPTY must have an end tag. Elements that are declared
> in the DTD as EMPTY can have an end tag or can use empty element
> shorthand (see Empty Elements).
> 
> CORRECT: terminated elements
> 
>     <p>here is a paragraph.</p><p>here is another paragraph.</p>
> 
> INCORRECT: unterminated elements
> 
>     <p>here is a paragraph.<p>here is another paragraph.


  [1]: https://www.w3.org/TR/html/syntax.html#void-elements
  [2]: https://www.w3.org/TR/xhtml1/

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136205\|https://es.stackoverflow.com/q/136205]]

