import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import withAuth from "next-auth/middleware";

export default withAuth({
  jwt: { decode: authOptions.jwt?.decode },
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: ["/"],
};
