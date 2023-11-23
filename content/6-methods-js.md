---
title: "6 Ways to define functions in JavaScript!"
date: "2023-8-27"
image: 6-js-functions.png
info: "This time, we'll talk about the various options for defining functions in JS and peek a bit behind the scenes of each method."
isFeatured: false
---

**This time, we'll talk about the various options for defining functions in JS and peek a bit behind the scenes of each method. Examples of code for illustration in the images below 👇**

🛠️ **First Method - Named Functions** - This is the most simple and common way to define a function using the reserved word "function."

❓ **Behind the scenes** - For these functions, a process called Hoisting occurs during the compilation stage of the JS engine, allowing them to be called even before they are defined in the code.

**Code example:**

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

⬜

🛠️ **Second Method - Anonymous Functions** - Nameless functions can be used as expressions or as arguments.

❓ **Behind the scenes** - These functions are created at runtime. The variable "greet" holds a reference to the function, illustrating the concept of first-class functions in JS.

**Code example:**

```js
const greet = function (name) {
  return `Hello, ${name}!`;
};
```

⬜

🛠️ **Third Method - Arrow Functions** - Introduced in ES6, providing a concise syntax for function definition.

❓ **Behind the scenes** - Arrow functions capture the _"this"_ value of their surrounding context. This is in contrast to regular functions, which create a new Execution Context in the memory stack with _"this"_ according to the context that invoked them. Therefore, using arrow functions can prevent many issues related to proper "this" binding.

**Code example:**

```js
const greet = (name) => `Hello, ${name}!`;
```

⬜

🛠️ **Fourth Method - Immediately Invoked Function Expressions (IIFE)** - Functions that are executed immediately after their creation, using the invoke in the attached parentheses.

❓ **Behind the scenes** - The main use of these functions is to create a private and isolated scope to avoid conflicts with external scopes in the code. Additionally, all variables within the IIFE are not accessible from outside, providing a level of privacy and control over who can access and modify the content.

**Code example:**

```js
(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice");
```

⬜

🛠️ **Fifth Method - Higher Order Functions** - Functions that can take one or more functions as arguments or return a function.

❓ **Behind the scenes** - In the example code, the inner function "remembers" the value of the argument "factor" even after the "multiplier" function has finished running. It holds a reference to it in memory. Later in the code, we can access the function/object created with the relevant values at its creation. Other functions considered like this are filter, reduce, map, and more.

**Code example:**

```js
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
```

⬜

🛠️ **Sixth Method - Constructor Functions** - Similar to stamps for creating objects with similar properties and methods. They are invoked with the "new" keyword to create instances of those objects.

❓ **Behind the scenes** - The _"this"_ value of the function is assigned to the newly created object instance. These functions are closely related to the concept of Prototypes in JS, meaning that methods and properties defined in the prototype of the same Constructor Function will be shared for all instances of that function. This also means less memory wastage, as we don't need to assign methods anew for each new instance created. In addition, in ES6, they introduced the reserved word "class" trying to mimic languages like Java to serve as an "alternative" to what existed before in JS. However, behind the scenes, it's still an implementation of functional programming.

**Code example:**

```js
function Person(name) {
  this.name = name;
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

person1.sayHello(); // "Hello, my name is Alice and I am 30 years old"
person2.sayHello(); // "Hello, my name is Bob and I am 25 years old"
```
