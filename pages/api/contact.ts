import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
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

    /// Store in DB
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res
      .status(201)
      .json({ message: "Successfully stored message:", newMessage });
  }
}
