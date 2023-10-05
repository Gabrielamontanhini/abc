import { User } from "@prisma/client";
import { CreateProfile } from "./profile.protocols";

export type UserSymbol = "email" | "password";

export type AuthUser = Omit<User, "id">;
export type UserProfile = Omit<User, "password">;

export interface UpdateUser extends AuthUser {
    newPassword: string | null
}
export type UserProfileInput = AuthUser & CreateProfile;

export type SystemProperties = "id" | "createdAt" | "updatedAt";