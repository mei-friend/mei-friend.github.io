---
title: About
permalink: /about/
---

# About

The mei-friend online application and its documentation has been designed and implemented by:

[Werner Goebl](https://iwk.mdw.ac.at/goebl/){:target="_blank"} ([@wergo](https://github.com/wergo)) & 
[David M. Weigl](https://iwk.mdw.ac.at/david-weigl/){:target="_blank"} ([@musicog](https://github.com/musicog)), 

[Department of Music Acoustics &ndash; Wiener Klangstil (IWK)](https://iwk.mdw.ac.at/){:target="_blank"}, 

[mdw &ndash; University of Music and Performing Arts Vienna](https://www.mdw.ac.at/){:target="_blank"}

<div>
<a href="https://iwk.mdw.ac.at" target="_blank">
    <img class="uni-logo" src="../assets/img/IWK-logo.svg" alt="Department of Music Acoustics &ndash; Wiener Klangstil (IWK) logo"/>
</a>

<a href="https://www.mdw.ac.at" target="_blank">
    <img class="uni-logo" src="../assets/img/mdw-logo.svg" alt="mdw &ndash; University of Music and Performing Arts Vienna logo" />
</a>
</div>

## Funding

Development into mei-friend has been covered by several research projects over the years:

[H2020 TROMPA &ndash; Towards Richer Online Music Public-domain Archives 2018&ndash;2021](https://iwk.mdw.ac.at/h2020-trompa/){:target="_blank"}

[FWF Signature Sound Vienna 2021&ndash;2024](https://iwk.mdw.ac.at/signature-sound-vienna/){:target="_blank"}, 

[FWF E-LAUTE 2023&ndash;2026](https://iwk.mdw.ac.at/e-laute/){:target="_blank"}

<div>
<a href="https://trompamusic.eu" target="_blank">
    <img class="eu-logo" src="../assets/img/eu-flag.jpg" alt="H2020 EU logo" />
    <img class="logo" src="../assets/img/TROMPA-logo.png" alt="H2020 TROMPA &ndash; Towards Richer Online Music Public-domain Archives 2018&ndash;2021 logo" />

</a>

<a href="https://www.fwf.ac.at" target="_blank">
    <img class="logo" src="../assets/img/fwf-logo.jpg" alt="Austrian Science Funds logo" />
</a>
</div>

## Acknowledgments

We thank Matthäus Pescoller ([@mapscl](https://github.com/mapscl) for contributing to the documentations and testing mei-friend by creating huge orchestral score encodings.

We thank the community for input to the mei-friend development. 
In particular, we would like to acknowledge [Laurent Pugin](https://github.com/lpugin), who contributed the code for schema validation and 
[Thomas Weber](https://github.com/th-we), who helped to improve the speed mode module in mei-friend.

## License

The *mei-friend* Web application is published under [GNU AGPL 3.0](https://github.com/mei-friend/mei-friend/blob/main/LICENSE){:target="_blank"}. 

The *mei-friend* documentation is provided under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/){:target="_blank"}.


## Components

mei-friend makes use of [CodeMirror](https://codemirror.net){:target="_blank"} as text editor, and [Verovio](https://www.verovio.org){:target="_blank"} as music engraving engine. 
[GitHub](https://github.org){:target="_blank"} integration is provided using [jsgit](https://github.com/creationix/jsgit){:target="_blank"}, [jsgit-browser](https://github.com/LivelyKernel/js-git-browser){:target="_blank"}, and the [GitHub REST API](https://docs.github.com/en/rest){:target="_blank"}. XML-DOM manipulations are performed using [tXml](https://github.com/TobiasNickel/tXml){:target="_blank"} by Tobias Nickel. 
The MEI validation and RNG loading code is adapted from the implementation in the [Verovio editor](https://editor.verovio.org){:target="_blank"}, kindly contributed by Laurent Pugin. It makes use of [libxml2](https://gitlab.gnome.org/GNOME/libxml2/){:target="_blank"}. 
Icons are taken from GitHub's [Octicons repository](https://github.com/primer/octicons){:target="_blank"}.

This documentation page uses a [starter template](https://vsoch.github.io/docsy-jekyll/){:target="_blank"} for a Docsy jekyll theme, based
on the Beautiful [Docsy](https://github.com/google/docsy) that renders with Hugo. 

## Publications
<a name="GoeblWeigl-MEC2021"></a>Goebl, W. & Weigl, D. M. (2022). Alleviating the Last Mile of Encoding: The mei-friend Package for the Atom Text Editor.  In S. Münnich & D. Rizo (Eds.), Music Encoding Conference Proceedings 2021 (pp. 31&ndash;39). University of Alicante. doi:[10.17613/fc1c-mx52](https://doi.org/10.17613/fc1c-mx52)

<a name="GoeblWeigl-MEC2022">Goebl, W. & Weigl, D. M. (2022). The mei-friend Web Application: Editing MEI in the Browser. Music Encoding Conference 2022 [Late-breaking Reports]. [forthcoming].

## Support

If you need help, please don't hesitate to [open an issue](https://www.github.com/{{ site.github_user }}/{{ site.github_repo }}).

