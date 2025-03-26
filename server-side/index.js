import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/routes.js";
import { generateRandomCustomers } from "./models/models.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Generate random customers on startup
generateRandomCustomers();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3002',
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type'],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Middlewares
app.use(cors(corsOptions)); // Enable CORS with options
app.use(json());
app.use(morgan("dev"));
app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
