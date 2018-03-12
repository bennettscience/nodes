---
id: 5024
title: '2017 Project: Photo Year'
date: 2017-01-01T23:16:05+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5024
permalink: /2017/01/2017-project-photo-year/
categories:
  - All
  - Life
  - Projects
---
Pictures launch stories. I take a lot of photos and like most people, they stay on my phone. I used to use Instagram, but I&#8217;m not happy with their terms or use limitations on photos (ever tried to embed an image? It&#8217;s a nightmare). Maybe I&#8217;m an idealist and this is a funk, but whatever.

I&#8217;m posting to [Flickr](http://flickr.com/photos/bennettscience) more and more regularly and I decided to make a small project for 2017. I&#8217;m going to tag a photo each day that will push it and the description over to a new blog I&#8217;m calling [The Photoyear](http://photoyear.ohheybrian.com). It&#8217;ll syndicate that photo (technical stuff below) and turn it into a blog post. You can subscribe via RSS over there if you&#8217;d like. Sometimes, I&#8217;ll cross post it here, but that will be a place for pictures and their stories for the next year.

Thanks, as always, for reading.

* * *

## Setting up Flickr syndication

I started by writing more descriptive&#8230;descriptions&#8230;with my photos. That led to the idea of running a blog entirely on photos &#8211; content and all. Since I&#8217;m already doing that on Flickr, it made sense to try and syndicate it back to a blog of some kind. [Alan Levine](http://www.twitter.com/cogdog) is the king of all things RSS. Some of his posts led to working solutions.

Recently, [Alan posted where to find the Flickr RSS feed](http://cogdogblog.com/2016/12/felix-tweets/) for public photos. Instead of grabbing everything I post (often more than one photo per day) I wanted to grab just one. I was going to manage that by adding photos to an album, but you can&#8217;t do that anymore (not with an RSS URL, anyways). Sad trombone. So, I stick to tags.

I fired up a subdomain &#8211; [**photoyear**.ohheybrian.com](http://photoyear.ohheybrian.com) and installed WordPress and the [FeedWordPress plugin](https://wordpress.org/plugins/feedwordpress/) to syndicate posts from any RSS feed. Running out of the box, it grabs the `<description>` tag only from the XML:



The immediate problem is the size of the embedded image. The `src` attribute is `https://farm1.staticflickr.com/543/31231759933_ba613deec1_m.jpg`, meaning the medium sized image is embedded, which is tiny. I had to get brave and check out a PHP solution.

In `functions.php`, I added a new filter (thanks to the suggestion of&#8230;you guessed it&#8230;Alan) which simply changes the `_m.jpg` to `_b.jpg` for a nice, full-width image.



I&#8217;m still not totally happy with my PHP solution because each post is going to come with, &#8220;a new photo by bennettscience&#8221; appended at the top. I tried using a `preg_replace` function to find the string and remove it (it&#8217;s always the same), but I didn&#8217;t have any luck. If you have a suggestion, I&#8217;d love some help figuring that snippet out.

Anyways, all said and done, you can check out [The Photoyear](http://photoyear.ohheybrian.com) now and then to see what&#8217;s up. I&#8217;m looking forward to reading back over everything as we move through 2017.
