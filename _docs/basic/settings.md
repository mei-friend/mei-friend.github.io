---
title: Settings
description: Separate detailed settings panels for mei-friend, the encoding editor, and the notation engraver Verovio
permalink: /docs/basic/settings/
layout: page
---
# Settings panel

All of the options in this panel are also briefly described in the tooltips that appear if hovered over one of the options. With the button at the bottom of the panels you can reset your settings to the mei-friend default.

## mei-friend settings

### General

- **Verovio version:** With the selected verion the MEI will be rendered. Default is latest but it is also possible to select the one in development. You might want to select an older version if there is a relevant bug so you can't display your file correctly with the latest version.

{% include alert.html type="danger" title="Refresh" content="Switching to older verovio versions before 3.11.0 might require a refresh due to memory issues." %}

- **Speedmode:** Toggle Verovio Speed Mode. In Speedmode, only the current page is sent to Verovio to reduce rendering time with large files. See also [Working with large files: Speedmode]({{ site.baseurl }}/docs/advanced/largefiles.md). This option can also be toggled the notation menu bar.

- **Style of generated xml:ids:** This option defines the format of xml:ids that are automatically created using `Manipulate -> Re-render MEI (with ids)`. This is mostly just preference...

- **Insert application statement:** Inserts default meta data into the first three lines of an MEI-file if it is rerenderd at any point. If you made any changes to the schema used it is recommended to turn this off so you do not have to change it back everytime you rerender.

### Annotations

- **Show annotations** (in the notation) 
- **Show annotation panel:** Same effect as the annotations icon in the top right next to the settings icon.
- **Maximum number of annotations:** This limits the number of annotations displayed and is useful to prevent mei-friend from slowing down.

### Drag select

Here you can select the type of elements that will be selectable by drag select. Espescially useful for placement elements and slurs that are difficult to select otherwise.

### Control menu

- **Show notation font selector:** Select the notation font used in the notation panel.
- **Show navigation arrows:** These arrows allow to navigate in the notation panel from note to note horizontally or vertically (or: use arrow keys).
- **Show notation update controls:** Show controls to update the notation panel after changes in the editor panel manually or automatically.

![Controls]({{ site.baseurl }}/assets/img/settings/show_controls.PNG "Controls")

### Renumber measures

- **Continue across incomplete measures:** Measures that are incomplete (thus have attribute `metcon="false"`) will also be numbered as if they were complete (??).
- **Use suffix at incomplete measures:** (??)
- **Continue across endings:** Continue numbering measures across multiple endings.
- **Use suffix at endings:** Only selectable (ausgrauen?) if numbering is NOT continued across endings. E.g. measures in ending 1 will be numbered "90-a, 91-a..." and in ending 2 "90-b, 91-b...". Chose from different suffix options.

See also [manipulation]({{ site.baseurl }}/docs/basic/manipulating.md#Renumbering_measures).

### Facsimile panel

- **Show facsimile panel:** Same as using the facsimile icon from the three panel icons in the top right.
- **Facsimile panel position:** The facsimile panel will be placed in the notation panel side. Chose where to place it (default: bottom).
- **Facsimile image zoom:** 
- **Show full page:**
- **Edit facsimile zones:**

### Handle editorial content

- **Show `<supplied>` elements:** Highlight supplied elements in the notation panel (default: on).
- **Select `<supplied>` highlight color:** Choose the color of the highlights.
- **Select `<supplied>` responsibility:** Select the person responsible for  supplied elements. The list contains the `xml:id` of every person named in `<meiHead> -> <fileDesc> -> <pubStmt>` as `<respStmt>`.

## Editor settings

### Editor appearance

- **Font size:** Font size in the editor panel.
- **Theme:** Different color schemes to choose from to change the editors appearance.
- **Notation matches theme:** Choose wether the notation should change its appearance according to the theme change.
- **Indentation size:** Change the amount of spaces used for indentation. (??)
- **Line wrapping:** Wether or not lines are wrapped at the end of the panel.
- **Line numbers:** Show line numbers.
- **First line number:** Choose the starting line number.
- **Code folding:** Enable ability to fold code at every xml-element that is spans over more than one line.

### Editor behavior

- **Auto validation:** Enable automatic validation to validate encoding against schema after each edit. This feature works like a spell checker for MEI. More info [here]({{ site.baseurl }}/docs/basic/validation.md).
- **Auto close brackets:** Automatically close brackets.
- **Auto close tags:** Automatically close tags of elements if written by hand.
- **Match tags:** Highlight elements tags around the cursor in the editor.
- **Highlight trailing spaces:** Highlight unnecessary trailing spaces at end of lines.
- **Key map:** Select the key map for different key bindings.

## Verovio settings

Here are all settings that are provided by the Verovio toolkit for engraving the notation.
