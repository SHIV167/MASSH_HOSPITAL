import type { Metadata } from "next";
import "./globals.css";
import QuickEnquiryModal from "@/components/QuickEnquiryModal";

export const metadata: Metadata = {
  title: "Best Urology, Laparoscopy & Ortho Hospital in Delhi - MASSH",
  description:
    "MASSH is a leading minimal access surgery hospital offering advanced urology, laparoscopy, orthopaedics and patient care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}<QuickEnquiryModal/></body>
    </html>
  );
}
