---
id: 4906
title: Turning an Old Laptop into a Video Kiosk
date: 2016-09-24T14:49:07+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=4906
permalink: /2016/09/turning-an-old-laptop-into-a-video-kiosk/
categories:
  - All
  - Projects
---
My father-in-law came to me with an interesting idea. He wanted to create video kiosk for our church which would play videos on different mission organizations we&#8217;re involved with. The wall &#8211; previously &#8211; had photos and text about each missionary or organization, but he wanted to revamp.

We initially tried to use PowerPoint and a custom keyboard to jump to different slides, but maintaining and updating that system wasn&#8217;t going to be very elegant or user friendly. So, about a year later, I had an &#8220;oh, duh&#8221; moment and realized we could do it as a static, locally-hosted website. It would be easy to build and even easier to maintain, so that&#8217;s what we did.

In this post, I&#8217;ll talk about the hardware and software we used to get it finished. There are still some things to hammer out, but the bones of the project are done and tested successfully, so it seems like a good time to document it.

## The Hardware

Our initial idea was to use a Raspberry Pi 3 to do everything because of it&#8217;s low price point and small size. Unfortunately, the RPi, in general, doesn&#8217;t handle web video too well. I looked into using the \[kweb\](https://www.raspberrypi.org/forums/viewtopic.php?t=40860) minimal web browser, which hooks into the native OMX Video Player on the Pi, but you can&#8217;t customize the look and playing full screen video had lots of menus. In the end, it was turning into a huge job to make it look polished, so we moved away from the Pi.

My brother-in-law had an old HP laptop that had died when he tried to update it to Windows 8 (insert snarky Microsoft joke here). So, he donated it to the cause.

I wiped the hard drive and installed Ubuntu Linux 16.04 LTS. It&#8217;s pretty lightweight and gets consistent updates. It&#8217;s also really user-friendly in case there is a problem with the laptop, so one of the office assistants can troubleshoot if I can&#8217;t make it. I also chose to stick with Linux because I can use SSH to log in via my Chromebook on Sunday mornings and run updates remotely if I need to.

\[![\](https://farm9.static.flickr.com/8044/29893031255\_2a5ab84aac\_z.jpg)](https://flickr.com/photos/bennettscience/29893031255 &#8220;High security&#8221;)
  
\[flickr photo\](https://flickr.com/photos/bennettscience/29893031255 &#8220;High security&#8221;) shared by \[bennettscience\](https://flickr.com/people/bennettscience) under a \[Creative Commons ( BY ) license\](https://creativecommons.org/licenses/by/2.0/)

You could definitely argue that running a full desktop environment for a simple web kiosk slows the machine and introduces a bunch of variables that could cause things to go wrong, which is 100% accurate. \[OMG! Ubuntu! has a good article\](http://www.omgubuntu.co.uk/2014/07/create-ubuntu-kiosk) on how to either convert a full machine to a dedicated kiosk \*\*or\*\* how to build one from scratch, but since I didn&#8217;t find the article until we were almost done, I decided not to go back and rework everything.

For user interaction, we grabbed an \[Intuos Art Small tablet\](https://us-store.wacom.com/Catalog/Pen-Tablets/Intuos/Intuos-Art-Small-S01#undefined2) from Wacom for $100. It&#8217;s seated in a wall mount to lock it in place and hide the wires. Essentially, it&#8217;s a giant touchpad.

\[![\](https://farm9.static.flickr.com/8151/29599235790\_9030812f1a\_z.jpg)](https://flickr.com/photos/bennettscience/29599235790 &#8220;Human/computer interface&#8221;)
  
\[flickr photo\](https://flickr.com/photos/bennettscience/29599235790 &#8220;Human/computer interface&#8221;) shared by \[bennettscience\](https://flickr.com/people/bennettscience) under a \[Creative Commons ( BY ) license\](https://creativecommons.org/licenses/by/2.0/)

Finally, we bought a 55&#8243; wall mounted TV. The laptop had an HDMI port, so that took care of high-definition video and audio.

## The Software

I built the page with plain HTML and JavaScript. It&#8217;s currently being hosted locally on the machine to ensure smooth video with no buffering. I&#8217;m planning on testing the broadband rates via ethernet next time in church because over wifi we ran into issues. If I can get a good download rate, I&#8217;ll switch the site over to GitHub Pages so I can update remotely.

### Source

The HTML and CSS is pretty standard. I didn&#8217;t want a ton of bloat, so I coded everything from scratch. You can take a \[look at the markup on GitHub\](https://github.com/bennettscience/church). There&#8217;s also a \[live example\](http://dev.ohheybrian.com/church) so you can see how it&#8217;s rendered.

First, this is a hallway display. There will probably be times where people aren&#8217;t watching videos, in which case I want to avoid burning an image into the screen of the TV. I added a small jQuery function to bring up a prompt if no one touches the trackpad for 30 seconds. This also turned out to be handy because a lot of people walked up to the tv and tried touching it directly rather than using the trackpad input.

To play the videos, I wanted each container to reference a hidden video \`div\`. I use jQuery to handle the element selection and JavaScript to pay attention to the play state. When a user clicks the tile, a fullscreen video starts playing. There is no keyboard for them to quit out of the video, so I don&#8217;t worry about \`keypress\` events. If they jump out of fullscreen using the playback controls, it saves the video location.



### Ubuntu tweaks

There were also some software tweaks I needed to make on the machine itself.

I wanted a standard user to log in automatically. So, I created a generic user on the system and dropped the source files onto the desktop (more on that in a minute). Theoretically, the user will never get out of Chrome because there&#8217;s no keyboard available. When the computer boots, it logs into the generic user right away.

Then, I edited the Startup Applications option. You can launch Chrome from the Terminal and you can specify which command to use in the settings. Using:

\`chromium-browser &#8211;kiosk [URL]\`

launches Chrome in the full screen kiosk mode and displays the website immediately after login.

The laptop is mounted on the wall behind the TV. Ubuntu wasn&#8217;t recognizing the monitor when the lid was closed. There is a flag in \`etc/systemd/logind.conf\` that handles a dock, but we weren&#8217;t using one. So, I had to change the \`HandleLidSwitch\` flag to \`ignore\` to ignore the lid being closed (\[thanks to this answer\](http://askubuntu.com/questions/15520/how-can-i-tell-ubuntu-to-do-nothing-when-i-close-my-laptop-lid))

Finally, because the laptop is mounted behind the TV on tracks with a padlock, it&#8217;s a pain to take it out to turn it on and off. I was able to automate the daily shutdown pretty easily by specifying a time using \`crontab -e\` (you have to be root to shut down). Startup was harder.

After some research, I found that most computers have something called a Real Time Clock (RTC) synced with UTC. It can be used to set an alarm to wake the computer. You can test this by setting the clock to zero with:

`sudo echo 0 > /sys/class/rtc/rtc0/wakealarm`

and then resetting it with:

``sudo echo `date '+%s' -d '+ 10 minutes'` > /sys/class/rtc/rtc0/wakealarm``

Now that I knew the computer would turn itself back on, I could create a simple \`bash\` script to run with \`cron\` that would handle startup and shutdown daily:



I stored the file in \`/usr/bin\` and made it executable with \`chmod +x\`. 

Then, I edited \`crontab -e\` to run the script daily. \*\*Note that this specifies the shutdown time.\*\* At 8 PM every day, the computer will shut down. The \`shutwake\` script resets the RTC alarm:

`<br />
0 8 * * * * /usr/bin/shutwake<br />
` 

\`cron\` can be picky, so if you need more help, \[this article helped a lot\](http://www.nncron.ru/help/EN/working/cron-format.htm).

The last thing we needed to work out was muting the audio during sermons so someone didn&#8217;t crank out a video in the middle of church. The video will still play with captions (accessibility FTW) and muting the audio turned out to be not too bad. I can toggle the pulse audio driver in Ubuntu with a simple `cron` job that runs on Sundays at 9:00 and 12:00 to turn the audio on and off:

`<br />
0 9 * * * 0 amixer -q -D pulse sset Master toggle<br />
` 

\[![\](https://farm9.static.flickr.com/8500/29548284500\_0fe579f043\_z.jpg)](https://flickr.com/photos/bennettscience/29548284500 &#8220;The new mission video display in action at church.&#8221;)
  
\[flickr photo\](https://flickr.com/photos/bennettscience/29548284500 &#8220;The new mission video display in action at church. Blog post on construction and code coming.&#8221;) shared by \[bennettscience\](https://flickr.com/people/bennettscience) under a \[Creative Commons ( BY ) license\](https://creativecommons.org/licenses/by/2.0/)

In the end, I&#8217;m really happy with how it turned out. Remote management and simple setup led to a really effective display for the wall.

If you want more specifics about software or construction, leave a comment.