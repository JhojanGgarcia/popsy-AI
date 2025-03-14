import { Pacifico, Manrope } from "next/font/google";
import "./globals.css";

const pacificoFont = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

const ManropeFont = Manrope({
  variable: "--font-manrope",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Popsy",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pacificoFont.variable} ${ManropeFont.variable} font-manrope w-screen overflow-x-hidden bg-[#0d0d0df4] antialiased transition-colors duration-400 ease-in-out dark:bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
