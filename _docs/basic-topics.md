---
title: Basic topics
description: Basic topics
permalink: /docs/basic/
layout: page 
---
# Basic topics

Here we describe basic topcis related to the usage of mei-friend.

This is a test code to list relevant links automatically:
   
        {% if post.url contains page.url %}
        {% endif %}
  
    


<div class="section-index">
    <hr class="panel-line">
    {% for post in site.data.toc %}  
        {% if post.url == 'docs' %}
            {% for li in post.links %} 
                <p>baseurl: {{ site.url }}; li.title: {{ li.title }}, li.url: {{ li.url }}; page.url: {{ page.url }}</p>
                {% if page.url contains li.url %}
                    {% for i in li.children %} 
                        <div class="entry">
                        <h5><a href="{{ i.url | prepend: '/' | prepend: site.url }}">{{ i.title }}</a></h5>
                        <p>i: <b>{{ i }};</b> <br>
                            i.url: <b>{{ i.url }}.</b><br>
                            {{ site.data  }}
                        </p>
                        </div>
                    {% endfor %}
                {% endif %}    
            {% endfor %}
        {% endif %}
    {% endfor %}
</div>