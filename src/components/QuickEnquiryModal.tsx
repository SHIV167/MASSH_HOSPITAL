"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function QuickEnquiryModal() {
  const [open, setOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const click = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest("[data-quick-enquiry]");
      if (!target) return;
      event.preventDefault();
      setOpen(true);
      setStatus("idle");
      setMessage("");
    };
    const key = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("click", click);
    window.addEventListener("keydown", key);
    return () => { document.removeEventListener("click", click); window.removeEventListener("keydown", key); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setTimeout(() => dialog.current?.querySelector<HTMLInputElement>("input")?.focus(), 50);
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!verified) return;
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/enquiry", { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify({ ...payload, formType:"Quick Enquiry" }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setStatus("success");
      setMessage(result.message);
      form.reset();
      setVerified(false);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit your enquiry.");
    }
  }

  if (!open) return null;
  return <div className="enquiry-overlay" role="presentation" onMouseDown={event=>event.target===event.currentTarget&&setOpen(false)}>
    <div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" ref={dialog}>
      <button className="enquiry-close" type="button" onClick={()=>setOpen(false)} aria-label="Close enquiry form">×</button>
      <h2 id="enquiry-title">Get An Instant Callback!</h2>
      <p>Register Now and Get Free Consultation by Senior Consultant.</p>
      <form onSubmit={submit}>
        <input name="name" required placeholder="Enter your Full Name*"/>
        <input name="phone" required inputMode="tel" placeholder="🇮🇳  Enter your Contact Number*"/>
        <input className="form-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
        <textarea name="message" required placeholder="Message"/>
        <label className="human-check enquiry-check"><input type="checkbox" checked={verified} onChange={event=>setVerified(event.target.checked)}/><span>I&apos;m not a robot</span><b>reCAPTCHA</b></label>
        <button className="contact-submit" disabled={!verified||status==="sending"}>{status==="sending"?"Sending...":"Submit"}</button>
        {message&&<p className={`form-status ${status}`}>{message}</p>}
      </form>
    </div>
  </div>;
}
