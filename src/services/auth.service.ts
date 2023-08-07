import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";
    const passEncrypted = await encrypt(password);
    const registerNewUser = await UserModel.create({ email, password: passEncrypted, name });
    return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "NOT_FOUND_USER";
    const passEncripted = checkIs.password;
    const isCorrect = await verified(password, passEncripted);
    if (!isCorrect) return "PASSWORD_INCORRECT";
    return checkIs;
}

export { registerNewUser, loginUser };