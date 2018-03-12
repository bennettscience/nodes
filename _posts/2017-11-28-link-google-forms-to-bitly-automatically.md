---
id: 5327
title: Link Google Forms to Bitly Automatically
date: 2017-11-28T14:36:41+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5327
permalink: /2017/11/link-google-forms-to-bitly-automatically/
enclosure:
  - |
    https://blog.ohheybrian.com/wp-content/uploads/2017/11/2017-11-28_13-25-20.mp4
    1311512
    video/mp4

image: assets/img/wp-content/uploads/2017/11/34645041515_96d20ca08a_z.jpg
categories:
  - Code
  - Technology
---
If you have a [bit.ly](https://bit.ly) account, you can get a public API token which can be used to create shortcodes. This is really handy in my situation, where I&#8217;m creating a ton of feedback spreadsheets (another monster post on that later). Using a small code snippet, you can create a feedback form, throw in some code, and have it display as a short URL and QR code.

If you&#8217;re starting from scratch, create a template form and spreadsheet. When you need to make a feedback form, use **File > Make a copy** on the spreadsheet to copy over the code.

[Otherwise, you can make a copy of this blank template](https://docs.google.com/spreadsheets/d/1aQ_UT_tQKIHymYPOn5zqYjpxlV-Q-hN1OXKVfdUHkBY/edit?usp=sharing/copy) to get started (code is already inserted). If you&#8217;re going to make your own, _be sure you have a form linked._ If there is no form on your sheet, you&#8217;ll get an error.

## The code

The full source code is below. Note that there are **two** files: one called **Code.gs** and one called **popup.html**. If you&#8217;re copying/pasting, you need to create an HTML file (File > New > Html file in the script editor) and call it &#8216;popup&#8217;.



## In action

<a href="https://blog.ohheybrian.com/wp-content/uploads/2017/11/2017-11-28_13-25-20.mp4" target="_blank"><video style="width:100%; height:auto" autoplay muted loop><source type="video/mp4" src="https://blog.ohheybrian.com/wp-content/uploads/2017/11/2017-11-28_13-25-20.mp4" /></video></a>

_click for larger view_

The wheels of the web keep spinning&#8230;

&#8212;

_[Cog in the wheel](https://flickr.com/photos/photobyaaron/34645041515 &#8220;Cog in the wheel&#8221;) flickr photo by [WickedVT](https://flickr.com/people/photobyaaron) shared under a [Creative Commons (BY-NC-ND) license](https://creativecommons.org/licenses/by-nc-nd/2.0/)_
