---
id: 514
title: Google +1 Buttons
date: 2011-07-20T09:42:11+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=514
permalink: /2011/07/google-1-buttons/
dcssb_short_url:
  - http://bit.ly/MWqrmW
dsq_thread_id:
  - "798621943"
categories:
  - All
  - Technology
---
As I&#8217;ve been playing with Google+ over the last day or two, I&#8217;ve been figuring out some of the nuances reading articles from other bloggers and even from the Google discussion boards.  One thing I&#8217;ve come across is that only **webpages** you +1 show up in your profile&#8217;s +1 feed.  Comments, posts, etc that you +1 in your G+ feed don&#8217;t show up on your profile.

After I realized this, I began looking for the +1 button on articles and blogs.  Some have it, some don&#8217;t.  I&#8217;ve found a couple of solutions to do this&#8230;

For **WordPress,** this <a href="http://www.wpbeginner.com/wp-tutorials/how-to-add-the-google-1-button-to-your-wordpress/" target="_blank">article explains step-by-step</a> how to modify your theme to include the button.

If you edit posts in HTML, you can simply do the following:

  * Copy and paste the following code just before the body close tag in the HTML editor of your page.

> <div>
>   <script type=&#8221;text/javascript&#8221; src=&#8221;https://apis.google.com/js/plusone.js&#8221;></script>
> </div>

<div>
  <ul>
    <li>
      Then, paste this simple HTML tag in the post where you want the button.
    </li>
  </ul>
</div>

> <div>
>   <g:plusone></g:plusone>
> </div>

<div>
  The final product looks like this:
</div>

&nbsp;<g:plusone></g:plusone>

<div>
  <em>The HTML tag won&#8217;t work unless you have the script in your stylesheet.</em>
</div>

<div>
  There are also different sizes you can use and you can see more about how to tweak your button <a href="http://www.google.com/webmasters/+1/button/index.html" target="_blank">here</a>.
</div>

<div>
  Unfortunately, this isn&#8217;t a native sharing feature for most blogs yet, but I&#8217;m hoping some developers will release some simple drag-and-drop widgets that include the +1 button soon.
</div>