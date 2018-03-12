---
id: 2888
title: 'It&#8217;s a Twitter Robot!'
date: 2014-07-10T16:30:09+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=2888
permalink: /2014/07/twitter-robot/
dsq_thread_id:
  - "2833592807"
categories:
  - All
  - Technology
---
**Update 8/20/2014 8:30 AM: I have deactivated the script for this Twitter bot. It was fun, and the process is below if you want to read more. But, the Twitter feed is now inactive.**

* * *

I&#8217;ve been fascinated by the proliferation of non-spammy Twitter bots in the last year. Chatbots have been around for a long time (remember [SmarterChild](http://en.wikipedia.org/wiki/SmarterChild) on AIM? Anyone?) and they&#8217;ve migrated to Twitter. [One of the more famous (and in the end, decidedly disappointing)](http://en.wikipedia.org/wiki/Horse_ebooks) chatbots on Twitter was [@horse_ebooks](http://www.twitter.com/horse_ebooks). It would tweet non sequiturs at various intervals and currently, even though the account is no longer active, it has 203,000 followers. Twitter isn&#8217;t just for things with fingers anymore.

_[![](http://content.screencast.com/users/TSCBennett/folders/Snagit/media/6d75fbd0-88f5-48ee-9456-36a90cbdad7b/7037726211_13bef97466_b.jpeg)](http://flickr.com/photos/jdhancock/7037726211 "Clean")  
<small><a href="http://creativecommons.org/licenses/by/2.0/">creative commons licensed ( BY )</a> <a title="Clean" href="http://flickr.com/photos/jdhancock/7037726211">flickr photo</a> shared by <a href="http://flickr.com/people/jdhancock">JD Hancock</a></small>_

I think bots are fun because we can make them close to sounding normal, yet slightly&#8230;off. A turn of phrase is correct, but it doesn&#8217;t sit right. It&#8217;s a look into what we _could_ come up with ourselves, but weren&#8217;t quite clever enough to pull off. In fact, &#8220;chatterbots&#8221; have been around since the 1990&#8217;s and there is an annual competition each year for the [Loebner Prize](http://en.wikipedia.org/wiki/Loebner_Prize), which is based on the Turing Test for true artificial intelligence. 

Twitter bots are subverting the way the larger population thinks about online communication and how computer scripts running at intervals can become not only really convincing, but incredibly entertaining parts of our daily experience. 

* * *I started by building a simple bot which would search for &#8220;Shakespeare&#8221; on Twitter using the 

[Twython](https://github.com/ryanmcgrath/twython) library from GitHub. Essentially, it lets you plug into Twitters REST 1.1 API using a python script. You can check out @ShakeTheBard to see some of the early tweets. That wasn&#8217;t much fun, though, because it mostly pulled quotes from plays. So, I took it one step farther.</p> 

The Markov Chain is an algorithm which can be used to generate random sequences (in this case, sentences) based on probability. So, in essence, it looks for a group of words &#8211; two or three at a time &#8211; and then determines a likely follow-up based on the frequency of those words and the text following them in the sampel. [From StackOverflow](http://stackoverflow.com/questions/4081662/explain-markov-chain-algorithm-in-laymans-terms):

  1. Split a body of text into tokens (words, punctuation).
  2. Build a frequency table. This is a data structure where for every word in your body of text, you have an entry (key). This key is mapped to another data structure that is basically a list of all the words that follow this word (the key) along with its frequency.
  3. Generate the Markov Chain. To do this, you select a starting point (a key from your frequency table) and then you randomly select another state to go to (the next word). The next word you choose, is dependent on its frequency (so some words are more probable than others). After that, you use this new word as the key and start over.

Sounds confusing, because it is.

I have a text document with [every sonnet Shakespeare wrote](http://www.shakespeare-online.com/sonnets/). All 154. So each time the program runs, it chooses a starting point at random and generates a unique line of poetry based on the frequency of that choice as it goes through the algorithm. Finally, it tweets that line. 

* * *A lot of people use their own Twitter archive to make bots of 

[alternate-reality selves](http://www.newyorker.com/online/blogs/elements/2013/10/tofu-a-twitter-account-after-ones-own-tweets.html), but I haven&#8217;t gotten that deep into using the Twython library and pairing it with the [Markov Chain library](https://github.com/TehMillhouse/PyMarkovChain) I found. So, for now, Bill is tweeting sonnet mashups. Some are pretty good, others not so much. But that&#8217;s the fun.</p> 

One of my favorites from testing (unfortunately, not tweeted) was:

> Upon thyself thy thought, that thou shouldst depart.

In other words, &#8220;I thought to myself: &#8216;I&#8217;d better scram.'&#8221; Shakespeare is rolling over in his grave right now.

* * *

I see this as a 21st century version of giving 100 monkeys typewriters and infinite time to reproduce Shakespeare&#8217;s work. But, I don&#8217;t have 100 monkeys, and typewriters are inefficient. I&#8217;ll stick with the Pi.

[![](http://ohheybrian.com/images/monkeys.png)](http://flickr.com/photos/matiluba/11980860084 "un giorno ti scriverò")  
<small><a href="http://creativecommons.org/licenses/by/2.0/">creative commons licensed ( BY )</a> <a title="un giorno ti scriverò" href="http://flickr.com/photos/matiluba/11980860084">flickr photo</a> shared by <a href="http://flickr.com/people/matiluba">Matiluba</a></small>

I&#8217;m not expecting a ton of followers, and I&#8217;m not even sure I&#8217;ll leave the account active for any significant period of time. There is a lot of optimization I could do in the code, but I&#8217;m just exploring at this point. I&#8217;m not planning on posting the script, but if you want to see it, leave a note in the comments and I&#8217;ll get a link up.