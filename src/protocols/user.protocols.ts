import { User } from "@prisma/client";
import { CreateProfile } from "./profile.protocols";


export type SystemProperties = "id" | "createdAt" | "updatedAt";

export type AuthUser = Omit<User, SystemProperties | "id">;
export type UserProfile = Omit<User, SystemProperties | "password">;
export type CreateUserProfile = AuthUser & CreateProfile;

export interface UpdateUser extends AuthUser {
    newPassword: string | null
};
