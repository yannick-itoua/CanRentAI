"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    router.replace('/'); // Redirect to login page
  };

  // Show Logout button only on protected pages
  const showLogoutButton = pathname !== '/' && pathname !== '/register' && pathname !== '/login';

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          {showLogoutButton && (
            <button onClick={handleLogout}>Logout</button>
          )}
          
        </header>
        {children}
      </body>
    </html>
  );
}