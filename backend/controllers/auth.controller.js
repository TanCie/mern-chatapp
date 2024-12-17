import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password does not match." });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists." });
    }

    // hash password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //https://avatar-placeholder.iran.liara.run/
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    });

    if (newUser) {
      // generate jwt token here
      generateTokenandSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || ""); // if user is null, password is empty string

    if (!user || !isPasswordCorrect) {
      alert("Invalid username or password");
      process.exit(1);
    }

    generateTokenandSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic
    });

  } catch (error) {
    console.log("Error in loginUser", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logoit", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
