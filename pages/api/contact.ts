import { Request, Response } from "express";
import { MongoClient } from "mongodb";

export default async function handler(req: Request, res: Response) {
  if (req.method === "POST") {
    const { email, name, message } = req.body.details;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://tech-blog:epNNyjTELWndq5I7@cluster0.vidoh7c.mongodb.net/tech-blog`
      );
    } catch (error: unknown) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      await db.collection("messages").insertOne(newMessage);
    } catch (error: unknown) {
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message:", newMessage });
  }
}
