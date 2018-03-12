---
id: 4866
title: Push Announcements With a Chrome Extension
date: 2016-08-05T15:38:45+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4866
permalink: /2016/08/push-announcements-with-a-chrome-extension/
categories:
  - All
  - Technology
---
\[Patrick Donovan\](http://www.twitter.com/donovanscience) put out a tweet the other day with a screenshot to a Chrome extension he had just put together. It caught my attention and led to this post because it&#8217;s a really, really good idea.

<blockquote class="twitter-tweet" data-partner="tweetdeck">
  <p lang="en" dir="ltr">
    Got my Chrome Extension created, now to refine and then publish to our organization. Thank you <a href="https://twitter.com/curt_truc">@curt_truc</a> <a href="https://twitter.com/hashtag/COL16?src=hash">#COL16</a> <a href="https://t.co/HosZU52r2t">pic.twitter.com/HosZU52r2t</a>
  </p>
  
  <p>
    &mdash; Patrick Donovan (@donovanscience) <a href="https://twitter.com/donovanscience/status/756502998340149249">July 22, 2016</a>
  </p>
</blockquote>



I tracked down \[Curt Schleibaum\](http://www.twitter.com/curt_truc) whose \[website\](http://www.geekyedtech.com) included a demo to his Chrome extension idea. In short, he provided a template which included all of the necessary files to have a simple popup Chrome browser extension. It was quite clever &#8211; instead of having the user change code for the extension to push information, it had an embedded Google Doc that you use updated with new information. It also included links back to the district website, tech support, etc. 

It got me thinking about how the extension could be improved, so that&#8217;s what I put together last night. \[The source is on GitHub\](https://github.com/bennettscience/announcements) so you can see the nitty gritty. My extension builds on Curt&#8217;s original idea &#8211; allowing a teacher or admin to use a Google service to push announcements out to extension users. Instead of a document, mine uses a spreadsheet and watches for an update to publish and then badges the extension when new information is available.

If you want to play with this yourself, follow the steps below (mostly proof-of-concept at this point, lots of refining to do).

## Get the spreadsheet

Google spreadsheets are your friend. The best thing, in my opinion, is that they publish in multiple formats when you publish one to the web (this is different than \*\*sharing\*\*). One of those formats is JSON, which is a \_great\_ way to take a lot of data, organize it, and then display that information nicely in another application.

\[Grab this template spreadsheet\](https://docs.google.com/spreadsheets/d/10j8Ycax02XMkVWMK1v-aYJMHoOjQaLRFuZUOKZEY9nA/copy) and save a copy to your Drive. Then, go to File > Publish to the web and publish it with all the default settings.

## The Extension

The extension is a collection of JavaScript files and a \`popup.html\` file. The JS does all the magic with the spreadsheet JSON data and the HTML displays it nicely in the Chrome browser. The JS will also ping the spreadsheet every few minutes to see if there have been updates. If there was an update made, a badge notification will appear on the extension icon. Sweet.

The easiest way to do this is to download the extension and load it locally on your machine. To do that, \[open the project on GitHub\](http://www.github.com/bennettscience/announcements) and click on &#8220;Clone or download&#8221; on the right side of the screen. Unzip the file that downloads. 

Next, go to \`chrome:extensions\` and make sure &#8220;Developer Mode&#8221; is checked. Once it&#8217;s checked, you can click on, &#8220;Load unpacked extension&#8221; and select the folder you just unzipped.

The extension needs one more thing: \*the spreadsheet key\*. Go back to the template spreadsheet and grab the jumble of letters and numbers that come after 

<pre>`https://docs.google.com/spreadsheets/d/`</pre>

and before \`edit\` in the URL. An example URL would be, 

<pre>`https://docs.google.com/spreadsheets/d/THE_SPREADSHEET_KEY_IS_HERE/edit`</pre>

. When you click on the extension icon the first time, you&#8217;ll be prompted to copy and paste that spreadsheet key into the box. Now, you&#8217;re good to go!

## Testing&#8230;testing&#8230;

To test the extension, go back to your spreadsheet template and add some data. Give it a minute or two and, hey presto! Your extension will update with the information you just entered.

Most schools are using some kind of learning management system which includes a messaging app. If you&#8217;re not, this would be a good way to talk with your students (maybe). In our case, we&#8217;re looking at using this as a rapid-push service to notify teachers and other staff about upcoming professional learning, system outages, or other announcements that need to be sent, but don&#8217;t need an email. It&#8217;s definitely an experimental project, but one I&#8217;m curious to play with some more.