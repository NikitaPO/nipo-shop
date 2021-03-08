import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to MongoDB: ${conn.connection.host}`.green.bold);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold);
    console.log(err.stack);
    process.exit(1);
  }
};

export default connectDB;
