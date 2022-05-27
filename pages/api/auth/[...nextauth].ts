import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";
import { LOGIN_URL, TOKEN_URL } from "Global/spotifyURLs";
import type { JWT } from "next-auth/jwt";

export default NextAuth({
  providers: [
    Spotify({
      id: "spotify",
      name: "Spotify",
      authorization: LOGIN_URL,
      token: TOKEN_URL,
      clientId: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_SECRET || "",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images?.[0]?.url,
          accessToken: "",
          refreshToken: "",
          username: "",
        };
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    // @ts-ignore: This is not a correct error!
    async jwt({ token, account, user }) {
      // Initial Login
      if (account && user) {
        console.log("Initial login hit! ===>", token);
        return {
          ...token,
          username: account.providerAccountId,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires:
            (account.expires_at && account.expires_at * 1000) || 3600,
        };
      }
      // User returns and access token is not expired yet
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires)
        return token;
      // Access token expires
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;
      return session;
    },
  },
});

async function refreshAccessToken(token: JWT) {
  console.log("Refresh token hit!");
  try {
    // TODO Refresh Token
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshTokenError",
    };
  }
}
