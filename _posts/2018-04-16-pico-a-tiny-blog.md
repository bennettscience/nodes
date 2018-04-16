---
layout: post
title: "Pico: A Tiny Blog"
date: "2018-04-16 13:08:12 -0400"
image: https://farm3.static.flickr.com/2840/10176979196_8bb10b53cf_z.jpg
categories:
  - Projects
  - Code
tags: ["blogging", "python", "project"]
published: true
---
More of my life is run in plain text. I don't really use word processors any more (other than Google Docs for work) because they're heavy and not really compatible across various devices. So, I've gotten in the habit of writing in a text editor (Atom, at the moment) and syncing across devices with Git or Dropbox, depending on the circumstances.

I've also been trying to do more with Python rather than relying on JavaScript. I don't always have an Internet connection, and you don't need a connection to be productive with Python.

The third element in this perfect storm was looking at my site access logs. I moved this blog to Jekyll back in December mainly because I was running out of hosting space with WordPress. I don't really know how to do crazy database stuff like [Alan](https://twitter.com/cogdog) or [Tom](https;//twitter.com/twoodwar), nor do I need to. I also saw a _ton_ of failed login attempts on my WordPress site (thank goodness for strong passwords), so I decided to go databaseless with the switch. It's hard to hack plain HTML.

This is what birthed the idea for **[Pico](https://ohheybrian.com/pico)**.

Pico is a tiny blogging engine written in Python that reads plaintext files.

Jekyll is great for complex site structure, but it requires the site to be regenerated (pagination updated, categories and tags indexed, etc) each time you publish a post. What if you want something smaller?

Pico is written in Flask, a templating engine written in Python. The core is similar to Jekyll: a script reads data somewhere and renders it in templated HTML. The main difference is that Pico does that when the page loads from straight text files rather than rendering the site beforehand. The idea is that you can write a post somewhere with minimal markup and frills and have the browser do most of the work. Styles are minimal and the source files are kept to a bare minimum. It even has RSS!

You can [see a demo of the site](https://ohheybrian.com/pico) if you're curious and grab the source and see some of the technical information on [GitHub](https://github.com/bennettscience/pico).

---

_[DSC_0146](https://flickr.com/photos/bennettscience/10176979196 "DSC_0146") flickr photo by [bennettscience](https://flickr.com/people/bennettscience) shared under a [Creative Commons (BY-NC-SA) license](https://creativecommons.org/licenses/by-nc-sa/2.0/)_
