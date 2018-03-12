---
id: 5274
title: Tweeting Google Slides Automatically
date: 2017-11-15T21:57:58+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5274
permalink: /2017/11/tweeting-google-slides-automatically/
enclosure:
  - |
    https://blog.ohheybrian.com/wp-content/uploads/2017/11/slides-1.mp4
    1735633
    video/mp4

image: assets/img/wp-content/uploads/2017/11/34579122234_310042eee9_z.jpg
categories:
  - All
  - Code
  - Technology
---
An app called [Keynote Tweet](http://larahogan.me/blog/live-tweeting-from-keynote/) has been around (in various working and non-working states) since the late 2000&#8217;s and let users auto-tweet images of their Keynote slides during a presentation to a hashtag or stream. Google released the Slides API this year and one of the API methods allows you to get a thumbnail of the image which can then be sent to other applications. You can see an example of this in a slideshow now by going to View > HTML View. It opens a tab with slide images embedded in plain HTML formatting. Since we can now get the image, we can start to push them out to other platforms with Google Apps Script.

This post is going to be technical in nature and is really meant as a proof-of-concept. I&#8217;ll explain some of the shortcomings of this implementation in context. The code is broken up into several chunks and [the entire source](https://www.github.com/bennettscience/slides-tweeter) is posted to GitHub.

## Setup

First, the Slides API has to be enabled in the Google Cloud Console. Once that&#8217;s done, getting the thumbnails is pretty easy.



Off the bat, the API doesn&#8217;t have event triggers like the Forms, Sheets, or Docs. I wanted each slide to be tweeted as the presentation advanced, so I needed a custom presentation view. To get this to work, I wrote up a web app presentation window served by Google&#8217;s `HtmlService`.

This simple HTML page requests and displays the slides from an array created by the backend. There are some controls that hide on the bottom of the screen and a position indicator in the top right. Hover the mouse and they&#8217;ll pop up for interaction.

<video style="max-width:100%; height:auto" autoplay muted loop><source src="https://blog.ohheybrian.com/wp-content/uploads/2017/11/slides-1.mp4" type="video/mp4"></video>



### Issue 1

1. The initial page load for the web app varies depending on the size of the presentation. The request for slides on line 37 fires as soon as the document loads in the browser. The loading GIF is replaced by the slides when they&#8217;re returned.

2. The slide thumbnails are returned as 1600&#215;900 pixel PNGs, so they&#8217;re big, which increases load time. _There is no way to specify the size of the image returned at this point._

Each slide is sent as an image on a tweet as they show is advanced and has `posted` class added to prevent multiple tweets of the same slide. The &#8220;previous&#8221; button does not trigger a tweet in the event you go backwards.

I used [Martin Hawksey&#8217;s](http://www.twitter.com/mhawksey) [TwtrService library](https://mashe.hawksey.info/2014/10/twtrservice-a-twitter-api-client-for-google-apps-script/) to connect my Twitter account. He has a detailed post on how to connect and use the library, so I&#8217;m not going to go through that here. This is also where the second major snag comes up.

### Issue 2

[Google recommends **not** using libraries](https://developers.google.com/apps-script/guides/libraries) in production code because they can negative impact on script runtime. This is especially apparent on the first slide in this script &#8211; it times out frequently (3 of 5 times?) and I&#8217;m not sure why. Subsequent slides come in between 20-50 seconds, which isn&#8217;t terrible, considering the image size being uploaded. But, if you&#8217;re a fast talker, this won&#8217;t be able to keep up unless some kind of queueing is implemented.

To do this without a library, the OAuth flow needs to be incorporated into the main script. It&#8217;s beyond my ability at the moment, so if you&#8217;d like to contribute that component and help this run as a standalone app, you can do [submit a pull request on the GitHub repo](https://github.com/bennettscience/slides-tweeter).

## Tweeting

Sending the tweet is actually a two-step process. First, the slide thumbnail is posted and then the `media_id` assigned is attached to the tweet. This is all done on the Google Apps Script side of the code to account for security considerations.

Google&#8217;s thumbnail is generated and hosted on their server, so I used the `UrlFetchApp` to request the content as a `blob`. This is serialized data that can be passed on to Twitter&#8217;s image hosting service.

Once the image is uploaded, we can take the returned `media_id` string and attach it to a tweet. The Twitter API object for a tweet has a number of options, but all I&#8217;m using is `status` (what you&#8217;re saying) and `media_ids`, which takes the image ID string from the upload.

Right now, the string is hard-coded into the script. This could be set via the Apps Script UI tools if this gets turned into an AddOn at some point if I can speed it up.



### Issue 3

Twitter requires a high degree of authorization for posting. I tried implementing the OAuth flow without using a library to speed up performance, but I couldn&#8217;t get it to work. `TwtrService` stores the app credentials for the OAuth flow and has both an `upload` and `post` method that make the tweeting easy. But, performance varies for 20 seconds to as long as 300.

## Conclusion

The app works, which was exciting to put together and see. It&#8217;s a function that would be great in a number of situations and implementation will only get better as the Slides API improves. I&#8217;d love to work with someone with more experience to speed the API calls up significantly by including all the necessary authentication in the main script rather than in a library. If you&#8217;d be willing to contribute, [the source code is on GitHub](https://github.com/bennettscience/slides-tweeter).

If you&#8217;d like to play with it, you can either copy all the files from GitHub or copy and paste the separate embeds here into an empty project. Add `postTweet` and `getThumbnails` to the code below.



&#8212;

[Mountain Bluebird](https://flickr.com/photos/andrej_chudy/34579122234 &#8220;Mountain Bluebird&#8221;) flickr photo by [Andrej Chudy](https://flickr.com/people/andrej_chudy) shared under a [Creative Commons (BY-NC-SA) license](https://creativecommons.org/licenses/by-nc-sa/2.0/)
