import { User } from "@prisma/client";
import { UserProfileInput } from "@/protocols/user.protocols";
import { userRepository } from "@/repositories/user.repository";
import customErrors from "@/errors/customErrors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);


export async function signUp(userProfileInput: UserProfileInput): Promise<User> {
    const { nickname, email, password, birthday } = userProfileInput as UserProfileInput;
    const result = await userRepository.findByNickOrEmail(nickname, email);

    if (result != null) {
        const keyValues: KeyValues = {
            email: result.email,
            nickname: result.profile?.nickname
        }
        throw customErrors.conflict(generateErrorMessage(keyValues, nickname, email));
    }
    const hash = bcrypt.hashSync(password, 10);
    userProfileInput.password = hash;
    userProfileInput.birthday = new Date(dayjs(birthday, "DD-MM-YYYY").toString());

    return userRepository.create(userProfileInput);
}

export async function signIn(email: string, password: string) {
    const userProfileInput = await userRepository.readByEmail(email);

    if (userProfileInput == null) throw customErrors.notFound("email");
    if (!bcrypt.compareSync(password, userProfileInput.password)) {
        throw customErrors.unauthorized("password");
    }
    const { password: _password, ...playerUserProfile } = userProfileInput;
    const token = jwt.sign(
        { id: userProfileInput.id },
        process.env.JWT_SECRET || process.env.SECRET_KEY || "test",
        { expiresIn: 24 * 60 * 60 * 7 }
    );
    return { token, userProfileInput: playerUserProfile };
}

export async function update(id: number, email: string, password: string, newPassword: string | null) {
    const user = await userRepository.readById(id);

    if (user == null) throw customErrors.unauthorized();
    if (!bcrypt.compareSync(password, user.password)) {
        throw customErrors.unauthorized("password");
    }
    if (user.email !== email) {
        const otherUser: User | null = await userRepository.readByEmail(email);

        if (otherUser != null) throw customErrors.conflict("email");
    }

    let hash = user.password;
    if (typeof newPassword === "string" && !bcrypt.compareSync(newPassword, user.password)) {
        hash = bcrypt.hashSync(newPassword, 10);
    }
    const result = await userRepository.update(id, email, hash);
    return result;
}

export function find(nick: string, email: string) {
    return userRepository.find(nick, email);
}

const authService = {
    signUp, signIn, update, find
};
export default authService;


type KeyValues = {
    email: string | undefined,
    nickname: string | undefined
}
function generateErrorMessage(result: KeyValues, nickname: string, email: string): string {
    const entities = [];
    console.log(result)
    if (result.nickname === nickname) entities.push("nickname");
    if (result.email === email) entities.push("email");

    let message = entities[0];
    if (entities.length > 1) message = entities.join(" and ");

    return message;
}