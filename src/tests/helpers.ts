import prisma from "../src/database/db.connection";

export async function cleanDB() {
    await prisma.profile.deleteMany();
    await prisma.user.deleteMany();
}