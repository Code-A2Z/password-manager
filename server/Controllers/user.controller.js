import jwt from "jsonwebtoken";
import Users from "../Models/user.model.js";
import { emailRegex } from "../utils/helpers.js";

export const registerUser = async (req, res) => {
  let { userId, firstName, lastName, email, imageUrl } = req.body;

  if (typeof firstName !== 'string' || firstName.length < 2) {
    return res.status(400).json({ error: "First name must be at least 2 characters long." });
  }
  if (typeof email !== 'string' || email.trim() === "" || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }
  if (imageUrl && !imageUrl.startsWith("http")) {
    return res.status(400).json({ error: "Invalid image URL format." });
  }

  if (process.env.SECRET_ACCESS_KEY === undefined) {
    console.error("SECRET_ACCESS_KEY is not defined");
    return res.status(500).json({ error: "Internal server error." });
  }

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      const user = new Users({
        userId,
        firstName,
        lastName,
        email,
        imageUrl
      });
      await user.save();
      const access_token = jwt.sign({ id: user._id }, process.env.SECRET_ACCESS_KEY, { expiresIn: "7d" });
      return res.status(201).json({ access_token });
    } else {
      const access_token = jwt.sign({ id: user._id }, process.env.SECRET_ACCESS_KEY, { expiresIn: "7d" });
      return res.status(200).json({ access_token });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};