import customErrors from "@/errors/customErrors";
import { UpdateProfile } from "@/protocols/profile.protocols";
import profileRepository from "@/repositories/profile.repository";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export async function update(id: number, profile: UpdateProfile) {
  const result = await profileRepository.find(profile.nickName);
  if (result != null) throw customErrors.conflict("nickname");

  profile.birthday = new Date(dayjs(profile.birthday, "DD-MM-YYYY").toString()); // FIXME
  const updatedProfile = await profileRepository.update(id, profile);

  if (updatedProfile == null) throw customErrors.conflict("nickname or email");
  return updatedProfile;
}

export async function deleteById(id: number) {
  const deletedProfile = await profileRepository.deleteById(id);
  if (deletedProfile == null) throw customErrors.notFound("profile");
  return deletedProfile;
}

export function count() {
  return profileRepository.count();
}

const profileService = {
  update,
  deleteById,
  count,
};
export default profileService;
