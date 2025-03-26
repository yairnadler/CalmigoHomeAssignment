import { Router } from "express";
import { authenticateUser, findCustomer, allCustomers } from "../controllers/controllers.js";
const router = Router();

router.post("/login", authenticateUser);

router.get("/customers/:id", findCustomer);

router.get("/customers", allCustomers);

export default router;
