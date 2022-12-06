---
title: Settings
permalink: /docs/settings/
layout: page
---
# Settings panel

All of the options in this panel are also briefly described in the tooltips that appear if hovered over one of the options.

## mei-friend settings

### General

- **Verovio version:** With the selected verion the MEI will be rendered. Default is latest but it is also possible to select the one in development. You might want to select an older version if there is a relevant bug so you can't display your file correctly with the latest version.

{% include alert.html type="danger" title="Refresh" content="Switching to older verovio versions before 3.11.0 might require a refresh due to memory issues." %}

- **Speedmode:** Toggle Verovio Speed Mode. In Speedmode, only the current page is sent to Verovio to reduce rendering time with large files. See also [Working with large files: Speedmode]({{ site.baseurl }}/docs/largefiles.md). This option can also be toggled the notation menu bar.

- **Style of generated xml:ids:** This option defines the format of xml:ids that are automatically created using `Manipulate -> Re-render MEI (with ids)`. This is mostly just preference...

- **Insert application statement:** Inserts default meta data into the first three lines of an MEI-file if it is rerenderd at any point. If you made any changes to the schema used it is recommended to turn this off so you do not have to change it back everytime you rerender.

## Editor settings

bla bla

## Verovio settings

Here are all settings that are provided by the Verovio toolkit for engraving the notation.
