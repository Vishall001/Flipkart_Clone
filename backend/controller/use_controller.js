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

export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return res.status(200).json(`${username} login successfull`);
    } else {
      return res.status(401).json("Invalid login");
    }
  } catch (err) {
    res.status(500).json("Erroe while login", err.mesage);
  }
};
