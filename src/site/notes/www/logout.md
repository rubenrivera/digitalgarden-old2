---
{"dg-publish":true,"dg-permalink":"logout.njk","permalink":"/logout.njk/","title":"{{ logout | i18n }}","hide":"true"}
---

{}

<form action="{{ page.url }}" method="get">
  <input type="hidden" name="logout" value="">
  <button type="submit">Logout</button>
</form>
<br>