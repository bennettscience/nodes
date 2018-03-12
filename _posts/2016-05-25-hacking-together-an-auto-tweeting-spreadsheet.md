---
id: 4780
title: Hacking Together an Auto-Tweeting Spreadsheet
date: 2016-05-25T21:47:33+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4780
permalink: /2016/05/hacking-together-an-auto-tweeting-spreadsheet/
categories:
  - All
  - Projects
  - Technology
---
A while back, I had looked at automating tweets from a Google spreadsheet to reduce the insane number of clicks it takes to do in TweetDeck and HootSuite (5 clicks? Really?) I hit some roadblocks and let it slide because in the long run, it wasn&#8217;t really important to me. More of a fun experiment.

I jumped back into it a week or so back to try and solve the last little problems. \[I was able to create a script\](https://docs.google.com/spreadsheets/d/1kbFIfYGm2sGQJ5TistkaxMzqUqQ8HbgUvJUM8MohOb4/edit?usp=sharing) which loops through a spreadsheet checks the current date and whether or not the tweet has been sent. If those conditions are met (\`TODAY\` and \`NOT SENT\`), it will automatically post the tweet. 

The sheet, like all the other Twitter sheets I&#8217;ve used, is run with \[Martin Hawksey&#8217;s\](http://twitter.com/mhawksey) fantastic TwtrService library. It allows you to authenticate and tweet right from Google Apps Script and saves a \_ton\_ of time.

I ran into a problem that is \[as-yet unsolved\](https://stackoverflow.com/questions/37308911/pause-a-loop-to-wait-for-rest-api-response): I can&#8217;t get the sheet to stop after posting one tweet. So, if you have multiple tweets on a given day, it will send \_all\_ of them at once. That&#8217;s not good, especially if you&#8217;re promoting an event over a period of time. I&#8217;ve tried a number of solutions, but I can&#8217;t seem to find one that works. I&#8217;d love to hear if you&#8217;re able to take the source and tweak it to work.

In the meantime, Martin also took a (much more elegant) pass at the task. \[His sheet is also available\](https://docs.google.com/spreadsheets/d/10U7Rrr7lfbRS2A8QYRUWL8enlJfat75-QuGm7slKXRE/edit#gid=0) and works really well. The goal is the same, but his mechanics and implementation are much more refined and effective.

It&#8217;s a good example of multiple ways to skin a cat. I&#8217;m a novice coder (I tell people I know enough to break something) and he&#8217;s an expert doing all kinds of things. The great thing is, all of this code is open and available. I can make a copy of Martin&#8217;s page and dig into his solution. I learned a few tricks about checking for multiple conditions, which is what I was struggling with. I became better at scripting through my failure and his success.