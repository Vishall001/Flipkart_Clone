import mongoose from "mongoose";

 const Connection = async (User, Password) => {
  const URL = `mongodb+srv://${User}:${Password}@cluster0.acb7egq.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

export default Connection;
