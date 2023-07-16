import "dotenv/config";
import express from "express";
import cors from "cors";
import dbConnect from "./config/mongodb";

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

//? Connection to mongo
dbConnect()
    .then(() => console.log(`🔌 Connect to mongo`))
    .catch(() => console.log("❌ Problem to connect mongoDB"));

app.listen(PORT, () => console.log(`⚡ Working by the port ${PORT}`));
