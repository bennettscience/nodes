---
id: 5220
title: Date Countdown in Sheets for Triggers
date: 2017-09-08T08:21:14+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5220
permalink: /2017/09/date-countdown-in-sheets-for-triggers/
categories:
  - Code
  - Technology
---
I have a Google Sheet which displays all upcoming PD in the district. It also tracks registrations for people through a web app. I&#8217;ve documented that in other places, so I want to focus on an easy method of calculating days until an event to use as a script trigger.

This started because teachers were looking for an automated email reminder a few days before the workshop so they didn&#8217;t forget to come. I&#8217;d _rather_ they get a Calendar invitation when they register for the event, but I ran into some authentication snags, so that aspect is back burner for the time being. Currently, the sheet is using today&#8217;s date and the date of the workshop to trigger an email four days in advance.

Calculating the &#8220;days remaining&#8221; is pretty easy. The cell formula is:

`=ARRAYFORMULA(IF(ISBLANK(B2:B),&#8221;&#8221;,ROUNDDOWN(B2:B &#8211; NOW())))`

There are several components of this:

&#8211; `ARRAYFORMULA` applies formulas to a range of cells rather than a single cell. Saves me from having to copy the formula down to each new entry.

&#8211; `ISBLANK` checks for data in a cell. Because it&#8217;s inside `ARRAYFORMULA`, it looks at the cell in the matching row. If it is blank, `TRUE` is returned.

&#8211; `ROUNDDOWN` rounds a result to a whole integer. This is useful because the subtraction taking place inside the formula returns a large decimal. This makes it easier to test in the script.

&#8211; `NOW` gives the date and time when the sheet is updated. Any time you make a change, NOW is calculated.

&#8211; The `IF` conditional keeps the sheet clean and wraps everything up. The syntax is, `IF(_logical test_, _value if true_, _value if false_)`. So, this reads, &#8220;If the cell column B for this row is blank, show nothing. If it&#8217;s _false_ (is _not_ blank), calculate the difference between the PD date in column B and `NOW`.

The core of the function is the count down calculation. For instance, today is Friday, September 8. Subtracting it from a date in the future like Monday, September 11, returns a whole integer: 3. I can test for that integer (or any integer) in a simple script.

This is particularly helpful with timed triggers in scripts. I have a utility script wrapped in a conditional:

&#8220;`

if(date === 3) {

// do something here

}

&#8220;`

If the condition isn&#8217;t met in the script, nothing happens _and_ I don&#8217;t get a failure email notification. This is also nice because if I want to adjust the timing, the trigger can stay the same (daily, for instance) without changing the codebase.
