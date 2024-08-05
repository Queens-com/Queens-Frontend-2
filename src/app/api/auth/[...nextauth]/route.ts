import { constants } from "@/config/constants";
import { routes, apiRoutes } from "@/config/routes";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import NextAuth, { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { User } from "@/types";
import CredentialsProvider from "next-auth/providers/credentials";

const { ENVIRONMENT, CONFIG_TEXTS, API } = constants;
export const authOptions: AuthOptions = {
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.user = user?.data as User;
        token.accessToken = user?.accessToken as string;
        token.expiresIn = (Date.now() +
          (user?.expiresIn || 60) * 1000) as number;
      }
      if (token.expiresIn && Date.now() > token.expiresIn) {
        token.error = "Token expired";
        return {
          ...token,
          error: "Token expired",
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token?.user as User;
      return {
        ...session,
        accessToken: token?.accessToken,
        error: token?.error,
        expiresIn: token?.expiresIn,
      };
    },
  },
  debug: ENVIRONMENT.development,
  pages: {
    signIn: routes.login,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const c: AxiosRequestConfig = {
            headers: {
              Authorization: `Bearer ${credentials?.accessToken}`,
            },
          };
          const res = await axios.get(
            `${API.baseURL}${apiRoutes.user.profile}`,
            c
          );

          return {
            ...res.data,
            accessToken: credentials?.accessToken,
            ...(credentials?.expiresIn
              ? { expiresIn: +credentials?.expiresIn }
              : {}),
          } as any;
        } catch (err) {
          const x = err as AxiosError<{ detail: string }>;
          throw new Error(
            x.response?.data.detail ?? CONFIG_TEXTS.somethingWentWrong
          );
        }
      },
      credentials: {
        accessToken: {
          label: "Access Token",
          placeholder: "Access Token",
          type: "text",
        },
        expiresIn: {
          label: "Expires In",
          placeholder: "Expires In",
          type: "number",
        },
      },
      id: "update-jwt",
      name: "Update JWT",
      type: "credentials",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
