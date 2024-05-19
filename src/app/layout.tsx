import Header from "@/components/Header";
import type { Metadata } from "next";
import { Lato } from "next/font/google";


const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700', '900']
 });

export const metadata: Metadata = {
  title: "Salesforce"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
