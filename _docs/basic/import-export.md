---
title: Import and Export
description: Import encodings to and export from mei-friend
permalink: /docs/basic/import-export/
layout: page 
---
# Import and Export

## Supported file types for import

Beside MEI, mei-friend is able to open a variety of music encoding formats, which it converts to MEI automatically using Verovio. The file type is inferred automatically based on file content, where possible -- only ABC notation (".abc") and compressed MusicXML (".mxl") files are identified by their file extensions.

Supported formats (through Verovio):
* [MEI](https://en.wikipedia.org/wiki/Music_Encoding_Initiative){:target="_blank"} 
* [MusicXML](https://en.wikipedia.org/wiki/MusicXML){:target="_blank"} uncompressed (plain-text, in score-partwise format) 
* [MusicXML](https://en.wikipedia.org/wiki/MusicXML){:target="_blank"} compressed (file name must end with ".mxl")
* [Humdrum Kern](https://www.humdrum.org/guide/ch02/){:target="_blank"}<sup>*</sup>
* [PAE](https://en.wikipedia.org/wiki/Plaine_%26_Easie_Code){:target="_blank"} (Plaine and Easie)
* [ABC](https://en.wikipedia.org/wiki/ABC_notation){:target="_blank"} (file name must end with ".abc")

<sup>*</sup>n.b., Humdrum Kern is supported in Verovio's release versions, but not in the current development version, as [configured in the mei-friend settings](/docs/basic/settings#general). 

## Supported import modes

### Open local file through file dialog

To open a music encoding file in any of the supported formats from your local file system, use the file dialog window by clicking `Menu–>Open file` (or pressing `CTRL O` on PC, or `CMD O` on macOS; see Fig.&thinsp;1). There are separate menu items for handling specific file types (MusicXML, Humdrum Kern, PAE, and ABC), which open the same file dialog but filter it using the corresponding format's typical file extension.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: mei-friend file menu list.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-file-menu-list.png" 
            alt="Screenshot of mei-friend file menu list" />
    <figcaption class="figure-caption">The file menu provides access to mei-friend's import and export functionalities. </figcaption>
</figure>

### Open local file through drag'n'drop 

Local files in any supported format may also be opened using drag'n'drop. When a file is dragged over mei-friend's notation panel, a blue modal (see Fig.&thinsp;2) appears to indicate that we are ready to import;  release the mouse button to import and open the file as described above.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;2: Opening local files using drag'n'drop.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-drag-n-drop.png" 
            alt="Drag'n'Drop functionality of mei-friend" />
    <figcaption class="figure-caption">Files in supported encoding formats may be dragged over the notation panel to import them into mei-friend.</figcaption>
</figure>

### Open URL and public repertoire

Remotely-hosted files may be opened directly from their Web location by selecting `File->Open URL` (Fig.&thinsp;3), as long as the Web host supports [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS){:target="_blank"}. If CORS is not supported, a corresponding error is displayed in the dialog modal; in this case, you may still download the file to your machine and open the local copy, as described above. 

mei-friend features a selection of publicly-licensed, Web-hosted encodings through its public repertoire, which may be accessed either from the 'Open URL' dialog, or via `File->Public repertoire`. Choose a composer and an encoding to pre-populate the URL field with a corresponding Web address. We encourage [proposals for additions to the public repertoire]({{ site.base_url }}/docs/advanced/repertoire)!

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;3: Open URL / Public repertoire dialog.</div> 
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-public-repertoire.png" alt="Screenshot of mei-friend public repertoire and open URL dialog" />
    <figcaption class="figure-caption">To open a Web-hosted encoding, enter its URL, or choose a piece from the public repertoire; then, before clicking the "Open URL" button.</figcaption>
</figure>

### GitHub integration
Files contained within repositories on GitHub may be directly edited (opened, changed, commited), without requiring them to be downloaded to the local machine; please see the detailed description of mei-friend's [GitHub integration]({{ site.baseurl }}/docs/basic/github).

## Supported export modes

mei-friend has several ways to save, export, or download data. 

### Save MEI

Clicking on `File->Save MEI` (`CTRL-S` on PC, or `CMD-S` on macOS, see Fig.&thinsp;1) will instruct your browser to download the current MEI encoding to your local file system. 

### Save SVG

Clicking on `File->Save SVG` will instruct your browser to download the SVG image currently displayed in the notation panel. 

### Save MIDI

Clicking on `File->Save MIDI` will instruct your browser to download a standard MIDI file generated from the current encoding.

### Preview and save PDF

Clicking on `File->Preview PDF` (`CTRL-P` on PC, or `CMD-P` on macOS, see Fig.&thinsp;4) will activate the PDF preview mode. This mode uses the page-size and margin settings specified in the [Verovio settings panel]({{ site.base_url }}/docs/basic/settings#verovio-settings) to display the notation as a full page. It will also provide a page-range selection modal to specify which pages to export into the PDF to be generated, by setting (one of): all pages, the current page, a specific page range, or selected pages and page ranges specified by entering the corresponding page numbers and ranges (such as `2, 5-8`, separated by commas for individual pages and hyphens for page ranges). 

Switching into the preview-PDF mode will change certain Verovio settings (`'Adjust page height': false, 'mm output': true`) to enable the full-page view through Verovio. It also hides certain non-PDF-relevant notation control bar items ('flip-to-page' and 'update'), and shows the notation font selector.  When closing the preview-PDF mode (by clicking the `x` button or pressing `ESC`), the original notation control bar settings, as shown in the mei-friend settings panel, will be restored. 

{% include alert.html type="info" title="Why is only one page selected in speed mode?" content='When speed mode is activated, only the current page will be exported to the PDF file. Please deactivate speed mode to have all pages available for selection and export to the PDF file.' %}

To generate and download a PDF file for the selected pages, click the `Save PDF` button at the top-right of the notation control bar. This will cause your browser to download a PDF file, using the encoding file name with a `.pdf` file extension. 

<figure class="figure fullwidth">
    <a href="https://mei-friend.mdw.ac.at/" target="_blank">
    <div class="figure-title">Fig.&thinsp;4: Preview PDF with a full-page view.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-preview-pdf.png" 
            alt="Screenshot of mei-friend in preview PDF mode, showing the notation in full page alongside the settings panel to adjust the details of the preview." />
    </a>
    <figcaption class="figure-caption">In 'Preview PDF' mode, the editor panel is hidden, and the notation panel is expanded to show a full page, with an additional page-range selector modal and a save-PDF button in the notation control bar. On the right, the Verovio settings panel is shown to adjust the details of the preview.</figcaption>
</figure>

### Git Commit

Please see the detailed description of mei-friend's [GitHub integration]({{ site.baseurl }}/docs/basic/github) to learn about commiting changes to GitHub.

### Notification of changes

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;5: File-changed status.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/un_saved.png" 
            alt="File status" />
    <figcaption class="figure-caption"><em>Top</em>: No changes since opening or last save. <br><em>Bottom</em>: Unsaved changes exist.</figcaption>
</figure>

The file status display indicates whether the currently open file contains unsaved changes by altering the color of the file name from green (no changes) to red (changes since last download) and adding a red asterisk next to the file name. 

Once the file has been downloaded (saved as MEI) or changes have been committed to GitHub, this file status indicator is cleared (color is reverted from red to green) and the red asterisk disappears.

Note that, due to browser application restrictions, mei-friend is unable to tell whether the download initiated by `File->Save MEI` operation has succeeded - please ensure that the download has worked correctly before proceeding.



<!--
## Fundamental functionalities
![Demonstration of fundamental functionalities]({{ site.baseurl }}/assets/img/demo/mei-friend-01.gif) 
-->