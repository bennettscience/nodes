---
id: 4951
title: Building a Custom Web App from Google Sheets
date: 2016-11-07T21:46:49+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4951
permalink: /2016/11/building-a-custom-web-app-from-google-sheets/
image: assets/img/wp-content/uploads/2016/11/4334364416_d0131ee7f1_o.jpg
categories:
  - All
  - Teaching
  - Technology
---
I&#8217;m working with a group of teachers to run a mock election this week. They had a basic Form set up for students to vote along with two other &#8220;pie-in-the-sky&#8221; ideas:

1. Assign electoral votes by homeroom to simulate the Electoral College.

2. Have a live-update view of the election teachers could show in their classrooms.

\## Electoral Votes

To set up the electoral system, we created a database sheet in the workbook. We listed each teacher in the school and then assigned an electoral value. The next eight columns are used to tally votes per candidate per homeroom. I was able to do this using the \`COUNTIFS\` function to match the candidate \*\*and\*\* the homeroom teacher.

Another sheet was added to do the electoral tallies. This formula is a little more complex. I needed to grab the data from each row, find the max, and then check which candidate matches the max column. My final formula was:

\`=if(and(voteTotals!$D2=0,voteTotals!$E2=0,voteTotals!$F2=0),0,if(max(voteTotals!$D2:$F2)=voteTotals!D2,voteTotals!$C2,0))\`

Broken down:

1. If all candidates are 0, leave as 0 (it was assigning electoral votes to all three before this)

2. If 1 is false, check if the \`MAX\` value for that row is the same as the candidate header.

3. If 2 is true, assign the electoral votes. If false, leave as zero.

It works well and calculates instantly, which is really nice. The columns are then summed by candidate.

\## Popular vote

The electoral vote took care of the presidential candidates, but I still needed popular vote totals for all of the candidates. That was a simple \`SUM\` function pulled from Sheet 2 which aggregated votes by homeroom. I didn&#8217;t need to worry about cross-checking against candidates because I was just interested in the totals.

* * *

Now that the tallying is done, I turned my attention to the live updates. My first testing was with a published chart from the spreadsheet. You can publish them without exposing the underlying data, which makes sharing results much simpler. But, it turns out, that leaving the chart options as &#8220;automatically publish updates&#8221; means anywhere from 10-30 minutes later. Not great for a live-update.

After some digging, I settled on the fact that a custom chart built with the Google Visualization API would be the best way to immediately show poll data.

\## Coding the Chart

This took much longer than I expected because the Google Visualization API expects you to send a \`QUERY\` call to get data from a live spreadsheet to draw the chart. I&#8217;ve not used the Query language much, and in the end, my data wasn&#8217;t structured well enough in the spreadsheet to easily get what I wanted.

Using Google Apps Script, I was able to grab the spreadsheet data and create my own array to then give to the API for the chart.



\## Displaying Popular Votes

The teachers also wanted to display the popular vote for all of the elections (President, Governor, Senate, House) next to the electoral data. This wasn&#8217;t too bad and I was able to set up a simple HTML table (using CSS \`display: table\`) to load the live data using AJAX.



Instead of having teachers reload the page every few minutes, the last two lines on the client-side code will re-run each script with fresh data, updating the site on it&#8217;s own.

\## Why use a web app?

This is definitely more complicated than it could have been. But, I went with a web app approach for two main reasons:

1. Simplicity for the \_user\_

2. Data security

They&#8217;re collecting some demographic information that they don&#8217;t want published, which is one of the problems with just sharing the sheet out with the entire school staff. They also wanted to make sure the vote wasn&#8217;t damaged by someone accidentally changing some of the cell calculations.

The nice thing about running a web app is that I can still require a school district login to see the page. Additionally, even if the page were public, it hides the original spreadsheet key because you don&#8217;t need it in the client-side scripts. So that spreadsheet data is relatively safe from prying eyes.

Watch for a follow up post with the election results and a wrap up on how using the app went.

* * *The featured image is a \[flickr photo\](https://flickr.com/photos/nikkacorsino/4334364416 &#8220;Mock elections 2010&#8221;) shared by \[Two2Travel\](https://flickr.com/people/nikkacorsino) under a \[Creative Commons ( BY-NC-SA ) license\](https://creativecommons.org/licenses/by-nc-sa/2.0/)</p>
