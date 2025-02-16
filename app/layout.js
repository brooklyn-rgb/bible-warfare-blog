import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Bible Devotion",
  description: "The profound depth of biblical scriptures and their interpretation - Learn Spiritual Warfare Principles",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <Link href={'/'}>
        <h1>The Biblical Warfare</h1>
      </Link>
    <Link href={'https://bornagainmission.com/'}>
    <h2>bornagainmission.com</h2>
    </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>Teaching with Inspiration 💛 Apostle Michael Joyous</p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
