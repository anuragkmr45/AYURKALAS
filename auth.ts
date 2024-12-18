import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   async authorize(credentials) {
    //     if (credentials === null) return null;

    //     try {
    //       const user = getUserByEmail(credentials?.email);
    //       if (user) {
    //         const isMatch = user?.password === credentials.password;

    //         if (isMatch) {
    //           return user;
    //         } else {
    //           throw new Error("Email or Password is not correct");
    //         }
    //       } else {
    //         throw new Error("User not found");
    //       }
    //     } catch (error) {
    //       throw new Error(error);
    //     }
    //   },
    // })
  ],
});
