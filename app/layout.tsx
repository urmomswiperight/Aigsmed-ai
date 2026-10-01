import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AegisMed AI — Clinical AI Compliance & Data Exposure Audit",
  description: "Total visibility over patient data exposure across clinical AI stacks. Enterprise healthcare AI compliance and private clinical decision-support tooling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-obsidian text-clinical antialiased selection:bg-teal selection:text-clinical">
        {children}
      </body>
    </html>
  );
}
