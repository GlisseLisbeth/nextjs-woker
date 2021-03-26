import jwt from "jsonwebtoken";
import { connectdb } from "../../../database/db";
import User from "../../../models/user.model";

export default async function handler(req, res) {
  const { nickname, token } = req.body;
  await connectdb();
  if (req.method === "POST") {
    try {
      if (!nickname || !token) {
        return res.status(400).json({ error: "Put the values" });
      }

      const code = await jwt.verify(token, process.env.Key);
      if (!code) {
        return res.status(401).json({ error: "Invalid token" });
      }

      const existNickname = await User.findOne({ nickname });
      if (existNickname) {
        return res.status(400).json({ error: "Nickname exist" });
      }

      switch (code.type) {
        case "google":
          const existGoogle = await User.findOne({ googleId: code.id });

          if (existGoogle) {
            return res.status(400).json({ error: "Google Exist" });
          }

          const newGoogleUser = await new User({
            googleId: code.id,
            googleName: code.name,
            nickname,
            image: code.image,
            email: code.email,
          }).save();

          const googleToken = await jwt.sign(
            { _id: newGoogleUser._id },
            process.env.KEY
          );

          res.status(200).json({ token: googleToken });
          break;

        default:
          return res.status(400).json({ error: "Type not found" });
          break;
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
  } else {
    res.status(200).json({ message: "Only Post method" });
  }
}
