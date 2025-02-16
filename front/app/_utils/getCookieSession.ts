"use server";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

const COOKIE_TOKEN_NAME = "next-auth.session-token";

export async function getCookieSession() {
  try {
    const cookieStore = await cookies();
    const cookieToken = cookieStore.get(COOKIE_TOKEN_NAME)?.value;
    if (!cookieToken) return null;

    const decodeSession = decode({
      secret: process.env.NEXTAUTH_SECRET as string,
      token: cookieToken,
    });
    return decodeSession;
  } catch (err) {
    console.log("Error when decoding cookies: ", err);
    return null;
  }
}

export async function getDecodeToken() {
  const session = await getCookieSession();
  const token = session?.accessToken;
  return token ?? null;
}
