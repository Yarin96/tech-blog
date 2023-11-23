---
title: "React Virtual DOM"
date: "2023-11-3"
image: react-logo.png
info: "As React developers, you've probably heard about the Virtual DOM. What is it exactly, and how does it work? And how does it give React an advantage over other front-end libraries?"
isFeatured: true
---

**As React developers, you've probably heard about the Virtual DOM. What is it exactly, and how does it work? And how does it give React an advantage over other front-end libraries?**

A deep understanding of the Virtual DOM will help us become better React developers. Let's dive into this concept:

👉 To start, let's refresh our memory about the Real DOM or simply DOM (Document Object Model). It refers to the structured HTML documents in a data tree format (containing nodes and objects) sent to the browser with each user request to visit a specific page on a website. The DOM serves as an interface to HTML documents, allowing scripting languages like JavaScript to manipulate the document content.

👉 Changes in the DOM occur whenever we want to update the existing UI state to display new information about the page. These changes can be relatively fast and inexpensive, but in large applications with a significant number of re-rendered elements, performance issues arise. This is because each DOM render needs to update the content and order of elements in all layers of the tree, including children of the relevant node, along with the recalculation of their CSS.

⬜

As you can see, this is not an ideal performance situation and can be costly. Therefore, React proposes a suitable solution to improve performance using the Virtual DOM 👇:

👉 The Virtual DOM is essentially a concept of duplicating the DOM tree (hence the name - virtual) preserved in the browser's memory. Every object existing in the original DOM also exists in the Virtual DOM. Unlike the DOM, the Virtual DOM does not have the power to directly change the layers of HTML documents. In React, with every state change, the change occurs first virtually.

👉 In practice, React maintains two Virtual DOMs: one with the previous state before the page change and one with the updated state. After React updates the required components in the Virtual DOM, it compares them using an algorithm called "Diffing." The algorithm finds specific changes between the current state update and the previous one in both virtual trees, in the minimum number of steps, aiming to identify only the specific changes in the components required for updating in the real DOM (sometimes involving single HTML tags). This algorithm prevents traversing the entire tree structure and contributes to significant performance improvement 🔝.

👉 React performs this process for us through something called "batch updates," meaning a number of state changes are sent as a single update package. This also results in significant performance savings, as it causes the UI to render only once with all the updated information, not with each state change separately. The entire process I described just now (updating changes in the real DOM through the virtual one) is called Reconciliation.

👉 The React library responsible for synchronizing between the real and virtual DOM is called ReactDOM.

⬜

In conclusion, the Virtual DOM is one of the tools that allows React to be faster in terms of performance compared to other frameworks, such as Angular. This is one of the reasons why React is so popular.
