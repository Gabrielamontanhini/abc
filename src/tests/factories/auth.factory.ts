import prisma from "@/database/db.connection";
import { CreateUserProfile } from "@/protocols/user.protocols";
import { faker } from "@faker-js/faker";

function build(
    nickname: string,
    fullname: string,
    email: string,
    password: string,
    avatarUrl: string | null,
    description: string | null,
    bio: string | null,
    birthday: Date) {

    return prisma.user.create({
        data: {
            email, password,
            profile: { create: { nickname, fullname, description, bio, avatarUrl, birthday } }
        },
        include: {
            profile: true
        }
    });
}

function random(): CreateUserProfile {
    return {
        nickname: faker.person.firstName(),
        fullname: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.string.uuid(),
        description: faker.person.bio(),
        bio: faker.person.bio(),
        avatarUrl: faker.image.avatar(),
        birthday: new Date("01-01-1999") // FIXME: randomize date
    };
}

function buildRandom() {
    const { email, password, nickname, fullname, description, bio, avatarUrl, birthday } = random();
    return build(nickname, fullname, email, password, avatarUrl, description, bio, birthday);
}

const authFactory = { build, random, buildRandom };
export default authFactory;