import mongoose from "mongoose";

const connectDB = async() => {
  try {
    await mongoose.connect(
      "mongodb+srv://m-shogo_0409:ne220036C@cluster0.8g3ltsw.mongodb.net/nextjs-fullstack-app-practice?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
