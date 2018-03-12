---
id: 3124
title: 'If You&#8217;re Not Going to Use Attribution, I&#8217;ll Just Do It For You'
date: 2014-09-23T22:02:32+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=3124
permalink: /2014/09/if-youre-not-going-to-use-attribution-ill-just-do-it-for-you/
dsq_thread_id:
  - "3047960873"
categories:
  - Creative
  - How To
---
It&#8217;s important to use attribution online. When you pull a picture, make sure you tell other people where it&#8217;s from. Some sites make it easy for you to do that, others&#8230;not so much. Flickr used to be _great_ at making attribution easy, but their latest redesigns have made it harder to accomplish. [Alan Levine](http://twitter.com/cogdog) has a [great CC attribution gizmo](http://cogdogblog.com/flickr-cc-helper/) which makes it super easy to both give credit to and share a photo from Flickr. I use it all. the. time.

WordPress is great &#8211; I use it for this blog and my class websites. I even ran my own multi-site for my students one year using WordPress because my administrators at the time didn&#8217;t want blogs out in the wild. So, I did it for them. Anyways, WordPress doesn&#8217;t have the best method for featured images. You can&#8217;t use an image source URL to share it&#8230;you need to download the image and then reupload it to your site. It&#8217;s really easy to &#8220;forget&#8221; to post attribution.

I&#8217;ve been playing with another open source CMS called [Anchor](http://www.anchorcms.com). It&#8217;s _very_ bare bones right now, but it&#8217;s super flexible in terms of what you can do. Because I didn&#8217;t have enough going on (read sarcasm there&#8230;) I decided I wanted to create my own custom theme for an Anchor blog. I&#8217;ve got a [demo site](http://dev.ohheybrian.com/anchor/) up right now (which will be changing soon&#8230;updates are coming!) and one thing I _had_ to include was featured images from a URL. 

The next step was to get attribution in there&#8230;not just a link back, but an actual box of text with the post title at the very least. Flickr has a [powerful set of APIs](https://www.flickr.com/services/api/) which can be used to get all sorts of data which you can then bend to your will. 

_For those too wary for code, here&#8217;s the **tl;dr** &#8211; this new blog theme in Anchor will automagically attribute featured images you include. All Flickr images are coming soon._

**The problem** &#8211; In order to use the Flickr API, you need &#8211; at the very least &#8211; a photo ID. Because I&#8217;m attaching the photo using CSS, I have the source URL of the image. Here&#8217;s an example:

![](http://content.screencast.com/users/TSCBennett/folders/Snagit/media/37b459f3-161e-42ed-a6b6-9ecb08e625e7/2014-09-23_21-36-16.png)

I needed a way to get that snippet of the URL into the API call. Unfortunately, there is no one step that can do this. So, I went and gave myself a crash course in [regular expression](http://en.wikipedia.org/wiki/Regular_expression) to get that information into a usable form.

Of course, there&#8217;s another issue in my way. The CSS holding the URL for the image has characters in the syntax which I can&#8217;t use:



The solution: use another regular expression snippet to pull it out.



If you&#8217;re following along, if you put `console.log(bg)` into your editor, it&#8217;ll return a clean URL.

Now that we have the URL, it&#8217;s time to extract the photo ID _only_ because that can be used in the Flickr API to build the attribution URL.

Like I said earlier, I gave myself a _very_ crash course in regular expression, so this very&#8230;_very_ ugly expression<sup><a href="#foot1">1</a></sup> strips everything except for the photo ID and stores it in a variable for later.



OK, we got the URL, then we got the photo ID. Now, it&#8217;s time to build the URL to request information from Flickr about this picture.



This is the URL that we use in the final step of the process to get information from Flickr and then build one more URL, which becomes the attribution link.



This last asks for JSON information from Flickr and then we use jQuery to apply it to a `div` created in the HTML to hold the information. Flickr URLs all have the [same structure](https://www.flickr.com/services/api/misc.urls.html), so building a link back to the owner&#8217;s page is easy. I just pulled out their user ID number and reattached the photo ID we grabbed earlier.

If you want to play with it yourself &#8211; changing the photo and everything &#8211; you can do that in this [CodePen demo](http://codepen.io/bbennett/pen/qAJCB) I set up during testing.

This is a lot of work to automate the link backwards, but hopefully, it&#8217;ll make it easier to add attribution back with _every_ picture, not just ones you remember to grab information for. Again, this **only work with Flickr** at the moment, and only for featured images at that. I&#8217;m planning on expanding this to any image in a post pulled from Flickr as soon as I have time. Or, you could do it. Just share it back when you do.

<small id="foot1">1. no one said code had to be pretty to work</small>