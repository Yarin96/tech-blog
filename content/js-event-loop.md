---
title: "JavaScript Event Loop"
date: "2023-10-9"
image: js-event-loop.png
info: "A detailed explanation of the Event Loop in JavaScript, the runtime environment, and synchronous and
asynchronous code."
isFeatured: true
---

What exactly is the Event Loop in JavaScript? What is synchronous and
asynchronous code? And what does the JavaScript Runtime Environment have
to do with it?

That\'s exactly why I am here to explain it to you 👇👇

👉 For starters, we should realize that, in contrast to other programming
languages, JavaScript doesn\'t work asynchronously (performing tasks in
parallel by using several threads). Instead, JavaScript is a
synchronized language that operates on a single thread. This means that
tasks are performed one after the other in the order they occur.
However, it works in an asynchronous environment by using callbacks and
also promises, which are more common these days.

Another thing we should know about is the JavaScript Runtime Environment
(JRE). In fact, this is the environment in which our program will be
executed and contains several components that handle its performance:

🔸 The JavaScript Engine -\> As you may assume from the title, this is
the engine that reads the JavaScript code. It executes it using a code
interpreter called JIT (Just in Time). The JIT is basically a tool that
combines interpreter and compiler methods together, identifying in
runtime which part of the code can be translated to machine code in
advance and saved. The JavaScript Engine also contains two components:
the Call Stack and the Heap. The tasks that pile up one after the other
synchronously will be kept in a stack data structure called the Call
Stack.

🔸 The Web API -\> Includes functions that the browser provides us (such
as setInterval and setTimeout), and with them, we write asynchronous
code which prevents the blocking issue in the Call Stack (I will explain
the blocking issue soon). Here, the asynchronous tasks will pile up, and
once they finish their execution, they will be moved to the Callback
Queue.

🔸 The Callback Queue -\> A queue data structure that includes callback
functions waiting to go back to the Call Stack. It is necessary because
the Web API can\'t directly insert values randomly into the Call Stack.
This is because it is possible that in the Call Stack there are tasks
currently executing at runtime, and adding them can worsen the situation
and cause errors. That\'s why we need this intermediate station.

⬜⬜

And as promised - what is the blocking issue? ❌

In short, if right now in the Call Stack, we have a function that takes
a long time to execute, the rest of the tasks that need to be performed
afterward will get stuck because of it until it\'s finished executing.

As an example, let\'s say a simple click on a button on our application
will be performed after a long, annoying delay as a result of another
task that was invoked beforehand and took a long time to execute (and we
mentioned that JavaScript works asynchronously).

That\'s why using asynchronous code comes to solve this issue. It
executes outside of the single thread, doesn\'t block the program from
doing other tasks in the stack, and goes back in the form of callback
functions from the Callback Queue once the process has finished.

So after we went through all of these explanations, what does it have to
do with the Event Loop, you ask? Oh! Good question 👇

👉 As I said before, you can\'t insert randomly finished callback functions
into the Call Stack because it is possible that, at the same moment,
things are performing inside it, and it can cause errors. That\'s where
the Event Loop serves us. The Event Loop is basically a loop that checks
all the time if the callback queue is empty or if there are callback
functions awaiting there. If there are, it takes the function from the
callback queue and passes it to the Call Stack so it can perform safely.

Below is a detailed demonstration of the whole process in the JavaScript Engine:

![JS Runtime detailed process information](js-event-loop.png)
