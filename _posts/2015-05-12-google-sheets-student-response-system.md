---
id: 3853
title: Google Sheets Student Response System
date: 2015-05-12T20:39:10+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3853
permalink: /2015/05/google-sheets-student-response-system/
categories:
  - All
  - Technology
---
Part two of a [post from the other day](http://blog.ohheybrian.com/text-messages-google-form-responses/).

First, head over to the master spreadsheet and <a href="https://docs.google.com/spreadsheets/d/1TNAex2Mo9-VfXe6RNhBT8NqPT9m0CbN9bvHbz-zDBJg/edit?usp=sharing" target="blank">make a copy</a>.

* * *

### What Now?

It&#8217;s important to note that this works just fine with form responses &#8211; you don&#8217;t have to use the text input [I wrote about earlier](http://blog.ohheybrian.com/text-messages-google-form-responses/). You can always go back and add it later. Either way you collect information, we can begin analyzing some of the data.

The whole idea is to have a platform-independent polling system. So, this is built with flexibility and bare-bones functionality in mind. It isn&#8217;t complex in the way it pulls in student responses, nor is it meant to be. However, there are some tools in place to help you actively identify problem areas.

### Setup {#setup}

An idea I&#8217;m borrowing from [Andy Schwen](http://www.twitter.com/mrschwen) is to utilize a central class list. Create a new spreadsheet and fill in student names. I sort mine by last name, first initial. You need the **spreadsheet key** from this document.

<div id="wp-gistpenfile-spreadsheet-key">
  <h3 class="wp-gistpenfile-title">
    spreadsheet-key
  </h3>
  
  <pre class="gistpen line-numbers"><code class="language-plaintext">https://docs.google.com/spreadsheets/d/RANDOM-LETTERS-AND-NUMBERS/edit#gid=0</code></pre>
</div>

Copy the key and paste it into the cell which asks for it. 

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/05/setup.gif" alt="setup" width="606" height="202" class="aligncenter size-full wp-image-3869" />

Your class list will automatically populate for you. That&#8217;s all you need to do on this page.

### Responses

The Responses tab is meant to be an overview for you. So, if you have a way to extend your desktop across the projector rather than duplicating, you&#8217;ll have the back-door information. 

This page has a response vs. confidence graph that updates as students submit their answers. If you have your class list set ([see above](#setup)), you&#8217;ll also be able to sort by class period using the dropdown menu. This will import those students and assign an ID number. Students respond with that ID number rather than their name so you can display comments (read on).

If they make a comment, you can also read it and see who asked that particular question or submitted a particularly salty comment.

Finally, you are given an overall confidence (average of all answers) as well as a chart mapping the student&#8217;s confidence score for each item they choose. It&#8217;s also broken down by student to aid you in feedback and conversation setting. You could also use this for grouping students on the fly to discuss the question.

<div id="attachment_3873" style="max-width: 650px" class="wp-caption aligncenter">
  <a href="http://blog.ohheybrian.com/wp-content/uploads/2015/05/responses11.png"><img src="http://blog.ohheybrian.com/wp-content/uploads/2015/05/responses11-1024x624.png" alt="Click for full-size image." width="640" height="390" class="size-large wp-image-3873" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/05/responses11-1024x624.png 1024w, https://blog.ohheybrian.com/wp-content/uploads/2015/05/responses11-300x183.png 300w, https://blog.ohheybrian.com/wp-content/uploads/2015/05/responses11.png 1219w" sizes="(max-width: 640px) 100vw, 640px" /></a>
  
  <p class="wp-caption-text">
    Click for full-size image.
  </p>
</div>

### Results

[<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/05/idSubmit.gif" alt="idSubmit" width="702" height="192" class="aligncenter size-full wp-image-3875" />](http://blog.ohheybrian.com/wp-content/uploads/2015/05/idSubmit.gif)

This is the page you want to show live to students, and it&#8217;s meant to go through three steps. At first, the ID boxes at the top are all red. As responses come in, the box will turn green. There isn&#8217;t any way to prevent someone from submitting the incorrect ID number or a duplicate, so duplicates will turn yellow. You can then follow up individually as needed.

When you click on the &#8220;Get Responses&#8221; button, a pie graph of all the submitted answers is displayed. This is meant to spur conversation and show the beginnings of a pattern.

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/05/results11.gif" alt="results1" width="1114" height="548" class="aligncenter size-full wp-image-3879" />

Clicking on &#8220;Set Answer&#8221; allows you to submit the multiple choice answer and change the graph. Rather than the pie chart, it shows the confidence score and the number of each answer submitted. Again, this can lead to conversations with your class about how confidence can correlate with making the right selection.

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/05/results2.gif" alt="results2" width="1118" height="584" class="aligncenter size-full wp-image-3881" />

Clicking &#8220;Reset Form&#8221; clears **all** the responses from the form, resets the charts, and clears the Responses tab of data so you can ask another question.

* * *

This isn&#8217;t meant to collect persistent data &#8211; it&#8217;s meant for flexibility and high-level insight. Hopefully, it&#8217;s helpful to you. Please leave comments on this post (also linked from the template) with bugs, functionality improvement requests, or other feedback. This is definitely a pet project, but I&#8217;ll try my best to maintain it as it gets used.