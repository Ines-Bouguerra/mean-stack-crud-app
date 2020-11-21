const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
// Define collection and schema
let Employee = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true, //The unique: true property in email schema does the internal optimization to enhance the performance.
    },
    password: {
      type: String,
    },
    designation: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
  },
  {
    collection: "employees",
  }
);
// The Schema.plugin(uniqueValidator) method won’t let duplicate email id to be stored in the database.
// Schema.plugin(uniqueValidator, { message: 'Email already in use.' });

module.exports = mongoose.model("Employee", Employee);
