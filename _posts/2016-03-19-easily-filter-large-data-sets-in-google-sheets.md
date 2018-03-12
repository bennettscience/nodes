---
id: 4278
title: Easily Filter Large Data Sets in Google Sheets
date: 2016-03-19T22:41:11+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4278
permalink: /2016/03/easily-filter-large-data-sets-in-google-sheets/
categories:
  - How To
---
I use Google Sheets in my classroom a lot. I used to rely on combinations of the `vlookup`, `importrange`, and `index/match` functions to get information, but I&#8217;ve recently switched to using `if` and `filter` to return arrays of information from master spreadsheets.

Using `filter` is nice because it takes multiple conditions and you can set which columns of the array you want to return for your summary sheet. A pretty standard search looks like this:

`=if(filter($A$2:$A,$A$2:$A=$F$3)=$F$3,filter($B$2:$B,A2:A=$F$3),"")`

[Here&#8217;s a sample spreadsheet](https://docs.google.com/spreadsheets/d/1pAVxaQwlk5X9uihqMwzuXcD1Nz7WbdH4PGdUspJUVyw/edit#gid=0) so you can see how the result is returned after changing the filter term.

So, let&#8217;s break it down:

Cell F3 holds my search term, &#8220;A&#8221;, &#8220;B&#8221;, or &#8220;C&#8221;.

**(filter($A$2:$A,$A$2:$A=$F$3)** &#8211; Filter looks through a range of cells ($A$2:$A) for a specific condition ($A$2:$A=F3), much like the IF statement. The exception is that this only returns the matching content rather than a boolean (true/false). The filter, in this case, is serving as the boolean check for the IF statement it&#8217;s wrapped within.

**=If()** &#8211; This function is super helpful because it limits what happens in the sheet. It&#8217;s like conditional formatting, but for your functions. It takes two arguments, minimum, but you can set up to three: the condition to check, what to do if true, and what to do if false. In this case, the conditional is set with the filter function (see above). If the filter returns a cell with an &#8220;A&#8221; in it, the TRUE condition is run.

**filter($B$2:$B,A2:A=$F$3)** &#8211; If it&#8217;s true, I want a _different_ column returned. In this case, it&#8217;s the names of students with group &#8220;A&#8221; set. Filter works the _same way_, except this time, it searches for column B (the names) that match the search parameter (&#8220;A&#8221; in column A).

In other words, the function reads like this:

1. If

&#8211; filter through column A

&#8211; Look for cells that contain &#8220;A&#8221;

&#8211; If an &#8220;A&#8221; is found, the IF statement is TRUE

2. Execute the &#8220;TRUE&#8221; parameter

&#8211; Print the student&#8217;s name in the cell

3. If not, leave a blank cell

I added a third column, which prints the student&#8217;s project content just to show how these functions can be used in conjunction with one another.

I know you can use ARRAYFORMULA to do essentially the same task, but using ARRAYFORMULA doesn&#8217;t allow you to add custom content in the column &#8211; the throws an error saying data cannot be overwritten. I don&#8217;t run into that case often, but it&#8217;s often enough to be annoying.

Again, this is difficult to see without checking out the [example spreadsheet](https://docs.google.com/spreadsheets/d/1pAVxaQwlk5X9uihqMwzuXcD1Nz7WbdH4PGdUspJUVyw/edit#gid=0). It&#8217;ll take some playing, but once you get it, it&#8217;s very helpful. Leave a note in the comments if you get stuck and need some help working it out.
