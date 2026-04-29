import "./globals.css";
import { Fredoka, Quicksand } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fredoka",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-quicksand",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${fredoka.variable} ${quicksand.variable}`}>
        {children}
      </body>
    </html>
  );
}