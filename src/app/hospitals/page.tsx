import type { Metadata } from "next";
import { HospitalsPage } from "@/components/ServicePages";
export const metadata:Metadata={title:"Hospitals | MASSH",description:"Explore the MASSH network of super speciality hospitals across India."};
export default function Page(){return <HospitalsPage/>}
