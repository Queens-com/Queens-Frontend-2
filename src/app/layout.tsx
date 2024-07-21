import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/Providers";
import { getServerSession } from "next-auth";
import CustomToploader from "@/components/CustomToploader";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Roboto, Bricolage_Grotesque, Inter, Poppins } from "next/font/google";

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-bricolage',
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${roboto.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body>
        <CustomToploader color="#0A6CFF" showSpinner={false} />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
