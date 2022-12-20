---
layout: page
description: Working directly from GitHub in mei-friend
title: GitHub integration
permalink: /docs/basic/github/
---
# Working with Github

mei-friend supports extended github integration for selecting repository, branch, and file from your GitHub profile, committing changes back to GitHub, and allows forking of others' public repositories. 

## GitHub authentication

### Authorizing mei-friend for your account

The first time you use mei-friend with your GitHub account, you need to allow mei-friend to access the data from your GitHub profile. This has to be done only once and you may revoke this authorization in your GitHub account (`github.org/yourprofile Settings -> Applications`). Accessing your data is now possible after you have signed in with your GitHub account. 

<figure class="figure halfwidth left">
    <div class="figure-title">Fig.&thinsp;1: Authorize mei-friend for your GitHub profile.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/github/GitHub-OAuth.png" 
        alt="Authorize mei-friend for your GitHub profile" />
    <figcaption class="figure-caption">Screenshot of the application authorization to allow mei-friend access your GitHub profile when you are signed in.</figcaption>
</figure>

### Sign in

After having authorized mei-friend, you may then sign in to GitHub with your username and password (Fig.&thinsp;2 left-hand side). Depending on your security level of GitHub you may be asked for a two-factor authentication code (such as shown in Fig.&thinsp;2 right-hand side). 

<figure class="figure left halfchildren">
    <div class="figure-title">Fig.&thinsp;2: Sign in to your GitHub profile.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/github/GitHub-login-window.png" 
        alt="Sign in to your GitHub profile" />
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/github/GitHub-two-factor-auth.png" 
        alt="Two-factor authentication of your GitHub profile" />
    <figcaption class="figure-caption">Screenshot of the sign-in window of GitHub (left) and the two-factor authentication (right). As you can see in the address bar of your browser, this confidential login data is handled directly by github.com. No login credentials will be transferred to mdw servers.</figcaption>
</figure>

Upon successful authentication, your name will appear in the GitHub menu of mei-friend next to the GitHub icon (see Fig.&thinsp;3 with Werner Goebl signed in).

### Sign out

On a private machine, you may just stay signed in to GitHub. However, on shared browsers or public machines you are strongly advised to sign off from GitHub, using the log out item of mei-friend's GitHub menu (Fig.&thinsp;3). 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;3: Log out from mei-friend.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/github/mei-friend-logout.png" 
        alt="Two-factor authentication of your GitHub profile" />
    <figcaption class="figure-caption">Screenshot of mei-friend's GitHub menu with the log out menu item.</figcaption>
</figure>

You will be then warned that logging out from mei-friend will not sign you off from the GitHub website (Fig.&thinsp;4). 

<figure class="figure fullwidth">
    <div class="figure-title">Fig.&thinsp;4: Warning when logging off from mei-friend.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/github/mei-friend-logout-warning.png" 
        alt="Two-factor authentication of your GitHub profile" />
    <figcaption class="figure-caption">Screenshot of warning message when logging off from mei-friend. Even when logging off from mei-friend, you will remain signed in to GitHub (this is GitHub's OAuth functionality). To completely sign out, please follow the link on the warning message.</figcaption>
</figure>

To completely sign off from GitHub, please confirm the following sign out page from GitHub (Fig.&thinsp;5).

<figure class="figure thirdwidth left">
    <div class="figure-title">Fig.&thinsp;5: Sign out from GitHub.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/github/GitHub-signout-window.png" 
        alt="Authorize mei-friend for your GitHub profile" />
    <figcaption class="figure-caption">Screenshot of GitHub's sign-out page.</figcaption>
</figure>



## Loading files from GitHub

After successful login, your profile name will appear next to the GitHub cat logo. By clicking on your name, you will see a list of repositories of your GitHub profile. The GitHub menu will guide you through the repository structure, all available branches and files within a repository. If a repository contains only a single branch (such as "main") branch selection will be skipped and files listed for selection. Each update might take some loading time during which the GitHub cat icon will spin (i.e., rotate clockwise). After having opened a file, the profile name, repository name and the file name will be shown in the file name status display. You may now work on your file and make changes. 

The GitHub menu also provides navigation buttons to return to the previous level in the GitHub structure (see Fig.&thinsp;6 below). Each click requires negotiation with the GitHub API indicated through a spinning GitHub icon.

## Committing changes

 After having accomplished a meaningful portion of editing work to your encoding, you may now commit these changes back to your GitHub file by entering a commit message in the GitHub menu and confirming the commit by pressing the commit button (see Fig.&thinsp;6). The rotating GitHub icon indicates the commit being negotiated with the GitHub API. After this has been finished, the commit table at the bottom of the GitHub menu will contain the new commit just made with date, author, commit message, and commit hash. The commit hash itself is clickable and will guide you straight to that commit on the GitHub website for future interaction. Note that the commit message field will only be editable after an edit has been made to the encoding (indicated by red color in the file name marked additionally with an asterisk). 

 <figure class="figure fullwidth">
    <div class="figure-title">Fig.&thinsp;6: Commit changes to GitHub.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/github/mei-friend-commit.png" 
        alt="Commit changes back to your GitHub profile" />
    <figcaption class="figure-caption">Screenshot of mei-friend's GitHub menu to commit changes in the encoding back to your GitHub repository.</figcaption>
</figure>




## Forking a repository

Forking someone else's repository is made easy with mei-friend: just click the (second) menu item in the GitHub menu to enter the organisation and repository to be forked, as well as the target profile. Once the "fork repository" button is pressed, you will be guided to the forked repo in the profile you selected before (for an animated GIF see Fig&thinsp;7 below). 

Forking can be initiated as a URL parameter, for more information please see [URL parameters]({{ site.baseurl }}/docs/advanced/urlparameters#pedagogical-example-forktrue).

<figure class="figure fullwidth">
    <div class="figure-title">Fig.&thinsp;7: Forking, editing and commiting changes.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/demo/mei-friend-02.gif" 
        alt="Typical GitHub workflow: opening file, performing some edits, and commiting changes back to GitHub" />
    <figcaption class="figure-caption">Animated GIF of a typical GitHub workflow: selecting repository to be forked into your own profile, selecting a branch and opening a file, performing some edits (here: deleting beams and inserting beamSpans, changing stem direction, adding two dynamics and align them vertically), and commiting changes back to GitHub. Clicking on the commit hash will bring you to that commit on the GitHub website.</figcaption>
</figure>
