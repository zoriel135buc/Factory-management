const express = require("express");
const connectDB = require("./config/db");
const cors = require(`cors`);
const usersRouter = require("./controllers/usersController");

connectDB();
const app = express();
const PORT = 3000;
app.use("/", express.json());
app.use();
app.listen(PORT, () => {
  try {
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Failed to start server:", error);
  }
});
