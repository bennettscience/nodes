---
id: 3736
title: Automate ALL the Docs!
date: 2015-04-01T21:58:53+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3736
permalink: /2015/04/automate-all-the-docs/
image: assets/img/wp-content/uploads/2015/04/4f737efdd1d5a.png
categories:
  - All
  - Technology
---
I&#8217;ve been programming a _lot_ lately, mainly to make my own life easier. I usually start something when I&#8217;m doing a menial task that a computer could do much more efficiently. As a result, I&#8217;ve learned just enough to know what should be possible, but not enough to know when something is a good idea and something is a really dumb idea. This one turned out to be a good idea.

Two months ago, I wrote up a way to [automate rubric score reports using docappender](http://blog.ohheybrian.com/student-rubrics-google-forms-docappender/) in Google Drive. It worked great the first month.

Today, I went back to score a second set of writing prompts with the rubric. docappender works great to do this, but I have to go into Drive and create six separate documents with the class hour as the name for the form to work correctly. Google has no batch-create option, so I had to make each one individually. It didn&#8217;t take _too_ long, but it&#8217;s something that really should take any quantity of time.

Major props to [Ken Bauer](http://www.twitter.com/ken_bauer) and Alan Liddell for pointing me in the right direction. Here&#8217;s what to do&#8230;

## The Script

Computers are good at making documents. One way to do this on a Mac (or Linux, for that matter) is to create a shell script which can be run from the terminal. Alan gave me this little snippet to get me started:

<div id="wp-gistpenfile-first-script">
  <h3 class="wp-gistpenfile-title">
    first-script
  </h3>

  <pre class="gistpen line-numbers"><code class="language-bash">for i in $(seq 1 7);
do
touch file$i;
done</code></pre>
</div>

That worked great. But, what if I wanted more than seven files? I wanted to give myself a couple variables which would make the script more flexible:

<div id="wp-gistpenfile-second-script">
  <h3 class="wp-gistpenfile-title">
    second-script
  </h3>

  <pre class="gistpen line-numbers"><code class="language-bash">echo "Number of files: ";

read number;

for i in (seq 1 $number);
do
touch file$i;
done</code></pre>
</div>

And that was all well and good&#8230;but what if I wanted a specific prefix? And, could I make it right into a Google Doc? Yes, and yes.

<div id="wp-gistpenfile-third-script">
  <h3 class="wp-gistpenfile-title">
    third-script
  </h3>

  <pre class="gistpen line-numbers"><code class="language-bash">#! usr/bin/env bash
echo "You're about to create a series of files."
echo "Enter the number of files you'd like to create and then push [ENTER]: "

read number

echo "Enter a generic filename and then press [ENTER]: "

read file

for i in $(seq 1 $number);
do
touch $file$1.doc;
done

echo "Finished."</code></pre>
</div>

## Make it better

This was great. I could make files with less than three dozen keystrokes and clicks. But, like any good programmer, I wanted it to be done with even fewer &#8211; more automation was needed.

I wanted to make the script **executable** &#8211; I wanted it to run just by typing the name of the program into the terminal. So, I ran `chmod +x makedoc` (makedoc is what I called the program&#8230;real original, eh?) and gave it permission to run. I also added `#! /usr/bin/env bash` to the first line of the script to make sure it ran with the right kernel.

Then, I copied the script to my computer&#8217;s `usr/local/bin` directory and voila! All I have to do is go to the folder where I want to make the files, open up the Terminal and type in `makedoc` and make my sequence of files.

**Get ready to have your mind blown.**

&#8220;That&#8217;s great to make them on your computer, but you need them on Google Docs to work with docappender. Wasn&#8217;t that the point?&#8221;

Google Drive allows me to sync certain folders to my computer. The script doesn&#8217;t know if I&#8217;m in a local folder or one synced from the web. So, all I have to do is `cd` to the right spot in Terminal and run the script and **BOOM** &#8211; they&#8217;re all in Drive, ready to be used.

It&#8217;s. awesome.

Right now, it creates a Word document, which can be synced through the Drive folder. I would _like_ to have a way to create a Google Document locally, but takes a little more computing power than I have time for tonight. Perhaps at a later date&#8230;
