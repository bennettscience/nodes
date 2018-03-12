---
id: 5183
title: Getting Busy with todo.txt
date: 2017-05-30T22:20:05+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5183
permalink: /2017/05/getting-busy-with-todo-txt/
image: assets/img/wp-content/uploads/2017/05/2017-05-30_22-16-38.png
categories:
  - Projects
  - Technology
---
Keeping a todo list has always been a struggle for me. I have a notebook, I have some stuff in Google Keep, I&#8217;ve tried Google Tasks, Any.do, Remember the Milk, and Wunderlist. I&#8217;ve tried apps with goal setting, apps with reminders, and apps with synced web and phone apps.

My main problem is that it&#8217;s just _another_ window to have open at any given point. I run a minimal desktop and dock &#8211; I don&#8217;t like windows all over the place with a dock that needs two monitors to show everything.

[Robert Talbert tweeted](https://twitter.com/RobertTalbert/status/867847309983457280) about [todo.txt](http://todotxt.com/) the other day and I fell in love. Instantly.

I work in code and the command line a lot. I usually have the Mac Terminal open along with Atom. I hop between projects and use key commands because it&#8217;s faster than moving my hands to and from the trackpad. Todo.txt is a command-line script which manages a text file called (wait for it) todo.txt. It also has a done.txt file to hold things that are finished.

I won&#8217;t go into the syntax here, but essentially, each item has a priority, a title, and a tag or two. Putting one task per line in the text file creates one new entry on your list.

<img src="/assets/img/wp-content/uploads/2017/05/2017-05-30_22-00-28-1.png" alt="" width="640" height="210" class="aligncenter size-full wp-image-5184" sizes="(max-width: 640px) 100vw, 640px" />

The command line just makes it faster to work with because it gives built-in commands, much like the Git architecture, to create, edit, or mark tasks as done. For example, using `todo add &#8220;(A) filter schools by content areas +curriculum&#8221;` creates an item in the text file. Opening the file shows a single line. But, using the command line, it shows a sorted list of items based on priority.

<img src="/assets/img/wp-content/uploads/2017/05/2017-05-30_22-00-28.png" alt="" width="501" height="161" class="aligncenter size-full wp-image-5185" sizes="(max-width: 501px) 100vw, 501px" />

Marking items is easy, too. Put an &#8220;x&#8221; in front of the task and &#8211; hey presto! &#8211; it&#8217;s marked as finished. Using the command line, `todo do` and the item number marks it as done _and_ moves it to your `done.txt` file.

Putting the notes in your Dropbox is _tiny_ and updates instantly. Any computer I use is synced to Dropbox, hence my list is synced. Pull up the Terminal, and I&#8217;m ready to go.

Then I found [GeekTool](https://www.tynsoe.org/v2/geektool/).

Getting rid of window clutter _even more_, GeekTool takes scripts (called &#8220;geeklets&#8221;) and lays them on your desktop in modules you customize. You can set the refresh rate as well as define groups of geeklets for different setups. For instance, I have a geeklet set to use when I&#8217;m on my laptop and one for when I&#8217;m hooked to an external monitor.

Part of my GeekTool setup is displaying my task list right on my desktop. Having a color coded list right there, all the time, is really helpful. And I&#8217;m not promoting an unhealthy work/life ratio because I can turn the geeklet off whenever I want (namely, on the weekend).

[<img src="/assets/img/wp-content/uploads/2017/05/2017-05-30_22-16-38.png" alt="" width="1440" height="900" class="aligncenter size-full wp-image-5187" />](https://blog.ohheybrian.com/wp-content/uploads/2017/05/2017-05-30_22-16-38.png)

In the end, I&#8217;m really happy with this system _because I control it._ The setup isn&#8217;t as easy as downloading an app, but I know where my data is and I know how it&#8217;s being used. It&#8217;s a little thing, but some of the best things in life are the little things.

&#8212;

_All images in the post are mine. There are a lot of great tutorials online for todo.txt as well as GeekTool._
