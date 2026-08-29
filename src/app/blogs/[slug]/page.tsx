import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GenericBlogArticle from "@/components/GenericBlogArticle";
import { blogArticles,getBlog } from "@/data/blogs";

export function generateStaticParams(){return blogArticles.filter(article=>article.slug!=="learn-about-the-crucial-gallbladder-stone-symptoms-in-women").map(article=>({slug:article.slug}))}
export async function generateMetadata({params}:PageProps<"/blogs/[slug]">):Promise<Metadata>{const {slug}=await params;const article=getBlog(slug);return article?{title:`${article.title} | MASSH`,description:article.excerpt}:{}}
export default async function Page({params}:PageProps<"/blogs/[slug]">){const {slug}=await params;const article=getBlog(slug);if(!article||slug==="learn-about-the-crucial-gallbladder-stone-symptoms-in-women")notFound();return <GenericBlogArticle article={article}/>}
