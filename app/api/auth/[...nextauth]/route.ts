import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "upnl-credential",
      type: "credentials",
      credentials: {
        user_id: { label: "UserId", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: authorize logic
        if (credentials) {
          return { id: credentials.user_id };
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
