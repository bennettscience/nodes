---
id: 4873
title: Registering Help Requests in Trello from Google Sheets
date: 2016-08-04T20:06:54+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4873
permalink: /2016/08/registering-help-requests-in-trello-from-google-sheets/
categories:
  - Technology
---
I&#8217;m on a new team with the school district (I don&#8217;t think I&#8217;ve written about that change yet&#8230;). I&#8217;m teaching one section of AP Biology and working the rest of the day with an Instructional Technology Specialist team for the whole district. The goal is to build out a program to support anything to do with&#8230;well&#8230;instructional technology.

Part of our big &#8220;here we are&#8221; message is a Google Form available to anyone in the district. We&#8217;re in week 1 of school and we&#8217;re already getting requests for classroom visits, app support, and staff PD across the district. These spreadsheets, if you&#8217;re using something similar, can get really big, really fast. Puzzle piece number one.

To help organize our projects and day to day tasks, we&#8217;re using \[Trello\](https://www.trello.com) as a team. We can create lists to categorize cards with specific tasks. As they change status, drag a card from one list to another. We can also comment, assign team members, and attach files to the tasks to keep our email from exploding all over the room. There&#8217;s a web app and a mobile app so we&#8217;re all in touch. Puzzle piece number two.

Now, I don&#8217;t want to check a spreadsheet to go and manually put a PD request into Trello. Luckily, Google Sheets allow you to \`POST\` data to other apps through APIs on the web. Doubly luckily, Trello has an API. 

Long story short, I had an \_awful\_ time getting this started because Trello required a particular form of authorization that Google no long supports in Apps Script (go figure). So, I Googled and Googled until I came across an \[old post by Riley Pannkuk\](http://www.rileypannkuk.com/js-google-form-trello-integration.html) who was doing something similar for bug tracking for his app. So, I sent him an email. He wrote back with a solution; I&#8217;m not sure how he found it because it isn&#8217;t in the Trello docs (shame shame), but it works.

The problem was that no matter how I authenticated, Trello didn&#8217;t recognize my permissions in the app. Riley pointed out that there was a missing parameter on my authorization request: the \`response_type\` field needed to be set to \`token\`. Again: not in the docs.

So, step one was to set up a Trello board and then grab my API key from (the developer options page)[http://trello.com/app-key]. Then, I sent an authentication request via URL with the following information:

&#8211; key = My app key
  
&#8211; name = arbitrary name to identify the app by in my settings
  
&#8211; scope = level of access needed by the app (in this case, read & write)
  
&#8211; expiration = how long should the app have access?
  
&#8211; response_type = token

The authorization request looks like this when you&#8217;re ready to send it:

\`https://trello.com/1/authorize?key=YOUR\_APP\_KEY&name=APP\_NAME&scope=read,write&expiration=never&response\_type=token\`

This returns a webpage with a long string of letters and numbers that need to be included in the script (see below) to post when the sheet is updated.

Here&#8217;s the script with comments so you can see what&#8217;s going on:



Rather than sharing a pretty team-specific Trello board, the last step in the function is to change the Google sheet status to &#8220;In Progress&#8221; so others can check up on what needs to be done.

The next step is to add something called a \*\*webhook\*\* to watch the cards as they move through the Trello board and update things like the team member assigned, completed, etc. I&#8217;ll add another post when that&#8217;s done, complete with code.