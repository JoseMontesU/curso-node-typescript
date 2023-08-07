import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth.service"

const registerContr = async ({ body }: Request, res: Response) => {
    const responseUser = await registerNewUser(body);
    res.send(responseUser);
}

const loginContr = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    const responseUser = await loginUser({ email, password });
    if (responseUser === "PASSWORD_INCORRECT") {
        res.status(403);
        res.send(responseUser);
    } else {
        res.send(responseUser);
    }
}

export { loginContr, registerContr }