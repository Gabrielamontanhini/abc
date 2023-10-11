import prisma from "@/database/db.connection";
import { Practice, PracticeAdvantage } from "@prisma/client";

async function createPractice(data: PracticeCreateInput): Promise<Practice> {
  return prisma.practice.create({
    data,
  });
}

async function getPractice(): Promise<Practice[]> {
  return prisma.practice.findMany();
}

async function updatePractice(data: Practice): Promise<Practice> {
  return prisma.practice.update({
    where: { id: data.id },
    data: {
      name: data.name,
    },
  });
}

async function upsertPracticeAdvantage(
  advantage: string,
  description: string,
  practiceId: number
) {
  return await prisma.practiceAdvantage.upsert({
    where: { practiceId },
    create: { advantage, description, practiceId },
    update: { advantage, description },
  });
}

async function deletePractice(practiceId: number) {
  return prisma.practice.delete({ where: { id: practiceId } });
}

export type PracticeCreateInput = Omit<Practice, "id">;

export type PracticeUpsert = Omit<PracticeAdvantage, "id" | "practiceId">;

export const practiceRepository = {
  createPractice,
  getPractice,
  updatePractice,
  upsertPracticeAdvantage,
  deletePractice,
};
