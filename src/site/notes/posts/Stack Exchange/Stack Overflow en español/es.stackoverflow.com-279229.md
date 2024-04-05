---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-279229.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-279229/","title":"Validar comas, comillas y dos puntos en un formulario","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:55.598-06:00"}
---

# Validar comas, comillas y dos puntos en un formulario

La expresión regular incluida en la pregunta `"[A-Za-z0-9áéíóú:, ]+"` no incluye comillas. La forma de incluirlas es la siguiente `"[A-Za-z0-9áéíóú:,\" ]+"`

Ejemplo:

NOTA: Agregué un CSS para que ponga el borde del `input` de color rosa cuando su estado sea inválido.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-css -->

    input:invalid {
      border-color:pink;
    }

<!-- language: lang-html -->

    <div class="form-group">
      <label for="titulo">Título de la obra *</label>
      <input id="titulo" type="text" pattern="[A-Za-z0-9áéíóú:,\" ]+" name="titulo" class="form-control" required>
    </div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/279229\|https://es.stackoverflow.com/q/279229]]

