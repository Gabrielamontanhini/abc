import prisma from "@/database/db.connection";
import { LIMIT } from "@/utils/constants.utils";
import { Profile } from "@prisma/client";
import { UpdateProfile } from "@/protocols/profile.protocols";


export function readById(id: number): Promise<Profile | null> {
    return prisma.profile.findUnique({ where: { id } });
}

export function update(id: number, data: UpdateProfile): Promise<Profile> {
    return prisma.profile.update({ data, where: { id } });
}

export function deleteById(id: number): Promise<Profile> {
    return prisma.profile.delete({ where: { id } });
}

export function count(): Promise<number> {
    return prisma.profile.count();
}

export function find(nickname: string) {
    return prisma.profile.findMany({
        select: { nickname: true },
        where: {
            nickname: {
                contains: nickname || undefined,
                mode: "insensitive"
            }
        },
        orderBy: { nickname: "asc" },
        take: LIMIT
    });
}

const profileRepository = {
    readById, find,
    update, deleteById, count
};
export default profileRepository;