---
id: 2426
title: 'Astronomy Project &#8211; Day 4'
date: 2013-10-10T16:38:02+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=2426
permalink: /2013/10/astronomy-project-day-4/
dsq_thread_id:
  - "1844117161"
categories:
  - Projects
---
I&#8217;ve been dabbling a little bit every day with this project and I&#8217;ve made some big changes since [day 1](http://blog.ohheybrian.com/astronomy-project-day-1).

First, with some help from [Brandon Rhodes](http://stackoverflow.com/users/85360/brandon-rhodes) on StackOverflow, I got the function to print the altitude/azmiuth data for a planet when you run the script. This is still hardcoded for South Bend, but that&#8217;s where I live, so it makes sense. Down the line, I&#8217;ll make this a variable a user can use to set their locality.

Next, I found a python module to pull the current date and time when requesting the planet&#8217;s location. Since the Earth moved, it didn&#8217;t make sense to display the position based on date alone. Now, it will read that information from the computer and give more accurate results. Because I did this during the day, I used the sun as my object so I could check it&#8217;s position in my program vs other databases and calculators online. And this is where my brain started to hurt.

If you&#8217;re not familiar with astronomy (and I&#8217;m still learning) you can display position in a few different ways. The easiest (most popular?) way to describe position is using **altitude** and **azimuth** coordinates. The altitude is the angle of the object above the horizon and the azimuth is it&#8217;s angular distance around the horizon. So, if it&#8217;s position is 30<sup>o</sup>, 270<sup>o</sup>, it would be 30 degrees above the horizon looking due west.

<img src="http://www.astro.cornell.edu/academics/courses/astro201/images/alt_az.gif" class="aligncenter" />

You can also use celestial coordinates, **right ascension** and **declination**. RA is the angular distance from the celestial equator. In other words, if you stand on the equator and look up, you&#8217;re looking at RA = 0. The declination, on the other hand, is the direction north or south of the celestial plane. To me, this is much harder to conceptualize in my brain, which is why I prefer alt/az descriptors.

<img src="http://www.astro.cornell.edu/academics/courses/astro201/images/celestialsphere.gif" class="aligncenter" style="height:300px;width:auto;" />

So, back to the code. I got it to print alt/az data, which was awesome. So, to make sure it was working correctly, I checked it against some other tools, and that&#8217;s when I ran into problems.

<img src="http://content.screencast.com/users/TSCBennett/folders/Snagit/media/7718d9e6-1aa1-4522-af1d-17b0eca2439d/2013-10-10_16-03-57.jpeg" class="aligncenter" />

* * *

<img src="http://content.screencast.com/users/TSCBennett/folders/Snagit/media/b7b65fcf-7caa-435c-b2c1-714b42ad388b/2013-10-10_16-10-06.jpeg" class="aligncenter" /></p> 

So, I went back to the code and changed it to print out the RA/Dec instead of alt/az to see what would happen.

<img src="http://content.screencast.com/users/TSCBennett/folders/Snagit/media/571482a0-8345-4aa1-8164-ccba59d3c56e/2013-10-10_16-11-12.jpeg" class="aligncenter" />

Which was better. 

I need to find some way to improve my alt/az calculations. I don&#8217;t know if it&#8217;s my location data or if there need to be adjustments to conversions, but I&#8217;m getting funny answers. For now, I&#8217;ll keep it in RA/Dec because the entire point of this program down the line is to pass this data to a telescope, so it doesn&#8217;t matter which one is easier for the user to look at. We&#8217;ll see.

If you want to see the current code, here&#8217;s [the current dev code base](https://github.com/TSCBennett/astro/tree/astro_dev). If you&#8217;re a python coder, feel free to fork and contribute.