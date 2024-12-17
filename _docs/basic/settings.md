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

{% include alert.html type="danger" title="Refresh" content="Switching to Verovio versions older than 3.11.0 might require a page refresh due to memory issues." %}

- **Speed mode:** Toggle Speed Mode. In Speed mode, only the current page is sent to Verovio to reduce rendering time with large files. See also [Working with large files: Speed mode]({{ site.baseurl }}/docs/advanced/largefiles.md). This option can also be toggled the notation control bar.

- **Style of generated xml:ids:** This option defines the format of xml:ids that are automatically created using `Manipulate -> Re-render MEI (with ids)`. This is mostly just preference...

- **Insert application statement:** Inserts default meta data into the first three lines of an MEI file if it is ``Rerenderd via Verovio`` at any point. If you made any changes to the schema used, it is recommended to turn this off so you do not have to change it back every time you rerender.

- **Language:** Select your preferred language.

- **Show splash screen on load:** Switches the mei-friend splash screen, when the application is loaded,  on or off.

### Drag select

Here you can select the type of elements that will be selectable by mouse drag select. Espescially useful for placement elements and slurs that are difficult to select otherwise. Using this option mei-friend will always highlight the element closest to the cursor in the editor panel.

### Notation control bar

Allows you to show/hide certain control items in the notation control bar in order to save space on your device screen. 

- **Show flip to page controls:** Show controls for flip-to-page behavior that is whether notation flips to the page of the current element in the editor panel.
- **Show notation update controls:** Show controls for notation updating behavior after changes in the editor panel. 
- **Show notation font selector:** Select the notation font used in the notation panel.
- **Show navigation arrows:** These arrows allow to navigate in the notation panel from note to note horizontally or vertically (alternatively use the four arrow keys).
- **Show speed mode checkbox:** Show the speed mode checkbox in the notation panel. For more information about the speed mode see [Working with large files: Speed mode]({{ site.baseurl }}/docs/advanced/largefiles.md).

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;2: Controls in the notation panel.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/settings/show_controls.PNG" 
            alt="Controls in the notation panel" />
    <figcaption class="figure-caption">(1) Update controls (2) Notation font selector (3) Navigation arrows (4) Speed mode controls.</figcaption>
</figure>

### MIDI playback

- **Show playback shortcut:** This will cause a shortcut bubble to appear in the bottom-left corner of the mei-friend interface. By clicking on the shortcut bubble, the MIDI playback control bar will open and immediately start playing the playback.
- **Show MIDI playback control bar:** Shows the MIDI playback control bar at the bottom of the mei-friend interface.
- **Scroll-follow MIDI playback:** This lets the panel scroll-follow to display the currently-sounding score element, which will be highlighted in the notation if enabled in the settings.
- **Page-follow MIDI playback:** The page displayed in the notation will flip itself in time to the music while the MIDI player ist playing.
- **Highlight currently-sounding notes:** Visually highlighting currently-sounding notes in the notation panel during MIDI playback.
- **Playback expansion:** Select an expansion element to be used for MIDI playback.

More information [here]({{ site.baseurl }}/docs/basic/midiplayback).

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

### Annotations

- **Show annotations** (in the notation) 
- **Show annotation panel:** Same effect as the annotations icon in the top right next to the settings icon.
- **Maximum number of annotations:** This limits the number of annotations displayed and is useful to prevent mei-friend from slowing down.

### Facsimile panel

- **Show facsimile panel:** Show the score images of the source edition provided in the facsimile element.
- **Facsimile panel position:** Select facsimile panel position relative to notation.
- **Facsimile image zoom (%):** Select zoom level o facsimile image (in percent).
- **Show full page:** Show facsimile image on full page.
- **Show facsimile zone boxes:** Show the facsimile zone bounding boxes.
- **Edit facsimile zones:** Edit the facsimile zones. This will link the bounding boxes to the facsimile zones.
- **Show facsimile titles:** Show facsimile tiles above the source images.

More information [here]({{ site.baseurl }}/docs/advanced/facsimile).

### Handle editorial content

- **Show editorial markup elements:** Highlight all elements contained by editorial markup elements (default: on).
- **Show markup in PDF:** Show markup in PDF export (default:on).
- **Content alternative encodings:** Choose default content of alternative encodings. Newly created alternative encodings copie by default the original reading, but can also be created empty.
- **Select highlight color for:**
	- `<supplied>`
	- `<unclear>`
	- `<sic>`
	- `<corr>`
	- `<orig>`
	- `<reg>`
	- `<add>`
	- `<del>`

More information [here]({{ site.baseurl }}/docs/advanced/markup).

### Use GitHub Actions

This option allows you to hide or show available GitHub Actions when navigating within the repository in the GitHub menu.

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
- **Auto show validation report:** The validation report will be displayed automatically at the end of the validation process.
- **Auto close brackets:** Automatically close brackets.
- **Auto close tags:** Automatically close tags of elements if written by hand.
- **Match tags:** Highlight elements tags around the cursor in the editor.
- **Highlight trailing spaces:** Highlight unnecessary trailing spaces at end of lines.
- **Key map:** Select the key map for different key bindings.

## Verovio settings

These are all settings that are provided by the Verovio toolkit for engraving the notation. Click [here](https://book.verovio.org/toolkit-reference/toolkit-options.html) for information about them.