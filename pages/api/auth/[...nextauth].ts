import NextAuth, { User } from "next-auth";
import Spotify from "next-auth/providers/spotify";

const scope = [
  "user-read-email",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-modify",
  "user-read-recently-played",
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
  "ugc-image-upload",
  "app-remote-control",
];

export const BASIC = Buffer.from(
  `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,
  "base64"
);

const scopes = new URLSearchParams({
  scope: scope.join(","),
});

const refreshToken = async (token: any) => {
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${BASIC}`,
      },
      body: JSON.stringify({
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      }),
    });

    if (!res.ok) {
      throw token;
    }

    const data = await res.json();

    return {
      ...token,
      accessToken: data.access_token,
      accessTokenExpires: Date.now() + data.expires_in * 1,
      refreshToken: data.refresh_token ?? token.refresh_token,
    };
  } catch (e) {
    console.error(e);
  }
};

const authorization_url =
  "https://accounts.spotify.com/authorize?" + scopes.toString();

export default NextAuth({
  providers: [
    Spotify({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      authorization: authorization_url,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at! * 1000,
          user: user,
        };
      }

      if ((token.accessTokenExpires as number) < Date.now()) {
        return refreshToken(token);
      }

      return token;
    },
    async session({ token, user, session }) {
      session.accessToken = token.accessToken;
      session.user = token.user as User;
      return session;
    },
    //database: process.env.DATABASE_URL
  },
  pages: {
    signIn: "/",
  },
});
