import { hash, compare } from 'bcryptjs';

const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, 10);
    return passwordHash;
}

const verified = async (pass: string, passEncripted: string) => {
    const isCorrect = await compare(pass, passEncripted);
    return isCorrect;
}

export { encrypt, verified };