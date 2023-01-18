---
title: URL parameters
description: Remote-control mei-friend through URL parameters 
permalink: /docs/advanced/urlparameters/
layout: page
---
# Remote-controlling mei-friend with URL parameters

A number of URL parameters may be used to load mei-friend with a specified configuration, e.g., to open a particular Web-hosted MEI file, to set viewing and layout settings,  and to make page or score-element selections. These parameters can be used to construct (long) Web links which can be presented on a Web page or shared through e-mail or messaging services, and direct the Web browsers of users clicking on these links to load mei-friend in the desired state. This allows mei-friend to be "remote-controlled," e.g. for pedagogy or collaboration. 

An example URL to demonstrate the syntax is as follows:

<span class="code">https://mei-friend.mdw.ac.at/?file=*[fileURL]*&speed=false&page=3&autoValidate=false</span>

Note that the parameters are treated as unordered, i.e., the order in which they are specified in the URL has no effect.

## List of supported URL parameters

A comprehensive list of URL parameters supported by mei-friend is available from the [cheat sheet]({{ site.baseurl }}/cheatsheet#url-parameters).

## Simple example

This simple example passes a file URL to mei-friend, to open the first movement of Beethoven's Moonlight Sonata:

[https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei](https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei){:target="_blank"}

{% include alert.html type="info" title="Web-hosted and local files" content='Only Web-hosted files (i.e., URLs of Web-hosted music encodings) may be specified with the <em>file</em> parameter, and their hosting server must support <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">Cross-Origin Resource Sharing (CORS)</a>. Locally-hosted files cannot be specified via URL parameter.' %}

Upon clicking on the example link above, a new window (or tab) will open in your browser that might look in Fig. 1 below.

<figure class="figure">
    <div class="figure-title">Fig.&nbsp;1: Remote-controlled mei-friend with Beethoven's Op. 53.</div>
    <a href="https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei" target="_blank">
       <img class="figure-img" src="{{ site.baseurl }}/assets/img/urlparams/URL-file.png" 
        alt="Screenshot of the first movement of Beethoven's Op. 53, following Breitkopf und Härtel's complete edition." />
    </a>
    <figcaption class="figure-caption">Screenshot of the first movement of Beethoven's Op. 53, following Breitkopf und Härtel's complete edition.</figcaption>
</figure>



## Advanced example

To prominently highlight the first phrase of the secondary theme, you may increase the scale of the notation (i.e., 'zoom in'), set the breaks mode to auto, and specify a selection of the first note of the theme:

[https://mei-friend.mdw.ac.at/?scale=90&breaks=auto&select=note-0000001852354230&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei](https://mei-friend.mdw.ac.at/?scale=90&breaks=auto&select=note-0000001852354230&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei){:target="_blank"}

As the breaks mode is set to auto, mei-friend will first display the first page while processing the page layout in the background (a question mark is shown instead of the number of pages in the page navigation panel). Once that is done, it will flip to the page with the selected note `@xml:id` `note-0000001852354230`. 

<figure class="figure">
    <div class="figure-title">Fig.&nbsp;2: Highlighting note of secondary theme.</div>
    <a href="https://mei-friend.mdw.ac.at/?scale=90&breaks=auto&select=note-0000001852354230&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op53_HenleUrtext/master/Beethoven_Op53_1-HenleUrtext.mei" target="_blank">
       <img class="figure-img" src="{{ site.baseurl }}/assets/img/urlparams/URL-file-scale-break-select.png" 
        alt="Screenshot with the first note of the secondary theme highlighted." />
    </a>
    <figcaption class="figure-caption">Screenshot with the first note of the secondary theme highlighted.</figcaption>
</figure>


<!-- [Beethoven WoO57 Andante favori](https://mei-friend.mdw.ac.at/?notationOrientation=top&notationProportion=.6&facsimileOrientation=left&facsimileProportion=.45&breaks=line&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op76_BreitkopfHaertel/master/Beethoven_Op76-Breitkopf-Haertel.mei){:target="_blank"} -->


## Example for pedagogical contexts: <span class="code">fork=true</span>

When teaching music encoding in a class or tutorial, it is particularly useful to instruct students or attendees to edit their own copy of a template encoding.  You may use the URL parameter `fork=true` to assist in this use-case, provided your template (example encoding) is hosted in a GitHub repository. This parameter will direct mei-friend to ask the user who clicked the link to make a copy (fork) of your repository within the user's GitHub account, first directing them through the log-in process if they are not yet authenticated with GitHub. They will then be able to edit and [commit changes]({{ site.baseurl }}/docs/basic/github){:target="_blank"} to their copy of the file. 

{% include alert.html type="info" title="Forking files from GitHub" content="The 'fork' parameter will only have an effect when the 'file' parameter is used to specify a raw GitHub file URL, i.e., a URL starting with 'https://raw.githubusercontent.com/" %}

[https://mei-friend.mdw.ac.at/?fork=true&file=https://raw.githubusercontent.com/Signature-Sound-Vienna/mei-skeleton/main/mary.mei](https://mei-friend.mdw.ac.at/?fork=true&file=https://raw.githubusercontent.com/Signature-Sound-Vienna/mei-skeleton/main/mary.mei){:target="_blank"}

Clicking on the link above will bring you to the forking interface shown in Fig. 3, with selection option for the user profile to which the fork will be generated.

<figure class="figure">
    <div class="figure-title">Fig.&nbsp;3: Forking interface.</div>
    <a href="https://mei-friend.mdw.ac.at/?fork=true&file=https://raw.githubusercontent.com/Signature-Sound-Vienna/mei-skeleton/main/mary.mei" target="_blank">
       <img class="figure-img" src="{{ site.baseurl }}/assets/img/urlparams/URL-file-fork.png" 
        alt="Screenshot of the mei-friend forking interface." />
    </a>
    <figcaption class="figure-caption">Screenshot of the forking interface after following above link. This will create a fork (i.e., a personal copy) of the repository in the selected GitHub account for further editing and committing. The user will first be directed to authenticate with GitHub, if they haven't done so already.</figcaption>
</figure>

