---
id: 2760
title: 'How To: See Any Site as it Appears on Mobile'
date: 2014-04-16T21:53:19+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=2760
permalink: /2014/04/how-to-see-any-site-appears-mobile/
dsq_thread_id:
  - "2617766507"
categories:
  - How To
---
I was working on a [Chrome Extension](https://github.com/TSCBennett/Gmail-Compose) (feel free to download and use it) this evening and I noticed something awesome. 

If you right click on a webpage in Chrome, one option in the menu is &#8220;Inspect Element.&#8221; It shows a lot of programming mumbo jumbo which is extremely useful in programming, but not necessarily for anything else, especially if you&#8217;re not programming.

At the bottom of the window, I noticed a new tab that said &#8220;Emulation.&#8221; So, I clicked on it. 

Lo and behold, in the latest Chrome update (M34 stable channel) you can view _any_ webpage as if it were on a mobile device. **How. Awesome. Is. That?** I was able to select one of dozens of Android devices and then emulate the page (after a quick refresh) to see how it would behave&#8230;**including** any JavaScript you have in there as well.

Click any image to see it bigger.

[![](http://content.screencast.com/users/TSCBennett/folders/Snagit/media/0043cbc8-073d-4e99-b71a-be69487cf480/2014-04-16_21-42-38.png "The brianbennett.org landing page as seen on a full size browser")](http://www.screencast.com/t/UdUdr6iQON)

[![](http://content.screencast.com/users/TSCBennett/folders/Snagit/media/4870dc1f-5bcf-4403-96b2-9ad281f98560/2014-04-16_21-44-05.png "Right click and select Inspect Element")](http://www.screencast.com/t/SUDlF5ns)

[![](http://content.screencast.com/users/TSCBennett/folders/Snagit/media/d3de8c5b-58f6-4a7d-b4db-37cee7ca59b8/2014-04-16_21-46-36.png "Select the Emulate tab, set your device, then click Emulate. You may need to refresh the page.")](http://www.screencast.com/t/3KqG8kOL)

I used to have to resize my browser window or put the page I was working on up on a secure testing server or something. Gone are the days of trying to test for mobile on anything else because I can do it right in the Chrome browser. It even reads custom CSS based on media queries (if you use those).

Now, do note, that if you&#8217;re developing across multiple browsers (and if you&#8217;re doing web development, you _should_ be doing that), so you&#8217;ll still need to test for compatibility in Firefox, Opera, Safari, etc. This is just one way to easily knock out some mobile responsive design from your browser.

Why is this useful? If you teach _any_ kind of web development class, this will make your life much easier. Also, since [50% of the world accesses the web via mobile](http://www.digitalbuzzblog.com/infographic-2013-mobile-growth-statistics/) as their primary method, responsive design is a _must_ for any design course. This is one way to help make that process easier for quick cross-platform testing as students learn.