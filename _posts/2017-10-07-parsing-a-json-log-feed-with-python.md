---
id: 5238
title: Parsing a JSON log feed with Python
date: 2017-10-07T14:54:05+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5238
permalink: /2017/10/parsing-a-json-log-feed-with-python/
image: assets/img/wp-content/uploads/2017/10/36198207355_11d66d990e_k.jpg
categories:
  - Projects
  - Technology
---
I have several Google Sheets doing several things on their own through Google Apps Script. I&#8217;ve started to make it a habit that each action is logged to a separate, isolated spreadsheet so I can pop in and look for error messages in one places rather than several.

This poses a small problem. I have to actually remember to open that sheet. Usually, something goes wrong, and _then_ I remember to check the logs. I wanted to have something more up to date that I could glance at without too much effort.

You can get Google Sheet data as JSON which is handy in a number of contexts ([here](https://blog.ohheybrian.com/2017/01/building-a-custom-registration-form-with-google-apps/) and [here](https://blog.ohheybrian.com/2016/08/push-announcements-with-a-chrome-extension/) are two examples from my own work). It&#8217;s not as straightforward as tagging `.json` on the end of the URL (though that would be sweet) but the process isn&#8217;t hard. To get the data, [this post details](https://coderwall.com/p/duapqq/use-a-google-spreadsheet-as-your-json-backend) how to publish your sheet and find the feed.

Once the dataset was live online and updating regularly, I needed to decide how to get it. I use [GeekTool](https://www.tynsoe.org/v2/geektool/) [on my desktop](https://blog.ohheybrian.com/2017/05/getting-busy-with-todo-txt/) so I decided to use a Python script and the Responses library to gather and process the feed.



I put this into a Geeklet on my desktop and _voila!_

Give it a try with your own sheet. You can run it in your terminal to get a printout of the last 5 entries of the sheet. The JSON output from Google is really weird, so it helps to put it into a [prettifier](https://jsonformatter.curiousconcept.com/) to make it more readable before parsing keys.

What did I miss? What would you do differently?

&#8212;

_Featured image, [Logs](https://flickr.com/photos/cifor/36198207355 &#8220;Logs&#8221;), flickr photo by [CIFOR](https://flickr.com/people/cifor) shared under a [Creative Commons (BY-NC-ND) license](https://creativecommons.org/licenses/by-nc-nd/2.0/)_
