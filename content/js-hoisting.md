---
title: "Hoisting in JavaScript"
date: "2023-8-2"
image: hoisting.png
info: "Hoisting is a fundamental and crucial concept in JavaScript, let's dive into it together 🏗️"
isFeatured: false
---

**Hoisting is a fundamental and crucial concept in JavaScript, let's dive into it together 🏗️**

We all know that JavaScript is not always the most straightforward and intuitive language, and it has quite a few unique quirks that don't exist in other programming languages. Nevertheless, for a language developed in just 10 days, it has far-reaching implications.

So, if you've never really understood what Hoisting is or what it's all about, here's an opportunity to delve a bit deeper 👷🏻‍♂️

⬜

👉 Most people tend to think that the concept boils down to the idea that variables and functions are physically "hoisted" by the JS engine to the top part of the text file, allowing us as developers to access variables and functions in earlier stages, even before their declaration in the code.

But if we look deeper, we'll understand that it doesn't quite work that way. First of all, it's essential to recognize that the JS engine operates in an environment called the Execution Context (EC).

Generally, in JS programs, there is more than one type of EC that the engine creates and runs the code within. The most basic one, created automatically, is called the Global EC (even if we didn't write a single line of code in a file), and it's also the only one of its kind. Within the EC, several things are created:

- A global object named "window" pointing to the DOM in the browser, through which we can interact with the DOM using various methods (e.g., setTimeout).
- A special object named "this", pointing to the address of the object being executed in the current EC.
- A pointer to Outer Environments enclosed within it.

👉 When the EC is created, two stages occur:

- **The first stage - Creation Phase / Lexical Phase** - Just before the Parser (a part of the JS engine that reads the code character by character, checking syntax validity) runs through the code and begins translating it into machine language, it identifies where we created variables and functions and allocates spaces in memory for them, along with their values, so that during the runtime, it can access the correct values. This is the true meaning of Hoisting. For variables, the story is slightly different. The JS engine doesn't really know what the value of the variable will be (it could be a string or a number later, as JS is a dynamic language). Therefore, the engine assigns an initial value (always) to the variable, called _undefined_.

- **The second stage - Execution Phase** - is the stage where the code we wrote runs, line by line, with the help of the interpreter and compiler, and is translated into a language the computer can understand. If, in this stage, certain variable values were assigned undefined values during the creation phase, and at some point in the code, a different value is assigned to the variable, that value will be updated at the same address in memory and the same environment. If a function is called (even when it's defined after the call), JIT checks if the function was defined during the creation phase. If yes, it executes it. Otherwise, it throws an error that the function is not defined.

So, we've seen that even when we try to invoke a function that hasn't been defined yet in the code, or print a variable to the console that hasn't been defined yet, in JavaScript it's possible thanks to the EC creation process.

**Here is a little demonstration of the execution context process:**

![execution context process](ec.gif)
