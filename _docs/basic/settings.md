---
title: Settings
description: Separate detailed settings panels for mei-friend, the encoding editor, and the notation engraver Verovio
permalink: /docs/basic/settings/
layout: page
---
# Settings panel

In this panel you have three tabs: mei-friend, editor and Verovio. There is a search bar available at the top right of the panel to search the current tab. With the `default` button at the bottom, the current tab is reset to default settings (see Fig.1).

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;1: Settings panel.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/settings/settings_panel.PNG" 
            alt="Settings panel" />
    <figcaption class="figure-caption">The settings panel.</figcaption>
</figure>

{% include alert.html type="info" title="Settings Information" content="All of the options in this panel are also briefly described in the tooltips that appear if hovered over one of the options." %}

## mei-friend settings

### General

- **Verovio version:** With the selected verion the MEI will be rendered. Default is latest but it is also possible to select the one in development. You might want to select an older version if there is a relevant bug so you can't display your file correctly with the latest version.

{% include alert.html type="danger" title="Refresh" content="Switching to older verovio versions before 3.11.0 might require a refresh due to memory issues." %}

- **Speed mode:** Toggle Speed Mode. In Speed mode, only the current page is sent to Verovio to reduce rendering time with large files. See also [Working with large files: Speed mode]({{ site.baseurl }}/docs/advanced/largefiles.md). This option can also be toggled the notation control bar.

- **Style of generated xml:ids:** This option defines the format of xml:ids that are automatically created using `Manipulate -> Re-render MEI (with ids)`. This is mostly just preference...

- **Insert application statement:** Inserts default meta data into the first three lines of an MEI-file if it is "Rerenderd via Verovio" at any point. If you made any changes to the schema used, it is recommended to turn this off so you do not have to change it back everytime you rerender.

### Annotations

- **Show annotations** (in the notation) 
- **Show annotation panel:** Same effect as the annotations icon in the top right next to the settings icon.
- **Maximum number of annotations:** This limits the number of annotations displayed and is useful to prevent mei-friend from slowing down.

### Drag select

Here you can select the type of elements that will be selectable by drag select. Espescially useful for placement elements and slurs that are difficult to select otherwise. Using this option mei-friend will always highlight the element closest to the cursor in the editor panel.

### Control menu

- **Show notation font selector:** Select the notation font used in the notation panel.
- **Show navigation arrows:** These arrows allow to navigate in the notation panel from note to note horizontally or vertically (or: use arrow keys).
- **Show notation update controls:** Show controls to update the notation panel after changes in the editor panel manually or automatically.

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;2: Controls in the notation panel.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/settings/show_controls.PNG" 
            alt="Controls in the notation panel" />
    <figcaption class="figure-caption">(1) Update controls (2) Notation font selector (3) Navigation arrows.</figcaption>
</figure>

### Transpose
mei-friend exposes [Verovio's transposition functionality](https://book.verovio.org/advanced-topics/transposition.html){:target="_blank"} to be controlled through the mei-friend settings panel. Verovio supports a base-40 transposition system that allows for all musically sensible transposition intervals containing up to two sharps or flats (double augmented or double diminished, respectively). 

Transposition can be switched on and off through a checkbox. When activated, the user may select the transposition parameters (transpose by interval or to a specific key) and press the ``transpose`` button to execute the transposition and display the transposed notation in the notation panel. When transposing by interval, multiple presses on the transpose button will successively change the notation. **The encoding remains unchanged while transposing.** 

In order to also transpose the encoding, activate and adjust the transposition settings as required and use ``Manipulate -> Rerender via Verovio`` from the control menu. This will run the encoding through Verovio and display it in the CodeMirror editor. (Note: this may change the schema settings to the Verovio defaults.)

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;3: Transposition settings.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/settings/mei-friend-transposition-settings.png" 
            alt="Transposition settings in the mei-friend settings panel" />
    <figcaption class="figure-caption">Excerpt from the mei-friend settings panel: transposition settings.</figcaption>
</figure>


### Renumber measures

- **Continue across incomplete measures:** Measures that are incomplete (thus have attribute `@metcon="false"`) will also be counted as if they were full measures.
- **Use suffix at incomplete measures:** Only selectable if "Continue across incomplete measures" is NOT activated. Inserts the suffix "cont" (for "continued") for incomplete measures that follow another incomplete measure.
- **Continue across endings:** Continue numbering measures across multiple endings.
- **Use suffix at endings:** Only selectable if numbering is NOT continued across endings. Inserts a suffix for measures in endings. E.g. measures in ending 1 will be numbered "90-a, 91-a..." and in ending 2 "90-b, 91-b...". "ending@n" will take the value of `@n` from the `<ending>` element the measures are in and add it to the measure numbers (e.g. measures in ending "1." will get the suffix "1.").

See also [manipulating]({{ site.baseurl }}/docs/basic/manipulating/#renumbering-measures).

### Facsimile panel

More information [here]({{ site.baseurl }}/docs/advanced/facsimile)

### Handle editorial content

- **Show `<supplied>` elements:** Highlight supplied elements in the notation panel (default: on).
- **Select `<supplied>` highlight color:** Choose the color of the highlights.
- **Select `<supplied>` responsibility:** Select the person responsible for  supplied elements. The list contains the `xml:id` of every person named in `<meiHead> -> <fileDesc> -> <pubStmt>` as `<respStmt>`.

## Editor settings

### Editor appearance

- **Font size:** Font size in the editor panel.
- **Theme:** Different color schemes to choose from to change the editors appearance.
- **Notation matches theme:** Choose wether the notation should change its appearance according to the theme change.
- **Indentation size:** Change the amount of spaces used for indentation (amount of spaces per tab). (??)
- **Line wrapping:** Wether or not lines are wrapped at the end of the panel.
- **Line numbers:** Show line numbers.
- **First line number:** Choose the starting line number.
- **Code folding:** Enable ability to fold code at every xml-element that is spans over more than one line.

### Editor behavior

- **Auto validation:** Enable automatic validation to validate encoding against schema after each edit. This feature works like a spell checker for MEI. More information [here]({{ site.baseurl }}/docs/basic/validation).
- **Auto close brackets:** Automatically close brackets.
- **Auto close tags:** Automatically close tags of elements if written by hand.
- **Match tags:** Highlight elements tags around the cursor in the editor.
- **Highlight trailing spaces:** Highlight unnecessary trailing spaces at end of lines.
- **Key map:** Select the key map for different key bindings.

## Verovio settings

These are all settings that are provided by the Verovio toolkit for engraving the notation. Click [here](https://book.verovio.org/toolkit-reference/toolkit-options.html) for information about them.