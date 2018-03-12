---
id: 4007
title: Quickly Make Bulletin Board Words
date: 2015-08-21T21:53:34+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4007
permalink: /2015/08/list-quick-format/
categories:
  - All
  - Technology
---
[Marc Seigel](http://www.twitter.com/daretochem) is always doing great things in his classroom and he tweeted out a great picture of a bulletin board that now lives at the front of his room.

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="4" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
  <div style="padding:8px;">
    <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50% 0; text-align:center; width:100%;">
      <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;">
      </div>
    </div>
    
    <p style=" margin:8px 0 0 0; padding:0 4px;">
      <a href="https://instagram.com/p/6m-8JgwkWP/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_top">My new bulletin board at the front of the #roomofawesome No more boring announcement board. Now positive messages are what the students will see every day.</a>
    </p>
    
    <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
      A photo posted by marc seigel (@daretochem) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2015-08-20T14:49:00+00:00">Aug 20, 2015 at 7:49am PDT</time>
    </p>
  </div>
</blockquote>



I&#8217;m working on making my Word Wall (more on that some other time) and my biggest beef is how long it takes to go through and make each word look nice. Selecting each term, changing the font, changing the style&#8230;way too long.

So, here&#8217;s a script that will do the same thing.



The script has an array of the most readable fonts in the Google Font library. If you want to add others, just add it&#8217;s name in single quotes on line 20.

Words go on their own line in the Google Document. When you add the script, reload the doc and a special menu will appear at the top where you can run the script. It loops through each line, applies a random font style, changes the font size to 48px, and then randomly applies bold formatting.

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/08/wordfont.mp4.gif" alt="wordfont.mp4" width="640" height="480" class="aligncenter size-full wp-image-4010" />

[You can grab a view-only version of the document](https://drive.google.com/open?id=1PelWeCsyAG_O5zvKEcDnwe1OQ077IIpC5Gm_3DWSPMs) for your own drive. Instructions are also in the document.