---
id: 4786
title: Using the Hypothes.is API in a Google Apps Script
date: 2016-06-08T23:42:17+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4786
permalink: /2016/06/using-the-hypothes-is-api-in-a-google-apps-script/
categories:
  - All
  - Technology
---
I&#8217;ve started using the \[Hypothes.is\](http://hypothes.is) annotation tool more lately, mostly at the behest of \[Kris Shaffer\](http://www.twitter.com/krisshaffer). He started writing about it&#8217;s potential for \[public discourse on research\](http://kris.shaffermusic.com/2016/04/hypothesis-public-research-notebook/) back in April and has since created \[Pypothesis\](http://kris.shaffermusic.com/2016/06/introducing-pypothesis-1/) to turn his annotations into a blog post using Python and the \[Hypothes.is API\](http://h.readthedocs.io/en/latest/api/).

The API is pretty simple &#8211; it can take a call for various requests (username, annotation, etc) and return information to use within your app. Kris used Python to create a Markdown page to post on a GitHub-based blog. Coming from K12 land, I see Google Docs serving as the larger research-curation hub and I figured, why not turn this into a simple Google Apps Script?

So I did.



It&#8217;s nothing fancy, but it works. It&#8217;s nice that the API is so straightforward&#8230;Kris mentions how easy it is to jump into if you&#8217;ve got even a little experience with scripting. The hardest part, in the Google Script world, was interacting with the JSON. But, I managed to get that worked out.

As you can see, this will search for annotations under my username. There are other parameters you can use in a search, including multiple at a time. \[Read more about those in the docs\](http://h.readthedocs.io/en/latest/api/). Also, \[John Stewart\](http://www.twitter.com/jstew511) has a \[much more thoroughly developed Google Spreadsheet\](https://t.co/ntZ5M0BcI3) which takes multiple search terms and returns results from an API call. Very cool application to play with.