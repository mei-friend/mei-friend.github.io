---
title: Editing
permalink: /docs/editing/
layout: page
---
# Editing

There are two ways to edit your MEI-file: Either changing the encoding directly in the editor panel or by using `Manipulate` and `Insert` or rather the corresponding [hotkeys](https://mei-friend.mdw.ac.at/help).

## Editing in the editor panel

Using the editor panel you can simply edit the encoding, changing attribute values or adding new elements. Typical text editing functions are available that you can find under `Code` in the menu bar like "Undo", "Search" or "Replace".

> {% include alert.html type="info" title="Regexp" %} Using ["Regular Expression"](https://en.wikipedia.org/wiki/Regular_expression) (regex or regexp) in the search bar is supported to make searching more powerful.

Adding new elements by hand is tideous and generally not recommended. You can use the `Insert` menu in the menu bar to add elements or just copy already existing elements. If you copy elements be mindful to change the ID so there aren't multiple elements with the same ID.

## Editing in the notation panel

You can also edit in the notation panel directly. Changes can be made to single or multiple elements depending how many are selected. To make it easier to select slurs or difficult to click articulations like staccato dots or accents you can enable drag select: Go to `settings -> mei-friend` and enable `select slurs` and `select placement elements` under `drag select`.

> {% include alert.html type="info" title="Select meaningful elements" %} Make sure that you select appropriate elements, i.e. if you select an entire measure you won't be able to insert any elements, but you will still be able to shift the pitches of all selected notes.

## Examples

### Adding spanning elements

To add spanning elements like slurs, ties or hairpins select the starting and ending note (notes between can also be selected, the element will be added from first to last selected) and either use `Insert -> Slur` or simply use the hotkey "s". This will add a slur above the notes selected. With "Ctrl + s" it can be added below. If only one note is selected the element will use the next note as the endpoint. The `<slur>` element can then also be found in the encoding and edited here if necessary. You could maybe want to add the attribute `place=below` manually.

Spanning elements added this way will always have a `startid` and `endid` which reference the ID's of the starting and ending note. Equivalent to this a spanning element can also be sufficiently defined by specifying the `staff` and two timestamps `tstamp` and `tstamp2`. This method is commonly used for hairpins.

These two methods can also be mixed by using `startid` with `tstamp2`. You can use this method if a slur has a starting note but doesn't have a ending note.
(Screenshot)