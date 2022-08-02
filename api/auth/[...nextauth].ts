import NextAuth from "next-auth";
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

const scopes = new URLSearchParams({
  scope: scope.join(","),
});

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
        };
      }
      return token;
    },

    //database: process.env.DATABASE_URL
  },
  pages: {
    signIn: "/",
  },
});
