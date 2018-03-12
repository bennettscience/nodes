---
id: 3465
title: 'How To: Find Emails You Haven&#8217;t Replied to in Gmail'
date: 2014-12-01T15:20:06+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3465
permalink: /2014/12/find-emails-havent-replied-gmail/
dsq_thread_id:
  - "3280715490"
categories:
  - How To
---
[David Wees](http://www.twitter.com/davidwees) asked a question on Twitter today that I thought would be pretty easy to solve:

<blockquote class="twitter-tweet" data-partner="tweetdeck">
  <p>
    <a href="https://twitter.com/bennettscience">@bennettscience</a> I probably read the email though. In fact, I at least look at every email I get in order to quickly catalog it.
  </p>
  
  <p>
    &mdash; David Wees (@davidwees) <a href="https://twitter.com/davidwees/status/539504682344128512">December 1, 2014</a>
  </p>
</blockquote>



Turns out, no so much.

In my searching, I did come across a [service](https://unreplied.io/) which reminds you to follow up with emails which are unreplied _to_ you, but not ones which you need to _send the reply_.

You can use filters and other little workarounds to get it done, but that usually means having to remember to actually add the filter or mark it unread when you&#8217;re going through your inbox. That&#8217;s hard to remember to do in the moment, and can even be impossible (like if you&#8217;re using the mobile app). Luckily, you can combine search operators in the web view to get pretty good results.

<blockquote class="pullquote">
  <p>
    The trick is you have to be using a signature so that every email you send has a unique string in it that we can filter out.
  </p>
</blockquote>

For me, I have a link to my website &#8211; [ohheybrian.com](http://ohheybrian.com). It&#8217;s pretty unique, which makes it a good search term. You can use your name, too, but you want to be careful with that in case the sender used your full name &#8211; if that&#8217;s the case, it&#8217;ll get filtered out.

To find emails which need replies, you want to use **is:read -Re: -your\_unique\_phrase**.

This checks for **read** emails (in case you forgot to mark it unread), **without Re:**, and **without your\_unique\_phrase**.

Mine reads: **is:read -re -ohheybrian**.

Emails which are part of a thread still show up, but they&#8217;re based on the **last email of the conversation.** So, the thread may contain replies, but you haven&#8217;t replied to the last one you received, which can still be handy.

You can limit it even further by using **in:inbox** or some other filter, but that isn&#8217;t usually necessary.

Unfortunately, this isn&#8217;t perfect, so you&#8217;ll still need to do some spot checking. There is no perfect solution as of right now (no is:reply filter or something similar) which you can use, but Google does have a good list of [the Gmail search operators](https://support.google.com/mail/answer/7190?hl=en) that you can play with to build some pretty powerful searches.