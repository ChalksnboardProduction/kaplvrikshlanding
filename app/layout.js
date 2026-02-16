import { Inter, Outfit } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhatnagar International Foundation School - Admission Enquiry",
  description: "Admission Enquiry Portal for Bhatnagar International Foundation School",
  icons: {
    icon: "/download.jpg",
    shortcut: "/download.jpg",
    apple: "/download.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>

        {children}
      </body>
    </html>
  );
}

