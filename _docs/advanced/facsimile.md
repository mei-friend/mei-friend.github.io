---
title: Facsimile support
description: Display and edit encoded facsimile information
permalink: /docs/advanced/facsimile/
layout: page 
---
# mei-friend facsimile support

The [`<facsimile>` element](https://music-encoding.org/guidelines/v4/elements/facsimile){:target="_blank"} is used to associate (regions of) an encoding with  representations of a written notation source as a set of images. mei-friend is able to display these associated images (on the provision that they are available as Web resources, hosted on a [CORS-compliant](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS){:target="_blank"} server). It also makes it possible to edit `<zone>` elements defining image regions (change size, pan, insert new zones, delete zones). Finally, mei-friend can ingest zone information from a facsimile-aligned sparse MEI encoding file (as exported by the [Deep Optical Measure Detector](https://measure-detector.edirom.de/){:target="_blank"}, [Github repository](https://github.com/OMR-Research/MeasureDetector){:target="_blank"}) and merge it with another (non-sparse) encoding. This greatly facilitates the creation of image-aligned encodings of written sources, when both source images and (non-image-aligned) encodings are available. 

## Explore an MEI file with facsimile information
To demonstrate the functionality, please open our example encoding [Beethoven's WoO57 Andante favori](https://mei-friend.mdw.ac.at/?notationOrientation=top&notationProportion=.6&facsimileOrientation=left&facsimileProportion=.45&breaks=line&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op76_BreitkopfHaertel/master/Beethoven_Op76-Breitkopf-Haertel.mei){:target="_blank"} from our public-domain GitHub repository (see Fig.&thinsp;1). Upon loading, the facsimile panel will be activated automatically, displaying the image information provided in the MEI file. The facsimile panel can be hidden through using the 'close' button on the right side of the facsimile menu, and shown again using the facsimile panel icon in the upper right corner of the mei-friend interface. The facsimile source images are linked using `<graphic@target>` (inside the `surface` element) and can be formulated as absolute URLs or as paths relative to the GitHub repository's root folder, or in an image folder named `img`.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: mei-friend facsimile in full-page mode.</div>
    <a href="https://mei-friend.mdw.ac.at/?notationOrientation=top&notationProportion=.6&facsimileOrientation=left&facsimileProportion=.45&breaks=encoded&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op76_BreitkopfHaertel/master/Beethoven_Op76-Breitkopf-Haertel.mei&select=mlzsrty" target="_blank">
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/facsimile/facsimile-fullpage-screenshot.png" 
            alt="Screenshot of mei-friend facsimile mode in full page" />
    </a>
    <figcaption class="figure-caption">Screenshot of mei-friend with facsimile information as full page. (Click on image to open this file with this selection.)</figcaption>
</figure>

### Adjusting the facsimile display

To zoom the displayed image, use the slider in the control bar above the facsimile panel, or use `CTRL - mouse wheel` (on MacOS `CMD - mouse wheel`) while hovering your cursor over the panel. To change the position of the facsimile panel relative to the notation, use the `View –> Facsimile top/bottom/left/right` in the mei-friend control menu (see Fig.&thinsp;2). Drag the borders or corners of the facsimile panel to adjust its size. 

Selecting a `<zone>` element in the editor panel will selected the corresponding overlay in the facsimile panel, highlighting the overlay in transparent blue. This can also be achieved by clicking on the border, or on the zone number, of a given overlay directly within the facsimile panel; in this case, the editor panel will select a corresponding element in the MEI encoding, either the corresponding `<zone>` (if the 'Edit zones' checkbox in the facsimile control bar is checked) or `<measure>` (if it is unchecked).

When the 'Edit zones' checkbox is checked, it is also possible to reposition (move and resize) `<zone>` elements by selecting the corresponding overlay in the facsimile panel, and clicking-and-dragging on the overlay (to move it) or on the border's edges or corners (to resize it). In this mode, zones can also be inserted or delete ([see below](#inserting-and-deleting-zones-alongside-pointing-measures)).

Settings related to the facsimile panel (including its position and the state of the 'Edit' checkbox) will be stored in your browser's [local storage]({{ site.baseurl}}/docs/basic/persistence) and restored when mei-friend is reloaded. 

By default, only the zones corresponding to those measures currently displayed in the notation panel are shown in the facsimile panel. If you want to see the entire page, please activate `Show full page` in the facsimile menu.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;2: mei-friend facsimile in system mode.</div>
    <a href="https://mei-friend.mdw.ac.at/?notationOrientation=top&notationProportion=.6&facsimileOrientation=top&facsimileProportion=.45&breaks=line&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op76_BreitkopfHaertel/master/Beethoven_Op76-Breitkopf-Haertel.mei&select=m5ds0e" target="_blank">
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/facsimile/facsimile-system-screenshot.png" 
            alt="Screenshot of mei-friend with facsimile of one system" />
    </a>
    <figcaption class="figure-caption">Screenshot of mei-friend with facsimile information of one system. (Click on image to open this file with this selection.)</figcaption>
</figure>


### Navigating with facsimile

Clicking on zone boxes (or the numbers) will highlight the pointing element in editor panel and the notation panel (i.e., a measure element with a `@facs` attribute pointing to the zone `@xml:id`). 
Clicking into a pointing element in the editor panel will highlight the corresponding zone in the facsimile display and in the notation. 
Note: The pointing element requires an `xml:id` for this functionality to work.



## Creating your own MEI file with facsimile information

To add facsimile information to an MEI encoding, two workflows are described in the following: 1) creating the facsmile from scratch or 2) using an automatically created skeleton file.

### 1) Creating the facsimile from scratch

By using `Manipulate -> Insert facsimile element` from the menu bar, a blank `facsimile` element will be inserted before the `body` element with a `surface` element for each page beginning (`pb`) in the MEI body. The surface element will contain dummy `graphic` elements targeting dummy image files. In order to get those image files displayed, exchange the dummy target attributes with working URLs. Each page beginning will be added a `@facs` attribute pointing to the pertinent surface `xml:id` attribute.

#### Inserting zones manually

When set to `Edit zones` mode, you may add new zones by click-dragging into the facsimile panel. Make sure, you select an element in the editor panel (e.g., a measure or a staff element, but many more are allowed) and then select a rectangle in the image by mouse click-dragging that corresponds to that element. mei-friend will insert a new zone into the pertinent surface element and add a @facs attribute to the selected element.

Analogously, you may delete a selected zone by pressing `DELETE`. This will delete the zone element and the `facs` inside the pointing element. 

### 2) Using a skeleton file

Another path to obtain facsimile information into your encoding file, is to use the [Deep Optical Measure Detector](https://measure-detector.edirom.de/){:target="_blank"} (see Fig.&thinsp;3), an online tool that automatically detects zones in notation images for each measure. This tool accepts individual images and outputs a skeleton (empty) minimal MEI file (statically named <span class="code">measure_annotations.xml</span>) containing empty measures with the `@facs` pointers to zone elements inside facsimile containing the detected coordinate information. 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;3: Screenshot of the Deep Optical Measure Detector.</div>
    <a href="https://measure-detector.edirom.de/" target="_blank">
       <img class="figure-img" src="{{ site.baseurl }}/assets/img/facsimile/DOMD-screenshot.png" 
        alt="Screenshot of the Deep Optical Measure Detector by the CEMFI lab" />
    </a>
    <figcaption class="figure-caption">Screenshot of the Deep Optical Measure Detector by the <a href="http://www.cemfi.de/" target="_blank">CEMFI lab, Detmold</a>. </figcaption>
</figure>


#### Inserting and deleting zones alongside pointing measures

To edit this skeleton file, please activate `Edit zones` in the facsimile menu. You may now adjust the size and position of existing zones as described above (see Fig.&thinsp;4). 

You may insert new zones and pointing measure elements by using `CMD/CTRL`-click and drag on the facsimile image. This will insert **a new zone and a new measure** after the currently selected zone. If no zone has been selected, a warning message is displayed. Selected zones (and its pointing measure element) may be deleted using the `CMD/CTRL + DELETE` key. (Please compare this behavior with the pure click-dragging described above.)

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;4: Skeleton file while resizing a zone.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/facsimile/facsimile-skeleton-file-edit.png" 
        alt="Screenshot of an MEI skeleton file while resizing a zone" />
    <figcaption class="figure-caption">Screenshot of a skeleton file as output from the Deep Optical Measure Detector by the
        <a href="http://www.cemfi.de/" target="_blank">CEMFI lab, Detmold</a> while resizing the zone referenced by measure number 11. </figcaption>
</figure>

#### Obtaining a fixed number of measures

For ingesting this facsimile skeleton file into your encoding, you need to make sure to have the same amount of measure elements all uniquely numbered by the `@n` attribute. 
To generate unique measure numbers (`measure@n`), select `Continue across incomplete measures` and `Continue across endings` in `mei-friend settings –> Renumber measures` in your skeleton file. 
Renumbering measure will change the numbers displayed in the zone elements.

#### Ingesting facsimile into an MEI file

Open your target MEI file and make sure that it has the same number of measure elements and the identical measure numbering (`measure@n`) as the skeleton file, because mei-friend is comparing this attribute to add a `@facs` attribute to each measure. Click on `Manipulate – Ingest facsimile` and select the skeleton file. After the ingestion, you may re-number your measures as you like, using the provided functionality in the mei-friend settings. Attention: Make sure that the body element of your target MEI file has an `xml:id` attribute before ingestion.

