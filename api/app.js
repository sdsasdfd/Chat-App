import express from "express";
import authRouter from "./routes/authRouter.js";
import messageRouter from "./routes/messageRouter.js";
import dotenv from "dotenv";

dotenv.config();
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected.."))
  .catch((e) => console.log(e.message));

app.listen(port, () => console.log("runn..."));
