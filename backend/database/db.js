import mongoose from "mongoose";

const Connection = async (User, Password) => {
  const URL = `mongodb+srv://${User}:${Password}@cluster0.acb7egq.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL);
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
