---
title: "Bind / Call / Apply methods in JavaScript"
date: "2023-11-23"
image: bind-call-apply-js.png
info: "Have another peek of how JavaScript is working behind the scenes 🎥 And this time we will talk about how we as developers have control over the keyword 'this' and the methods that JavaScript provides us to implement it."
isFeatured: false
---

**Have another peek of how JavaScript is working behind the scenes 🎥**

**And this time we will talk about how we as developers have control over the keyword "this" and the methods that JavaScript provides us to implement it.**

👉 **The "this" keyword**

In JavaScript - everything, including functions, is treated as objects. One crucial aspect of this paradigm is the "this" keyword, which often causes confusion but is important in understanding how functions work in the language.

When creating a function in JavaScript, it gets its own "this" keyword which is a reference related to the object that invoked the function. Sounds simple, right? However, here's where things can get tricky.

The "this" keyword can be very handy when used correctly, allowing functions to work with the data / props of the object they are associated with. But unfortunately, it can lead to unintentional references to other objects and unexpected behavior.

For example, in event handlers. When you define event handler functions, they are often invoked by events such as button clicks or mouse movements. in these cases, the "this" keyword may not always refer to what you expect. It can point to the DOM element that triggered the event, rather than the object or context you're working with, often causing frustration. 🤦

Luckily, JavaScript provides us with powerful tools to regain control over the "this" keyword and explicitly specify the context in which a function should run. **These tools are the "bind", "call", and "apply" methods** which are built-in to every Function Object.

👉 **Bind / Call / Apply**

- **bind**: This method creates a new function with a specified "this" value, ensuring that the function always executes in the context you desire. For example:
- **apply**: Use this method to call a function with a given "this" value and an array (or an array-like object) of arguments.
- **call**: Similar to "apply", this method calls a function with a specified "this" value and a list of arguments, but it takes the arguments individually instead of as an array.

👉 **For example, bind():**

```ts
const car = {
  brand: "Toyota",
  getBrand: function () {
    return this.brand;
  },
};

const getBrandFunction = car.getBrand;
// Try to call the "getBrand" method using the reference:
console.log(getBrandFunction()); // Output: undefined
// This is because of the object which invokes it.
// In this case, it defaults to the window object
// of the original execution context

// --- But if we add .bind() to the reference:
const getBrandFunction = car.getBrand.bind(car);
// Now, when we call the getBrandFunction function,
// the "this" will always refer to "car" object.
console.log(getBrandFunction()); // Output: Toyota
```
