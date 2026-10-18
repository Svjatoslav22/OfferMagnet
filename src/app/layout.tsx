import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OfferMagnet - AI Job Search Agent",
  description: "Автономний ШІ-агент для пошуку та оцінки IT-вакансій",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="bg-slate-50 font-sans text-slate-900 antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
