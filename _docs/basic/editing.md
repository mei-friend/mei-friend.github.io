---
title: Editing
description: Editing operations in mei-friend
permalink: /docs/basic/editing/
layout: page
---

# Text Editing operations

Under `Code` in the menu bar you can find many common text editing operations like `Undo`, `Search` or `Replace`. [Keyboard shortcuts]({{ site.baseurl }}/cheatsheet){:target="_blank"} are also available for these operations. To use the keyboard shortcuts, make sure that your cursor focus is presently in the notation or editor panel.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;1: The 'Code' drop down menu.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/editing/code.png" 
            alt="'Code' drop down menu" />
    <figcaption class="figure-caption">All of the text editing options in mei-friend.</figcaption>
</figure>

{% include alert.html type="info" title="Regexp" content="Using <a href='https://en.wikipedia.org/wiki/Regular_expression'>Regular Expression</a> (regex or regexp) in the search bar is supported to make searching more powerful." %}

If "[Code folding]({{ site.baseurl }}/docs/basic/settings/#editor-appearance)" is enabled in the settings xml-elements can be folded by clicking the arrow next to the line they start in.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;2: Code folding.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/editing/code_folding.png" 
            alt="Code folding" />
    <figcaption class="figure-caption">By clicking the small arrow next to line 31 the unfolded (left) `music` element is being folded (right).</figcaption>
</figure>

## Indent selection

You can easily indent a selected part in the editor panel of your file with `Indent selection`. The indentation size can be adjusted in the [settings]({{ site.baseurl }}/docs/basic/settings/#editor-appearance). If no section over multiple lines is selected the entire MEI-file will be indentet.

## Surround with tags

Similar to several common XML editors (such as VS Code, Oxygen), you may surround or wrap the selection with an element, the name of which is to be determined through a small user interface. To initiate the command, use the `Surround with tags` menu item or the keyboard shortcut `CTRL - E` or `CMD - E`. To repeat wrapping with the previous element tag name, use `CTRL - /` or `CMD - /` or the pertinent menu item. 

If nothing is selected in the editor, the element at the current cursor position is selected and used for wrapping. If the selected element is in one line, the starting and ending tag will be added to that line; however, when the selected element spans multiple lines, the starting and ending elements will be added at separate lines and the enclosed tag indented accordingly. 

## Edit matching tags

While editing the tag name of an XML element, mei-friend will co-edit the matching tag name simultaneously, independently whether the starting or the ending tag is modified.

## Validate

Automatic validation is [enabled]({{ site.baseurl }}/docs/basic/settings/#editor-behavior) by default, but it may turned it off in the editor settings panel. When automatic validation is disabled, validation can be manually initiated by clicking on the validation icon at the top-left corner of the editor. More information [here]({{ site.baseurl }}/docs/basic/validation).