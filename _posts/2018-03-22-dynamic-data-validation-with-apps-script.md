---
layout: post
title: "Dynamic Data Validation with Apps Script"
date: "2018-03-23 09:00:00 -0400"
image: "https://farm6.static.flickr.com/5607/30330644255_8dc5dc5212_z.jpg"
categories:
  - Code
tags: ["productivity", "google apps script", "google sheets", "programming"]
---

My coworker, Kat, needed to set up meetings with our 13 elementary schools. Appointment slots would have been a lot of clicking back and forth on calendar events plus her dates were variable and subject to change. She set up a spreadsheet with each school on a row. The challenge was to set up data validation rules that would automatically update after a school made a selection.

_cracks knuckles_

The first thing to do was to list out all the possible dates. Updating a spreadsheet is easier than changing a validation object in Apps Script. I can also loop the sheet and make structural adjustments on the fly.

Once that list was done, we wrote a function to set validation on the sheet using the date.

<script src="https://gist.github.com/bennettscience/0530546722a48b1473329785e2460b95.js?file=setValidation.gs"></script>

Now that validation is set, we needed to listen for changes to the spreadsheet. The `onOpen` function has an event object which holds information about where and how the sheet was edited. This let us limit the function to changes in columns two or three only. If a cell was edited (ie the validation dropdown was changed by the user) the function gathers event data and passes it along to the workhorse.

<script src="https://gist.github.com/bennettscience/0530546722a48b1473329785e2460b95.js?file=onEdit.gs"></script>

Now we can update the validation range. Loop through the entire range of dates _backwards_. Once a matching row is found, delete the row. Looping backwards prevents your index from changing. We also _remove_ validation from the edited cell at this point so it doesn't show an error for having a value outside the validation list.

<script src="https://gist.github.com/bennettscience/0530546722a48b1473329785e2460b95.js?file=updateValidation.gs"></script>

Because validation is pulled from a range, deleting the row (and the value) removes it as an option in _all_ of the other cells! Once the sheet is finished and everyone has a date, you could even add a short loop to push dates to your Google calendar as all day events.

Here's the [full script](https://gist.github.com/bennettscience/0530546722a48b1473329785e2460b95) if you want to add it to your sheet.

---

_Featuredimage is [Array of Rivets](https://flickr.com/photos/jimchoate/30330644255 "Array of Rivets") flickr photo by [jim.choate59](https://flickr.com/people/jimchoate) shared under a [Creative Commons (BY-NC-ND) license](https://creativecommons.org/licenses/by-nc-nd/2.0/)_
