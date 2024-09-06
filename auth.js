import NextAuth from "next-auth"
import Google from "next-auth/providers/Google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
})