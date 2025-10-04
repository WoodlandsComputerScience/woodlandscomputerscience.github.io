---
layout: "../../layouts/Post.astro"
title: Group B - November 15 - Introduction to Web Development
date: 2021-11-14T00:00:00-5
categories: group-b
current_page: lessons
code_editor: false
description: |
  Welcome to the second meeting of group B!
---
Welcome to the second meeting of group B!

## What is Web Development?

Websites. You probably use them every day. You're on a website right now! What are they though? And how can *you* make websites? 

A website is a collection of web pages that are available to the Internet or an intranet. A web *page* is a document written in HTML, styled in CSS, and made dynamic in JavaScript, that the browser renders, or shows to you. 

Web *development*, meanwhile, is the process of creating websites. The word "development" may lead you to think that web development is just about coding. That isn't the case, similar to how software development is, as we explored in the last meeting. In fact, it's discouraged to go straight into coding a website up, as it will lead you to get confused and write more code than needed.

<img src="/assets/img/group-b/lesson-5/webdev-process.png" alt="">

The process of web development includes
1. Planning
2. Design
3. Content writing
4. Programming
5. Testing and review
6. Deployment and launch
7. Maintenance

In future group B lessons, we'll be taking you on a journey through creating your own personal websites, and we'll describe and help you through the process!

Web development is not just about writing HTML, CSS, and JavaScript. You can use a variety of languages, tools, and frameworks to develop websites. You can also develop websites of different complexities, ranging from a simple four-page website, to a complex web application with a backend and a database that allows logins. Examples of simple four-page websites can include personal websites and marketing websites. Examples of complex web applications include Google (whose entire application suite consists of around two billion lines of code!), GitHub, and YouTube, amongst others.

Before we dive into how to code websites and even languages or frameworks you can use, let's first talk about different types of websites and components of websites.

## Frontend and Backend

Before we dive into frontend and backend development, let's first talk about two different types of websites.

#### Static Websites

Static websites are solely created using HTML, CSS, and JavaScript. There's no dynamic content, meaning no HTML is general on-the-fly and there's no concept of persistent user data. Basically, if you see something on a static website, there's a guarantee that another user can see the exact same thing.

Web servers serve static content without the need for any code in the backend. Let's take example of a static website with its directory structure as outlined below.
```
├── index.html
├── projects.html
├── contact.html
├── assets
│   ├── style.css
│   └── script.js
```

Imagine the website's domain is `https://cs-club.com`.

Going to `https://cs-club.com` would render the `index.html` HTML file (as most web servers are configured to do). Going to `https://cs-club.com/projects.html` would render the `projects.html` HTML file, and the same hold for `contact.html`. Going to `https://cs-club.com/assets/style.css` would show the text content of the `assets/style.css` file, and the same holds for the `assets/script.js` file.

The website you're on right now, the Woodlands CS website, is static. Examples of static websites include most personal websites.

| Pros      | Cons |
|:------------|:------------|
| Secure      | No user-provided data can be stored       |
| Fast   | Requires knowledge of web development to update       |
| Easy to host | |

<br>

#### Dynamic Websites

<img src="/assets/img/group-b/lesson-5/static-dynamic.jpeg" alt="" class="post-img float-right">

Dynamic websites have *dynamic* content, meaning HTML is generated on-the-fly in real-time using code in the web server and user-provided data can be stored in databases. Examples of dynamic websites include most Google services (such as Gmail), GitHub, YouTube, and Stack Overflow. The content in a dynamic website can change depending on the user that is using it, the timezone, or the native language or country that the user resides in.

Instead of needing HTML files whose names correspond to the URL path, you can generate the URL path in the backend code as well. For example, if you wanted to make `https://cs-club.com/profile/<user_id>` show the HTML page of a specific user (whether <user_id> is the user's unique identifier), you can use back-end code to register that route, then generate the HTML for that user on-the-fly using the user's content (such as showing all of the user's videos, in the case of YouTube).

| Pros      | Cons |
| ----------- | ----------- |
| Content can be updated without knowledge of web development      | Less secure |
| Users can add their own data   | Slower than static websites (since HTML is generated on-the-fly)       |
| Allows for advanced user interaction | |

Though pros and cons exist for both types of websites, static and dynamic websites are often used for different cases. The common principle is:

> Where you can't use a static website, use a dynamic website. Otherwise, stick to a static website.

## Languages and Frameworks

Presented below are some commonly-used languages and frameworks in web development.


| Name      | Language | Purpose | Type |
| ----------- | ----------- | ----------- | ------ |
| HTML | HTML | Use tags and attributes to create components of webpages. | Frontend |
| CSS | CSS | Use selectors to style HTML components | Frontend |
| JavaScript | JavaScript | Make webpages interactive | Frontend |
| Bootstrap | CSS/JavaScript | Allow pre-styled components to be used in HTML. | Frontend |
| React | HTML/CSS/JavaScript/JSX | Allow pre-styled components, data-driven webpages (change data without needing to reload the page), create easily scalable applications | Frontend |
| Flask | Python | Make webpages dynamic, allow interactions with databases, allow logins, etc. | Backend |
| Django | Python | Make webpages dynamic, allow interactions with databases, allow logins, etc. | Backend |
| Express | Node.js (JavaScript) | Make webpages dynamic, allow interactions with databases, allow logins, etc. | Backend |
| MySQL | SQL | Allows data to be stored and relationships to be made | Database |

Note that you will encouter many more languages and frameworks, this is just intended as an introduction to many of the commonly-used ones.

<img src="/assets/img/group-b/lesson-5/frameworks.png" alt="" class="post-img mt-3">

## Introduction to HTML and CSS

HTML stands for "HyperText Markup Language" and is the language that allows you to create components and place them onto a webpage. CSS stands for "Cascading Style Sheets" and allows you to style components using selectors.

A HTML *element* looks like the following.

```html
<element attribute="value">content</element>
```

The content of an element can also have nested HTML elements, depending on the element.


A CSS style looks like the following.

```css 
selector {
  attribute: value;
}
```

Where selectors are IDs, classes, or element names.

We don't to keep rambling on about HTML and CSS! Take a look at the webpage below and try to give it a personal touch! As a bonus, try changing the CSS to make it look better (such as changing the background colour to your favourite colour). If you're already an expert at this 😎 go ahead and add some JavaScript to display your hobbies *only when a button is clicked*. Don't worry if you don't know how most of this works, or how to add HTML or CSS! Feel free to ask us or Google it if you have any questions.

<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@Lets_Go/MyFirstWebsite?embed=true"></iframe>

