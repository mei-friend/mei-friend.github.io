---
title: Basic topics
description: Basic topics
permalink: /docs/basic/
layout: page 
---
# Basic topics

Here you may read about the basic topcis related to the usage of mei-friend.

<div class="section-index">
    <hr class="panel-line">
    {% for post in site.data.toc %}  
        {% if post.url == 'docs' %}
            {% for li in post.links %} 
                {% if page.url contains li.url %}
                    {% for i in li.children %} 
                        {% for dos in site.docs %} 
                            {% if dos.title contains i.title %}
                                <div class="entry">
                                    <h5><a href="{{ i.url | prepend: '/' | prepend: site.url }}">{{ i.title }}</a></h5>
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
   
  
<!-- ## This is a list of site.docs (sorted alphabetically, but with descriptions): -->

<!-- <div class="section-index">
    <hr class="panel-line">
    {% for post in site.docs %}  
    {% if post.url contains page.url %}
        <div class="entry">
            <h5><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h5>
            <p>post.description: {{ post.description }}; 
            post.url: {{ post.url }}; 
            section.url: {{ section.url }}; 
            page.url: {{ page.url }}</p>
        </div>
    {% endif %}
    {% endfor %}
</div> -->

<!-- ## This is a list of site.data.tocs (sorted as in TOC, but without descriptions):

<div class="section-index">
    <hr class="panel-line">
    {% for post in site.data.toc %}  
        {% if post.url == 'docs' %}
            {% for li in post.links %} 
                <p>baseurl: {{ site.url }}; li.title: {{ li.title }}, li.url: {{ li.url }}; page.url: {{ page.url }}</p>
                {% if page.url contains li.url %}
                    {% for i in li.children %} 
                        <p>XXX i.title: {{ i.title }}.</p>
                        {% for dos in site.docs %} 
                            <p>dos.title: {{ dos.title }}; dos.description: {{ dos.description }}.</p>
                            {% if dos.title == i.title %}
                                <div class="entry">
                                    <h5><a href="{{ i.url | prepend: '/' | prepend: site.url }}">{{ i.title }}</a></h5>
                                    <p>dos.description: <b>{{ dos.description }}</b>, i.url: <b>{{ i.url }}.</b></p>
                                </div>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                {% endif %}    
            {% endfor %}
        {% endif %}
    {% endfor %}
</div> -->