---
id: 4174
title: Quickly Format Articles for Annotations
date: 2016-01-10T14:25:41+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4174
permalink: /2016/01/quickly-format-articles-for-annotations/
categories:
  - FLN Hub
  - Teaching
  - Technology
---
We&#8217;re working very hard with students on annotating articles in preparation for the new state test sections. The goal is to help them find pertinent information in multiple texts which can be used to construct thorough written responses. We have a standard format&#8230;circling unknown words, underlining main ideas, etc, which help students transfer the skill from class to class.

Finding relevant articles means lots of searching online. Once you find text, it helps to format it for use with students. I like giving students wide margins for notes as well as nicely laid out paragraph numbers for reference in discussion and writing. It took a long time to copy and paste each article into a table cell and reformat, so I wrote up a simple Google Apps Script to do it for me.



It works through the document, checking paragraphs (line breaks in Google-land) for text. If there&#8217;s text, the script copies it into a numbered row of the table and then deletes the original. What you&#8217;re left with is a nice copy of the article to print out and use with students.

<img src="http://blog.ohheybrian.com/wp-content/uploads/2016/01/gs.gif" alt="gs" width="962" height="446" class="aligncenter size-full wp-image-4175" />

[Here&#8217;s a template document](https://docs.google.com/document/d/1g8sCdgY8MPON7_Gh7KW9rS2tFXdBwQrzm3CuH_UARhw/edit?usp=sharing) you can make a copy of and play with. If you have questions, send me a tweet, [@bennettscience](http://www.twitter.com/bennettscience), or leave a comment below.