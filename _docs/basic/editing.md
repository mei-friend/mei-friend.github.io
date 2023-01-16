---
title: Editing
description: Editing operations in mei-friend
permalink: /docs/basic/editing/
layout: page
---

# Text Editing operations

Under `Code` in the menu bar you can find various text editing operations like "Undo", "Search" or "Replace". [Keyboard shortcuts]({{ site.baseurl }}/cheatsheet){:target="_blank"} are also available for these operations. Make sure that your cursor focus is actually in either notation or editor panel when using a shortcut.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;1: The 'Code' drop down menu.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/editing/code.PNG" 
            alt="'Code' drop down menu" />
    <figcaption class="figure-caption">All of the text editing options in mei-friend.</figcaption>
</figure>

{% include alert.html type="info" title="Regexp" content="Using <a href='https://en.wikipedia.org/wiki/Regular_expression'>Regular Expression</a> (regex or regexp) in the search bar is supported to make searching more powerful." %}

If "[Code folding]({{ site.baseurl }}/docs/basic/settings/#editor-appearance)" is enabled in the settings xml-elements can be folded by clicking the arrow next to the line they start in.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;2: Code folding.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/editing/code_folding.PNG" 
            alt="Code folding" />
    <figcaption class="figure-caption">By clicking the small arrow next to line 31 the unfolded (left) `music` element is being folded (right).</figcaption>
</figure>

## Indent selection

You can easily indent a selected part in the editor panel of your file with `Indent selection`. The indentation size can be adjusted in the [settings]({{ site.baseurl }}/docs/basic/settings/#editor-appearance). If no section over multiple lines is selected the entire MEI-file will be indentet.

## Validate

Automatic validation is [enabled]({{ site.baseurl }}/docs/basic/settings/#editor-behavior) by default but in case you turned it off with this option you can manually validate your MEI-file. More information [here]({{ site.baseurl }}/docs/basic/validation).