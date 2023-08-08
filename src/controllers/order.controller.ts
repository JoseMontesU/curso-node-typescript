import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken";

interface RequestEXt extends Request {
    user?: string | JwtPayload;
}

const getOrders = (req: RequestEXt, res: Response) => {
    try {
        res.send({
            message: 'ESTO SOLO LO VEN LAS PERSONAS CON SESSION / JWT',
            user: req.user,
        })
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
}

export { getOrders };