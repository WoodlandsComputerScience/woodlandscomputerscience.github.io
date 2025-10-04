---
layout: "../../layouts/Post.astro"
title: Group B - November 29 - Discord Bot First Prototype
date: 2021-11-29T00:00:00-5
categories: group-b
current_page: lessons
description: |
  Welcome to the fourth meeting of group B! In this meeting, we'll go through the core functionality of our code runner Discord bot.
image: ../../thumbs/2021-11-29.png
---
Welcome to the fourth meeting of group B! In this meeting, we'll go through the core functionality of our code runner Discord bot.

## First Prototype

The **first prototype** of our code runner Discord bot has been completed!

It has the core functionality outlined in the [previous meeting](http://localhost:4000/group-b/2021/11/21/group-b-lesson-6.html#baseline-features) of security, performance, and language support using the code execution engine [Piston](https://github.com/engineer-man/piston). You can use the bot *right now* in our Discord server! Head over to the **#bot-spam** channel to use the bot.

The bot will try to run *any* code you give it. Try your hardest to break it!

### Instructions

There's only one command to remember, which is `!run`.
````
!run <language> <language version>  
``` 
{code}
```
````

Discord wraps code blocks using **three backticks**. That's the button at the top left of your keyboard below the escape key.

<img src="/assets/img/group-b/lesson-7/discord-bot-example.png" alt="" class="post-img-large">

*An example of a correctly formatted message.*
<br>

## Code Walkthrough

So what was the process of coding this Discord bot? As previously mentioned, we used the programming language Go with the DiscordGo framework to create the bot. The code for the bot can be found on our [GitHub page](https://github.com/WoodlandsComputerScience/CodeRunnerBot)!

As all of the code is open-source, you can read each part of it and even suggest changes. We welcome any suggestions!

## Finding Improvements and Bugs

The bot still isn't perfect. We still have many [future features](/posts/2021-11-22-group-b-lesson-6.html#future-features) in mind that we haven't started implementing. If you have any suggestions for additional quality of life changes, feel free to bring it up. Bugs are also (unfortunately) sure to pop up. In fact, we've already come across one...

<img src="/assets/img/group-b/lesson-7/discord-bot-bug-1.png" alt="" class="post-img-large">

##### *A very strange output...* 🐒
<br>

<img src="/assets/img/group-b/lesson-7/discord-bot-bug-2.png" alt="" class="post-img-large">

##### *...missing new line!* 🍌
<br>

So keep on testing our bot and breaking it in different ways. That's how software gets improved!

## Challenges!

We've done a lot of talking so far. It's time for you to use the bot yourself and see how it works firsthand!  
To encourage some coding, we'll give a few **challenges** where you have to write code to produce a certain output.  
Now go to **#bot-spam**! Be free!

<img src="/assets/img/group-b/lesson-7/vishnu.png" alt="" class="post-img-large">
