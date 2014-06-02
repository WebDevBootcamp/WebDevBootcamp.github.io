---
layout: default
title: Tiffany Grays
userid: tgrays2001
---

{% for user in site.data.users %}
  {% if user.userid == page.userid %}
    {% assign current = user %}
  {% endif %}
{% endfor %}

<a href="http://www.linkedin.com/in/tgrays2001">
      
          <img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_viewmy_160x33.png" width="160" height="33" border="0" alt="View Tiffany Grays's profile on LinkedIn">
        
    </a>


### {{ page.title }}

#### {{ current.city }}, {{ current.state }} {{ current.postal }}