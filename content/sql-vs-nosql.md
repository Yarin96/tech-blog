---
title: "SQL vs NoSQL"
date: "2023-11-23"
image: sql-vs-nosql.png
info: "What are the differences between a relational database and a non-relational database? When is it preferable to use one over the other?"
isFeatured: false
---

**What are the differences between a relational database and a non-relational database?**

**When is it preferable to use one over the other?**

These are common questions in job interviews that it's important to be familiar with. If this is new to you, I recommend continuing to read, and I'll try to explain simply 👇

So let's start from the beginning, what is a database?

A database is a collection of organized data. Databases can be of two types - relational and non-relational. Let's elaborate:

🟧

👉 **Relational (SQL)** - The idea is to store data in tables that are linked in relationships. Each table contains data about a specific subject, where rows represent entries in the table, and columns contain properties of that entry. Each property has a data type (integer, string, etc.).

_For example:_ a company table linked to an employee table representing workers (rows) and information about them (columns) like ID, employee name, department, etc. Popular relational databases today include MySQL, PostgreSQL, Oracle.

🟩

👉 **Non-relational (NoSQL)** - Instead of tables, data is stored dynamically in collections. There are four main types of NoSQL databases:

- **Document-based** - Data is stored hierarchically in documents, usually similar to JSON objects. It uses a key-value storage system where the key is a unique identifier.
- **Key-value-based** - Data is stored in libraries or hash tables. It also uses a key-value pair where the key serves as a pointer to the value.
- **Column-oriented** - Similar to relational, but it's based on families of columns associated with a single row (which can have multiple rows). Access can be done using the unique key of that row.
- **Graph-based** - Uses graph theory to store and manage relationships between data. It uses nodes that contain pieces of information linked to other nodes through edges. Popular non-relational databases today include MongoDB, DynamoDB, Redis.

🟧

**So, when should we prefer to use our application?** 🤔

The answer is, it depends. We need to ask ourselves what goals we are aiming for.
For example, non-relational databases are excellent for chats, booking websites, and generally whenever there's a high frequency of storage requests and data transactions, as storage and retrieval of data are very fast.
On the other hand, relational databases are great for social networks and banks, especially when we need reliable and consistent data, more accurate information for complex queries, and better security.

Of course, it doesn't have to be one or the other; we can use both in different parts of our application if desired.
