const axios = require("axios");
const jwt = require("jsonwebtoken");
const dotenv = require(`dotenv`);
dotenv.config();

const DUMMY_PASSWORD = "123456";

async function validateUserWithAPI(email, username) {
  try {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return users.find(
      (user) => user.email === email && user.username === username
    );
  } catch (error) {
    throw new Error("Failed to connect to external API");
  }
}

async function loginUser(email, username, password) {
  if (password !== DUMMY_PASSWORD) {
    throw new Error("Invalid password");
  }

  const user = await validateUserWithAPI(email, username);
  if (!user) {
    throw new Error("User not found in external API");
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRATION }
  );

  return { token, user };
}

module.exports = {
  loginUser,
};
