---
title: Import and Export
permalink: /docs/basic/import-export/
layout: page 
---
# Import and Export

## Import: Opening music encoding files

### Supported file types

... mei-friend is able to open a variety of music encoding formats. If not MEI, it will convert on the fly (using Verovio). 
... mei-friend will attempt to guess your file type from its content, regardless of file extension. 

{% include alert.html type="warning" title="Note: not possible for PAE and .mxl (file extension must be correct for these)" %}


* MEI
* MusicXML (Compressed, .mxl and uncompressed, .xml)
* Kern 
* PAE (Plaine and Easie)
* ABC

{% include alert.html type="warning" title="Kern is not supported using Verovio's development version (insert link to subheader on settings page)" %}

### Supported import modes

* Local file
    * Menu - Open file
    * Drag'n'Drop (onto notation)
* Open URL
* Public repertoire (see Public Repertoire doc page)
* GitHub (see GitHub documentation page)

### Supported export modes

* Save MEI
* Save MIDI
* Save SVG (for current notation view)
* Git Commit (see GitHub documentation page)

### Notification of changes
* File status indicator will show when any changes were made. This is cleared once you save MEI or git commit.


