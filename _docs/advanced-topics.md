---
title: Advanced topics
description: Advanced topics
permalink: /docs/advanced/
layout: page
---

# Advanced Topics

Here you may read about more advanced topics related to the usage of mei-friend.

<div class="section-index">
    <hr class="panel-line">
    {% for post in site.data.toc %}  
        {% if post.url == 'docs' %}
            {% for li in post.links %} 
                {% if page.url contains li.url %}
                    {% for i in li.children %} 
                        {% for dos in site.docs %} 
                            {% assign dtitle = dos.title | downcase %}
                            {% assign ititle = i.title | downcase %}
                            {% if dtitle contains ititle or ititle contains dtitle %}
                                <div class="entry">
                                    <h5><a href="{{ i.url | prepend: '/' | prepend: site.baseurl }}">{{ i.title }}</a></h5>
                                    <p><b>{{ dos.description }}.</b></p>
                                </div>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                {% endif %}    
            {% endfor %}
        {% endif %}
    {% endfor %}
</div>
   

