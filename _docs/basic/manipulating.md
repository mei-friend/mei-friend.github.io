---
title: Manipulating
description: Using mei-friend functionality to manipulate encodings
permalink: /docs/basic/manipulating/
layout: page
---
# Manipulating

Mei-friend provides some useful tools to manipulate your score or specific elements (under `Manipulate` in the menu bar or use corresponding keyboard shortcuts) in it. 

## Moving and deleting elements

The following functions can be used on one or multiple notes. Simply delete an element with "Delete" or "Backspace". You can change the pitch with "Shift" + "ArrowUp" / "ArrowDown" or an octave up or down by simultaneously pressing "Ctrl".
With "Alt + Ctrl" and "ArrowUp" / "ArrowDown" elements can be moved a staff up or down and a `@staff` attribute will be added to the element if it doesn't have one already. The placement of an element relative to the staff can be inverted with "X" (changes the `@place` attribute).

## Vertical Groups

If you want some elements in your score to be aligned vertically select all of them and use `Add vertical group` or hotkey "v". This adds the attribute [`@vgrp`](https://music-encoding.org/guidelines/v4/attribute-classes/att.verticalgroup.html) with an unused group number to your elements. Elements with the same group number will be aligned. A typical case would be a hairpin-dynamic connection as seen in Fig. 1 with the crescendo-forte. 

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;1: Example of vertical groups with dynamics.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/vgrps.PNG" 
            alt="Example of vertical groups with dynamics" />
    <figcaption class="figure-caption">On the left the crescendo-forte connection with vertical group and right without.</figcaption>
</figure>

## Clean gestural accidentals (accid.ges)

This function will check for every element if they have both `@accid` and `@accid.ges` and delete the unnecessary `@accid.ges` if that is the case.

## Renumbering measures

There are a couple of important settings for renumbering measures in the settings panel under `mei-friend Settings -> Renumber measures`, i.e. how to name incomplete measures, wether to continue counting measures across endings or not or what suffixes to use for endings (For details see [here]({{ site.baseurl }}/docs/basic/settings/#renumber-measures))

Before using `Renumber measures (exec)` it is recommended to use `Renumber measures (test)`: This will show how the renumbering will be done in a pop-up window before actually executing it.

## Add/remove ids

`xml:id`s can be either added or removed with `Add ids to MEI` and `Remove ids from MEi`. Removing keeps all `@xml:id` that are referenced somewhere (e.g. by a slur) to not lose any information about the encoding.

## Rerender via Verovio

With this feature the file can be newly rendered. Rerendering will also correct the formating of the file like indentation (to just indent a selected part of a file use `Code -> Indent selection` or "Alt + Shift + F")

## Ingest Facsimile

For more information see [here]({{ site.baseurl }}/docs/advanced/facsimile/#creating-your-own-mei-file-with-facsimile-information)