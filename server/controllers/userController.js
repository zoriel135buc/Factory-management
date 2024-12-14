const express = require(`express`);
const router = express.Router();
const userService = require("../services/userService");

router.get("/import", async (req, res) => {
  try {
    const users = await userService.fetchAndSaveUsers();
    res.status(201).json({ message: "Users imported successfully", users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get(`/users`, async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
