const mongoose = require(`mongoose`);
const { Schema } = mongoose;
const shiftSchema = new Schema({
  _id: Schema.Types.ObjectId,
  date: { type: Date, required: true },
  startingHour: { type: Number, required: true },
  endingHour: { type: Number, required: true },
  employees: [{ type: Schema.Types.ObjectId, ref: "Employee" }], // רשימת עובדים במשמרת
});
const Shift = mongoose.model("Shift", shiftSchema, "Shifts");
module.exports = Shift;
