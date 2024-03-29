import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import PageLayout from "@/components/pageLayout";
import { ThemeProvider } from "@/components/themeProvider";
import AuthProvider from "@/providers/AuthProvider";
import AuthLinks from "@/components/AuthLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Navbar></Navbar> */}

            <AuthLinks></AuthLinks>
            {children}
            {/* <PageLayout></PageLayout> */}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
