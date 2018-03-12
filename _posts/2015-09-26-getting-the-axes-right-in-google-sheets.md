---
id: 4032
title: Getting the Axes Right in Google Sheets
date: 2015-09-26T14:31:14+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4032
permalink: /2015/09/getting-the-axes-right-in-google-sheets/
categories:
  - All
  - Technology
---
I think I finally figured it out.

Getting charts and graphs created in Google Sheets (or Excel for that matter) has always been somewhat of a wrestling match between what I _want_ the software to do and what the software _thinks_ I want it to do. Predictive and suggestion-based user interface is nice, but not when I want to plot some data. Let me dictate what happens.

Excel isn&#8217;t as bad &#8211; you can create a chart and then manually set the Y and X axis series. No such workflow in Google Sheets. 

## The Task

This week, my students were collecting data for position and speed of an object as it accelerated down an incline. We put the data on the board and then I went to make a chart of it the following day. As usual, I selected the two columns to plot and inserted the scatter plot.

Here&#8217;s a sample table:
  
<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-26_14-18-59.png" alt="2015-09-26_14-18-59" width="199" height="168" class="aligncenter size-full wp-image-4033" />

No matter how I selected the data &#8211; left to right, right to left &#8211; Google always put the velocity data on the X axis and time on the Y (in Excel, it remembers which direction you select data, so it&#8217;s an easy fix).

## The Fix

I realized, after several minutes of trial and error, that Google defaults the X axis to data in the leftmost column. Seriously. It was that small of a distinction. So, you have two options: 1) Swap the columns, or 2) Select data manually. Because this sheet was dependent on some formulas I&#8217;d already written, I chose to do the latter.

  1. In your spreadsheet, click on **Insert > Chart** or click on the chart icon.
  2. In any tab, click on the data select tool to close the chart dialog and choose your data.
<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-26_14-26-10.png" alt="2015-09-26_14-26-10" width="327" height="431" class="aligncenter size-full wp-image-4034" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-26_14-26-10.png 327w, https://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-26_14-26-10-228x300.png 228w" sizes="(max-width: 327px) 100vw, 327px" />

  3. Select the range you would like to be on the X axis. Then, click on **Add another range** and select the Y axis range of data.

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-26_14-29-13.png" alt="2015-09-26_14-29-13" width="496" height="475" class="aligncenter size-full wp-image-4035" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-26_14-29-13.png 496w, https://blog.ohheybrian.com/wp-content/uploads/2015/09/2015-09-26_14-29-13-300x287.png 300w" sizes="(max-width: 496px) 100vw, 496px" /> </ol> 

If all goes well, your new chart should have data on the correct axis in the graph.