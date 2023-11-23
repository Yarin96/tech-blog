---
title: "Fetch vs Axios"
date: "2023-11-23"
image: fetch-axios.png
info: "What are the differences between Axios and the Fetch API? In essence, which one should we prefer to use?"
isFeatured: false
---

**What are the differences between Axios and the Fetch API? In essence, which one should we prefer to use?**

**In general, these are tools that allow us to communicate with the server through the HTTP protocol ✈️.**

⬜

Let's start with a brief explanation of each one 👇

👉 So, Fetch API is a JavaScript interface that allows performing HTTP operations of requests and responses using the fetch method. The method must contain one argument, which is the URL linking to the source from which the data will be extracted, and it returns a Promise, enabling us to run in an asynchronous environment. This interface is built into every modern browser, meaning it is already available for use, and no installation is required for it. We can use it only in the browser and not on the server side of our project.

👉 On the other hand, Axios is a third-party library built in JS that can run both in the browser and in the Node.js environment (both on the front end and back end). Here, too, the use of Axios returns a Promise. Its installation is done using npm or yarn, and we need to import it into our project since it is not built into the browser like the Fetch API.

⬜

If we focus on the differences and elaborate on them, it seems that 👀:

👉 **Syntax** ✍️:
In general, the writing is quite similar. In both, the default request will be a GET request, and additional arguments can contain additional information about request settings, such as headers (only that in Fetch API, the first argument must contain the URL address). Additionally, in Axios, we can specify the request type using a dot after the object, for example:

```js
axios.get(url, {...}).
```

👉 **GET Requests** ✋:
In Fetch API, the fetch method returns a Promise that allows us to use the "then" method, which will receive the "response object" after the synchronous request is completed. Still, the necessary information is not yet available, so we will operate on the response object with the json method, which returns another Promise that will fetch the data in the "then" block, giving us the data in JSON format. In total, after all this complexity, we end up using 2 "then" methods (and, of course, we can also use async/await). In contrast, in Axios, the response object received in "then" contains the data in JSON format by default, saving us developers extra work.

⬜

Are you with me so far? Great, let's dive a bit deeper into more differences 🤿🤿🤿:

👉 **POST Requests** 📬:
We will need to pass our data in JSON format in both cases. By default, Axios does this for us. In Fetch API, we need to explicitly write it in the body (using JSON.stringify()) and in the headers (with "Content-Type": "application/json").

👉 **Performance** 🔝:
Because both are based on Promises, there is not much noticeable difference in performance.

👉 **Error Handlin** ⛔:
Axios has better control over error handling, as it identifies status codes 500 or 400 (indicating a request that failed for a specific reason). In contrast, Fetch API treats status codes 500 or 400 as "200 OK" because it rejects the Promise only if there is a communication problem and not otherwise. This requires us to manually handle HTTP errors in Fetch API to understand what did not go well in the debugging process, and again, this is extra work.

👉 **Security** 🔐:
Axios is slightly more secure due to the fact that it contains a feature called XSRF protection (we won't elaborate for now). However, being a third-party library, it depends on its creators for security maintenance.

⬜

So, ultimately, which one is preferable?

In conclusion, in my opinion, there is no unequivocal answer — it all depends on needs and preferences. However, the differences I mentioned can help you make the decision that suits you.
