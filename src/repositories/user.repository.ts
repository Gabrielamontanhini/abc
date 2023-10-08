import prisma from "@/database/db.connection";
import { CreateUserProfile } from "@/protocols/user.protocols";
import { LIMIT } from "@/utils/constants.utils";
import { User } from "@prisma/client";

function create(CreateUserProfile: CreateUserProfile) {
  const { email, password, ...profile } = CreateUserProfile;
  return prisma.user.create({
    data: {
      email,
      password,
      profile: { create: profile },
    },
  });
}

function readByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
    include: { profile: true },
  });
}

function readById(id: number): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}

function update(id: number, email: string, password: string): Promise<User> {
  return prisma.user.update({
    data: { email, password },
    where: { id },
  });
}

export function readByNickOrEmail(nickName: string, email: string) {
  return prisma.user.findFirst({
    where: { OR: [{ email }, { profile: { nickName } }] },
    select: {
      email: true,
      profile: {
        select: { nickName: true },
      },
    },
  });
}

export function find(email: string) {
  return prisma.user.findMany({
    select: { email: true },
    where: {
      email: {
        contains: email || undefined,
        mode: "insensitive",
      },
    },
    orderBy: { email: "asc" },
    take: LIMIT,
  });
}

export const userRepository = {
  create,
  readByEmail,
  readById,
  update,
  readByNickOrEmail,
  find,
};
