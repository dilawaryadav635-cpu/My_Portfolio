import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  variable: "--font-manrope",
  src: [
    {
      path: "./fonts/SegoeUI.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SegoeUI-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const cormorant = localFont({
  variable: "--font-cormorant",
  src: [
    {
      path: "./fonts/Garamond.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Garamond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Dilawar Singh Yadav | Product Manager",
  description:
    "Portfolio of Dilawar Singh Yadav, a product manager focused on workflow transformation, enterprise platforms, lending operations, and high-impact execution.",
  keywords: [
    "Dilawar Singh Yadav",
    "Product Manager",
    "Enterprise Product",
    "Workflow Automation",
    "Platform Product",
    "Lending",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
