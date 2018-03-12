---
id: 2730
title: Animate (SOME) of the GIFs!
date: 2014-04-08T22:19:19+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=2730
permalink: /2014/04/animate-some-gifs/
dsq_thread_id:
  - "2597487869"
categories:
  - All
  - Creative
  - ds106
  - How To
---
Not all GIFs are created equal. Some just need a little help.

I haven&#8217;t posted more than once in a day in a while, but I&#8217;m really excited about my little [interactive images](http://blog.ohheybrian.com/experimenting-pictures/) kick from earlier.

I got links to work on top of an animated GIFs. After cracking my knuckles, I decided to see if I could push myself a little more. Now, I want an image with some instruction text to play an animated GIF on the hover, not jump out to a link. This is all hobby for me, by the way. Lots of coding and refreshing going on to get it working.

The first thing I needed to do was lay out my HTML tree and CSS skeleton
  


Now, I needed some more information. Problem number one: get the first frame of an animated GIF to use as a static placeholder in the page. Not too hard. I hopped into GIMP, and then copied and exported my first frame as a jpg image to hang out on its own.

<img src="http://content.screencast.com/users/TSCBennett/folders/Snagit/media/da2e4b7a-dee9-4ef0-83e5-f64209a4a788/2014-04-08_21-51-43.jpeg" style="width:219px;height:414px;align:center;" />

Now, the hard part was to get the text to show up in the right place. You can use absolute positioning, but then your `div` elements can get all wonky. On a static HTML page, it isn&#8217;t too hard to do because you control everything. On a blog, it can be messy because you&#8217;re fighting with your template&#8217;s CSS and if you don&#8217;t use the right attribute names or calls, you can end up with a poor layout. So, to make things easier, I just used GIMP to throw some instruction text on to my first frame placeholder.

<div id="box1">
  <div id="caption">
    <span id="text"><img src="http://ohheybrian.com/images/work2.jpg" /></span>
  </div>
</div>



Now came the tricky part. I had to make sure I layered my images correctly in the HTML and CSS. After adding the correct links and the correct frame sizes, I had the following code:



And the result is:

<div id="box2">
  <div id="animate">
    <span id="gif"><img src="http://ohheybrian.com/images/working.gif" /></span>
  </div>
</div>



One thing I&#8217;m still trying to work out is how to get the animation to pause when you move the mouse. Because a GIF is just an image, I don&#8217;t think there is a way to have the loop paused without some serious coding in the background. I&#8217;ve already poked through StackOverflow a little, and can&#8217;t seem to find anything promising. With this method, the GIF will continue to loop in the background _after_ the initial hover, so you&#8217;ll see a little jump.

Why? Animations can be annoying in the corner of your eye. Giving people control over whether or not they want to see some moving pictures is a courtesy. Plus, I wanted to see if I could do it. So there.