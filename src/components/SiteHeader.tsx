"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Centres of Excellence", "/#centres"], ["International Patients", "/international-patients"],
  ["Home Healthcare", "/home-healthcare"], ["Hospitals", "/hospitals"],
  ["Quick Enquiry", "/contact"], ["Contact Us", "/contact"], ["About Us", "/about"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [open]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="mobile-main-head shell"><Link className="brand" href="/" onClick={()=>setOpen(false)}><strong>MASSH</strong><small>Super Speciality<br/>Hospital</small></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu"><span>{open ? "×" : "☰"}</span>{open ? "CLOSE" : "MENU"}</button></div>
    <div className="topbar"><div className="shell"><span>✉ &nbsp; Email Us</span><span>☎ &nbsp; +91-72909-75999</span><nav><Link href="/about">About Us</Link><a href="#">Investor Relations</a></nav></div></div>
    <div className="nav shell"><Link className="brand" href="/"><strong>MASSH</strong><small>Super Speciality<br/>Hospital</small></Link><nav><Link className="home-nav-link" href="/" aria-label="Home"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.8 12 3l9 7.8v9.7a.5.5 0 0 1-.5.5H15v-6H9v6H3.5a.5.5 0 0 1-.5-.5v-9.7Z"/></svg></Link>{links.slice(0,6).map(([label,href])=><Link href={href} key={label} data-quick-enquiry={label==="Quick Enquiry"?"true":undefined}>{label}</Link>)}</nav></div>
    <div className={`mobile-menu-backdrop ${open ? "is-open" : ""}`} onClick={()=>setOpen(false)}/>
    <aside id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}><div className="mobile-menu-title"><span>Navigation</span><button onClick={()=>setOpen(false)} aria-label="Close menu">×</button></div><nav>{links.map(([label,href])=><Link href={href} key={label} data-quick-enquiry={label==="Quick Enquiry"?"true":undefined} onClick={()=>setOpen(false)}>{label}<span>›</span></Link>)}</nav><div className="mobile-menu-contact"><a href="tel:+917290975999">☎ +91-72909-75999</a><a href="mailto:info@massh.in">✉ info@massh.in</a></div></aside>
  </header>;
}
