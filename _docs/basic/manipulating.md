---
title: Manipulating
description: Using mei-friend functionality to manipulate encodings
permalink: /docs/basic/manipulating/
layout: page
---
# Manipulating

Mei-friend provides some useful tools to manipulate your score or specific elements (under `Manipulate` in the menu bar or use corresponding hotkeys) in it. 

## Moving and deleting elements

The following functions can be used on one or multiple notes. Simply delete an element with "Delete" or "Backspace". You can change the pitch with "Shift" + "ArrowUp" / "ArrowDown" or an octave up or down by simultaneously pressing "Ctrl".
With "Alt + Ctrl" and "ArrowUp" / "ArrowDown" elements can be moved a staff up or down and a `@staff` attribute will be added to the element. The placement of an element relative to the staff can be inverted with "X" (changes the `@place` attribute).

## Vertical Groups

If you want some elements in your score to be aligned vertically select all of them and use `Add vertical group` or hotkey "v". This adds the attribute [`@vgrp`](https://music-encoding.org/guidelines/v4/attribute-classes/att.verticalgroup.html) with an unused group number to your elements. Elements with the same group number will be aligned. A typical case would be a hairpin-dynamic connection as seen in the screenshot with the crescendo-forte (left with vertical group, right without). 

![vertical groups]({{ site.baseurl }}/assets/img/manipulating/vgrps.PNG "left with vertical group and right without")

## Clean gestural accidentals (accid.ges)

This function checks if the attribute `@accid.ges` is equal to `@accid` and changes `@accid.ges` if necessary.

## Renumbering measures

There are a couple of important settings for renumbering measures in the settings panel under `mei-friend Settings -> Renumber measures`, i.e. how to name incomplete measures, wether to continue counting measures across endings or not or what suffixes to use for endings (For details see [here]({{ site.baseurl }}/docs/basic/settings.md#Renumber_measures))

Before using `Renumber measures (exec)` it is recommended to use `Renumber measures (test)`: This will show how the renumbering will be done in the console of your browser (hotkey "F12" for many browsers) before actually executing it.

## Re-render MEI (with ids)



## Ingest Facsimile

For more information see [here]({{ site.baseurl }}/docs/advanced/facsimile.md#Creating_your_own_MEI_file_with_facsimile_information)