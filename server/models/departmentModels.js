const mongoose = require("mongoose");
const { Schema } = mongoose;

const departmentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  manager: { type: Schema.Types.ObjectId, ref: "Employee", required: true }, // מנהל המחלקה
});
const Department = mongoose.model(
  "department",
  departmentSchema,
  "departments"
);
module.exports = Department;
