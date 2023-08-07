import { Request, Response, Router } from "express";
import { createItem, deleteItem, getItem, getItems, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getItems);

router.get("/:id", logMiddleware, getItem);

router.post("/", createItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export { router };