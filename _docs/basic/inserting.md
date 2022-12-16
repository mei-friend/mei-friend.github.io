---
title: Inserting
description: Inserting operations in mei-friend
permalink: /docs/basic/inserting/
layout: page
---
# General

There are two ways to insert elements into your MEI-file: Either directly in the editor panel or by using `Insert` or rather the corresponding [hotkeys](https://repo.mdw.ac.at/mei-friend/help){:target="_blank"} in the notation panel.

## Editing in the editor panel

Using the editor panel you can simply edit the encoding, changing attribute values or adding new elements. Typical text editing functions are available that you can find under `Code` in the menu bar like "Undo", "Search" or "Replace".

{% include alert.html type="info" title="Regexp" content="Using <a href='https://en.wikipedia.org/wiki/Regular_expression'>Regular Expression</a> (regex or regexp) in the search bar is supported  to make searching more powerful." %}

Adding new elements by hand is tideous though and generally not recommended. Using the `Insert` menu in the menu bar (or hotkeys) to add elements is generally the better way or just copy already existing elements. If you copy elements be mindful to change the ID so there aren't multiple elements with the same ID.

## Editing in the notation panel

You can also edit in the notation panel directly. Changes can be made to single or multiple elements depending how many are selected. To make it easier to select slurs or difficult to click articulations like staccato dots or accents you can enable [drag select]({{ site.baseurl }}/docs/basic/settings.md#Drag_select): Go to `settings -> mei-friend` and enable `select slurs` and `select placement elements` under `drag select`. Holding "Ctrl" and leftclicking to select multiple elements is also possible. To select a chord hold "Alt" and click a note from the chord. 

{% include alert.html type="info" title="Select approporiate elements" content="Make sure that you select appropriate elements, i.e. if you select an entire measure you won't be able to insert any elements, but you will still be able to shift the pitches of all selected notes." %}

## Inserting elements

### Inserting articulation

Articulation can be added by selecting a single note but also by selecting multiple notes and adding the same articulation for all of them. Select multiple notes either by drag select or by using holding "Ctrl" and leftclicking all the desired notes.

### Inserting spanning elements

To add spanning elements like a slur select the starting and ending note (notes between can also be selected, the element will be added from first to last selected) and either use `Insert -> Slur` or simply use the hotkey "s". This will add a slur above the notes selected. With "Ctrl + s" it can be added below. If only one note is selected the element will use the next note as the endpoint. The `<slur>` element can then also be found in the encoding and edited here if necessary. You might want to add the attribute `@place=below` manually or just use "X" with the slur selected.

Spanning elements added this way will always have a `@startid` and `@endid` which reference the ID's of the starting and ending note. Equivalent to this a spanning element can also be sufficiently defined by specifying the `@staff` and two timestamps `@tstamp` and `@tstamp2`. This method is commonly used for hairpins.

These two methods can also be mixed by using `@startid` with `@tstamp2` or `@tstamp` and `@endid`. You can use this method if a slur has a starting note but doesn't have a ending note. A classic situation would be at repeats or multiple endings (as seen in the screenshot below). This method does not have to be used over page or system breaks! Just specify the start and end point and it will be rendered correctly.

![Screenshot of slurs]({{ site.baseurl }}/assets/img/inserting/spanning.PNG "Situation with multiple endings where slurs don't end/start on a specific note")

### Inserting Dynamics and Directives

Dynamics can be added with the hotkey "D" (placed above by default) or "Ctrl + D" (to place below). The default dynamic that is inserted is always "mf". It can be changed by editing the string between the tags. Dynamics can also be inserted over multiple notes and are treated like a spanning element, i.e. they get the attribute "endid". The dynamics will be extended by a dashed line.
You can not insert dynamics for multiple staffs at once. If you select notes from multiple staffs mei-friend only adds them to the top staff.

For manipulating techniques see [manipulating]({{ site.baseurl }}/docs/basic/manipulating).
