import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://budhirajadeepak123:<Password>cluster0.aykgt20.mongodb.net/food-del"
  ).then(()=>{
    console.log("DB connected");
  });
};
