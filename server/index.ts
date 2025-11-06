import "dotenv/config";
import express from "express";
import customerRoutes from "./src/routes/customers.route";
import cors from "cors";
import connectDB from "./connectDB";

connectDB();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/customers", customerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
