---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-93094.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-93094/","title":"¿Como obtengo todos los elementos que tengan una clase? por jQuery","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:52.464-06:00"}
---

# ¿Como obtengo todos los elementos que tengan una clase? por jQuery

El código del OP funciona bien, al menos en Stack Snippet, así que probablemente el error sea la versión de jQuery o que olvidó cargar jQuery

Demostración:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var all = $(".mbox").map(function() {
        return this.innerHTML;
    }).get();

    console.log(all.join());

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <div class="mbox">Block One</div>
    <div class="mbox">Block Two</div>
    <div class="mbox">Block Three</div>
    <div class="mbox">Block Four</div>

    <p></p>

<!-- end snippet -->


  [1]: https://stackoverflow.com/a/16630214/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/93094\|https://es.stackoverflow.com/q/93094]]

