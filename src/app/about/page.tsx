import type { Metadata } from "next";
import MasshAbout from "@/components/MasshAbout";

export const metadata: Metadata = {
  title: "About Us - Super Speciality Hospital in Delhi NCR | MASSH",
  description: "Learn about MASSH, our vision, mission, leadership and network of minimal access smart surgery hospitals.",
};

export default function AboutPage() {
  return <MasshAbout />;
}
