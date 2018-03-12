---
id: 2470
title: Thrifting Brainstorms
date: 2013-11-01T16:57:43+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=2470
permalink: /2013/11/thrifting-brainstorms/
dsq_thread_id:
  - "1927953406"
categories:
  - All
  - MAET
---
I went to Goodwill this evening with Lindsey and Meredith. I had wanted to go for a while, and after not finding much in the clothing, I turned towards the assorted gadgets in the back to hunt for some cool toys for this assignment.

As luck would have it, there was a _great_ old exercise bike there.

<img src="http://content.screencast.com/users/TSCBennett/folders/Snagit/media/208d7df4-51c5-4603-a064-8ff9c61f98da/2013-10-31_21-38-06.jpeg" class="aligncenter" />

It even had a working pressure dial and speedometer on it.

<img src="http://content.screencast.com/users/TSCBennett/folders/Snagit/media/258f28e5-26b6-41dd-9240-bd92f2435e4b/2013-10-31_21-38-50.jpeg" class="aligncenter" />

I bought a Raspberry Pi for the course and I&#8217;ve already started working on a project [coding in Python and using my telescope](http://blog.ohheybrian.com/astronomy-project-day-1). There is a ton you can do with some cheap switches and circuit boards, so I thought it would be cool if my classroom (someday) had a way to introduce graphing using a manipulative. I have to admit I was in a frame of mind for graphing for a couple of reasons.

First, [Dan Meyer](http://www.twitter.com/ddmeyer) had a [blog post](http://blog.mrmeyer.com/?p=18085) rounding up some great classroom action he saw in the blogs this week. One was referencing novel ways to introduce students to graphing. Dan posted a quote [from the original](http://www.mathycathy.com/blog/2013/10/giving-graphingstories-com-a-go/), which I am reposting here:

> &#8230;a comment laced with negativity that resonated with Lauren and me was an outburst that “graphing used to be so easy, and this just made it hard.”

The second reason I was thinking about graphing this evening was because of a link from [Ramsey Musallam](http://www.twitter.com/ramusallam) to an [interactive graphing game](http://davidwees.com/graphgame/) by [David Wees](http://www.twitter.com/davidwees). I spent a good time playing the game, learning, experimenting, and working to connect the physical act of moving the stick figure to the way the line was being drawn.

So, I came to this idea: Students could ride the bike, which has a controller hooked to the Rasperry Pi, to create a graph velocity for the time bike is pedaled.

<img src="http://ohheybrian.com/images/bike.gif" class="aligncenter" />

In order to get the tachometer on the bike to talk with the computer, you&#8217;d need some kind of controller.

<img src="http://content.screencast.com/users/TSCBennett/folders/Snagit/media/482104ec-3830-4446-8487-017a6f5b4384/2013-10-31_21-31-58.jpeg" class="aligncenter" />

### Process

  * Take the backing off the exercise bike tachometer to mount the electric switch.
  * The switch will need to mount inside the casing somehow. You would want it to make contact each time the gear rotated once. This could be done by mounting a trigger arm on the gear to contact the switch to complete the circuit.
  * Run the lead from the switch to the Raspberry Pi. _I&#8217;m not sure if you would need some kind of intermediate step here before it feeds to the computer. I&#8217;m still researching_.
  * A simple Python script on the computer would count the number of times the switch is activated for a given period of time to calculate the RPM value.
  * The value would be given in a graph vs time as long as the bike is running.

I&#8217;m still learning python, but you could start with this snippet of code to get the momentary velocity.:

`r = raw_input('Radius [meters]>  ')<br />
RPM = raw_input('RPM>  ')<br />
rad = float(0.10472)</p>
<p>v = float(RPM) * float(r) * rad</p>
<p>print v," m/s"`

By wrapping this function in a `while` loop, you could probably create a pretty nice graph for the time the student was riding the bike. You could then even take it into an experiment where they measure the change in velocity as more resistance is applied to the wheel.

### Resources

Yenca, C. (2013, October 31). Giving graphingstories.com a go. _mathycathy_. Retrieved from <http://www.mathycathy.com/blog/2013/10/giving-graphingstories-com-a-go/>