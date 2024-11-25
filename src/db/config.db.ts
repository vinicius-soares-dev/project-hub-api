import mongoose from "mongoose";

const uri = process.env.DB_URL;

mongoose.set("strictQuery", true);

const connectToMongoDB = async () => {
  if (!uri) {
    console.error("MongoDB connection URI is undefined");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(`Error connecting to MongoDB: ${e}`);
  }
};

export default connectToMongoDB;