import { JWT_EXPIRATION_TIME } from "@/utils/constants.utils";
import { CreateUserProfile } from "@/protocols/user.protocols";
import { userRepository } from "@/repositories/user.repository";
import { User } from "@prisma/client";
import customErrors from "@/errors/customErrors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dotenv from "dotenv";

dotenv.config();
dayjs.extend(customParseFormat);


export async function signUp(createUserProfile: CreateUserProfile): Promise<User> {
    const { nickname, email, password, birthday } = createUserProfile;
    const result = await userRepository.readByNickOrEmail(nickname, email);

    if (result != null) {
        const keyValues: KeyValues = {
            email: result.email,
            nickname: result.profile?.nickname
        }
        throw customErrors.conflict(generateErrorMessage(keyValues, nickname, email));
    }
    const hash = bcrypt.hashSync(password, 10);
    createUserProfile.password = hash;
    createUserProfile.birthday = new Date(dayjs(birthday, "DD-MM-YYYY").toString()); // FIXME

    return userRepository.create(createUserProfile);
}

export async function signIn(email: string, password: string) {
    const createUserProfile = await userRepository.readByEmail(email);

    if (createUserProfile == null) throw customErrors.notFound("email");
    if (!bcrypt.compareSync(password, createUserProfile.password)) {
        throw customErrors.unauthorized("password");
    }
    const { password: _password, ...playerUserProfile } = createUserProfile;
    const token = jwt.sign(
        { id: createUserProfile.id },
        process.env.JWT_SECRET as string,
        { expiresIn: JWT_EXPIRATION_TIME }
    );
    return { token, playerUserProfile };
}

export async function update(id: number, email: string, password: string, newPassword: string | null) {
    const user = await userRepository.readById(id);

    if (user == null) throw customErrors.unauthorized();
    if (!bcrypt.compareSync(password, user.password)) {
        throw customErrors.unauthorized("password");
    }
    if (user.email !== email) {
        const otherUser = await userRepository.readByEmail(email) as User | null;

        if (otherUser != null) throw customErrors.conflict("email");
    }
    let hash = user.password;
    if (typeof newPassword === "string" && !bcrypt.compareSync(newPassword, user.password)) {
        hash = bcrypt.hashSync(newPassword, 10);
    }
    const result = await userRepository.update(id, email, hash);
    return result;
}

export function find(email: string) {
    return userRepository.find(email);
}

const authService = {
    signUp, signIn, update, find
};
export default authService;


type KeyValues = { // FIXME: move to ?
    email: string | undefined,
    nickname: string | undefined
}

// FIXME: move to ?
function generateErrorMessage(result: KeyValues, nickname: string, email: string): string {
    const entities = [];
    if (result.nickname === nickname) entities.push("nickname");
    if (result.email === email) entities.push("email");

    let message = entities[0];
    if (entities.length > 1) message = entities.join(" and ");

    return message;
}