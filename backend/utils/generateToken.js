import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "20d"
  });

  res.cookie("jwt", token, {
    maxAge: 20 * 24 * 60 * 60 * 1000, //hs
    httpOnly: true, //to prevent xss attacks
    sameSite: "strict", //to prevent csrf attacks
    secure: process.env.NODE_ENV !== "development"
  });
}

export default generateTokenandSetCookie;