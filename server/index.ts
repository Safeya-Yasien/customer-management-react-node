import "dotenv/config";
import express from "express";
import customerRoutes from "./src/routes/customers.route";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/customers")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();

app.use("/api/customers", customerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
