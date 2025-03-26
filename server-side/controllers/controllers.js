import { getAllCustomers } from "../models/models.js";
import dotenv from "dotenv";

dotenv.config("../.env");

const USERNAME = process.env.LOGIN_USERNAME;
const PASSWORD = process.env.LOGIN_PASSWORD;

// Authenticate user's credentials
export const authenticateUser = (req, res) => {
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    res.status(200).json({ message: "Authentication successful" });
  } else {
    res.status(401).json({ message: "Authentication failed" });
  }
};

// Find a customer by ID
export const findCustomer = (req, res) => {
  const customerId = parseInt(req.params.id); // Convert string to number
  const customers = getAllCustomers();
  const customer = customers.find((customer) => customer.customerId === customerId);
  
  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }
  
  res.status(200).json(customer);
};

// Get all customers
export const allCustomers = (req, res) => {
  const customers = getAllCustomers();
  res.status(200).json(customers);
};
