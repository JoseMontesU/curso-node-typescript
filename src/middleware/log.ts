import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const userAgent = req.headers["user-agent"];
    // const apiKey = req.headers["api-key"];
    // console.log(`api key: ${apiKey}`);
    console.log(`userAgent: ${userAgent}`);
    next();
}

export { logMiddleware };