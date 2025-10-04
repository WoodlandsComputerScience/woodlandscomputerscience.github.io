---
layout: "../../layouts/Post.astro"
title: Group B - November 22 - Discord Bot Plan
date: 2021-11-21T00:00:00-5
categories: group-b
current_page: lessons
code_editor: false
description: |
  Welcome to the third meeting of group B! In this meeting, we'll be discussing the plan for the upcoming Discord bot series.
image: ../../thumbs/2021-11-22.avif
---
Welcome to the third meeting of group B! In this meeting, we'll be discussing the plan for the upcoming Discord bot series.

## Idea

Over the next few weeks, we'll be creating a Discord bot in the programming language Go that will allow users to run code in Discord!

It will take the code of the program and the input provided to the code, and will show the output of the program to the user.

## Languages and Frameworks

##### Languages
- Go
  - An object-oriented, compiled programming language that was developed by Google

##### Frameworks
- [DiscordGo](https://github.com/bwmarrin/discordgo)
  - Go bindings for Discord
  - Allows Discord bots to be created in Go
- [Piston Code Execution Engine](https://github.com/milindmadhukar/go-piston)
  - Piston allows untrusted programs to be run in isolation
  - We'll be using a Go wrapper to Piston
- [GORM](https://github.com/go-gorm/gorm)
  - An ORM for Go
  - An ORM (object-relational mapping), is a concept where you convert data between incompatible data types using obejcts
    - An example of incompatible data types is SQL queries and Go objects

## Baseline Features

An important aspect of the planning stage is to make a clear outline of what features will be necessary for the project to be considered a success. The basic concept for our Discord bot, a code runner, is very simple. We must determine the core features that the code runner will require to result in the best end user experience. In addition, security measures must be taken as malicious code could attempt to crash the system or access sensitive data.

### Security

<img src="/assets/img/group-b/lesson-6/docker-vs-vm.png" alt="" class="post-img-large float-right">

As our bot will run unchecked code, it is important to do so securely. The end user can input any lines of code they want to, so it's imperative that they're unable to cause any harm. Therefore the code should be run in an isolated environment called a **sandbox** where it is unable to access resources outside of the program without authorization.

Sandboxes typically monitor code for suspicious behaviour, like self-replication, downloading additional software, or attempting to encrypt data. The sandbox can then kill this code at any time.

The code execution engine we're using, **Piston**, uses **Docker** for sandboxing. Docker can package an application into a virtual **container** that runs isolated from other containers. These containers run on the operating system kernel which makes them faster than virtual machines.

[The Piston GitHub states:](https://github.com/engineer-man/piston#security)

> Docker provides a great deal of security out of the box in that it's separate from the system. Piston takes additional steps to make it resistant to various privilege escalation, denial-of-service, and resource saturation threats.

### Performance

Performance is an important aspect of any software project. End users don't want to wait pointlessly for your unoptimized code to run!

In the world of web development, it is well known that [every extra second your page takes to load from 0-5 seconds is a 4.42% drop in conversion rate.](https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm) A similar principle applies here - if we want to make the best bot possible for the end user, a fast response is important.

The main bottleneck will be the speed of code execution using **Piston**. Our bot relies on the Piston API to execute code. Piston runs code using a executor custom written for each language. Compiled languages have a cap on compilation time (10 seconds?). User-submitted code also has a cap on execution time at 3 seconds before it is automatically killed.

Once execution finishes, any output is captured and sent back to the user. Then any processes began by the user are killed and files are deleted.

We chose Piston because it performs very well while maintaining excellent security. Piston can handle approximately **100 requests/second** and should serve our purposes  well.

Lastly, supporting multiple languages is important as end users will want to run all types of code.

Luckily [Piston by default supports many programming languages](https://github.com/engineer-man/piston#supported-languages), so it won't be a problem.

## Future Features

Now that we've gone over the must-haves, let's discuss some nice-to-have features for our bot. 

### Docker

First, what if we want to allow anyone to deploy this bot to their own computer or a server? Then they'd have to install Go and all of the frameworks we used. There also might be inconsistencies with the versions of the frameworks and languages used, and some versions may be incompatible with the user's operating system. There's numerous things that could go wrong if someone wanted to self-host this Discord bot, which is where Docker comes in. 

Docker is a containerization solution that allows you package your software in a way such that the users' operating systems and versions of frameworks are irrelevant. It uses virtualization and installs software in containers, then running those containers would run the software. A future feature that we could add is packaging the bot using Docker, to allow anyone to self-host the bot in a matter of a few commands.

### User Accounts

Another feature that we could add to the bot would be a user accounts system. There are two approaches to how this could work. The first approach is: users would sign up with an email address and a password. Then. they would verify their account and log in. The second approach is, all data is associated to a certain Discord user, so there's no need for authentication, email address verification, sign ups, and log ins. With the second method, we are basically outsourcing our user authentication system to Discord.

Users, when logged in, could store handy scripts that they could run with a simple command. Users could also view their script run history to see every time they've run a piece of code all in one place.

### Distributed Code Execution Network

<img src="/assets/img/group-b/lesson-6/distributed.png" alt="" class="post-img float-right">

Finally, a feature that we could consider adding in the future is a distributed code execution network. There are two reasons why adding a distributed code execution network could be worthwhile.

First, say our bot grows in popularity, and the code runner goes down very often. This would mean that there would be a complete halt on code running. If a distributed code execution system was added, if one of the servers that ran code went down, the other ones could be used.

Second, once again, say our bot grows in popularity, and we have users from all over the world using different Discord server locations. If we had code execution servers in different locations, we could route user code execution requests to the closest code execution server. This would allow for faster response times and mean that in case one of the servers went down, the next closest server could be used to route a user's request.
 
## Go Programming Language

[Go](https://github.com/golang/go) is an open-source, compiled, object-oriented programming language developed by Google.

Since we'll be developing the Discord bot in Go, we wanted to go over a few good resources go learn Go.

## Resources
- [Official website](https://golang.org/)
- [Codecademy Go course](https://www.codecademy.com/learn/learn-go)
- [Learn Go in y minutes](https://learnxinyminutes.com/docs/go/)
