---
id: 4997
title: Random sort a Google Sheet easily
date: 2016-12-08T10:58:45+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4997
permalink: /2016/12/random-sort-a-google-sheet-easily/
enclosure:
  - |
    http://blog.ohheybrian.com/wp-content/uploads/2016/12/random.webm
    541817
    video/webm

categories:
  - All
  - Technology
---
I was working on student grades in a Google Sheet last night and I needed an easy way to randomly sort students so I could show some score adjustments. Sheets lets you sort A-Z and Z-A easily, but there&#8217;s no baked in random function, which makes sense.

I could have scripted it, but it was late and I was feeling lazy. There&#8217;s an easier method.

Grab a column and enter `=rand()`. This will generate a random number between 0 and 1. Click and drag this down the entire range. Then, sort this column A-Z. Hey presto! Random sorting a Sheet.

<video muted loop autoplay><source src="http://blog.ohheybrian.com/wp-content/uploads/2016/12/random.webm" type="video/mp4"></video>

Notice that the random column changes every time something else is clicked. This won&#8217;t affect anything other than the sorting, but it allows you to resort if it isn&#8217;t &#8220;random enough.&#8221;

I&#8217;ve been ruminating on a way to use Sheets and Google Apps Script as a fully-functional gradebook. I&#8217;m not there yet, but I can see this being helpful in that implementation.
