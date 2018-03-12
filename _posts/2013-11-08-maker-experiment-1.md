---
id: 2486
title: 'Maker Experiment #1'
date: 2013-11-08T17:19:53+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=2486
permalink: /2013/11/maker-experiment-1/
dsq_thread_id:
  - "1949092027"
categories:
  - All
  - MAET
  - Teaching
---
Another post in the series for CEP811, we&#8217;re really getting serious now as we begin to develop potential plans for our maker kits.

Last week, I wrote about a potential activity using an [old exercise bike and a Raspberry Pi](http://blog.ohheybrian.com/thrifting-brainstorms/) hacked together. (It even had a super-fancy animated GIF as a bonus.) In short, the idea was to have the students pedal an exercise bike, send some data to the Pi, and have it graph (in real time) the student&#8217;s speed as a function of time.

<img src="http://ohheybrian.com/images/bike.gif" class="aligncenter" />

A lot of this project comes from my longing for a better experience with physics and math in high school. Both were drab, disconnected, and frustrating for me. Since joining Twitter in 2011 and following people like [Frank Noschese](http://www.twitter.com/fnoschese), [Dan Meyer](http://www.twitter.com/ddmeyer), and [Ramsey Musallam](http://www.twitter.com/ramusallam), I really wish I had an experience like what they give their students.

I want to focus on one theory in particular: **Cognitive Load Theory** (CLT). According to CLT, working memory constraints are the determinants of instructional effectiveness (Sweller, Merrienboer, and Paas, 1998). The authors break cognitive load into three types of &#8220;load&#8221;: Intrinsic, Extraneous, and Germane. 

Intrinsic load is related to the nature of the content being taught. Extraneous load is related to the instructional methods and conditions, and germane is the formation of learning schema (Sweller et al., 1998). Tasks with low interactivity contain elements that do not interact with each other, can be learnt in isolation, and require relatively low working memory load (Ayers, 2006). A high working memory requirement comes from tasks that have multiple interacting elements that need to be learned simultaneously rather than in isolation (Ayers, 2006; Sweller, 1999; Sweller & Chandler, 1994). In addition, Marcus, Cooper, and Sweller (1996) state that understanding &#8220;is applied only when dealing with high element interactivity material.&#8221; 

With this in mind, my activity is designed to reduce the cognitive load placed on students as they explore the concept of speed using an exercise bike and a Raspberry Pi.

* * *

In order to introduce speed, students need an understanding of how to graph. (I deliberately use the term &#8220;understand&#8221; here because of the relationships required to produce proper graphs.) Sweller et al. (1998) suggest students that may not have this content processed automatically in existing schema could experience a high cognitive load on the wrong material and be unsuccessful in the goal of the activity.

At the start of the activity, students will be asked to pedal an exercise bike for a period of time. They will not be given direction on how fast to pedal because the second part of the activity will ask them to analyze their graph. The Raspberry Pi will automate the graphing process so students can focus solely on the task of creating a working definition of &#8220;speed.&#8221; Students will also have an opportunity to repeat the experiment as often as needed in order to confirm their result.

This activity can also be used to introduce the idea of average speed in relation to instantaneous speed. The analysis of the graph will ask students to plot a best-fit line in order to report the average speed of their trial. Typically, this activity is done where students take all the data, create the graph, and then attempt to draw conclusions. I am automating data collection and graphing so students can focus on coming to the correct conclusion rather than filling their working memory with procedural components.

Materials for this activity are difficult to produce because of the exploration that students need to do. By deliberately witholding information and direction, students are more likely to take risks and form hypothesis that can be tested further throughout the class. Science is all about exploration and hopefully, this activity will allow them to explore freely.

In the future I hope to incorporate more ideas around inquiry and perplexity, but that will have to be in another post. For now, consider this TED talk by Ramsey Musallam on the unique opportunity we have every day to perplex and engage students in critical thought and exploration.



* * *

### Resources

Ayers, P. (2006). Impact of reducing intrinsic cognitive load on learning in a mathematical domain. _Applied Cognitive Psychology_. 20, 287-298. Retrieved from <https://docs.google.com/file/d/0B68p5ayLtLuqRml2MTJHUlRBbFE/edit?usp=drive_web>

Sweller, J, Merrienboer, J, Paas, F. (1998). Cognitive architecture and instructional design. _Educational Psychology Review_. 10-3, 251-296. Retrieved from <https://docs.google.com/file/d/0B68p5ayLtLuqZ2wtTTNueElZUHc/edit?usp=drive_web>