import type { Metadata } from "next";
import ContactDesign from "@/components/ContactDesign";

export const metadata: Metadata = {
  title: "Contact Us - Best Hospital in Delhi NCR | MASSH",
  description: "Contact MASSH hospitals for appointments, enquiries, feedback and location information.",
};

export default function ContactPage(){ return <ContactDesign/>; }
