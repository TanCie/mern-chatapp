import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // send messages to all users except the logged in user
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    // to send messages to me: const allUsers = await User.find({});

    res.status(200).json(allUsers);

  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ message: "Internal error message" });
  }
}