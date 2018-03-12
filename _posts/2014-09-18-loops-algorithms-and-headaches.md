---
id: 3084
title: Loops, Algorithms, and Headaches
date: 2014-09-18T17:30:31+00:00
author: Brian Bennett
layout: post
guid: http://www.brianbennett.org/blog/?p=3084
permalink: /2014/09/loops-algorithms-and-headaches/
dsq_thread_id:
  - "3031364920"
categories:
  - All
  - CEP891
---
## Loops

When I got into coding, loops were one of the more difficult tasks for me to get the hang of &#8211; especially iterating through conditions. Part of my struggle is that I made my loops too complicated&#8230;I tried addressing symptoms, not the overall desired behavior. 

When I jumped into the [Noughts and Crosses](http://www.cs4fn.org/programming/noughtscrosses/) game, my algorithm was seven or eight steps long&#8230;I tried to account for each potential play as a ladder. Needless to say, I lost a lot of games. So, I simplified. I cut some steps. And lost again. 

In college, a friend of mine was programming his own tic tac toe game as part of his CS master&#8217;s program. He explained the tree his program would use to make the best possible move. In it&#8217;s final state, it would <a href="http://perfecttictactoe.herokuapp.com/" target="blank">always win or draw&#8230;never lose</a>. To make it more interesting, he added a line to create a mistake at a random interval. It at least gave the human player a chance to win. 

I came across an article explaining the [Minimax algorithm](http://www.neverstopbuilding.com/minimax). In short, it looks at a game state and finds the path which leads to a win or a draw. At the same time, it assumes that the other player wants to make us lose. It sounds confusing, and it certainly is, but the article linked did a great job explaining the principles. Ultimately, computers can be good at Tic Tac Toe because it can quickly build a move tree and execute the path to the best result.

## Algorithms

I went back to Naughts and Crosses and took another stab. What was my desired goal? It wasn&#8217;t to win&#8230;I _couldn&#8217;t_ win for two reasons: the game&#8217;s AI was _probably_ using the minimax algorithm, and 2) I play second. It&#8217;s a significant disadvantage because I only get four board spaces while the opponent gets five. If I can&#8217;t win, I can try to force draw. I was able to make a simple program:

  1. Always make sure I don&#8217;t lose. Block the opponent&#8217;s three-in-a-row first.
  2. If they aren&#8217;t going to win, can I? Go for three in a row.
  3. If I don&#8217;t need to block, and I can&#8217;t win, just pick a free space.

Changing my approach was immensely helpful, because I didn&#8217;t have to worry about &#8220;what if?&#8221; moments. It finally clicked in my head &#8211; establish a general choice and iterate down the list to match your case. The algorithm I picked wasn&#8217;t perfect &#8211; I still lose about 30% of the time, but it&#8217;s much better than my earlier attempts.

## Headaches

I like to tell myself that I enjoy thought problems. They get in my head and I have a hard time focusing on things. I&#8217;ve also learned (as explained above) that I need to keep it simple. 

**The Suitcases** took me a while. Rather than writing it out, here&#8217;s a diagram of my solution:

![](http://content.screencast.com/users/TSCBennett/folders/Snagit/media/bc24ff28-0d76-489e-848e-8dc8075ab840/2014-09-18_15-04-48.png)

I found the **Pancake** puzzle to be easier, probably because my daughter plays with stacking cups and blocks. I was able to get them ordered from largest to smallest in five flips.

![](http://content.screencast.com/users/TSCBennett/folders/Snagit/media/69974d70-5748-4c30-a7fd-22f85ad019f7/2014-09-18_15-15-44.png)

The hard part of this task wasn&#8217;t finding a solution&#8230;it was to find a solution in the most efficient way possible. It&#8217;s easy to come up with an answer or a method, but that doesn&#8217;t mean it&#8217;s the _best_ way to accomplish the task. To be totally honest, I wish the prompts hadn&#8217;t given as much information as they did. Once I knew what path to head down, I felt like I was stuck in one mindset. With students, we always face the danger of leading with too much information and boxing in their methods. Problem solving needs to have an ebb and flow of success and failure. The challenge is supporting students through the process of failure rather than labeling their work as a failure. There&#8217;s a major mindset difference, and it links back to Computational Thinking as the process of problem solving.