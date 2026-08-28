"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const locations = {
  "South Delhi": { phone:"+91 11135021666\n+91-72909-75999", address:"B-18, Chirag Enclave, Opp. Nehru Place, New Delhi - 110048", query:"MASSH Hospital Chirag Enclave Delhi" },
  Noida: { phone:"+91-72909-75999", address:"MASSH MANAS, Noida, Uttar Pradesh", query:"MASSH MANAS Hospital Noida" },
  Ludhiana: { phone:"+91-72909-75999", address:"MASSH PROLIFE, Ludhiana, Punjab", query:"MASSH PROLIFE Hospital Ludhiana" },
  "West Delhi": { phone:"+91-72909-75999", address:"MASSH, Punjabi Bagh, West Delhi", query:"MASSH Punjabi Bagh Delhi" },
};

export default function ContactDesign() {
  const [formType,setFormType] = useState<"Enquiry"|"Feedback">("Enquiry");
  const [location,setLocation] = useState<keyof typeof locations>("South Delhi");
  const [verified,setVerified] = useState(false);
  const [sent,setSent] = useState(false);
  const [sending,setSending] = useState(false);
  const [formMessage,setFormMessage] = useState("");
  const details = locations[location];
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!verified) return;
    const form = event.currentTarget;
    setSending(true); setSent(false); setFormMessage("");
    try {
      const payload = Object.fromEntries(new FormData(form));
      const response = await fetch("/api/enquiry", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({...payload,formType}) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setSent(true); setFormMessage(result.message); form.reset(); setVerified(false);
    } catch (error) {
      setFormMessage(error instanceof Error ? error.message : "Unable to submit the form.");
    } finally { setSending(false); }
  }
  return <div className="massh-site contact-page"><SiteHeader/><main>
    <section className="contact-hero"><div className="shell contact-hero-layout"><div><h1>Contact Us</h1><p>Please fill out the form so we can help answer your questions</p></div><img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85" alt="MASSH doctor available to answer questions"/></div></section>
    <section className="contact-main shell"><form className="contact-form-card" onSubmit={submit}><div className="form-tabs" role="tablist" aria-label="Contact form type"><button type="button" className={formType==="Enquiry"?"is-active":""} onClick={()=>{setFormType("Enquiry");setSent(false);setFormMessage("")}}>Enquiry</button><button type="button" className={formType==="Feedback"?"is-active":""} onClick={()=>{setFormType("Feedback");setSent(false);setFormMessage("")}}>Feedback</button></div><div className="contact-fields"><input name="name" required placeholder="Enter your Full Name*"/><input name="phone" required inputMode="tel" placeholder="🇮🇳  Enter your Contact Number*"/><input name="email" required type="email" placeholder="Enter your Email ID*"/><input className="form-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/><textarea name="message" required placeholder={formType==="Enquiry"?"Leave us a message":"Share your feedback"}/></div><label className="human-check"><input type="checkbox" checked={verified} onChange={e=>setVerified(e.target.checked)}/><span>I&apos;m not a robot</span><b>reCAPTCHA</b></label><button className="contact-submit" disabled={!verified||sending}>{sending?"Sending...":sent?"Submitted Successfully":"Submit"}</button>{formMessage&&<p className={`form-status ${sent?"success":"error"}`}>{formMessage}</p>}</form>
      <div className="location-tabs" role="tablist" aria-label="Hospital locations">{Object.keys(locations).map(name=><button type="button" key={name} onClick={()=>setLocation(name as keyof typeof locations)} className={location===name?"is-active":""}>{name}</button>)}</div>
      <div className="contact-info-grid"><article><b>☎</b><h2>Call Us</h2>{details.phone.split("\n").map(number=><a href={`tel:${number.replace(/\D/g,"")}`} key={number}>{number}</a>)}</article><article><b>●</b><h2>Visit Us</h2><p>{details.address}</p></article><article><b>✉</b><h2>Mail Us</h2><a href="mailto:info@massh.in">info@massh.in</a></article></div>
      <iframe className="contact-map" title={`Map for MASSH ${location}`} loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(details.query)}&output=embed`}/>
    </section>
  </main><SiteFooter/></div>;
}
