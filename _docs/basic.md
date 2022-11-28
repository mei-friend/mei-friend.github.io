---
title: Basic concepts
permalink: /docs/basic/
layout: page 
---
# Basic concepts

## MEI basic concepts

MEI-Friend is a online tool designed to work with and edit MEI (Music Encoding Initiative). MEI is an xml-based encoding language that supports most western music notation from mensural notation, to tablature to modern music notation (Common Music Notation, CMN). In short MEI tries to encode music notation in a machine-readable structure. 
If you don't know how MEI works or have never worked with xml-tpye languages there are very beginner friendly tutorials [here] (https://music-encoding.org/resources/tutorials.html){:target="_blank"}. You can also find a thorough documentation [here] (https://music-encoding.org/guidelines/v4/content/){:target="_blank"}.

MEI-friend is not designed to write MEI by hand but to import an already existing MEI file (that was converted from musicXML for example) and edit and correct it with this tool.

.. werden nicht hier erklärt, aber Hilfe gibt es: 
 * Guidelines
 * music-encoding.org tutorials
 * usw.

## Application screen regions

MEI-friend has two major screen regions: the editor panel and the notation panel. The editor panel is where the MEI encoding is displayed and the notation panel where it is rendered. These two panels are always connected so that every change that is made in one of them will result in a change also in the other one.

![screen regions of MEI-friend]({{ site.baseurl }}/assets/img/Basic_concepts/Screenshot_Screen_Regions.png "screen regions of MEI-friend")

At the top you can find a menu bar with the options: Login, File, Code, View, Manipulate, Insert and Help. Using `View` you can change the location of your screen regions the way you prefer to have them arranged. Right next to those options you can see the name of the displayed file

{% include alert.html type="info" title="Info" The small box between menu bar and file name (in this case "ALL 4.0.1") contains information regarding the type of music notation and the schema used in the file. For now it is not important! %}

On the far right you will find three icons to toggle the following panels: the [facsimile panel](_docs\facsimile.md), the annotations panel and the settings panel.

* Screenshot + labels
* Menu bar (with three panel icons)
* XML Editor (CM)
* Notation panel (Verovio)
* Notation menu bar  
* Settings panel

## Modifying layout of screen regions

* View menu (orientation)
* Resizing

## Interaction between editor and notation

* Selection
* Navigation, pre-requisite: XML-ID
* Settings for page flipping and notation updates

## Local storage

{% include alert.html type="info" title="mei-friend remembers your most recent work and settings in your browser's local storage to persist them even if your browser is closed." %}

## Where next?

Kurzer Text mit Wegweisern zu anderen Kapiteln