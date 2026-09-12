import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"], display: 'swap', variable: '--font-outfit'
});




export const metadata = {
  title: "Rahul Vimal | MERN Stack Developer",
  description:
    "Portfolio of Rahul Vimal, a MERN Stack Developer building responsive web apps, scalable APIs, AI workflows, and full-stack products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${outfit.className} antialiased leading-7 dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
