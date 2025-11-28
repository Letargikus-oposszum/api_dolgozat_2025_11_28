import express from "express";
import cors from "cors";
import { carRoutes } from "./src/carsRoutes.js";

const PORT = 3211;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/",carRoutes);

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
