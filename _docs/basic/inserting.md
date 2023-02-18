---
title: Inserting
description: Inserting operations in mei-friend
permalink: /docs/basic/inserting/
layout: page
---

# Insert menu 

There are two ways to insert elements into your MEI-file: Either by typing directly MEI encoding in the editor panel (supported by code completion, see [validation]({{ site.baseurl }}/docs/basic/validation)) or by using the insert functions listed in the  `Insert` menu item (or rather through the corresponding [keyboard shortcuts]({{ site.baseurl }}/cheatsheet){:target="_blank"}) in the notation panel.

Using the editor panel you can simply edit the encoding, changing attribute values or adding new elements. Typical text editing functions are available that you can find under [Code]({{ site.baseurl }}/docs/basic/editing) in the menu bar such as `Undo`, `Search` or `Indent selection`.

Using the `Insert` menu functions in the menu bar (or shortcuts) to add elements is an efficient way to insert new elements. Some inserting functions comprise high-level code manipulation, such as inserting an octave element, where all referenced elements will be manipulated at the same time. 

<!-- If you copy elements be mindful to change the `@xml:id` so there aren't multiple elements with the same `@xml:id`. -->


If you edit directly in the notation panel you can also select multiple elements and make changes for more than one element at once. To make it easier to select slurs or less tedious to click on articulation elements like staccato dots or accents you can enable [drag-select]({{ site.baseurl }}/docs/basic/settings/#drag-select): Go to `settings -> mei-friend` and enable `select slurs` and `select placement elements` under `drag select`. Holding `CTRL` (`CMD` under macOS) while leftclicking,  selecting multiple elements is possible. To click-select the entire chord element, hold `ALT` while clicking on a note insied a chord.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: Drag select.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/inserting/drag_select.gif" 
            alt="Drag select" />
    <figcaption class="figure-caption">To be able to select slurs and placement elements, drag select has to be enabled for these elements in the mei-friend settings.</figcaption>
</figure>

{% include alert.html type="info" title="Select approporiate elements" content="Make sure that you select appropriate elements, i.e., if you select an entire measure you will not be able to insert any elements, but you will still be able to shift the pitches of all selected notes." %}

### Inserting spanning elements

To add spanning elements like a slur select the starting and ending note (notes between can also be selected, the element will be added from first to last selected) and either use `Insert -> Slur` or simply use the shortcut `S`. This will add a slur to the notes selected. If only one note is selected, the the next note in the same layer and staff will be used as the endpoint. The `<slur>` element inserted to the encoding and may be edited there if necessary. You might want to add the attribute `@curvedir="below"` manually or just use `X` with the slur selected, multiple times, if necessary.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;2: Inserting a slur and inverting its placement.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/inserting/insert_slur.gif" 
            alt="Inserting a slur and inverting its placement" />
    <figcaption class="figure-caption">Here you see a slur being inserted between the two notes that are selected. Note that the first time `Invert placement` is used the placement does not change because there is no attribute `@curvedir` yet. The first use of `Invert placement` adds this attribute with default `above`. Further uses change the attribute value between `above` and `below`.</figcaption>
</figure>

Spanning elements added this way will always have a `@startid` and `@endid` which reference the `@xml:id` of the starting and ending note. Equivalent to this a spanning element can also be sufficiently defined by specifying the `@staff` and two timestamps `@tstamp` and `@tstamp2`. This method is commonly used for hairpins.

These two methods can also be mixed by using `@startid` with `@tstamp2` or `@tstamp` and `@endid`. This method isuseful if a slur has a starting note but doesn't have a ending note. A classic situation would be at repeats or multiple endings (as seen in the Fig. 1). You don't have to be used over page or system breaks! In those cases just specify the start and end point and it will be rendered correctly.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;3: Slurs with no specified ending/starting point.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/inserting/spanning.PNG" 
            alt="Screenshot of slurs with no specified ending/starting point" />
    <figcaption class="figure-caption">Situation with multiple endings where slurs don't end/start on a specific note.</figcaption>
</figure>

### Inserting dynamics, directives, and other control elements

A control element (such as dynamics, directives) or ornaments (trills, mordents) can be added to the selected element with the keyboard shortcut `D`. By default, it is added without a `@place` attribute (or the equivalent `@curvedir` in slurs). To set or change this attribute, use `Invert placement` (`X`) multiple times, if necessary. Use `SHIFT - X` to set `@place` to `between`, such as in piano scores (see [between placement]({{ site.baseurl }}/docs/basic/manipulating/#moving-and-deleting-elements) for more details).  The default dynamic that is inserted is always "mf"; it can be changed by editing the string between the tags.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;4: Inserting dynamics and inverting its placement.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/inserting/insert_dynam.gif" 
            alt="Inserting dynamics and inverting its placement" />
    <figcaption class="figure-caption">A `dynamics` element is inserted. This time the placement can be set or inverted with the shortcut `X`.</figcaption>
</figure>

Control elements can also be inserted on multiple selected notes. mei-friend will insert the control element referring to the first (`@startid`) and last (`@endid`) selected element. Some control elements with `@startid` and `@endid` will be displayed by Verovio with a dashed extender line. You may also insert dynamics for multiple staves at once, by selecting notes from multiple staves. This will add the correspondent staff number to the `@staff` attribute.

### Inserting a beam or beam span

TODO 
### Inserting an octave element

TODO

### Inserting a supplied element

For details, please see [inserting supplied elements]({{ site.baseurl }}/docs/advanced/critapp/#inserting-supplied-element). 

### Toggling articulation

Articulation can be toggled (added or removed) by selecting a single or multiple notes and pressing the desired articulation. Select multiple notes either by drag-select or by holding the modifyer key `CTRL` (or `CMD` under macOS) and left-clicking all the notes to be selected. After articulation elements have been inserted, the remain selected; so, pressing `X` multiple times will set the `@place` attribute of the articulation elements accordingly.

For the many ways to manipulate elements and/or MEI encoding, please see [Manipulating]({{ site.baseurl }}/docs/basic/manipulating).
