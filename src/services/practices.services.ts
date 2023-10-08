import { practiceRepository } from "@/repositories/practices.repository";

export async function createPractice(description: string) {
  return await practiceRepository.createPractice({ description });
}

export async function getPractice() {
  return await practiceRepository.getPractice();
}

export async function updatePractice(id: number, description: string) {
  return await practiceRepository.updatePractice({ id, description });
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
