---
layout: default
title: Kristi Green
userid: kristing40
---

{% for user in site.data.users %}
  {% if user.userid == page.userid %}
    {% assign current = user %}
  {% endif %}
{% endfor %}


### {{ page.title }}

#### {{ current.city }}, {{ current.state }} {{ current.postal }}