import type { Metadata } from "next";
import BlogsPage from "@/components/BlogsPage";
export const metadata:Metadata={title:"Blogs | MASSH",description:"Read MASSH health articles, surgery guidance, symptoms, treatment information and wellness advice."};
export default function Page(){return <BlogsPage/>}
