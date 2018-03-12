---
id: 4992
title: Link Two Google Docs for Translating
date: 2016-11-23T21:02:26+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4992
permalink: /2016/11/link-two-google-docs-for-translating/
categories:
  - Technology
---
[An interesting Stack Overflow question](http://stackoverflow.com/questions/40767646/google-docs-live-translation) popped up about auto-translating one document into another when edits are made. Most Google services have things called &#8220;triggers&#8221; which run functions after some kind of event &#8211; opening the doc, making a change, etc.

A Google Doc does not have access to the `onEdit` trigger, so there is no way to automatically run the translation unless you put it on a timer trigger, and that&#8217;s a waste of resources, especially if you&#8217;re not constantly updating the document. But, you can link two documents together via the ID and push changes made using a custom menu.

[Grab a copy of the template with instructions.](https://docs.google.com/document/d/1ikv7qt1pBBrCDhzQrQ1B0GkBe7dEbDFdegWL8x1Zwm0/edit?usp=sharing)

Source:
