import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CartReclaim – Recover Abandoned Shopify Checkouts",
  description: "Automatically send personalized winback emails to customers who abandon checkout. A/B tested templates and timing optimization for Shopify stores."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="25e256a7-2545-45e5-adc4-009e53e7e39a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
