---
id: 3222
title: More Attribution Done Just for You
date: 2014-10-13T20:12:30+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=3222
permalink: /2014/10/more-attribution-done-just-for-you/
dsq_thread_id:
  - "3114072102"
categories:
  - All
  - How To
---
I&#8217;m expanding on [a post I wrote a week or two ago](http://blog.ohheybrian.com/if-youre-not-going-to-use-attribution-ill-just-do-it-for-you/) in which I added automatic Flickr attribution to header images on the blog theme I&#8217;m working on. I wanted it to be done on all images on the blog, and I finally got the script after playing around and with some [help from StackOverflow](http://stackoverflow.com/questions/26348904/run-script-for-each-image-in-the-same-class). Here&#8217;s the skinny:

I didn&#8217;t expand my original script &#8211; I want that one to run on its own because it styles the credit a little bit different than the body text. Rather than overlaying a credit, which would require some HTML restructure, I&#8217;m simply adding it below the picture because [KISS is always the best policy](http://en.wikipedia.org/wiki/KISS_principle).

[Here&#8217;s a CodePen demo of the script in action.](http://codepen.io/bbennett/pen/eBwpK)



A couple things to note about the script:

  1. Right now, it only adds a credited caption to Flickr photos, because, let&#8217;s be honest: they have the best API for this kind of thing. Don&#8217;t hope for anything like this on Instagram any time soon.
  2. It specifically looks for the Flickr URL before running the script, so your site won&#8217;t be bogged down with scripts running.

So, there it is. Take it as it is, or take it, mess with it, and share it back.

Also note I&#8217;ve got a larger project going which will get its very own post someday soon coming up.