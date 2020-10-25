import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import products from "./data/products.js";
import connectDB from "./config/connectDB.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.end("Server is running");
});

app.use("/api/products", productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan
      .bold
  )
);
