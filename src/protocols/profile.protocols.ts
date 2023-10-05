import { Profile } from "@prisma/client";
import { UserSymbol, SystemProperties } from "./user.protocols";


export type CreateProfile = Omit<Profile, SystemProperties | "userId">;
export type UpdateProfile = Omit<Profile, SystemProperties | UserSymbol | "nick">;
export type PublicProfile = Omit<Profile, "password">;