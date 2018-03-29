---
layout: post
title: "Event Manager Web App"
date: "2018-03-29 13:41:44 -0400"
image: "https://farm5.static.flickr.com/4142/4752293032_9684cc36a1_z.jpg"
categories:
  - Code
tags: ["google apps script", "web app", "project", "event manager", "gsuite"]
published: true
---

Adding to the list of things to blog so I don't forget about them in the future, I built an event manager web app for prom.

## Sales

Writing data to/from a spreadsheet through a webapp is faster and easier on the sales team than having them edit a spreadsheet directly. Names are pulled by matching ID numbers in a lookup database and populated in the form automatically.

When a ticket is sold, the name is added to a running list on the right side. The app also ensures no students purchase tickets more than once by comparing current sales with the submitted ID number and returns an error if the person already exists in the sales record.

![Ticket sale interaction](/assets/img/sale.gif)
_[click for a larger image](/assets/img/sale.gif)_

## Manager

Students are checked into and out of the event by the door staff. A full list is returned to the app that can then be filtered by ID number by the staff. Clicking on a number populates a card showing the student information for verification. They can then be timestamped into and out of the event by the staff.

![Manager workflow](/assets/img/manager.gif)
_[click for a larger image](/assets/img/manager.gif)_

This worked well because each of our students has a unique six-digit ID number we can use to look up their information. It could be quickly repurposed to _assign_ an ID number at registration rather than assign a name and have the manager page function the same.

Full code for the project is [on this GitHub Gist](https://gist.github.com/bennettscience/430e2bf28998bd2beace3185b92da451).

---

_Featurend image: [Conference Queue](https://flickr.com/photos/bearfaced/4752293032 "Conference Queue") flickr photo by [Bearfaced](https://flickr.com/people/bearfaced) shared under a [Creative Commons (BY-NC-ND) license](https://creativecommons.org/licenses/by-nc-nd/2.0/)_
