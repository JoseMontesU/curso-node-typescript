import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestEXt extends Request {
    user?: string | JwtPayload;
}

const checkJWT = async (req: RequestEXt, res: Response, next: NextFunction) => {

    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = await verifyToken(`${jwt}`);
        console.log(isUser);
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_UNA_SESION_VALIDA");
        } else {
            req.user = isUser;
            console.log(jwtByUser);
            next();
        }
    } catch (e) {
        console.log({ e });
        res.status(400);
        res.send("Invalid Session")
    }
}

export { checkJWT };