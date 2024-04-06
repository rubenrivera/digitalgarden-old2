---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-353546.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-353546/","title":"Modificar propiedad de un objeto","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:56.592-06:00"}
---

# Modificar propiedad de un objeto

Lo que está incluido en la pregunta es una Array de objetos. Para modificar la propiedad depósito de un objeto en particular, digamos el primero, puedes usar algo como lo siguiente:

    usuarios[0].deposito = 100;

Para modificar todos los objetos, ya dependerá del tipo de modificación que quieras hacer. Por ejemplo, si todos los valores de depósito van a ser cero


    usuarios.forEach((o) => o.deposito = 0);

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var usuarios = [
        { userName: 'kevin44', pass: '44', email: 'aaa@gmail', deposito: 5000 },
        { userName: 'kevin33', pass: '33', email: 'bbb@gmail', deposito: 0 },
        { userName: 'kevin22', pass: '22', email: 'ccc@gmail', deposito: 1000 },
        { userName: 'kevin11', pass: '11', email: 'ddd@gmail', deposito: 3000 },
    ];

    usuarios.forEach((o) => o.deposito = 0);

    console.log(usuarios);

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/353546\|https://es.stackoverflow.com/q/353546]]

