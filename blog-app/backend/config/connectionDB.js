import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("error to connect DB");
    console.log(error);
    console.log(error.message);
    
    
  }
};
