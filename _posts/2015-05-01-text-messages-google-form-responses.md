---
id: 3834
title: How To Get Text Messages into Google Form Responses
date: 2015-05-01T10:30:48+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3834
permalink: /2015/05/text-messages-google-form-responses/
categories:
  - All
  - Creative
  - How To
  - Technology
---
Continuing on my data collection and analysis streak, I&#8217;ve got a little project to throw out into the wild and see what happens.

Student response systems are expensive and can be clunky. Google Forms are taking over the role of the stand-alone response system because of their flexibility in the wild during collection (device agnostic) and during analysis.

I like using forms, but they don&#8217;t work so well when students don&#8217;t have access to an Internet-ready device. So, I came up with a way to allow students (or anyone, really) to respond to a poll using either a form input **or** a text message.

* * *

The challenging part of this is getting the message _into_ the spreadsheet. I have a Google Voice number, so I looked into Apps Scripts for Voice. Unfortunately, there is no way to access Voice using Google Scripts. There is an API for Hangouts, but it&#8217;s not documented very well and doesn&#8217;t look like it would even work with Apps Scripts or Spreadsheets. Maybe I&#8217;ll head back down that road someday, but not right now.

I decided to go with [IFTTT](http://www.ifttt.com), which has some benefits (easy to set up and manage) and drawbacks (only checks every 15 minutes-ish, so you need to manually run it during a session). It&#8217;s clunky and adds a breakpoint in the flow, but it works.

### The Setup

You need to start by making a Google Form. For this, I want to allow students to send in four things: Their name, a multiple choice answer, a confidence rating, and any comments. Create the form with your collection in mind.

In IFTTT, you have to tell the script which cells to populate in the sheet with three straight bars, &#8220;|||&#8221;. Knowing your form setup is really important before you make the IFTTT recipe because it&#8217;ll save you a headache later. [My recipe](https://ifttt.com/recipes/285339-sms-to-google-sheet) puts the responses into the first three columns and then I use a Google Apps Script to break them into the correct columns.

### The Flow

**Method 1 &#8211; Pure Google Forms**
  
The audience opens the Form and answers the question displayed live. They hit submit.

Easy.

**Method 2 &#8211; Text Message to IFTTT**
  
First, in Voice, you set up email notifications for text messages. Then, in Gmail, set up a filter to catch the emails and do two things: add a label (I used &#8220;text&#8221;) and then mark it as &#8220;read&#8221; (mostly for your inbox-zero sanity). Now, have the audience send a text to your Google Voice number (see below for formatting).

In IFTTT, set up a trigger which uses Gmail -> Google Drive. The Gmail trigger should do a search for your new Gmail label. When it finds that email, it appends a row to your form input spreadsheet.

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/04/2015-04-30_21-38-48.png" alt="2015-04-30_21-38-48" width="640" height="480" class="aligncenter size-full wp-image-3844" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/04/2015-04-30_21-38-48.png 640w, https://blog.ohheybrian.com/wp-content/uploads/2015/04/2015-04-30_21-38-48-300x225.png 300w" sizes="(max-width: 640px) 100vw, 640px" />

More complicated, but now we have a way to get raw text data into the spreadsheet. Now, you need to make sure the text message is formatted correctly.

### Splitting the text

Google forms split fields into their own columns. You can&#8217;t do that with a text because IFTTT puts the whole message into one cell. To split it, you need a way for a script to find the individual components. For this, I have participants do the following:

<blockquote class="pullquote">
  <p>
    Name [comma] MC answer [comma] Confidence (1-4) [comma] comments
  </p>
</blockquote>

IFTTT dumps this into a placeholder cell in the spreadsheet and it can now be broken up at each comma using the following script:

<div id="wp-gistpenfile-splitsms">
  <h3 class="wp-gistpenfile-title">
    splitsms
  </h3>
  
  <pre class="gistpen line-numbers"><code class="language-javascript">function splitCells(from) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var colC = sheet.getRange(2, 3, sheet.getLastRow()).getValues();  // C2:C, only non-blank rows
  //Logger.log(colC);
  for(var i=0; i&lt; colC.length; i++){
    if(colC[i][0] != ''){
      // If we received a SMS response, set a formula to parse it
      sheet.getRange(2+i,4).setValue('=if(istext(C2:C),split(C2:C,",",true),"")')
    }
  }
}</code></pre>
</div>

After running this script, you now have all the responses in the correct column and you can play with the data more and look for patterns in the responses.

* * *So, there&#8217;s the start of the idea. I have a second sheet going, but I&#8217;ll write that up in a subsequent post. If you&#8217;d like to try this yourself and you&#8217;re having trouble reading my rambles, here&#8217;s the tl;dr version:</p> 

  1. Get a Google Voice number.
  2. Turn on email notices when you receive a text message.
  3. In Gmail, set a filter for your email notifications.
  4. Sign into [IFTTT](http://www.ifttt.com) and copy [this recipe](https://ifttt.com/recipes/285339-sms-to-google-sheet).
  5. In the spreadsheet, copy and paste the Google Apps Script above, which splits the text message rows into columns, into the script editor. You may need to refresh the sheet to have the menu added to run the script.

I&#8217;ll follow this up with the data analysis sheet explanation.