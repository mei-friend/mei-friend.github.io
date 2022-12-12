---
title: Getting started
description: First steps in mei-friend
permalink: /docs/basic/getting-started/
layout: page 
---
# Getting started

## MEI basic concepts

MEI-Friend is a online tool designed to work with and edit MEI (Music Encoding Initiative). MEI is an xml-based encoding language that supports most western music notation from mensural notation, to tablature to modern music notation (Common Music Notation, CMN). In short MEI tries to encode music notation in a machine-readable structure.
If you don't know how MEI works or have never worked with xml-tpye languages there are very beginner friendly tutorials [here](https://music-encoding.org/resources/tutorials.html){:target="_blank"}. You can also find a thorough documentation [here](https://music-encoding.org/guidelines/v4/content/){:target="_blank"}.

MEI-friend is not designed to write MEI by hand but to import an already existing MEI file (that was converted from musicXML for example) and edit and correct it.

## Application screen regions

MEI-friend has two major screen regions: the editor panel and the notation panel. The editor panel is where the MEI encoding is displayed and the notation panel where it is rendered. These two panels are always connected so that every change that is made in one of them will result in a change also in the other one.

**WG TODO:** please also name in graphcis: schema status (CMN ALL); file name; change status (*); validation status (grünes hakerl links im encoding panel)

![screen regions of mei-friend]({{ site.baseurl }}/assets/img/getting_started/screenshot_screen_regions.PNG "screen regions of mei-friend")

At the top you can find a menu bar with the options: Login, File, Code, View, Manipulate, Insert and Help. Using `View` you can change the layout of the screen regions the way you prefer to have them arranged. Right next to those options you can see the name of the displayed file

On the far right you will find three icons to toggle the following panels: the [facsimile panel]({{ site.baseurl }}/docs/advanced/facsimile.md), the annotations panel and the [settings panel]({{ site.baseurl }}/docs/settings.md). For now the settings panel is the most relevant with its secondary options:

- **mei-friend**: settings regarding mei-friend as a whole
- **editor**: settings regarding the editor panel
- **verovio**: settings regarding the music notation engraving library [verovio](https://www.verovio.org/index.xhtml){:target="_blank"} used here that translates the written out encoding into actual music notation

The notation menu bar lets you navigate the notation panel among other things.

{% include alert.html type="info" title="Info" content="The small box between menu bar and file name (in this case `ALL 4.0.1`) contains information regarding the type of music notation and the schema used in the file. For now it is not important!" %}

## Modifying layout of screen regions

As mentioned already you can use `View` to swap the position of the two major panels around. Additionally you can also toggle the three panels facsimile, annotations and settings from this menu and reposition the facsimile panel.

If you want to resize the screen regions you can click and drag the separating line between them.

## Interaction between editor and notation

A very important and central feature of the mei-friend is the already briefly mentioned link between the notation and the editor panel. Elements in the notation panel are highlighted in blue and in the editor panel in orange (b3 in bar 2, line 142 in the screenshot).

To establish this link it is necessary that every element in the editor panel has the attribute `<xml:id>` with some string of characters following. With this ID mei-friend is able to connect any changes made between the two panels. Important for synchronized updates is also the blue "Updates" checkmark in the notation menu bar. Otherwise changes have to be updated manually.

{% include alert.html type="info" title="No IDs" content="Even without IDs changes in the editor panel will be visible in the notation panel but not vice versa." %}

If your MEI-file is missing IDs or might be using the same ID twice (i.e. due to copying an element) you can [generate those missing IDs]({{ site.baseurl }}/docs/manipulating.md#Re-render_MEI_(with_ids)).

To make changes directly in the notations panel you can use the options in the menu bar but it is recommended to use hotkeys that you can find under `Help -> Show help page`. You will find that they are similar to hotkeys used by conventional music notation software.

![navigation in the notation menu bar]({{ site.baseurl }}/assets/img/getting_started/navigation_notation_panel.PNG "navigation in the notation menu bar")

Using the navigation section in the notation menu bar you can flip through the pages of your rendered MEI-file or put in a page number that you want to jump to. Important to note is that the editor panel will follow the notation panel to the corresponding encoding part as long as this feature is enabled by the blue checkmark to the right.
For more information see [navigation]({{ site.baseurl }}/docs/basic/navigation.md).

If you are working with larger files the [speedmode]({{ site.baseurl }}/docs/advanced/largefiles.md) option (in the notation menu bar) is essential. In this mode only the current page is rendered instead of the whole file which reduces rendering times immensly.

{% include alert.html type="info" title="Local storage" content="mei-friend remembers your most recent work and settings in your browser's local storage to persist them even if your browser is closed as long as you don't delete it automatically." %}

## mei-friend appearance

Changing theme of editor will adapt mei-friend's appearance... a variety of bright and dark themes available...
If set to default, it will follow the night shift settings of your operating system...
You may chose to have the notation match the appearance of the theme. In case of a dark theme, this will invert the usual colors of the notation.

**Insert animated GIF with some selected themes**

## Where next?

Kurzer Text mit Wegweisern zu anderen Kapitel.
