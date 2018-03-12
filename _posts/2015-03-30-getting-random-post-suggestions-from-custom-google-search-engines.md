---
id: 3679
title: Getting Random Post Suggestions from Custom Google Search Engines
date: 2015-03-30T21:16:25+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3679
permalink: /2015/03/getting-random-post-suggestions-from-custom-google-search-engines/
image: assets/img/wp-content/uploads/2015/03/15899278822_6972fbc99b_k.jpg
categories:
  - All
  - Creative
  - Technology
---
**Update 3/31** &#8211; After more tinkering, I&#8217;ve changed the code to be more stable with any changes Google makes in the future. Code snippets are up to date and irrelevant instructions are now <del>struck out</del>.

* * *

You can create a custom Google search engine for your website (or group of websites) which can be very handy for a variety of reasons. If you&#8217;ve got a gigantic website, like [Jerry Blumengarten](http://www.twitter.com/cybraryman1), having a custom search bar can help find materials. If you&#8217;re working with students, a custom search can help limit where their information comes from. They&#8217;re easy to do, but there are some limitations, so be sure to read the Terms of Service if you&#8217;re going to set one up.

* * *

[John Stevens](http://www.twitter.com/jstevens009) asked on Twitter if there was a way to get a random post from a custom search. I felt like there ought to be some way to do that, so I started digging. Because the [MTBoS index of blogs](http://www.fishing4tech.com/mtbos.html) is on all different platforms and not networked in any particular way, it turned into more of a chore than I originally thought. Really, when you get down to it, randomizing search results is the anthesis of what search engines do, so we have to accomplish the &#8220;random&#8221; aspect of the Google search with a different method.

I&#8217;ll be using a search for my own blog for the demo here (down below). Brace yourself for some code.

<del>First, rather than using the Google script you get from the Control Panel, use this HTML instead:</del>

You&#8217;re given one line of HTML to put in your page where you want to search bar to appear. Simply add the `button` line to add the random button:

<div id="wp-gistpenfile-google-cse-html">
  <h3 class="wp-gistpenfile-title">
    google-cse-html
  </h3>

  <pre class="gistpen line-numbers"><code class="language-markup">&lt;!-- Creates the search bar --&gt;
&lt;gcse:search&gt;&lt;/gcse:search&gt;

&lt;!-- This fires the random search topic function --&gt;
&lt;button&gt;Random&lt;/button&gt;</code></pre>
</div>

Line 5 adds a new button &#8211; the Random button &#8211; to the search form. That button is important. Rather than needing some text in the input field, a user can click on the Random button and some JavaScript magic will happen.

* * *

If you want to use this, you&#8217;ll need to do a couple things:

<del>Make sure your site has jQuery installed. If you&#8217;re not sure, go to your site&#8217;s code and paste this in before the closing <code>header</code> tag:</del>

You&#8217;ll need to put a script in the footer of your site. You can also do this with a widget with a lot of platforms&#8230;there are too many to list, and the footer solution is usually the best approach. If you&#8217;re not sure what to do, leave a comment, and I can try to help you out.

`<br />
// This is the array holding the serach terms<br />
var queries = ['animals','dogs','cats', 'emu','fish','snakes', 'panda bears','meerkats','spiders','birds'];</p>
<p>// When you click on the Random button, it'll grab a random search term and run it through Google<br />
document.querySelector('button').addEventListener('click', function() {<br />
	var search = google.search.cse.element.getElement('standard0');<br />
  var rand = Math.floor(Math.random() * queries.length);<br />
  search.execute( queries[rand] ); }, false);<br />
`

This script will take that Random button we added earlier and pop a random term into the search box and carry out the search. yOu need to set the terms in the array (line 3), each term in single quotes and each term separated by a comma. Make sure to keep that syntax correct or else it won&#8217;t work.

<del>Also, if you try this on any site other than your own, you can run into issues. I&#8217;ve been testing this on Codepen.io with mixed results. Once thrown into my own page, though, it works just fine.</del> I&#8217;d create a new page on your site and drop the code into place. Test it as a draft page to make sure everything is kosher and then run with it.

If you want to see a sample implementation (proof of concept, not really helpful), check out this spartan <a href="http://blog.ohheybrian.com/search" target="blank">search page</a>. You can type in a search term and hit submit to see how it works. Then, try hitting Random without putting any text in to see what it does.

Do note that WordPress has a pretty good random post feature built-in. This is meant more for wider searches across multiple platforms using the Google index of sites.
