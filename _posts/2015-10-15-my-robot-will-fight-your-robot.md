---
id: 4080
title: My Robot Will Fight Your Robot
date: 2015-10-15T15:23:06+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4080
permalink: /2015/10/my-robot-will-fight-your-robot/
image: assets/img/wp-content/uploads/2015/10/3853591562_d7750f6ae5_b.jpg
categories:
  - Technology
---
Spam on Twitter feels like an all-time high right now. Twitter itself is woefully horrible at taking reports of abuse and spamming and all a user can do is use the completely un-fulfilling &#8220;Report Tweet&#8221; option to block the user. When they spam hashtags, companies create robots faster than you can report.

Twitter spam is out of control.

MMSG.net (I&#8217;m not linking because I don&#8217;t want to give them _any_ web traffic) has been spamming the #flipclass hashtag for _months_ on end. The problem is that they do it through bots with randomly-generated, vaguely eastern-European-named &#8220;users.&#8221; The feed is filled with junk and blocking individual users doesn&#8217;t make much sense because they just make more users.

Twitter spam is out of control.

I use [Martin Hawksey&#8217;s](http://www.twitter.com/mhawksey) _fantastic_ [Twitter Archiving Google Sheet](https://tags.hawksey.info/) (TAGS) script to grab tweets for conferences, archiving, and just playing around with data visualization. It&#8217;s now my own personal robot for fighting other spam robots.

This one doesn&#8217;t spam, though. It reports the spam.

Twitter spam is out of control, so I build a robot.

The TAGS library is incredibly powerful&#8230;it relies on the TwtrService library created by Google which allows you to interact with the Twitter REST API, which means if you can get a user&#8217;s information, you can then send it _back_ through a Google Script to report the tweet.

I watched these MMSG.net bots and realized the all have the company website in their profile. My robot now has a weapon.

My robot will fight your robot.

With some help from Martin, I added a line to the core TAGS code library which grabs the user&#8217;s profile URL and puts in into the archive.

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/10/2015-10-15_15-13-19.png" alt="2015-10-15_15-13-19" width="544" height="47" class="aligncenter size-full wp-image-4081" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/10/2015-10-15_15-13-19.png 544w, https://blog.ohheybrian.com/wp-content/uploads/2015/10/2015-10-15_15-13-19-300x26.png 300w" sizes="(max-width: 544px) 100vw, 544px" />

Then, I wrote a second script which scans through the archive looking for the URL.



Then, I used triggers to run the script every hour. It clears the archive, grabs whatever tweets were sent during that time, and then reports those that match the key. All day. Every day.

My robot will fight your robot.

* * *

<small>Featured <a title="Drossel Fight Club" href="http://flickr.com/photos/yamagatacamille/3853591562">flickr photo</a> shared by <a href="http://flickr.com/people/yamagatacamille">kurichan+</a> under a <a href="http://creativecommons.org/licenses/by-nc-nd/2.0/">Creative Commons ( BY-NC-ND ) license</a> </small></p>
