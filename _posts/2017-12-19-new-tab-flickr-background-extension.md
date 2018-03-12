---
id: 5350
title: New Tab Flickr Background Extension
date: 2017-12-19T12:09:51+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5350
permalink: /2017/12/new-tab-flickr-background-extension/
enclosure:
  - |
    https://blog.ohheybrian.com/wp-content/uploads/2017/12/2017-12-19_12-05-25.mp4
    10514179
    video/mp4

image: assets/img/wp-content/uploads/2017/12/2017-12-19_12-07-44.png
categories:
  - All
  - Creative
---
I&#8217;m part of digital-only secret Santa exchange. It&#8217;s a cool idea&#8230;you&#8217;re assigned someone you may (or may not know) and tasked with coming up with a free (or very cheap, ~$5) digital gift. Some ideas were things like creating customized Spotify playlists or blog lists, creative portraits of the person from images you find online, to recipe or book suggestions.

After snooping out my person, I found that they really like being outside, but they&#8217;re a programmer by day. So, I decided to throw together a little Chrome/Firefox extension which replaces their new tab page with a randomly-found picture from Flickr.

Originally, I hardcoded tags that would always return an image of a forest. I decided that wasn&#8217;t much fun. What if they wanted to look at a beach that day?

So, I tapped into Chrome and Firefox local storage. You can input some tags (comma separated) into a simple form and hey presto! The image changes. It will use those tags with each new tab load until you change the tags.

<video style="width:100%; height:auto" autoplay muted loop><source src="https://blog.ohheybrian.com/wp-content/uploads/2017/12/2017-12-19_12-05-25.mp4" type="video/mp4" /></video>

I&#8217;m pulling the large image (1600px on the longest side) and every now and then an image fails to load. I don&#8217;t know of a good way to preprocess for missing image URLs yet. Plus, I did this in a two-day blitz. In good fashion, each photo is linked to the original file in Flickr at the bottom of the screen so you can go and give it a fav if you&#8217;re a Flickr user.

If you want to try it out you can [download this zip holding both extension files](https://ohheybrian.com/media/newTab.zip).

## To Install

### Chrome

1. Go to `chrome:extensions` in the address bar.

2. Make sure the &#8220;Developer Mode&#8221; checkbox is selected.

3. Click on &#8220;Load unpacked extension&#8221; and select the folder you downloaded.

4. Enable it and then open a new tab. You&#8217;ll need to set the tags the first time.

### Firefox

1. Go to `about:addons` in the address bar.

2. Click on the gear icon (top right) and select &#8220;Install Add-On From File&#8230;&#8221;

3. Select the `.xpi` file from your download and enable it in the popup.

4. Open a new tab and set your keywords.

&#8212;

_Featured image is a screenshot of the extension which is showing [Crowded summer beach. High angle view](https://flickr.com/photos/156723268@N03/25293758428 &#8220;Crowded summer beach. High angle view&#8221;) flickr photo by [slon.pics](https://flickr.com/people/156723268@N03) shared into the public domain using [Creative Commons Public Domain Dedication (CC0)](https://creativecommons.org/publicdomain/zero/1.0/)_
