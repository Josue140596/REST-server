import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://bryan:${process.env.DB_PASSWORD}@bryan.qkjgw.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`
    );
    console.log("==> DB is connecting");
  } catch (error) {
    throw new Error("Doesn't connect to DB");
  }
};
