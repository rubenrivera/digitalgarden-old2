---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Apps/stackapps.com-9722.md","permalink":"/publicaciones-externas/stack-exchange/stack-apps/stackapps-com-9722/","title":"OpenAI detector","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:20:11.701-06:00","updated":"2024-04-05T16:43:26.617-06:00"}
---

# OpenAI detector

[tag:bug] [tag:status-completed]

I'm using macOS Ventura, Google Chrome, TamperMonkey

[![Stack Apps says...][1]][1]

> Stack Apps says: 
>
> OpenAI Detector encountered a problem getting data from https://openai-openai-detector.hf.space/openai-detector. The browser console may have more information.

[![enter image description here][2]][2]
```
ntent.js:8 injected: Refused to connect to "https://openai-openai-detector--5smxg.hf.space/openai-detector?%3C!--%20thumbnail%3A%20https%3A%2F%2Fi.stack.imgur.com%2F8Q61x.png%20--%3E%0A%3C!--%20version%3A%200.1%20--%3E%0A%3C!--%20tag%3A%20%5Bmoderation%5D%20--%3E%0A%3C!--%20excerpt%3A%20Adds%20a%20button%20to%20check%20the%20probability%20that%20a%20post%20was%20written%20by%20a%20bot%20--%3E%0A%0A%23%23%20Screenshot%20%2F%20Code%20Snippet%0A%0A%5B!%5B%22Detect%20OpenAI%22%20link%20in%20post%20menu%3B%20notice%20with%20results%5D%5B1%5D%5D%5B1%5D%0A%0A%23%23%20About%0A%0AThis%20script%20adds%20a%20link%20to%20each%20post%20on%20SE%2C%20revision%20on%20SE%20revision%20pages%2C%20and%20post%20Markdown%20views%20on%20metasmoke%2C%20to%20check%20it%20against%20%5BHugging%20Face%27s%20AI%20detector%5D(https%3A%2F%2Fhuggingface.co%2Fopenai-detector).%0A%0AThe%20first%20click%20will%20test%20the%20Markdown%20text%20using%20the%20Hugging%20Face%20detector%20API%20for%20the%20likelihood%20it%20was%20created%20by%20GPT%20and%20report%20that%20as%20a%20percentage%20likelihood%20that%20the%20post%20is%20fake.%0A%0ALots%20of%20users%20and%20spammers%20edit%20the%20text%20provided%20by%20ChatGPT%20a%20bit%2C%20so%20if%20you%20click%20the%20button%20a%20second%20time%20(or%20use%20%3Ckbd%3EAlt%3C%2Fkbd%3E-%3Ckbd%3EClick%3C%2Fkbd%3E)%20an%20iframe%20to%20the%20detector%20demo%20page%20will%20open%20with%20the%20Markdown%20text%20pre-filled%20for%20you%2C%20so%20you%20can%20try%20some%20manipulations%20to%20see%20if%20the%20content%20was%20edited%20from%20ChatGPT%20source%20text.%20For%20example%2C%20on%20metasmoke%20it%20looks%20like%3A%0A%0A%5B!%5BAnimation%20of%20a%20post%20on%20metasmoke.%20First%20the%20base%20%25%20FAKE%20is%20determined%20of%2024.94%25%2C%20then%20an%20iframe%20is%20opened%20showing%20that%20after%20removal%20of%20the%20spammer%27s%20added%20text%20the%20detection%20is%2099.86%25%20FAKE%5D(https%3A%2F%2Fi.stack.imgur.com%2F5wyoP.gif)%5D(https%3A%2F%2Fi.stack.imgur.com%2F5wyoP.gif)%0A%0A%0A%0A%23%23%23%20Download%0A%0AThe%20script%20can%20be%20installed%20via%20%5Bthis%20link%5D(https%3A%2F%2Fgithub.com%2FGlorfindel83%2FSE-Userscripts%2Fraw%2Fmaster%2Fopenai-detector%2Fopenai-detector.user.js)%3B%20source%20code%20can%20be%20found%20%5Bhere%5D(https%3A%2F%2Fgithub.com%2FGlorfindel83%2FSE-Userscripts%2Fblob%2Fmaster%2Fopenai-detector%2Fopenai-detector.user.js).%0A%0A%23%23%23%20Platform%0A%0ATested%20with%20Violentmonkey%20in%20Firefox%20on%20macOS%2C%20but%20it%27s%20likely%20to%20work%20on%20all%20browsers%20and%20platforms.%20(Please%20let%20me%20know%20if%20it%20doesn%27t!)%0A%0A%23%23%20Contact%0A%0APost%20a%20comment%20or%20answer%20here%2C%20or%20create%20an%20issue%2Fpull%20request%20on%20GitHub.%0A%0A%0A%20%20%5B1%5D%3A%20https%3A%2F%2Fi.stack.imgur.com%2FmDMTr.png": Request was redirected to a not whitelisted URL
Mt @ content.js:8
userscript.html?name=Stack%2520Exchange%252C%2520OpenAI%2520detector.user.js&id=16694645-97d1-4f98-983b-63d22e4f6426:1311 OpenAI Detector error response: Object
(anonymous) @ userscript.html?name=Stack%2520Exchange%252C%2520OpenAI%2520detector.user.js&id=16694645-97d1-4f98-983b-63d22e4f6426:1311
VM90:75 Uncaught TypeError: Cannot read properties of null (reading 'fake_probability')
    at receiveOpenAIDetectionDataForButton (<anonymous>:75:39)
    at userscript.html?name=Stack%2520Exchange%252C%2520OpenAI%2520detector.user.js&id=16694645-97d1-4f98-983b-63d22e4f6426:1277:20
```

Workaround suggested by script author:

replace  
```
@connect     openai-openai-detector.hf.space
```
by

```
@connect     *
```



  [1]: https://i.stack.imgur.com/5u3c0.png
  [2]: https://i.stack.imgur.com/D2n7r.png

# Metadata
Source:: Stack Apps
URL:: [[https://stackapps.com/q/9722\|https://stackapps.com/q/9722]]

