const mongoose = require("mongoose");

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  gender: string;
}

const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String },
  gender: { type: String },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
