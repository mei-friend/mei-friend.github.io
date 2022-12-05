---
title: URL parameters
permalink: /docs/urlparameters/
layout: page
---
# Remote controlling mei-friend with URL parameters

You may call mei-friend with a given MEI file, viewing settings, layout settings and even the selected page or list of elements by one (long) link that can be presented on a webpage or through a message. With this, mei-friend can be "remote-controlled" for pedagogical or other purposes.
The prerequisite is that the MEI file is available online through a URL. 

The URL syntax is as follows:

<span class="code">https://mei-friend.mdw.ac.at/?file=fileURL&speed=false&page=3&autoValidate=false</span>

The order of the URL parameters can be any. 

This simple example only passes the file URL to mei-friend:



A longer example with special 

[Beethoven WoO57 Andante favori](https://mei-friend.mdw.ac.at/?notationOrientation=top&notationProportion=.6&facsimileOrientation=left&facsimileProportion=.45&breaks=line&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op76_BreitkopfHaertel/master/Beethoven_Op76-Breitkopf-Haertel.mei){:target="_blank"}

List of all available URL parameters is available at the [cheat sheet]({{ site.baseurl }}/cheatsheet#url-parameters).