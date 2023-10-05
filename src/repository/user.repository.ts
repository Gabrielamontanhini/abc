import prisma from "@/database/db.connection";
import { UserProfileInput } from "@/protocols/user.protocols";
import { LIMIT } from "@/utils/constants.utils";
import { User } from "@prisma/client";

function create(userProfileInput: UserProfileInput) {
    const { email, password, ...profile } = userProfileInput;
    return prisma.user.create({
        data: {
            email, password,
            profile: { create: profile }
        }
    });
}

function readByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email },
        include: { profile: true }
    });
}

function readById(id: number): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
}

function update(id: number, email: string, password: string): Promise<User> {
    return prisma.user.update({
        data: { email, password },
        where: { id }
    });
}

export function findByNickOrEmail(nickname: string, email: string) {
    return prisma.user.findFirst({
        where: { OR: [{ email }, { profile: { nickname } }] },
        select: {
            email: true,
            profile: {
                select: { nickname: true }
            }
        }
    });
}

export function find(nickname: string, email: string) {
    return prisma.user.findMany({
        select: { email: true },
        where: {
                email: {
                    contains: email || undefined,
                    mode: "insensitive"
                }
        },
        orderBy: { email: "asc" },
        take: LIMIT
    });
}

export const userRepository = {
    create, readByEmail, readById, update, findByNickOrEmail, find
}