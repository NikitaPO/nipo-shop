import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import connectDB from "./config/connectDB.js";
import productRoute from "./routes/productRoute.js";
import { errorHandler, notFoundError } from "./middleware/errorHandler.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.end("Server is running");
});

app.use("/api/products", productRoute);

app.use(notFoundError);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan
      .bold
  )
);
