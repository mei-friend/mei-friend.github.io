---
title: Manipulating
description: Using mei-friend functionality to manipulate encodings
permalink: /docs/basic/manipulating/
layout: page
---
# Manipulate menu

mei-friend provides several useful functions to manipulate specific elements or the entire encoding (under item `Manipulate` in the menu bar or by using the corresponding keyboard shortcuts). 

## Inverting placement

The following functions can be used on one or multiple notes.  You can change the pitch with "Shift" + "ArrowUp" / "ArrowDown" or an octave up or down by simultaneously pressing "Ctrl".
With "Alt + Ctrl" and "ArrowUp" / "ArrowDown" elements can be moved a staff up or down and a `@staff` attribute will be added to the element if it doesn't have one already. The placement of an element relative to the staff can be inverted with "X" (changes the `@place` or `@curvedir` attribute).

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: Moving and deleting elements.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/move_delete.gif" 
            alt="Moving and deleting elements" />
    <figcaption class="figure-caption">Notes moved in different ways, deleting a slur and sforzatos.</figcaption>
</figure>


## Vertical groups

If you want some elements in your score to be aligned vertically select all of them and use `Add vertical group` or shortcut "v". This adds the attribute [`@vgrp`](https://music-encoding.org/guidelines/v4/attribute-classes/att.verticalgroup.html) with an unused group number to your elements. Elements with the same group number will be aligned. A typical case would be a hairpin-dynamic connection as seen in Fig. 1 with the crescendo-forte. 

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;2: Example of vertical groups with dynamics.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/vgrps.PNG" 
            alt="Example of vertical groups with dynamics" />
    <figcaption class="figure-caption">On the left the crescendo-forte connection with vertical group and on the right without.</figcaption>
</figure>

## Delete elements

TODO Simply delete an element with "Delete" or "Backspace" (Note: This does not apply to notes. They can only be removed in the editor panel manually).

## Moving notes

TODO In pitch, across staves

## Clean gestural accidentals (accid.ges)

This function will check for every element if they have both `@accid` and `@accid.ges` and delete the unnecessary `@accid.ges` if that is the case.

## Renumbering measures

There are a couple of important settings for renumbering measures in the settings panel under `mei-friend Settings -> Renumber measures`, i.e. how to name incomplete measures, wether to continue counting measures across endings or not or what suffixes to use for endings (for details see [here]({{ site.baseurl }}/docs/basic/settings/#renumber-measures))

Before using `Renumber measures (exec)` it is recommended to use `Renumber measures (test)`: This will show how the renumbering will be done in an infobox before you can actually execute it.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;2: Renumbering measures.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/renumber_measures.gif" 
            alt="Renumbering measures" />
    <figcaption class="figure-caption">In this example the measure containing the upbeat is counted as a separate measure. To change that `@metcon` is set to `false` for that measure. Running `Renumber measures (test)` opens a window that shows the proposed changes which can then be executed with `Renumber measures (exec)`.</figcaption>
</figure>


## Add ids to or remove from MEI encoding

`xml:id` can be either added or removed with `Add ids to MEI` and `Remove ids from MEi`. Ids will only be removed inside of `<body>` elements so e.g. `<meiHead>` is no affected. Removing keeps all `@xml:id` that are referenced somewhere (e.g. by a slur) to not lose any information about the encoding. The style of ids that are being generated can be selected in the [settings]({{ site.basurl }}/docs/basic/settings/#general). TODO CHECK SHORTCUTS!

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;3: Removing and adding ids.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/ids.gif" 
            alt="Removing and adding ids" />
    <figcaption class="figure-caption">After removing ids the infobox shows how many ids have been removed and how many could NOT be removed due to them being referenced somewhere else. The infobox after adding ids shows how many ids have been added and the style used to generate them. Note: As you can see ids are only removed from the body.</figcaption>
</figure>

## Rerender via Verovio

With this feature the file can be newly rendered. Rerendering will also correct the formating of the file like indentation (to just indent a selected part of a file use `Code -> Indent selection` or "Alt + Shift + F") TODO CHECK SHORTCUTS!

## Add or ingest Facsimile

For more information see [facsimile]({{ site.baseurl }}/docs/advanced/facsimile/#creating-your-own-mei-file-with-facsimile-information)