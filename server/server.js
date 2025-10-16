import express from "express";
import cors from "cors";
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from "./routes/aiRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectCloudinary from "./configs/cloudinary.js"

const app = express();

await connectCloudinary();

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req,res) => {
    res.send("welcome to server")
})

app.use("/api/ai",requireAuth(), aiRouter);
app.use("/api/user",requireAuth(), userRouter)

app.listen(PORT, () => {
    console.log("server is running at port", PORT)
})
