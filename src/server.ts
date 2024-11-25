import app from "./app";
import connectToMongoDB from "./db/config.db";
const PORT = process.env.PORT || 3000;

const  startServer = async () => {
  try {
    await connectToMongoDB();
    console.log("MongoDB connection established successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch(e) {
    console.error("Failed to connect to MongoDB", e);
    process.exit(1);
  }
}

startServer();