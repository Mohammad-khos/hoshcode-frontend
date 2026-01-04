import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dana = localFont({
  src: [
    { path: "../public/fonts/Dana-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Dana-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Dana-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-dana",
  display: "swap",
});


export const metadata: Metadata = {
  title: "هوش کد | آموزش برنامه نویسی",
  description: "پلتفرم جامع آموزش برنامه نویسی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${dana.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}