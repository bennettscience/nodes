---
id: 4136
title: Updating the getText Extension
date: 2015-12-09T22:03:09+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4136
permalink: /2015/12/updating-the-gettext-extension/
categories:
  - Creative
  - Projects
  - Technology
---
In October, [I wrote about a bookmark application](http://blog.ohheybrian.com/an-easier-way-to-get-plain-text/) to get the text of a website for analysis in the Lexile analyzer tool. It&#8217;s a pain in the keister to copy text from a website, open a document, paste the text, save as a plain text file, then reupload to the Lexile website. The bookmark tool does the hard part for you (the clicks&#8230;all the clicks&#8230;) so you just download the formatted file and upload it to the Lexile site.

Depending on what you try and analyze, you might get an angry message like this one:

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-09-at-9.53.03-PM.png" alt="Seriously, who uses ASCII?" title="Seriously, who uses ASCII?" width="858" height="298" class="aligncenter size-full wp-image-4137" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-09-at-9.53.03-PM.png 858w, https://blog.ohheybrian.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-09-at-9.53.03-PM-300x104.png 300w, https://blog.ohheybrian.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-09-at-9.53.03-PM-768x267.png 768w" sizes="(max-width: 858px) 100vw, 858px" />

Nerdspeak, engage!

The only reason you&#8217;d use ASCII is if you, A) want to support legacy browsers (Netscape Navigator 1.0 anyone?) or, B) need to speed up query time on a string or a database. Modern web browsers are so much more efficient now, most sites use something called UTF-8. I&#8217;m guessing ASCII is needed for the Lexile analyzer so it can give you the score faster than it could with modern encodings.

Anyways, I pushed a fix to the applet tonight. It works by taking the text you highlight and encodes it to ASCII before downloading. So, still no conversions. And no angry red messages. And no more worrying about encodings.

You can grab the extension [here](http://dev.ohheybrian.com/getText) or [take a look at the source for yourself](https://github.com/bennettscience/bennettscience.github.io/tree/master/getText) and tinker around.