import GitHub from "next-auth/providers/github";
import NextAuth from "next-auth";

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth ({
    providers: [GitHub],
})