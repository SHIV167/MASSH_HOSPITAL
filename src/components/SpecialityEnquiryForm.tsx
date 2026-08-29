"use client";

import { FormEvent, useState } from "react";

const callTimes=["7:00 AM - 8:00 AM","8:00 AM - 9:00 AM","9:00 AM - 10:00 AM","10:00 AM - 11:00 AM","11:00 AM - 12:00 PM","12:00 PM - 1:00 PM","1:00 PM - 2:00 PM","2:00 PM - 3:00 PM","3:00 PM - 4:00 PM","4:00 PM - 5:00 PM","5:00 PM - 6:00 PM","6:00 PM - 7:00 PM","7:00 PM - 8:00 PM"];

export default function SpecialityEnquiryForm({source="Speciality Quick Enquiry"}:{source?:string}){
  const [verified,setVerified]=useState(false); const [sending,setSending]=useState(false); const [status,setStatus]=useState<"idle"|"success"|"error">("idle"); const [message,setMessage]=useState("");
  async function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();if(!verified)return;const form=event.currentTarget;const data=new FormData(form);data.set("formType",source);setSending(true);setStatus("idle");setMessage("");try{const response=await fetch("/api/enquiry",{method:"POST",body:data});const result=await response.json();if(!response.ok)throw new Error(result.error);setStatus("success");setMessage(result.message);form.reset();setVerified(false)}catch(error){setStatus("error");setMessage(error instanceof Error?error.message:"Unable to submit your enquiry.")}finally{setSending(false)}}
  return <div className="speciality-enquiry speciality-enquiry-form"><h2>Quick Enquiry</h2><p>Get a free call from our Health Advisor.</p><form onSubmit={submit}>
    <input name="name" required minLength={2} maxLength={100} placeholder="Enter your name*" autoComplete="name"/>
    <input name="phone" required inputMode="tel" pattern="[0-9+() -]{8,20}" placeholder="🇮🇳  Enter your Contact Number*" autoComplete="tel"/>
    <input name="email" required type="email" maxLength={160} placeholder="Email address*" autoComplete="email"/>
    <select name="gender" required defaultValue=""><option value="" disabled>Gender*</option><option>Male</option><option>Female</option><option>Other</option></select>
    <textarea name="message" required minLength={5} maxLength={2500} placeholder="Leave us a message"/>
    <select name="preferredTime" required defaultValue=""><option value="" disabled>Preferred Time to Call*</option>{callTimes.map(time=><option key={time}>{time}</option>)}</select>
    <label className="report-upload"><span>Upload Reports <small>png, jpg, pdf or doc</small></span><input name="reports" type="file" multiple accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={event=>{const files=Array.from(event.currentTarget.files??[]);event.currentTarget.setCustomValidity(files.length>4?"Please select a maximum of 4 reports.":files.some(file=>file.size>5*1024*1024)?"Each report must be 5 MB or smaller.":"");}}/><em>Maximum 4 files, 5 MB each</em></label>
    <input className="form-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <label className="speciality-human-check"><input type="checkbox" checked={verified} onChange={event=>setVerified(event.target.checked)}/><span>I&apos;m not a robot</span></label>
    <button type="submit" disabled={!verified||sending}>{sending?"Sending...":"Submit"}</button>{message&&<p className={`form-status ${status}`}>{message}</p>}
  </form></div>;
}
