---
id: 5336
title: Slides Tweeter Update 3
date: 2017-11-29T22:21:41+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=5336
permalink: /2017/11/slides-tweeter-beta/
enclosure:
  - |
    https://blog.ohheybrian.com/wp-content/uploads/2017/11/2017-11-29_22-17-49.mp4
    713361
    video/mp4

image: assets/img/wp-content/uploads/2017/11/34579122234_310042eee9_z.jpg
categories:
  - Technology
---
_([Part 1](https://blog.ohheybrian.com/2017/11/tweeting-google-slides-automatically/), [Part 2](https://blog.ohheybrian.com/2017/11/slides-twitter-update/))_

I&#8217;m excited.

A beta version of the Slides Tweeter AddOn will be ready this week. Two major updates helped get it to this point:

1. Google changed the URL pattern for the thumbnail image, meaning I can grab a _much_ smaller file which greatly increases the speed of the AddOn. Most tweets are posting in less than 20 seconds. Currently, the AddOn is grabbing a 500px wide image, but I may bump it up to 700 or 800px to see if I can squeeze a larger image without the loss of performance.

2. I&#8217;m using the `PropertiesService` function of Apps Script to store the active Slides ID and title. When I first built the proof of concept, I didn&#8217;t need to store IDs because I could access the `getActivePresentation()` property directly. As an AddOn, I need to open the presentation by ID to make sure the correct one is being opened at any one point. This also allowed me to set the webapp as a static address, accessible by anyone using the AddOn. No data is pushed to the client (browser) other than the images of the Slides, so no data is exposed.

To make it easier, I updated the initial UI slightly. Here&#8217;s the updated launcher:

<video style="width:100%; height:auto;" autoplay muted loop><source type="video/mp4" src="https://blog.ohheybrian.com/wp-content/uploads/2017/11/2017-11-29_22-17-49.mp4">2017-11-29_22-17-49&#8243; /></video>

The title and hashtag are customizable, the ID field is not. There is still a little tweaking to do to ensure the player launches correctly every time.

If you&#8217;d like to be whitelisted for a beta, fill out the form below. I&#8217;ll follow up directly via email once it&#8217;s ready.
