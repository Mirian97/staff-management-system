import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AllProviders from "./_providers/all-providers";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gestão de Funcionários",
  description:
    "Sistema de gestão de funcionários, respectivas tarefas e departamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} antialiased`}>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  );
}
