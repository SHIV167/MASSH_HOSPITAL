import Link from "next/link";
import FloatingActions from "@/components/FloatingActions";

export default function SiteFooter() {
  return <>
    <footer id="contact"><div className="shell footer-grid">
      <div><div className="brand footer-brand"><strong>MASSH</strong><small>Super Speciality<br/>Hospital</small></div><p>f &nbsp; ◎ &nbsp; 𝕏 &nbsp; ◉</p></div>
      <div><h3>Centres of Excellence</h3><Link href="/#centres">Advanced Urology</Link><Link href="/specialities/laparoscopic-general-surgery">Laparoscopy & GI Surgery</Link><Link href="/#centres">Orthopaedics, Spine & Sports Injury</Link><Link href="/#centres">Oncology</Link><Link href="/specialities/internal-medicine-and-critical-care">Internal Medicine & Critical Care</Link></div>
      <div><h3>Hospitals</h3><Link href="/hospitals">MASSH Chirag Enclave</Link><Link href="/hospitals">MASSH Noida</Link><Link href="/hospitals">MASSH Ludhiana</Link><Link href="/hospitals">MASSH Meerut</Link></div>
      <div><h3>Patient Care</h3><Link href="/home-healthcare">Home Healthcare</Link><Link href="/international-patients">International Patients</Link><Link href="/blogs">Blogs</Link><Link href="/contact" data-quick-enquiry>Quick Enquiry</Link></div>
      <div><h3>About Us</h3><Link href="/about">About Us</Link><Link href="/contact">Contact Us</Link><a>Cancellation Policy</a><a>Privacy Policy</a><a>Terms & Conditions</a></div>
    </div><div className="copyright">© MASSH, Minimal Access Smart Surgery Hospital Pvt. Ltd. All rights reserved.</div></footer>
    <FloatingActions/>
    <nav className="mobile-action-bar" aria-label="Quick contact"><a href="/contact" data-quick-enquiry><b>📝</b><span>Quick Enquiry</span></a><a href="tel:+917290975999"><b>☎</b><span>Call (24×7)</span></a><a href="https://wa.me/917290975999"><b>●</b><span>WhatsApp</span></a></nav>
  </>;
}
