import Customer from "../models/customer.model";

const getCustomers = async (req: any, res: any) => {
  try {
    const allCustomers = await Customer.find({}, { __v: 0 });
    res.status(200).json({ msg: "success", data: allCustomers, success: true });
  } catch (err) {
    res.status(500).send(err);
  }
};
const addCustomer = async (req: any, res: any) => {
  try {
    const newCustomer = new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      country: req.body.country,
      gender: req.body.gender,
    });

    await newCustomer.save();

    res.status(201).json({ msg: "success", data: newCustomer, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
    console.log(err);
  }
};
const updateCustomer = (req: any, res: any) => {
  res.send("Hello World!");
};
const deleteCustomer = (req: any, res: any) => {
  res.send("Hello World!");
};
const deleteAllCustomers = (req: any, res: any) => {
  res.send("Hello World!");
};

export {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  deleteAllCustomers,
};
