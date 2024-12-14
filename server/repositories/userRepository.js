const User = require("../models/userModels");

async function insertManyUsers(users) {
  return await User.insertMany(users);
}

async function getAllUsers() {
  return await User.find({});
}

module.exports = {
  insertManyUsers,
  getAllUsers,
};
