---
id: 4973
title: Tracking Missing IDs with a Google Sheet
date: 2016-11-18T12:14:00+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4973
permalink: /2016/11/tracking-missing-ids-with-a-google-sheet/
image: assets/img/wp-content/uploads/2015/03/15899278822_6972fbc99b_k.jpg
categories:
  - All
  - Projects
---
Like many schools, our students are asked to wear their student ID&#8217;s when they come into the building each day. During the day, they don&#8217;t need to have them on&#8230;just in the morning so we can make sure people coming in are part of our student body. If a student doesn&#8217;t have their ID, we issue a temporary and track how many times they don&#8217;t have one when they come to school. This process used to be done by hand each morning. A queue would form and a teacher would write down ID numbers (they all have them memorized) and names. This caused several problems:

1. If a student gave a fake ID number, office staff wouldn&#8217;t know until much later in the day.

2. The paper copy of the ID list was given to a secretary to transcribe into a spreadsheet.

3. Transcribing meant looking up the ID in our SIS and then manually entering the number of times the student didn&#8217;t have their ID.

4. When benchmarks were hit (5, 8, 11), disciplinary action was issued and followed up on by an assistant principal.

I spoke with the head secretary and we worked out a custom Google Sheet to do all of this automatically. Now, the duty station is equipped with a Chromebook so the teacher issuing IDs can quickly check veracity of the given ID and have all of the tally work done. This (mega) post outlines the sheet structure and custom code used to do the work.

The template and source are linked [at the bottom of the post](#the-end).

## The Sheet

The Google Sheet is split into four tabs:

1. Raw: Blank sheet with `Timestamp`, `ID`, and `Name`.

2. Lookup: database of student ID numbers and the associated name/grade.

3. Aggregate: `ID`, `Name`, `Grade`, `Count`, `Cons 1`, `Cons 2`, `Cons 3`.

4. Daily groups. `Filter`, `ID`, `Name`, `Grade`.

### Raw Input

This is used by the duty station. The date and student ID numbers are entered as students are given temporary bands. The `Name` column is populated by an ID lookup using `=index(lookup!B:B, match(B2,lookup!A:A))`. Both `VLOOKUP` and `INDEX`/`MATCH` are notorious for mistakes with large data sets, which is why the `lookup` tab is filtered by ID number and **not** alphabetically.

### Aggregate

The same student can have multiple dates of entry and this sheet aggregates by student ID. Using `UNIQUE`, it pulls each ID as a single column. Then, I used another index-match function to populate the name and grade. To count the number of missing ID instances, a `COUNTIF` function worked well to count the number of times the ID number shows up in the `raw` sheet.

## Scripting

At this point, much of the work of the sheet was moved over to Apps Scripts. We needed some dynamic results and using a script to sort through the volume of information was much faster and more reliable than using regular Sheets functions. I&#8217;m breaking the code into chunks to better explain the purpose. In the actual sheet, all functions are in the same file.

### Function 1: Globals and menu item

I use a couple global variables (not super efficiently, though). I also create a custom menu to run sheet functions. This takes care of creating those items. I have mine at the top of the script, but they can go anywhere.



### Function 2: Listing dates a student was missing the ID

For reporting, it was helpful to know which dates a student was missing an ID. Rather than adding _n_ columns to fill with dates, a script was used to look up the student ID number and then add a note to the cell with the dates.



### Function 3: Populating a daily list of students

Each day, the secretary checks for students who have hit a benchmark: 5, 8, or 11 missing IDs. Searching through the aggregate list isn&#8217;t feasible, so a script does the search and then returns the results dynamically.

This checks two conditions: A) The number of missing IDs is equal to or greater than the target and B) there is no consequence filled in the appropriate column. If the consequence has been assigned, it&#8217;s in the SIS and doesn&#8217;t need to be entered by the secretary.



### Function 4: Assigning consequences

When the office staff pulled the daily list, they go into our SIS and update the disciplinary action or other notes. They would still have to go back and document that consequence being assigned _in the aggregate sheet_. Rather than scroll through the list, the appropriate consequence for the target is now filled in when the list is generated. The daily list isn&#8217;t cleared until the script is run again with a new target.

If, by chance, there are no students to assign a consequence to, a popup is shown to let the user know that no students meet the criteria.



## The Result

<div id="the-end" style="height:0;margin:0;padding:0;">
</div>

In the end, we&#8217;ve removed two steps from the administrative process, but they were the most time-intensive steps. Rather than looking each student up and then remarking a spreadsheet, the staff member needs to simply pull the list of students for that day.

Computers are great at repetitive tasks, so let&#8217;s use them to do those tasks. There&#8217;s definitely some optimization that can be done, especially in the last two functions as they pass those arrays around like a cold. If you make updates, please comment and share back. The code is hosted on GitHub, so you can fork and update as much as you&#8217;d like.

You can [look at a copy of the template](https://docs.google.com/spreadsheets/d/1MHrQVM0tPql8gx2tKfFlJwc5teNyDx8-LJ1FRulKFv0/edit) or [just make a copy for yourself](https://docs.google.com/spreadsheets/d/1MHrQVM0tPql8gx2tKfFlJwc5teNyDx8-LJ1FRulKFv0/copy) and start poking away.

[The entire source (not broken up) is hosted on GitHub Gists.](https://gist.github.com/bennettscience/7e67e15ada3c86ae245b469140c88e4f)
