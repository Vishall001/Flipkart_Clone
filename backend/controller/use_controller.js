import User from "../model/use.schema.js";

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    // console.log(exist)
    if (exist) {
      return response.status(401).json({ message: "User already exist" });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ mesage: user });
    // response.send({ msg: "THisi s" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
