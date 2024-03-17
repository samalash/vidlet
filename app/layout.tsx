'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {DarkThemeToggle, Flowbite, Navbar} from 'flowbite-react';
import Link from 'next/link';
import { ThemeModeScript } from 'flowbite-react';
import { HiCheckCircle } from 'react-icons/hi';


const inter = Inter({ subsets: ["latin"] });

/*
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><ThemeModeScript /></head>
      <body className={inter.className}>
      <Flowbite>
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} href="#">
            <img src="/favicon.svg" className="mr-3 h-6 sm:h-9 mt-1" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white light:text-black pb-2">Vidlet</span>
          </Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="pr-3">
              <Navbar.Link href="/">Home</Navbar.Link>
              <Navbar.Link href="/flashcards">Flashcards</Navbar.Link>
              <Navbar.Link href="/quiz">Quiz</Navbar.Link>

            </Navbar.Collapse>


        </Navbar>
        {children}


      </Flowbite>
      </body>
    </html>
  );
}
