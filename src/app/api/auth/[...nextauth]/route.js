import nextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";
import googleAuth from "next-auth/providers/google";

export const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTaUTH_SECRET,
};

const handler = nextAuth(authOption);

export { handler as GET, handler as POST };
