---
title: "Docker and Kubernetes"
date: "2023-10-15"
image: docker-k8s-logos.png
info: "What is Docker, really? 🐋 And what about Kubernetes? 🚢 Topics every programmer must be familiar with (at least at a basic level)."
isFeatured: true
---

**What is Docker, really? 🐋 And what about Kubernetes? 🚢**

**Topics every programmer must be familiar with (at least at a basic level).**

Continue reading to get a glimpse 👇👇

With Docker, we create a series of containers, each of which is essentially an isolated computing environment that allows running only one program. Together, they are designed to create a kind of ecosystem or platform for the application.

🟦

👉 **Why use Docker in the first place?**

Running a program on our computer assumes many assumptions about our runtime environment. The fact that we write _"npm start"_ to run a local React application assumes that we have npm and node.js packages installed on our computer. In addition, to run the program, a certain level of knowledge is required on how to exactly execute it, such as typing the command _"npm start"_ in the terminal, which can be non-trivial in some cases, especially for programs we didn't write ourselves.

The whole point of Docker is to eliminate these problems—by creating containers that encapsulate all the dependencies the program needs to run. So, what does that mean? It means we "wrap" npm, node, and additional packages required to run the program into this isolated computing environment. Additionally, we include information on how to run the program and what needs to be written. Each container can run on any operating system and contain any package and programming language we can think of. And that's the main point in the end — Docker allows installing any software not only on our personal computer but also on servers and any other computer. It simplifies and facilitates the installation process without fear of errors or missing files or dependencies.

🟦

👉 **After all of this introduction of Docker, what Kubernetes has to do with it actually?** 🤔

In simplicity - Kubernetes _(or k8s in short)_ is a tool for running various containers together. When using Kubernetes, users provide configuration files explicitly stating which containers they want to run in the application and how they will communicate with each other.

In Kubernetes, we create something called a _Cluster_ = a set of virtual machines, each of which is called a Node. All Nodes are managed by a program called Master (which directly assigns configuration files), and during the program's execution, Kubernetes allocates the execution to one of the Nodes. Communication between the Nodes is handled by a shared channel within the cluster, which is also responsible for scaling and automating the deployment of the application.

🟦

Just for illustration - in the image below, you can see a comparison between different deployment architectures - the traditional method versus Docker container method and Kubernetes method.

![docker and k8s architectures](docker-k8s.png)

And that's it for now, stay tuned for more articles about this awesome technology!
