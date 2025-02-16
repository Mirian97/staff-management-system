import "next-auth";
import { JWT as JWTNextAuth } from "next-auth/jwt";
import { TToken } from "./auth-type";

declare module "next-auth" {
  interface User extends TToken {}

  interface Session {
    accessToken: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends JWTNextAuth {
    accessToken: string | null;
  }
}
