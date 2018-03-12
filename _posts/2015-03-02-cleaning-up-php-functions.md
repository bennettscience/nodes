---
id: 3599
title: Cleaning up PHP functions
date: 2015-03-02T21:18:29+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3599
permalink: /2015/03/cleaning-up-php-functions/
dsq_thread_id:
  - "3562327932"
categories:
  - All
  - Projects
---
Last year, I took some time to [write](http://blog.ohheybrian.com/if-youre-not-going-to-use-attribution-ill-just-do-it-for-you/) a [small blog theme](https://github.com/bennettscience/barhop) for [Anchor CMS](http://www.anchorcms.com) using some PHP and a lot of CSS. Too much, if you ask me. If I had the time, I&#8217;d go back and clean a lot of it up. Maybe during a rainy day.

I haven&#8217;t logged into GitHub in a while. Teaching has been all consuming lately and I&#8217;ve not really had time to mess around with some coding projects I&#8217;d started so long ago. I hopped on tonight to grab some code for something else I&#8217;ve been working on, and alas, a problem with my theme.

Someone, somewhere thought my theme was good enough to use, which is pretty cool. But, some of the functions weren&#8217;t working correctly, and some were just plain missing (oops). I&#8217;d made a mistake somewhere in my cloning and rebasing, and I hadn&#8217;t taken the time to make sure I didn&#8217;t flub something up along the way. Anyways, long story short, he grabbed some code from my live demo site and got it working. But still. Customer support is our number one priority.

Here&#8217;s what I started with:

<div id="wp-gistpenfile-broke">
  <h3 class="wp-gistpenfile-title">
    broke
  </h3>
  
  <pre class="gistpen line-numbers"><code class="language-php">function twitter_account() {
    return Config::get('meta.twitter');
}

function twitter_url() {
    return 'http://www.twitter.com/' . twitter_account();
}</code></pre>
</div>

The idea was to have someone create some metadata (`twitter_account`) once and then have it populate a link to their Twitter page as well as be the attribution info on any of the tweet links on posts. Easy enough, right? Wrong. The account function wasn&#8217;t returning the correct URL because I done messed up my PHP call. It should have been this:

<div id="wp-gistpenfile-fixed">
  <h3 class="wp-gistpenfile-title">
    fixed
  </h3>
  
  <pre class="gistpen line-numbers"><code class="language-php">function twitter_account() {
    return Config::get('meta.twitter');
}

function twitter_url() {
    return 'http://www.twitter.com/' . site_meta('twitter_account');
}</code></pre>
</div>

I&#8217;d forgotten that the `twitter_account` meta field only stores the data object. I have to tell the second function that there is some site metadata stored in the `twitter_account` call, not just the function itself. Oops.

All&#8217;s well now and it&#8217;s working fine, from what I can tell. Iteration is the game. Back to the workshop&#8230;