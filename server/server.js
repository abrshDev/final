import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost5173/",
    methods: ["Get", "Post", "Put", "Delete"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Pragma",
      "Cache-Control",
      "Express",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3000;

try {
  const conn = await mongoose.connect(
    "mongodb+srv://abrshmelkamu3:v1DyNH0TFNv8QUcr@cluster0.l1r1qbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("connected to database", conn.connection.host);
} catch (error) {
  process.exit(1);
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
