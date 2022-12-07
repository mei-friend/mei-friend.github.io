---
title: Manipulating
permalink: /docs/basic/manipulating/
layout: page
---
# Manipulating

Mei-friend provides some useful tools to manipulate your score or specific elements (under `Manipulate` in the menu bar) in it besides the straight forward ones already discussed in [editing]({{ site.baseurl }}/docs/editing.md).

## Vertical Groups

If you want some elements in your score to be aligned vertically select all of them and use `Add vertical group` or hotkey "v". This adds the attribute `vgrp` with an unused group number to your elements. Elements with the same group number will be aligned. A typical case would be a hairpin-dynamic connection as seen in the screenshot with the crescendo-forte (left with vertical group, right without).

![vertical groups]({{ site.baseurl }}assets/img/manipulating/vgrps.PNG "left with vertical group and right without")

## Clean gestural accidentals (accid.ges)

## Renumbering measures

There are a couple of important settings for renumbering measures in the settings panel under `mei-friend Settings -> Renumber measures`, i.e. how to treat incomplete measures or wether to continue counting measures across endings or not.

Before using `Renumber measures (exec)` it is recommended to use `Renumber measures (test)`: This will show how the renumbering will be done in the console of your browser (hotkey "F12" for many browsers) before actually executing it.

## Re-render MEI (with ids)
