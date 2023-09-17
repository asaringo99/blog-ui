import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import { getServerSession, NextAuthOptions } from "next-auth";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET }),
    GithubProvider({ clientId: process.env.AUTH_GITHUB_ID, clientSecret: process.env.AUTH_GITHUB_SECRET }),
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(await compare(credentials.password, user.password))) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          randomKey: "Hey cool",
        };
      },
    }),
  ],
  callbacks: {
  //   redirect: async ({ url, baseUrl }: any) => {
  //     return baseUrl
  //   },
  //   signIn: async ({ user, account, profile, email, credentials }) => {
  //     return true
  //   },
    session: async ({ session, token }) => {
        console.log("in session", { session, token });
        token.accessToken
        return {
            ...session,
            user: {
              ...session.user,
              role: token.userRole,
              id: token.id,
              randomKey: token.randomKey,
            },
        };
    },
    jwt: async ({ token, user, account, profile }) => {
      // 注意: トークンをログ出力してはダメです。
      console.log('in jwt', {user, token, account, profile})

      if (user) {
          token.user = user;
          const u = user as unknown as any;
          return {
            ...token,
            id: u.id,
            randomKey: u.randomKey,
          }
          // token.userRole = u.role;
      }
      if (account) {
          token.accessToken = account.access_token
      }
      return token;
    },
  },
};

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, authOptions)
}


declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXTAUTH_SECRET: string

      AUTH_GITHUB_ID: string
      AUTH_GITHUB_SECRET: string
      AUTH_GOOGLE_ID: string
      AUTH_GOOGLE_SECRET: string
    }
  }
}
