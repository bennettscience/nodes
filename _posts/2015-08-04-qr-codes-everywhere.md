---
id: 3949
title: QR Codes Everywhere
date: 2015-08-04T12:05:47+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3949
permalink: /2015/08/qr-codes-everywhere/
categories:
  - All
  - Teaching
  - Technology
---
In my continuing effort to make things more available for students, I&#8217;ve started rearranging my Google Drive files. I&#8217;ve realized that thinking of Drive as a traditional file system isn&#8217;t as effective as using it more like a topical organizer and then power searching for quick results. Because of this change in mindset, I&#8217;m getting rid of all of my old unit packets (as traditionally defined) and moving individual pages (notes, assignments, etc) to one big &#8220;Handouts&#8221; folder. The main reason for this is so I can quickly and easily create _a la carte_ handouts for students missing papers, school, etc. No more trudging through packets and printing one page before hunting for another.

[From the last post](http://blog.ohheybrian.com/start-of-year-notes/), I&#8217;m also rebuilding my <a href="http://www.bennettscience.co" class="broken_link" rel="nofollow">class website</a> to make it dead-simple to find information. In short, lots and lots of descriptive links.

Everything is going to be fed through the individual document this year.

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/08/2015-08-04_11-21-19.png" alt="2015-08-04_11-21-19" width="558" height="406" class="aligncenter size-full wp-image-3950" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/08/2015-08-04_11-21-19.png 558w, https://blog.ohheybrian.com/wp-content/uploads/2015/08/2015-08-04_11-21-19-300x218.png 300w" sizes="(max-width: 558px) 100vw, 558px" />

From the document, if they&#8217;re accessing on their phone, the title of the page jumps them to a YouTube video for help. On the other hand, if it&#8217;s a handout they get in class, the QR code does the same thing. Access. It&#8217;s important.

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/08/2015-08-04_11-29-38.png" alt="2015-08-04_11-29-38" width="750" height="200" class="aligncenter size-full wp-image-3951" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/08/2015-08-04_11-29-38.png 750w, https://blog.ohheybrian.com/wp-content/uploads/2015/08/2015-08-04_11-29-38-300x80.png 300w" sizes="(max-width: 750px) 100vw, 750px" />

Since I have a lot of handouts and a lot of videos, making a QR code for each one is time consuming. But, thankfully, [Scott MacClintic](http://www.twitter.com/Smacclintic) came through in a big way. He shared a blog post which outlines [making QR codes using Google Sheets](http://tammyworcester.com/batch-create-qr-codes-in-google-spreadsheet/). 

I ran into an issue copying the code from the blog post (plain text is important!) If you want to use a sheet similar, use the code snippet below.



One more short note: QR code complexity is determined by the number of characters you&#8217;re encoding. So, longer string, more complex code. Using a URL shortener to make your string fewer characters is a good idea. Then encode the short URL. Again, this is something a script can do wonderfully. This [WebApps post](http://webapps.stackexchange.com/questions/76050/google-sheets-function-to-get-a-shortened-url-from-bit-ly-or-goo-gl-etc) has code snippet (also below) which you can use in the Sheet you set up. If you&#8217;re curious, [here&#8217;s mine](https://docs.google.com/spreadsheets/d/18DzipyvOvyWh8Dongovzd5LQCcAzJuy1yyc0M9Cb1JU/edit?usp=sharing).



The best thing about this is that using the Sheets method means I don&#8217;t have to download each one locally &#8211; they&#8217;re saved in Drive. It also makes updating URLs for videos (updated content, reorganized, etc) much easier to manage because the code updates with the data change. Lifesaver right there.