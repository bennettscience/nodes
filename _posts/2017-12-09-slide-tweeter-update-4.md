---
id: 5344
title: Slide Tweeter Update 4
date: 2017-12-09T14:19:57+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5344
permalink: /2017/12/slide-tweeter-update-4/
categories:
  - Code
---
I thought I was ready for some beta testing of the Slide Tweeter AddOn. Unfortunately, I&#8217;ve run into a snag with authenticating some of the code.

When you install and Addon from Google, it&#8217;s in something called `AuthMode.NONE` which significantly limits access to certain data. This is a good thing because you don&#8217;t want Addons running through your account changing things the minute you install it. Anyways, once it&#8217;s installed, you can then prompt the user to enable the Addon, which gives it access to all the necessary permissions.

I&#8217;m working on moving permissions around so it installs and adds a menu successfully _before_ activating the Addon. It&#8217;s turning into more of a trick than I thought it would.

More updates to come&#8230;
