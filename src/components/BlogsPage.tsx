"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { blogArticles as articles,blogCategories as categories } from "@/data/blogs";

function BlogCard({article}:{article:typeof articles[number]}){const href=`/blogs/${article.slug}`;return <article className="blogs-card" id={article.slug}><Link href={href} className="blogs-card-image"><img src={article.photo} alt=""/><b>{article.category}</b></Link><h2><Link href={href}>{article.title}</Link></h2><p>{article.excerpt}</p><small>▦ &nbsp; {article.date}</small></article>}

export default function BlogsPage(){
  const [category,setCategory]=useState("All"); const [expanded,setExpanded]=useState(false);
  const filtered=useMemo(()=>articles.filter(article=>category==="All"||article.category===category),[category]);
  const visible=expanded?filtered:filtered.slice(0,8);
  return <div className="massh-site blogs-page"><SiteHeader/><main>
    <section className="blogs-feature shell"><BlogCard article={articles[0]}/><div className="blogs-feature-side">{articles.slice(1,5).map(article=><BlogCard article={article} key={article.slug}/>)}</div></section>
    <nav className="blog-filters" aria-label="Blog categories"><div className="shell">{categories.map(item=><button className={category===item?"is-active":""} onClick={()=>{setCategory(item);setExpanded(false)}} key={item}>{item}</button>)}</div></nav>
    <section className="shell blogs-library"><div className="blogs-grid">{visible.map(article=><BlogCard article={article} key={article.slug}/>)}</div>{visible.length<filtered.length&&<button className="blogs-load" onClick={()=>setExpanded(true)}>Load More</button>}
      <div className="similar-blogs"><h2>Similar Blogs</h2>{articles.slice(0,3).map(article=><article key={article.slug}><img src={article.photo} alt=""/><div><b>{article.category}</b><h3>{article.title}</h3><p>{article.excerpt}</p><small>Written by <strong>MASSH</strong> &nbsp; ▦ {article.date}</small></div></article>)}<button className="blogs-load">Load More</button></div>
    </section>
  </main><SiteFooter/></div>;
}
