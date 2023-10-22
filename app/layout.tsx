import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Providers } from "@/components/providers";
import { AppHeader } from "@/components/header";
import { AppMain, AppFooter } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo: Next.js Clerk",
  description:
    "A simple and powerful Next.js template featuring authentication and user management powered by Clerk.",
  openGraph: { images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <Providers>
          <body className={`${inter.className} min-h-screen flex flex-col`}>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800">
              <AppHeader />
              <AppMain>{children}</AppMain>
              <AppFooter />
            </div>
          </body>
        </Providers>
      </ClerkProvider>
    </html>
  );
}
