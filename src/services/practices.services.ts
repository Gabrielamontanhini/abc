import { practiceRepository } from "@/repositories/practices.repository";

export async function createPractice(name: string) {
  return await practiceRepository.createPractice({ name });
}

export async function getPractice() {
  return await practiceRepository.getPractice();
}

export async function updatePractice(id: number, name: string) {
  return await practiceRepository.updatePractice({ id, name });
}

export async function deletePractice(practiceId: number) {
  return await practiceRepository.deletePractice(practiceId);
}

export const practiceServices = {
  createPractice,
  getPractice,
  updatePractice,
  deletePractice,
};
