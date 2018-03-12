---
id: 5030
title: Fixing Invalid frob Error in darktable on OSX
date: 2017-01-04T22:10:59+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5030
permalink: /2017/01/fixing-invalid-frob-error-in-darktable-on-osx/
image: assets/img/wp-content/uploads/2017/01/Screen-Shot-2017-01-04-at-9.51.30-PM.png
categories:
  - Creative
---
I use [darktable](http://www.darktable.org) to edit my photos. It&#8217;s a really robust RAW photo editor with a very active development community. The GitHub repo has 19,000+ commits on it over the last five or six years, which is great because it means active improvements. Open source FTW.

It&#8217;s built mainly for Linux, but somewhere, someone added an OSX installer. I edit my photos and then used the Flickr export option to dump them right up to my albums. Over a year ago, I got a _really_ weird error about an invalid &#8220;frob&#8221; that prevented authenticating.

<div id="attachment_5034" style="max-width: 3010px" class="wp-caption aligncenter">
  <img src="http://blog.ohheybrian.com/wp-content/uploads/2017/01/3551011826_19e1e51e56_o.jpg" alt="" width="3000" height="2000" class="size-full wp-image-5034" srcset="https://blog.ohheybrian.com/wp-content/uploads/2017/01/3551011826_19e1e51e56_o.jpg 3000w, https://blog.ohheybrian.com/wp-content/uploads/2017/01/3551011826_19e1e51e56_o-250x167.jpg 250w, https://blog.ohheybrian.com/wp-content/uploads/2017/01/3551011826_19e1e51e56_o-1000x667.jpg 1000w" sizes="(max-width: 3000px) 100vw, 3000px" />

  <p class="wp-caption-text">
    Modified from [flickr photo](https://flickr.com/photos/lintmachine/3551011826 &#8220;This one took FOREVER to line up right&#8230;&#8221;) shared by [lintmachine](https://flickr.com/people/lintmachine) under a [Creative Commons ( BY-NC-SA ) license](https://creativecommons.org/licenses/by-nc-sa/2.0/)
  </p>
</div>

After digging&#8230;a lot&#8230;the problem started in 2014 when Flickr required HTTPS calls to the API. Tonight, I figured out how to patch the broken library in the app so I can upload to Flickr again from darktable. Hurray.

<div id="attachment_5031" style="max-width: 1450px" class="wp-caption aligncenter">
  <img src="http://blog.ohheybrian.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-04-at-9.51.30-PM.png" alt="" width="1440" height="900" class="size-full wp-image-5031" srcset="https://blog.ohheybrian.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-04-at-9.51.30-PM.png 1440w, https://blog.ohheybrian.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-04-at-9.51.30-PM-250x156.png 250w, https://blog.ohheybrian.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-04-at-9.51.30-PM-1000x625.png 1000w" sizes="(max-width: 1440px) 100vw, 1440px" />

  <p class="wp-caption-text">
    Darktable app. Screenshot by me. Open source project at http://www.darktable.org
  </p>
</div>

To fix, you&#8217;ll need to grab the latest version of the **flickcurl** library. The one packaged with the app is out of date, using HTTP requests rather than HTTPS requests. I used Homebrew to grab a copy (`brew install flickcurl`) but [you can also download a zip file](http://librdf.org/flickcurl/) and install that way.

All apps on Mac have files you can explore. I worked in the command line because it was faster for me than opening a couple Finder windows, but you could do it that way, too.

**Terminal command**

`cp Your/File/Location/libflickcurl.0.dylib /Applications/darktable.app/Contents/Resources/lib`

**Finder window**

1. Open a finder window with your downloaded library. Then, open a second Finder window and go to Applications. Right click on libflickcurl.0.dylib and click Copy.

2. Right click on Darktable and choose &#8220;Show package contents&#8221;



<div id="attachment_5032" style="max-width: 571px" class="wp-caption aligncenter">
  <img src="http://blog.ohheybrian.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-04-at-9.57.46-PM.png" alt="" width="561" height="232" class="size-full wp-image-5032" srcset="https://blog.ohheybrian.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-04-at-9.57.46-PM.png 561w, https://blog.ohheybrian.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-04-at-9.57.46-PM-250x103.png 250w" sizes="(max-width: 561px) 100vw, 561px" />

  <p class="wp-caption-text">
    Screenshot is mine.
  </p>
</div>



3. Go to Contents > Resources > lib

4. Right click in the folder and select Paste (or Cmd + V) and then click Replace.

The next time darktable opens, you&#8217;ll use the updated flickcurl library and be able to share directly from the app itself.
