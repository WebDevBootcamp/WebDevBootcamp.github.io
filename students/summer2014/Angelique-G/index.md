---
layout: default
title: Angelique Godinez
userid: Angelique-G
---

{% for user in site.data.users %}
  {% if user.userid == page.userid %}
    {% assign current = user %}
  {% endif %}
{% endfor %}


### {{ page.title }}

#### {{ current.city }}, {{ current.state }} {{ current.postal }}