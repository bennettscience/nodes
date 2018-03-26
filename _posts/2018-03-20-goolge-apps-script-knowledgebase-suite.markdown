---
layout: post
title: "Goolge Apps Script Knowledgebase Suite"
date: "2018-03-20 13:31:58 -0400"
image: "https://c1.staticflickr.com/5/4234/35591920971_ccfb2a05ac_b.jpg"
categories:
  - Code
tags: ["google apps script", "javascript", "knowledgebase"]
---
This is another entry into the "fun, but probably not feasible" folder.

A colleague and I have been trying to show the importance of getting a knowledgebase set up for our teachers. It's been a back-burner issue for a long time because:

- we've never had one, so there isn't really a pain point, and,
- we're trying to roll out 3,500 iPads to 9-12th grades and there are some small projects to get done with that process.

There's a little bit of hyperbole there, but in essence, it would be nice, but not now.

Google released Hangouts Chat for GSuite users. The main reason was to compete with enterprise chat apps like Slack (but you won't hear Google saying that directly). Hangouts Chat allows you to set up discussions with teams that are threaded based on rooms. They've also added an automation API so users can find, or write, bots to discussions. I got Chat turned on for our domain just to see what it was like. I was able to use [Google's code lab guide](https://codelabs.developers.google.com/codelabs/chatbase/index.html#0) to get a simple bot up and running. It pulled open tasks for a user from our project management suite and I was able to use existing code to get the data into the bot. In all, it took me about two hours to have a working prototype.

I decided to build a helpdesk chat bot which could pull answers to common technical problems our teachers face. That ballooned into a web app to pair with the bot because...why not.

## Apps Script Knowledgebase

I'll go through some of the code, [but all of it is on GitHub](https://github.com/bennettscience/apps-script-knowledgebase). It's written in Apps Script because again, a lot of the code was preexisting so I didn't have to start from scratch. Most of it is modified from standalone functions I have running in separate functions on other sheets. The real challenge in this task was to wrangle the user input into something usable by the script.

## The database

First things first - we needed a database. I threw together a spreadsheet with several data fields that hold different types of information. I started with our platforms as a high level filter and then added some tags. The user can search for all platform-related entries or narrow them down with keyword tags.

[![Screenshot of the database sheet](/assets/img/dbss.jpg)](/assets/img/dbss.jpg)
_click for a larger view_

There are two additional sheets to the template: one to authenticate users and one to build a list of district platforms. Authenticated users have a button to add new articles into the database from the web app (see below). Editing a _really_ big spreadsheet, especially when typing multi-line, HTML formatted entries, gets really cumbersome, so I wanted a way to do that through the website. Additionally, standardizing the platform options helps the user narrow searches right from the start so they can find information quickly.

## The bot

[Setting up the bot is covered by Google's Code Lab](https://codelabs.developers.google.com/codelabs/chat-apps-script/#0), so I'm not going into detail here. The main piece of the bot is that it listens for a mention by a user, finds the information, and returns a card-formatted response.

![Screenshot of a card returned to a user's question](/assets/img/videocard.jpg)

Our thinking for this app is that someone wants a quick video on how to do something, so only videos are returned. The main challenge is getting meaningful information from the user mention in order to match database entries.

<script src="https://gist.github.com/bennettscience/798cf726cd73eca206e9a45a09693ad1.js"></script>

The regular expression looks for any of the keywords mentioned by the user in a string. This was easier than trying to match array values and provides consistent results. Right now, a user can send simple requests like "Google" or "Canvas" to get general results. They can also include some refining search terms, like "Google gmail" or "Canvas assignment" to narrow searches down. If there are no videos that match the search, they're pushed over to the web app which has articles that do not include video results. More work could be done to refine how the script processes user input to improve the experience.

The script takes the string an creates a regular expression which is then used to match a string built from columns one and two of the spreadsheet. If a result is matched, the YouTube URL is returned in an array.

Once the YouTube videos are grabbed from the sheet, they're broken into video ID strings and put through the YouTube API to get the video title and thumbnail. The bot builds a card to return to the user with suggested videos. If there aren't any videos available, the user is given a link to the web app where they can find written articles on their topic.

## The web app

We also threw together a web app to display information that _isn't_ in video form. The idea being that these are longer articles that have step-by-step instructions and are meant to be used in conjunction with the chat application. Lookup can be done by either passing query parameters in the URL to the app or using the sidebar form to search for keywords within a given topic.

[![Web app view of the knowledgebase](/assets/img/webapp.jpg)](/assets/img/webapp.jpg)
_click for a larger view_

Web apps also allow you to append queries to the published URL out of the box. If a query string is included, the app creates an object that can be passed through your script functions to build a display from a template dynamically. For instance, navigating to

`https://script.google.com/.../exec?platform=ios&tags=airplay`

takes you to this:

[![Web app loaded from a URL parameter string](/assets/img/webapp2.jpg)](/assets/img/webapp2.jpg)
_click for a larger view_

When a video isn't returned, we'll pass back the user string to jump right to relevant answers.

## Challenges

Writing logic to manipulate and understand user input that can vary wildly is very difficult. I'm relying on simple prompts (platform + search keys) to help return a video on _every_ search. As the database grows, results will also improve. I'd like to spend more time refining the bot script to better process and use the chat messages. The regular expression approach is pretty brute-strength, but it works for most searches.

A bigger problem I discovered is that hosting a web app _and_ a bot in the same script file causes things to break. Google makes it easy to [deploy a bot](NEED URL) from an Apps Script project. Hosting a web app is also quite easy and uses a similar ID string. What I think happens is that those ID numbers are conflicted when both are hosted from the same project. The bot's `onMessage` listener wouldn't register an event with a web app published. One solution is to host the bot in an unbound script that points to the same spreadsheet via the key. Another (probably better, in the long run) solution would be to write a web view that is hosted on a school server and access the Google Apps Script API to display database queries. [More on that in this long demo.](https://stackoverflow.com/a/49114086/2278429)

---

_[In the knowledge economy, we need a Netflix of education - TechCrunch](https://flickr.com/photos/140768947@N06/35591920971 "In the knowledge economy, we need a Netflix of education - TechCrunch") flickr photo by [DigitalMajority](https://flickr.com/people/140768947@N06) shared under a [Creative Commons (BY-NC-SA) license](https://creativecommons.org/licenses/by-nc-sa/2.0/)_
