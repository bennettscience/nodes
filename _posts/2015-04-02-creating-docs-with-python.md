---
id: 3776
title: Creating docs with Python
date: 2015-04-02T20:13:44+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3776
permalink: /2015/04/creating-docs-with-python/
categories:
  - All
  - Technology
---
Another extension to what I wrote last night, mainly for my own purposes so I don&#8217;t forget what I did or where I put scripts.

`bash` is great, but it doesn&#8217;t play so well with Windows. I tried Cygwin, which installed fine, but on the school computers, filesystems are locked down somewhat and I can&#8217;t get access to certain install directories. Rather than fight the system, I translated my `bash` script from yesterday into Python so it works on any OS.

<div id="wp-gistpenfile-makedoc.py">
  <h3 class="wp-gistpenfile-title">
    makedoc.py
  </h3>
  
  <pre class="gistpen line-numbers"><code class="language-python">print "You are about to make a batch of files."

num = int(input('How many files do you want to make?: '))
name = raw_input('What should the base filename be?: ')

for i in range (1,num+1):
  filename = name + str(i) + '.doc'
  print 'Made ' + filename
  i = open(filename,"w").close()</code></pre>
</div>

This works nearly the same, only I didn&#8217;t make it executable like I did the other script. The other thing this does is makes it easier to use the Google Drive API to create docs right in Drive rather than upload .doc files up to Drive and then wait for a conversion.