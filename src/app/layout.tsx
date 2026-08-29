import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import QuickEnquiryModal from "@/components/QuickEnquiryModal";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-medical",
  fallback: ["Segoe UI", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Best Urology, Laparoscopy & Ortho Hospital in Delhi - MASSH",
  description:
    "MASSH is a leading minimal access surgery hospital offering advanced urology, laparoscopy, orthopaedics and patient care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={openSans.variable}>
      <body suppressHydrationWarning>{children}<QuickEnquiryModal/></body>
    </html>
  );
}
