---
id: 5014
title: Developing on a Chromebook
date: 2016-12-15T14:59:27+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5014
permalink: /2016/12/developing-on-a-chromebook/
image: assets/img/wp-content/uploads/2016/12/IMG_20161215_145757.jpg
categories:
  - Technology
---
I do some (really) amateur web development when I get a chance to. I enjoy building things that make life easier for me, and others, using the Internet to drive the functionality. I&#8217;ve also been working more and more on a Chromebook just because it&#8217;s easier to carry around than my 15&#8243; Mac.

The big problem with the Chromebook is that it&#8217;s pretty locked down. I got permission from our IT department to put mine into developer mode (which is usually restricted when enrolled in a GSuite environment) so I could make things work.

First, this is _not_ the same as working on a full-fledged computer. The RAM available on this machine is minimal, which really limits what I can do. It also partitions the hard drive in really strange ways, which makes it hard to keep a neat filesystem.

I started by installing [Crouton](https://github.com/dnschneid/crouton), which puts a Ubuntu desktop environment on the Chromebook. It&#8217;s run in parallel, which makes it nice for jumping back and forth. You can also choose which flavor of Ubuntu you like, from xfce to Unity.

I used Crouton to run Gimp and git, mostly. But, I wasn&#8217;t using Gimp as much as I expected and it really slowed down the device. I ended up dropping it in favor of [Chromebrew](https://skycocker.github.io/chromebrew/), which has worked beautifully. It&#8217;s a package manager built specifically for Chrome which includes things like Git, Ruby, python, imagemagick&#8230;all kinds of things that make life easier working on such a stripped down device.

I use a mix of Chrome apps to work in.

1. **Crosh** &#8211; Similar to the `bash` environment, `crosh` is the Chrome&#8217;s terminal emulator. You can get to it by hitting Ctrl + Alt + T. If you&#8217;re not in developer mode, most of what you can do is look at system stats. All other functions are locked down. Once you&#8217;re in developer mode, you can type in `shell` and browse the filesystem (Linux-based) just like any other full computer. This is where I run git.

2. **[Caret](https://chrome.google.com/webstore/detail/caret/fljalecfjciodhpcledpamjachpmelml?hl=en)** &#8211; Caret is a Chrome text editor that supports syntax highlighting and offline use. It&#8217;s based on Sublime Text, so it includes custom keymaps and functions to help the process. [https://github.com/thomaswilburn/Caret/wiki](It&#8217;s also open sourced GitHub).

3. **[Secure Shell](https://chrome.google.com/webstore/detail/secure-shell/pnhechapfaindjhompbnflcldabbghjo?hl=en) &#8211; Another Chrome app which emulates a SSH client. Really handy for jumping in and out of my own remote server as I need things. Much faster than relying on the cPanel through [my hosts&#8217;s](http://www.reclaimhosting.com) admin panel.

It&#8217;s lightweight, but it works well. Chrome&#8217;s own developer tools and console are really helpful with autocomplete and error logging (just like any other browser, really).
