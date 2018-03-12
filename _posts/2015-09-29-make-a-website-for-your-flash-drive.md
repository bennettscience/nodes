---
id: 4040
title: Make a Website for your Flash Drive
date: 2015-09-29T16:37:53+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4040
permalink: /2015/09/make-a-website-for-your-flash-drive/
enclosure:
  - |
    http://blog.ohheybrian.com/wp-content/uploads/2015/09/demo1.webm
    0
    video/webm
    
  - |
    http://blog.ohheybrian.com/wp-content/uploads/2015/09/demo2.webm
    0
    video/webm
    
  - |
    http://blog.ohheybrian.com/wp-content/uploads/2015/09/demo3.webm
    0
    video/webm
    
categories:
  - All
  - Technology
---
### The Problem

If you&#8217;ve ever been in a situation where substitute teachers can log onto the computer but not do much with the Internet other than take attendance, it can make sub plans hard to pull together, especially if you want students to see a video. This is doubly true if you&#8217;re not in 1:1 environment where students can just pull it up on their own.

Over the last couple years, I&#8217;ve [added an &#8220;absent&#8221; section](http://blog.ohheybrian.com/making-sub-plans-easier/) to my class website to hold instructions for the sub. I&#8217;d make a video, put it on YouTube, and then [put it on the site](http://ohheybrian.com/absent) for the sub to play for the class. Once it&#8217;s set up, I just update the video and the instructions.

This requires two things: an Internet connection which allows for YouTube and one that allows external sites to be displayed. Neither can be done currently.

### The Fix

I got around access issues by simply creating a local copy of the website and putting it on a flash drive. Modern web browsers can have video embedded directly in the HTML using the `video` tag, which makes the process much simpler.

But what if you don&#8217;t know how to write HTML or CSS, like this method requires?

I&#8217;ve created a template to do it for you.

<img class="aligncenter size-full wp-image-4041" src="http://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-29_15-01-50.png" alt="2015-09-29_15-01-50" width="587" height="532" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-29_15-01-50.png 587w, https://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-29_15-01-50-300x272.png 300w" sizes="(max-width: 587px) 100vw, 587px" />

### Using the Templatizer

It&#8217;s a pretty simple tool for you to use. The challenge with these things is always to reduce the number of steps and clicks for general users. The point is to give you a fully-functioning website without knowing any code.

To use the templatizer:

  1. enter your class name, which becomes the title of the generated page.
  2. This step is very important &#8211; enter the **filename of the video _exactly_ as you have it on your hard or flash drive**. The code needs media to reference, so if you put the wrong file, it won&#8217;t work. **This only works with mp4 files for the moment.** Also, try to avoid spaces in the filename because they can cause some wonkiness.
  3. Include any written directions you&#8217;d like shown below the video. If you don&#8217;t put anything here, nothing shows. This is unformatted text &#8211; bullets and other items won&#8217;t show up, so keep it simple.

When you&#8217;re finished, click on &#8220;Create and Download Page&#8221; button to download your shiny new website.

<video autoplay="autoplay" loop="loop" width="622" height="auto"><source src="http://blog.ohheybrian.com/wp-content/uploads/2015/09/demo1.webm" type="video/webm" /></video>

Once you have the file, you need to move it to the folder with the video. **They must be in the same folder to work correctly**. For me, I put these files in a folder call **absent** on the flash drive to make things easier on the sub.

<video autoplay="autoplay" loop="loop" muted="" width="622" height="auto"><source src="http://blog.ohheybrian.com/wp-content/uploads/2015/09/demo2.webm" type="video/webm" /></video>

### The Result

Now, once the downloaded file and video are in the same place, open it up to test your page. You&#8217;re looking for two things &#8211; that the video plays and that the file is really being called from the filesystem, not the Internet.

<video autoplay="autoplay" loop="loop" muted="" width="622" height="auto"><source src="http://blog.ohheybrian.com/wp-content/uploads/2015/09/demo3.webm" type="video/webm" /></video>

Your browser address bar should have something similar to this if it&#8217;s from the flash drive:

<img class="aligncenter size-full wp-image-4055" src="http://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-29_16-27-52.png" alt="2015-09-29_16-27-52" width="266" height="24" />

It&#8217;s not perfect and limited to MP4 video right now, but it works. It solves a problem for me and I hope it can do the same for you.

<h3 style="text-align: center;">
  <a href="http://ohheybrian.com/sub-template.html">Make your own template</a>
</h3>

<p style="text-align: center;">
  <a href="https://gist.github.com/bennettscience/b85b7e028aaba161c8f2">Get the source.</a>
</p>