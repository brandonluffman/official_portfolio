import { Inter } from "next/font/google";
import "./globals.css";
import "./page.css"
import "./navbar.css"
import "./footer.css"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Portfolio | Luffman',
  description: 'My portfolio.',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  favicon: '/favicon.png',
  openGraph: {
    type: 'website',
    title: 'Portfolio | Luffman',
    description: 'My portfolio.',
    url: 'https://portfolioofficial.vercel.app/',
    siteName: 'Portfolio',
    images: [
      {
        url: '/favicon.png',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
