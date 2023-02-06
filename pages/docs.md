---
layout: page
title: Documentation
permalink: /docs/
---

# Documentation

Welcome to the mei-friend Documentation pages! Please use the navigation menu to switch between topics. To dive straight in, you can also have a look at our [quickstart guide]({{ site.baseurl }}/quickstart) and consult our handy [cheat sheet]({{ site.baseurl }}/cheatsheet) listing all available keyboard shortcuts and URL parameters.

The documentation is split into 
[**Basic topics**]({{ site.baseurl }}/docs/basic) and 
[**Advanced topics**]({{ site.baseurl }}/docs/advanced).

We recommend to begin your exploration with [**Getting started**]({{ site.baseurl }}/docs/basic/getting-started).

## Caveats

Development of both the mei-friend editor, and the documentation available on this site, are on-going community efforts. The information presented here is thus subject to constant change. We will endevour to keep all claims presented here as factual and as current as possible. However, please do not be surprised if, for example, screenshots look slightly outdated by the time you view them; the mei-friend interface may have changed since the most recent time of writing. Please help us keep this documentation correct, complete, and up-to-date by [raising issues](https://github.com/mei-friend/mei-friend.github.io/issues/new/choose/){:target="_blank"} on our [issue tracker](https://github.com/mei-friend/mei-friend.github.io/issues){:target="_blank"} as required. 

The mei-friend editor is developed under an [AGPL v3 license](https://github.com/mei-friend/mei-friend/blob/main/LICENSE){:target="_blank"}. While we endevour to positively contribute to your music encoding enjoyment and success, and aim to ensure the stability, safety, and security of all data and workflows operated upon by mei-friend, please be aware of the terms outlined within this license, particularly sections 16 (disclaimer of warranty) and 17 (limitation of liability).

See the ['About' page]({{ site.base_url }}/about) for more information about contributors, funding, and licensing.

## Conventions

We adhere to the following conventions within the documentation chapters presented here:

### Fonts
We use `monospace fonts` when refering directly to labeled elements of the mei-friend interface, particularly when instructing you to interact with them, e.g., <span class="quote">Click on `Help->Show documentation` to access the mei-friend documentation website</span>.

We also use `monospace fonts` when refering to specific MEI elements or attributes. When talking about elements, we will use one of two styles: either, e.g., as: <span class="quote">the [`measure`](https://music-encoding.org/guidelines/v4/elements/measure.html){:target="_blank"} element</span> or more directly as: <span class="quote">[`<measure>`](https://music-encoding.org/guidelines/v4/elements/measure.html){:target="_blank"}</span>.  When discussing specific attributes, we will refer to, e.g.,: <span class="quote">[`<measure@n>`](https://music-encoding.org/guidelines/v4/elements/measure.html#attributes){:target="_blank"}</span> when talking about an attribute in the context of an element, or just: <span class="quote">`@n`</span> when talking generally about an attribute. Wherever possible, that is, whenever we are talking about an element or an attribute in the context of an element, we will link to the relevant page of the MEI Guidelines (pointing at the list of attributes when appropriate).

### Call-outs
We use three kinds of call-out to convey tidbits of information at first glance, aiming to catch your eye as you are browsing through the documentation:

{% include alert.html type="info" title="Blue call-outs convey information" content="We use these to more succinctly restate an interesting or important fact to help your orientation as you read through the text." %}

{% include alert.html type="warning" title="Orange call-outs clarify potential sources of confusion" content="We hope these will prevent you from getting stuck or frustrated when using mei-friend." %}

{% include alert.html type="danger" title="Red call-outs warn of dangerous operations" content="...particularly, those that may result in data loss. Fortunately, these call-outs are only rarely required!" %}

    


<!-- 
<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: mei-friend fundamental functionlities.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/demo/mei-friend-01.gif" 
            alt="Fundamental functionalities of mei-friend" />
    <figcaption class="figure-caption">Animated GIF demonstrating mei-friend's fundamental capabilities, such as opening and importing files through Drag'n'Drop, navigating in the file through the provided section structure, turning pages or typing a specific page directly, ...</figcaption>
</figure> 
-->


<!-- ![Demonstration of fundamental functionalities]({{ site.baseurl }}/assets/img/demo/mei-friend-01.gif)  -->

<!-- <div class="section-index">
    <hr class="panel-line">
    {% for post in site.docs  %}        
    <div class="entry">
    <h5><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h5>
    <p>{{ post.description }}</p>
    </div>{% endfor %}
</div> -->
