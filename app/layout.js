import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schedulefy",
  description: "Meeting Scheduling Applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header  */}
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
          {children}
        </main>
        {/* Footer  */}
        <footer className="bg-blue-100 py-7">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with Prince 🔥</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
