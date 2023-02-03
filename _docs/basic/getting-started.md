---
title: Getting started
description: First steps in mei-friend
permalink: /docs/basic/getting-started/
layout: page 
---
# Getting started

## MEI basic concepts

MEI-Friend is a online tool designed to work with and edit MEI (Music Encoding Initiative). MEI is an xml-based encoding language that supports most western music notation from mensural notation, to tablature to modern music notation (Common Music Notation, CMN). In short MEI tries to encode music notation in a machine-readable structure.

If you don't know how MEI works or have never worked with xml-type languages there are very beginner friendly tutorials [here](https://music-encoding.org/resources/tutorials.html){:target="_blank"}. You can also find a thorough documentation [here](https://music-encoding.org/guidelines/v4/content/){:target="_blank"}.

MEI-friend is not designed to write MEI by hand but to import an already existing MEI file (that was converted from musicXML for example) then edit and correct it.

## Application screen regions

MEI-friend has two major screen regions: the editor panel and the notation panel. The editor panel is where the MEI encoding is displayed and the notation panel where it is rendered. These two panels are always connected so that every change that is made in one of them will result in a change also in the other one.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: Screen regions of the mei-friend.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/screenshot_screen_regions.PNG" 
            alt="Screenshot of mei-friends layout" />
    <figcaption class="figure-caption">Basic layout of mei-friend: To change the position of the two main panels go to "View" and choose notation panel placement.</figcaption>
</figure>

At the top you can find a menu bar with the options: Login, File, Code, View, Manipulate, Insert and Help. Using `View` you can change the layout of the screen regions the way you prefer to have them arranged. Right next to those options you can see the name of the displayed file and its status: Green means no unsaved changes and red with an asterisk means there are still unsaved changes (see Fig. 2). Saving can either mean locally saving the mei file to your device or commiting the changes to a git repository.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;2: File status.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/un_saved.png" 
            alt="File status" />
    <figcaption class="figure-caption">Top: Saved. <br>Bottom: Still unsaved changes in local storage.</figcaption>
</figure>

On the far right you will find three panel icons to toggle the following panels: the [facsimile panel]({{ site.baseurl }}/docs/advanced/facsimile), the annotations panel and the [settings panel]({{ site.baseurl }}/docs/basic/settings). For now the settings panel is the most relevant with its secondary options:

- **mei-friend**: settings regarding mei-friend as a whole
- **editor**: settings regarding the editor panel
- **Verovio**: settings regarding the music notation engraving library [Verovio](https://www.verovio.org/index.xhtml){:target="_blank"} used here that translates the written out encoding into actual music notation

The notation control bar lets you navigate the notation panel among other things.

{% include alert.html type="info" title="Schema indicator" content="The small box 'schema' in Fig. 1 (in this case `ALL 4.0.1`) contains information regarding the type of music notation and the schema used in the file." %}

## Modifying layout of screen regions

As mentioned already you can use `View` in the menu bar to swap the position of the two major panels around. Additionally you can also toggle the three panels facsimile, annotations and settings from this menu and reposition the facsimile panel.

If you want to resize the screen regions you can click and drag the separating line between them.

Find our how to navigate the encoding [here]({{ site.baseurl }}/docs/basic/navigation).

## Interaction between editor and notation

A very important and central feature of the mei-friend is the already briefly mentioned link between the notation and the editor panel. Elements in the notation panel are highlighted in blue and in the editor panel in orange (b3 in bar 2, line 142 in Fig. 1).

To establish this link it is necessary that every element in the editor panel has the attribute `@xml:id` with some string of characters following. With this `@xml:id` mei-friend is able to connect any changes made between the two panels. Important for synchronized updates is also the blue "Updates" checkmark in the notation control bar (see Fig. 3). Otherwise changes have to be updated manually.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;3: Automatic update.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/update_checkmark.png" 
            alt="Automatic update" />
    <figcaption class="figure-caption">The blue checkmark enables automatic updates after changes.</figcaption>
</figure>

{% include alert.html type="info" title="No `@xml:id`" content="Even without `@xml:id` changes in the editor panel will be visible in the notation panel but not vice versa." %}

If your MEI-file is missing `@xml:id` or might be using the same @xml:id twice (i.e. due to copying an element) you can [generate those missing `@xml:id`]({{ site.baseurl }}/docs/basic/manipulating/#addremove-ids-tofrom-mei).

To make changes directly in the notations panel you can use the options in the menu bar but it is recommended to use keyboard shortcuts that you can find under `Help -> Show help page` or [here]({{ site.baseurl }}/cheatsheet){:target="_blank"}. You will find that they are similar to shortcuts used by conventional music notation software. For more information read the pages about [inserting]({{ site.baseurl}}/docs/basic/inserting) and [manipulating]({{ site.baseurl}}/docs/basic/manipulating) elements.

If you are working with larger files the [speed mode]({{ site.baseurl }}/docs/advanced/largefiles) option (in the notation control bar) is essential. In this mode only the current page is rendered instead of the whole file which reduces rendering times immensely.

{% include alert.html type="info" title="Persistence: Save changes and settings in browser's local storage" content="mei-friend remembers your most recent changes in your document and settings in your browser's local storage to persist them even if your browser is closed or the mei-friend page left (more info at <a href='/docs/basic/persistence'>persistence</a>)" %}

## mei-friend appearance

Changing theme of editor will adapt mei-friend's appearance. There are a variety of bright and dark themes available.
If set to default, it will follow the night shift settings of your operating system. You may choose to have the notation match the appearance of the theme by selecting `Notation matches theme`. In case of a dark theme, this will invert the usual colors of the notation.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;4: Themes.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/themes.gif" 
            alt="Themes" />
    <figcaption class="figure-caption">Some fancy themes.</figcaption>
</figure>

## Where next?

For file management and importing or exporting files including supported filetypes check out the pages about [import-export]({{ site.baseurl }}/docs/basic/import-export) and [github]({{ site.baseurl }}/docs/basic/github).

You can find more about file editing at [inserting]({{ site.baseurl }}/docs/basic/inserting) and [manipulating]({{ site.baseurl }}/docs/basic/manipulating). Also read through [validation]({{ site.baseurl }}/docs/basic/validation) to see how mei-friend helps you write ecodings and find errors in your encoding.

For more advanced techniques like working with facsimiles see [advanced topics]({{ site.baseurl }}/docs/advanced).