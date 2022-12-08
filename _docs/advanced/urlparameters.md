---
title: URL parameters
description: Remote-control mei-friend through URL parameters 
permalink: /docs/advanced/urlparameters/
layout: page
---
# Remote controlling mei-friend with URL parameters

You may call mei-friend with a given MEI file, viewing settings, layout settings and even the selected page or list of elements by one (long) link that can be presented on a webpage or through a message. With this, mei-friend can be "remote-controlled" for pedagogical or other purposes.
The prerequisite is that the MEI file is available online through a URL. 

The URL syntax is as follows:

<span class="code">https://mei-friend.mdw.ac.at/?file=*[fileURL]*&speed=false&page=3&autoValidate=false</span>

The order of the URL parameters can be any. 

## Simple example

This simple example only passes one file URL to mei-friend (to open the first movement of Beethoven's Moonlight Sonata):

[https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei](https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei){:target="_blank"}

Upon clicking on this link, a new window (or tab) will open in your browser that might look in Fig. 1 below.

<figure class="figure">
    <div class="figure-title">Fig.&nbsp;1: Remote-controlled mei-friend with Beethoven's Op. 53.</div>
    <a href="https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei" target="_blank">
       <img class="figure-img" src="{{ site.baseurl }}/assets/img/urlparams/URL-file.png" 
        alt="Screenshot of the first movement of Beethoven's Op. 53, following Breitkopf und Härtel's complete edition." />
    </a>
    <figcaption class="figure-caption">Screenshot of the first movement of Beethoven's Op. 53, following Breitkopf und Härtel's complete edition.</figcaption>
</figure>

## Advanced example

If you would like to highlight the first phrase of the secondary theme prominently, you may increase the notation, set the breaks mode to auto:

[https://mei-friend.mdw.ac.at/?scale=90&breaks=auto&select=note-0000001852354230&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei](https://mei-friend.mdw.ac.at/?scale=90&breaks=auto&select=note-0000001852354230&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei){:target="_blank"}

As the breaks mode is set to auto, mei-friend will first display the first page while processing the page layout in the background (a question mark is shown instead of the number of pages in the page navigation panel). Once that is done, it will flip to the page with the selected note ID `note-0000001852354230`. 

<figure class="figure">
    <div class="figure-title">Fig.&nbsp;2: Highlighting note of secondary theme.</div>
    <a href="https://mei-friend.mdw.ac.at/?scale=90&breaks=auto&select=note-0000001852354230&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei" target="_blank">
       <img class="figure-img" src="{{ site.baseurl }}/assets/img/urlparams/URL-file-scale-break-select.png" 
        alt="Screenshot with the first note of the secondary theme highlighted." />
    </a>
    <figcaption class="figure-caption">Screenshot with the first note of the secondary theme highlighted.</figcaption>
</figure>



[Beethoven WoO57 Andante favori](https://mei-friend.mdw.ac.at/?notationOrientation=top&notationProportion=.6&facsimileOrientation=left&facsimileProportion=.45&breaks=line&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op76_BreitkopfHaertel/master/Beethoven_Op76-Breitkopf-Haertel.mei){:target="_blank"}

## List of parameters

List of all available URL parameters is available at the [cheat sheet]({{ site.baseurl }}/cheatsheet#url-parameters).

## Pedagogical example: <span class="code">fork=true</span>

In case you would like your students or colleagues to edit an example file that you provide in a GitHub repository, you may use the URL parameter `fork=true`. This will make mei-friend ask the user who clicked the link to make a copy of your repository in their GitHub account so that they will be able to edit and commit changes to that file. (The file URL has to be a pointer to a GitHub repository starting with <span class="code">https://raw.githubusercontent.com/</span>). 

[https://mei-friend.mdw.ac.at/?fork=true&file=https://raw.githubusercontent.com/Signature-Sound-Vienna/mei-skeleton/main/mary.mei](https://mei-friend.mdw.ac.at/?fork=true&file=https://raw.githubusercontent.com/Signature-Sound-Vienna/mei-skeleton/main/mary.mei){:target="_blank"}

Clicking on the below link will bring you to the forking interface shown in Fig. 3, with selection option for the user profile to which the fork will be generated.

<figure class="figure">
    <div class="figure-title">Fig.&nbsp;3: Forking interface.</div>
    <a href="https://mei-friend.mdw.ac.at/?fork=true&file=https://raw.githubusercontent.com/Signature-Sound-Vienna/mei-skeleton/main/mary.mei" target="_blank">
       <img class="figure-img" src="{{ site.baseurl }}/assets/img/urlparams/URL-file-fork.png" 
        alt="Screenshot of the mei-friend forking interface." />
    </a>
    <figcaption class="figure-caption">Screenshot of the forking interface after following above link. This will create a fork (that is a copy) of the repository in the selected GitHub account for further editing and commiting.</figcaption>
</figure>

