const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  startWorkYear: { type: Number, required: true },
  departmentID: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  }, // שייכות למחלקה
});
const Employee = mongoose.model("Employee", employeeSchema, "EmployeeS");
module.exports = Employee;
