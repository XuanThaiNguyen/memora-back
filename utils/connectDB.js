import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo is running!");
  } catch (err) {
    console.log("Mongo DB ERROR", err);
  }
};

export default connectDB;
