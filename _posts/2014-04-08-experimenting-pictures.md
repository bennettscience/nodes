---
id: 2717
title: Experimenting with Pictures
date: 2014-04-08T12:30:32+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=2717
permalink: /2014/04/experimenting-pictures/
dsq_thread_id:
  - "2596034522"
categories:
  - Creative
  - How To
---
I have a permanent item on my to-do list which says, &#8220;make pictures better on the blog.&#8221; I don&#8217;t really know what that means in the long run, and that&#8217;s the point. I want my content to be more dynamic. WordPress is great for that, but it still feels cumbersome for me. I have to think about a lot of other items like plugins, widgets, and having to dig to get something like custom CSS applied to a post. I&#8217;ve looked into switching over to another open-source CMS called [Anchor](http://anchorcms.com/), but I haven&#8217;t gotten around to migrating yet. It&#8217;ll happen eventually.

Either way, one thing I wanted to experiment with the other day was giving an image a mouse hover overlay which would link to something else. I have a working sample on a [post from the other day](http://blog.ohheybrian.com/nine-skills/), but the gist is shown below.

<img src="http://ohheybrian.com/images/interactive-image.gif" style="border:1px solid black;" />

I tried to do this with inline CSS, but as it turns out, using the `:hover` pseudo property inline is [a big no-no](http://stackoverflow.com/questions/1033156/how-to-write-ahover-in-inline-css).

The reason you can&#8217;t do it inline is you have to add some extra `div` elements to the blog content, and then style each based on it&#8217;s `id`. Not too hard, but the code editing in WordPress really stinks, so it took me a while.

I had an idea of how to do this, but couldn&#8217;t figure out how to stack my new `div` elements. [I found a demo](http://codepen.io/ianfarb/pen/ikeAf) that gave me the HTML structure and accompanying CSS. All I did from there was apply my own image URL and tweak the size of the box as well as the padding applied. My final code ended up as:

**HTML**
  


**CSS** &#8211; put this in `style` tags at the _end_ of your content in the WordPress HTML editor.
  


So, it isn&#8217;t perfect, but it works. If I ever make the switch over to [Anchor](http://www.anchorcms.com), I know this process is much simpler. Until then, I&#8217;ll keep posting tips.