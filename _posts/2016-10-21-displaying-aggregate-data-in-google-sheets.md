---
id: 4935
title: Displaying Aggregate Data in Google Sheets
date: 2016-10-21T09:00:32+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4935
permalink: /2016/10/displaying-aggregate-data-in-google-sheets/
image: assets/img/wp-content/uploads/2016/10/26858459235_9f7616bb18_z.jpg
categories:
  - All
  - Technology
---
Our students are required to have their student ID on when they come into the building each day. This is mainly for security, but their ID also allows cafeteria, library, and other office staff to scan their ID for various clerical tasks.

When a student \*doesn&#8217;t\* have their ID, they&#8217;re issued a temporary wristband so faculty and staff know they&#8217;ve checked in for the day and that their record has been updated. The update process involved a paper copy made at a cart with wristbands being passed to a secretary who would then look up the student and add it to a spreadsheet before adding it to our SIS. Dang.

The head secretary (Deb) and I worked out a Google Sheet that does all of that (minus the SIS portion, but that&#8217;s coming soon).

I&#8217;ll outline the functions below, but you can \[grab a copy of a blank sheet to play with\](https://docs.google.com/spreadsheets/d/1MHrQVM0tPql8gx2tKfFlJwc5teNyDx8-LJ1FRulKFv0/copy) if you&#8217;d like to tinker or improve.

## Raw info in&#8230;

At it&#8217;s simplest, the staff member at the check in kiosk has to enter the date and the student&#8217;s (supposed) ID number. This sheet populates the rest of the workbook.

## &#8230;rich info out.

Once the date and ID have been put in, some behind-the-scenes magic happens. This isn&#8217;t ideal, but for right now, we&#8217;re using a hidden sheet with a master record of student ID&#8217;s and their associated name. I would like to make this a web-based API call, but it isn&#8217;t possible (not a technical issue&#8230;internal) right now.

1. A staff member enters the student ID into the \`raw\` data sheet. The ID is cross-referenced in the \`lookup\` sheet and the name is displayed. This is to avoid students giving the incorrect ID.

2. The \`noID\` sheet gathers unique IDs from the \`raw\` list so we can aggregate the number of times they&#8217;ve come in with an ID. The student name is again pulled from the \`lookup\` list.

3. A simple \`countif\` formula counts the number of times an ID shows up in the list and aggregates. Those cells also change color using conditional formatting depending on the number of entries.

4. Consequence data is filled in automatically depending on the number of entries a student has.

## Disaggregating the Aggregate

For reporting, it&#8217;s helpful to know the actual incident dates. Going through each row, one by one, looking for a student name (even using the Find tool) can take a while, especially in large sheets. So, we turn to Google Apps Script to do it for us.



The comments in the script should give you an idea of what&#8217;s happening, but if you didn&#8217;t follow, here&#8217;s the general idea:

&#8211; Select an ID you want to look up.

&#8211; The function looks for that ID in the \`raw\` sheet. All matched dates are stored in an array.

&#8211; Once the loop is finished, the full array is passed to a function which adds the note to the selected cell.

&#8211; You can now see the individual dates a student had no ID by hovering over their ID.

It&#8217;s done case-by-case and only when the script is selected in the menu so your sheet isn&#8217;t trying to constantly update. The idea being that you only use the script when you need to know the dates a student didn&#8217;t have an ID when they came in.

What do you think? Leave a comment below, or better yet &#8211; make it better and write up your version with a link back here.

* * *

_\[flickr photo by Owen P\](https://flickr.com/photos/owenphilipson/26858459235) shared under a Creative Commons (BY) license_</p>
