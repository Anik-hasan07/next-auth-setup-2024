import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
        // authorization: {
        //     params: {
        //         prompt: "consent",
        //         access_type: 'offline',
        //         response_type: 'code'
        //     }
        // }
    }),
    
  ],
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };