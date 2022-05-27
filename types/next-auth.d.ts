import NextAuth from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

// In this file we can extend or re-define next-auth important types like session, user, account etc
// Resource: https://next-auth.js.org/getting-started/typescript

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      accessToken: string;
      refreshToken: string;
      username: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    /** OpenID ID Token */
    idToken?: string;
    accessTokenExpires?: number;
  }
}
