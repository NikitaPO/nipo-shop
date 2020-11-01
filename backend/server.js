import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import connectDB from "./config/connectDB.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFoundError } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Server is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFoundError);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan
      .bold
  )
);
