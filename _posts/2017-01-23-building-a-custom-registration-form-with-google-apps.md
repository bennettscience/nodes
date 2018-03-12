---
id: 5039
title: Building a Custom Registration Form with Google Apps
date: 2017-01-23T14:00:25+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5039
permalink: /2017/01/building-a-custom-registration-form-with-google-apps/
image: assets/img/wp-content/uploads/2017/01/2827035266_966af63492_o.jpg
categories:
  - All
  - How To
  - Technology
---
One of the main responsibilities my team has is offering and running training on a number of resources teachers in the district have access to. The most popular, because of their new-ness, are Google Apps (GSuite&#8230;whatever) and Canvas. Because we offer so many workshops, our Drive is full of copies of copies of copies of registration forms. So, I built a custom registration form using Google Apps Script and a Sheet. This detail-heavy post walks through the entire process with code.

## The End Product

There were a lot of iterations of the project and in the end, we wound up with a website which:

&#8211; Can be managed by anyone on the team

&#8211; Collects the username (their email address, actually)

&#8211; Displays available seats for the workshop

&#8211; Allows users to both register and cancel registrations

&#8211; Displays the user&#8217;s current registrations

## The Back End

This uses a Google Apps Script web app and a Spreadsheet to run the back end service. The sheet serves as two databases: course offerings (with details) and user registrations. The front end site uses AJAX calls to populate a page specific to the user.

In order to return the correct data, `Session.getEffectiveUser().getEmail()` is used to check the logged-in user against the database so only their course information is returned. For example, this script gets the current user registrations from the registration sheet:



Much of the backend work is building arrays and objects of the correct data and sending it to the client side scripts to display. The full commented code is [in this GitHub Gist](https://gist.github.com/bennettscience/f798a493e47dff3dc3212a0d4ba103f6).

## The Front End

Google Apps Script allows for templated HTML. I&#8217;m not using a template, per se, because it&#8217;s loading a static page and populating `div` elements with AJAX calls. But, the same could be done to create multiple pages using the same template.



There are two main actions: registering for a course and cancelling a course. Both call the server to make changes to the spreadsheet and pass updated information to the front. Registering for a course (or courses) write across a range rather than submitting _n_ number of results for that user. Cancelling a course, instead of building and writing a new array, searches through the Sheet for the user and the matching date and simply deletes the cell. The app is then reloaded to refresh the user registrations at the top.

It&#8217;s not pretty and there are some changes I still want to make to clean up some of the array building/passing, but it&#8217;s such a small amount of data, the site loads very quickly even with a large number of registrations.

If you have suggestions, or if you make improvements, please leave a note in the comments. As is, you could probably copy and paste most of this into your own sheet and get it going. Be sure to fill in the correct sheet names and ID&#8217;s in the `code.gs` file to avoid breakage.

&#8212;

[Networks](https://flickr.com/photos/eflon/2827035266 &#8220;Networks&#8221;) flickr photo by [eflon](https://flickr.com/people/eflon) shared under a [Creative Commons (BY) license](https://creativecommons.org/licenses/by/2.0/)
