import { Profile } from "@prisma/client";
import { SystemProperties } from "./user.protocols";


export type CreateProfile = Omit<Profile, SystemProperties | "userId">;
export type UpdateProfile = Omit<Profile, SystemProperties | "userId">; // FIXME
export type PublicProfile = Omit<Profile, "password">;