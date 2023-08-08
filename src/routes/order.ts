import { Router } from "express";
import { getOrders } from "../controllers/order.controller";
import { checkJWT } from "../middleware/session";
/**
 * Esta ruta solo puede acceder las personas que tienen session activa
 * que tenga un Jwt valido
 */

const router = Router();

router.get('/', checkJWT, getOrders)

export { router };