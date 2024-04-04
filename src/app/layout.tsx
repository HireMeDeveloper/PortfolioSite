'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-secondary-light">
      <section className="h-20 flex justify-center ">
        <h1 className="mt-4 text-5xl font-extrabold text-primary-light">Jeffrey Lamb</h1>
      </section>

      <section className="h-15 flex justify-center">
        <div className="mt-2 pb-2 text-lg">
          <div className="grid grid-cols-3 gap-12 font-bold justify-between">
            <div className="hover:-translate-y-0.5">
              <Link href={"/"} className={`${pathname === '/' ? 'text-primary-light' : 'text-white'}`}>Home</Link>
            </div>
            <div className="hover:-translate-y-0.5">
              <Link href={"/games"} className={`${pathname === '/games' ? 'text-primary-light' : 'text-white'}`}>Games</Link>
            </div>
            <div className="hover:-translate-y-0.5">
              <Link href={"/about"} className={`${pathname === '/about' ? 'text-primary-light' : 'text-white'}`}>&nbsp;About</Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <section className='pb-40'>
      </section>
      <section className="h-20  flex justify-center fixed inset-x-0 bottom-0 bg-secondary-light space-x-20 text-white">
        <div className="mt-7">
          <ul className="columns-3 space-x-4 flex justify-start float-start">
            <li className="hover:-translate-y-1">
              <Link href="//linkedin.com/in/jeffrey-lamb">
                <Image src="/linkedin-logo.png" alt="LinkedIn Logo" width={30} height={30} />
              </Link>
            </li>
            <li className="hover:-translate-y-1">
              <Link href="//github.com/HireMeDeveloper">
                <Image src="/github-icon.png" alt="Github Logo" width={30} height={30} />
              </Link>
            </li>
            <li className="hover:-translate-y-1">
              <Link href="//sandbagstudios.itch.io/">
                <Image src="/itch-logo.png" alt="Itch.io Logo" width={33} height={33} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-secondary-dark">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
