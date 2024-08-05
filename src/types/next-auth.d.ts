import { DefaultSession } from "next-auth";
import { User } from "@/types";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
    accessToken?: string;
    expiresIn: number;
    error?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user?: User;
    error?: string;
  }
}
