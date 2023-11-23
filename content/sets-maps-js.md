---
title: "Sets vs Maps in JavaScript"
date: "2023-9-10"
image: sets-maps.png
info: "Understanding the differences between these data structures."
isFeatured: false
---

**If you want to gain a deeper knowledge in data structure types in JavaScript, I prepared for you a detailed overview on Sets and Maps which were added in ES6 version, and a little comparison between them to Arrays and Objects.**

👉 **Sets**: A set is a collection of unique values, meaning it can't contain any duplicates. Sets are also iterables, but the order of the elements is not guaranteed. You also can't access it's elements by index.

Common use cases where Sets are beneficial include the need to quickly remove duplicate elements from an array, by converting it into a Set and then back to an array. Sets are also efficient for checking whether a specific element is present in a collection without having to iterate through the entire collection.

**For example:**

```ts
// Create an array with duplicate values
const numbers = [1, 2, 3, 2, 4, 5, 3];
const uniqueNumbers = new Set(numbers);
const uniqueNumbersArray = Array.from(uniqueNumbers);
console.log(uniqueNumbersArray); // Output: [1, 2, 3, 4, 5];
uniqueNumbers.add(6);
console.log(uniqueNumbersArray); // Output: [1, 2, 3, 4, 6];
uniqueNumbers.delete(2);
console.log(uniqueNumbersArray); // Output: [1, 3, 4, 5, 6];
uniqueNumbers.clear();
console.log(uniqueNumbersArray); // Output: [];
```

👉 **Maps**: Unlike Sets, which store only values, Maps allow you to associate values with unique keys. Each key in a Map is guaranteed to be unique, and the order of key-value pairs is maintained, making Maps ordered collections.

Unlike JavaScript objects, Maps can use keys that are not limited to being strings. You can use various data types as keys, including Numbers, Booleans, and even Objects to reference values. Additionally, Maps are iterable data structures, allowing you to traverse their content easily.

**For example:**

```ts
// Create a Map with mixed key types for a game leader-board
let leaderBoard = new Map(
  Object.entries({
    Player1: { score: 1200, level: 5 },
    42: { score: 950, level: 4 },
    true: { score: 1500, level: 6 },
  })
);

leaderBoard.set("NewPlayer", { score: 800, level: 3 });
leaderBoard.delete(true);

for (const [key, info] of leaderBoard) {
  console.log(`Player: ${key}, Score: ${info.score}, Level: ${info.level}`);
}

// Final Output:
// Player: Player1, Score: 1200, Level: 5
// Player: 42, Score: 950, Level: 4
// Player: NewPlayer, Score: 800, Level: 3
```

👉 **So which one to use?**

To begin, it's important to distinguish our requirements: if we require a basic list, we would opt for Arrays or Sets; however, if we require Key/Value pairs, we should opt for Objects or Maps.

You should work with Arrays when you require an ordered collection of values, which may include duplicates, and when you need to preform data manipulation. On the other hand, choose Sets when your focus is on unique values and the elimination of duplicates from arrays. Sets are also a suitable choice when prioritizing high performance (due to its implementation using hash tables).

You should use the "traditional" objects when you need to include functions, and when working with JSON. They are also perfect for small to medium-sized sets of data. On the other hand, with Maps you can use any type (and values) as keys. Maps have better performance for large quantities of data and for adding and removing data frequently.
