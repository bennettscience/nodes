---
id: 3567
title: Student Rubrics with Google Forms and docappender
date: 2015-02-05T21:29:39+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3567
permalink: /2015/02/student-rubrics-google-forms-docappender/
dsq_thread_id:
  - "3489899968"
categories:
  - All
  - Teaching
  - Technology
---
Every other month, we give students an argumentative writing prompt which is then scored against a standard rubric. One of our school goals is to improve the quality of writing from our students, so we teach them not only the content, but how to make a good argument. Using things like facts along with application and persuasive writing techniques all blend into one piece.

With each prompt, students see the scoring rubric beforehand and then receive that back with their writing so they can see what needs to improve. I have a few (mostly organizational) problems with this:

  1. I&#8217;m usually not organized enough to print out half-sheet rubrics before the prompt (it&#8217;s just a normal class day)
  2. That&#8217;s a _lot_ of paper because the prompt also needs to be printed, and it&#8217;s nice to let kids write on the back of the prompt itself.
  3. My handwriting is awful, especially when I have 140 papers to grade and comment on.
  4. I am a notorious paper-loser.

I have wanted to try some of the [New Visions CloudLabs add-ons](http://cloudlab.newvisions.org/add-ons) for Google Docs for a long time, but didn&#8217;t have a real need to. So, I dove into [autoCrat](http://cloudlab.newvisions.org/add-ons/autocrat) because I knew it could take form data and push it over to a sharable and printable Google doc. It worked great, but it generates a separate doc for each student, which isn&#8217;t something I want to manage (I know I could use Doctopus in conjunction to make it easier, but I&#8217;m not at that point yet). What I really wanted was something to add new entries as a table to a class-level document. I could print those out, cut them into slips, and distribute.

Karl Lindgren-Streicher to the rescue.

<blockquote class="twitter-tweet" data-conversation="none" data-cards="hidden" data-partner="tweetdeck">
  <p>
    <a href="https://twitter.com/bennettscience">@bennettscience</a> Check out docappender. That might do what you want to do.
  </p>
  
  <p>
    — Karl LS (@LS_Karl) <a href="https://twitter.com/LS_Karl/status/563360722617253889">February 5, 2015</a>
  </p>
</blockquote>



[docappender](http://cloudlab.newvisions.org/add-ons/docappender) was definitely what I needed.

In my Drive, I created a folder with six empty documents simply labeled with the class hour. Then, I created a Form I could use to add the student&#8217;s name, their class hour, their score, and some comments.

<div id="attachment_3568" style="max-width: 710px" class="wp-caption aligncenter">
  <img class="wp-image-3568 size-full" src="http://blog.ohheybrian.com/wp-content/uploads/2015/02/2015-02-05_21-22-04.png" alt="Rubric form" width="700" height="634" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/02/2015-02-05_21-22-04.png 700w, https://blog.ohheybrian.com/wp-content/uploads/2015/02/2015-02-05_21-22-04-300x272.png 300w" sizes="(max-width: 700px) 100vw, 700px" />
  
  <p class="wp-caption-text">
    Rubric form
  </p>
</div>

docappender works by looking at your form for an identifying field (for me, class hour) and then finds the matching document in your folder.

<div id="attachment_3569" style="max-width: 747px" class="wp-caption aligncenter">
  <img class="wp-image-3569 size-full" src="http://blog.ohheybrian.com/wp-content/uploads/2015/02/2015-02-05_21-26-06.png" alt="Output after a form submit." width="737" height="412" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/02/2015-02-05_21-26-06.png 737w, https://blog.ohheybrian.com/wp-content/uploads/2015/02/2015-02-05_21-26-06-300x168.png 300w" sizes="(max-width: 737px) 100vw, 737px" />
  
  <p class="wp-caption-text">
    Output after a form submit.
  </p>
</div>

Each time I submit a new score, the script runs and pops out a formatted rubric for the student. It&#8217;s great.

Now, I can have a class set of rubrics for students to use while writing, they can write on the back of the prompt (cut my paper use by 2/3), and they get a typed scoresheet back. I also have a digital record, so no keeping track of these papers.

We&#8217;re not one to one or GAFE right now, so I don&#8217;t worry about sharing with students. If we head that direction, you could easily go paperless using some of the other New Visions add-ons in conjunction with one another.