---
layout: post
title: "Reclaiming Jekyll"
date: "2018-03-26 10:28:35 -0400"
image: "https://c2.staticflickr.com/4/3091/2853908937_67e08ba9de_z.jpg?zz=1"
categories:
  - Code
tags: ["self-host", "jekyll", "publishing", "git", "how-to"]
published: true
---

In December, [I moved off of WordPress to Jekyll](https://blog.ohheybrian.com/2018/01/move-wordpress-to-jekyll-complete-guide.html). This is easy to do with GitHub Pages, but I wanted to self-host because keeping a SSL certificate was important to me. I followed [Tim Owen's sample](https://blog.timowens.io/running-a-jekyll-site-on-reclaim-hosting/) had everything up and working well.

I faced two specific challenges, though.

1. FTP and SSH uploads were blocked in several places where I normally work. That meant I needed to remember which files needed to be uploaded via cPanel every time I wanted to publish a post. I would often forget an image or have a broken link, which meant regenerating the _entire_ site.
2. Because SSH was blocked, I had to use a cron job to publish the post. I would set one up to run every 5 minutes while I was working to make sure the changes were correct. Then, I would delete the cron job.

The bigger issue was that building on the server duplicated the site files. So, I'd have a folder of all of my posts and assets (images, styles, etc) that would get copied into the live site. Instead of shrinking my server footprint, it was doubled. No good.

My next idea was to use `git`, which is preinstalled on Reclaim shared hosting (which is _awesome_), to manage all of my files. But, I ran into the SSH problem again (HTTPS doesn't work out of the box with git and setting it up is a headache). I also had problems tying the folder to the Reclaim location for some reason. So, that idea was out.

I continued to think about the problem and I finally landed on it: I wanted to keep _all_ of my files on Reclaim when I really only needed the `_site` directory. I can build it on my computer and then publish only the live components.

This introduced _another_ problem: it's more complicated than just uploading the new post. The `_site` directory is changed and paginated with each build, so all of the relative links have the potential to change. How would I limit my upload to the site directory without needed to build on the server?

It turns out that you can pull single directories from a GitHub repo online. The key is only checking out the directory you want. Instead of using `git pull` to fetch and merge everything, you break it down into several steps.

1. Set up an empty repository using `git init`.
2. Assign a remote repo via url using `git remote add <name> <url>`. So, mine is called `nodes-site` and maps to `https://github.com/bennettscience/nodes.git`.
3. Fetch the _entire_ project with `git fetch nodes-site`. This finds and maps the entire project to git but doesn't actually add any files yet.
4. Check out a single folder with `git checkout nodes-site/master _site`. This creates a read-only directory!

I don't need to write any files on the server...I do all of that on the computer. This step just grabs what's been published to the Github repo and displays it as a live page on [blog.ohheybrian.com](https://blog.ohheybrian.com).

Here's my new process:

1. Write and build the site on the computer. It runs faster, no need for the Internet.
2. Use `git` to track all of the changes and push it up to GitHub. All of the files are public already through the blog, so I don't care that it's available publicly there, too. In fact, it serves as a nice backup in case I _really_ bork something up.
3. Write the steps above as a cron job to pull the `_site` directory in a couple times per day. If nothing changes, no new files are copied over. If there's been a new post, that's reflected in Git and the entire directory restructures with the changes.

My original folder (with _everything_) came in around 300MB. The new folder, with only the published material, is about 180MB. So, I saved 50% of my disk space by publishing only the live pages.

---

_[This StackOverflow post](https://stackoverflow.com/questions/2425059/how-to-pull-specific-directory-with-git) got me moving in the right direction._

_Featured image: [Allen-Bradley Clock Tower](https://flickr.com/photos/kallao/2853908937 "Allen-Bradley Clock Tower") flickr photo by [kallao](https://flickr.com/people/kallao) shared under a [Creative Commons (BY-NC-ND) license](https://creativecommons.org/licenses/by-nc-nd/2.0/)_
