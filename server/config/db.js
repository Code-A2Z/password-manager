import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { autoIndex: true });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB\n\n", error);
    process.exit(1);
  }
};

export default connectDB;
