import CardSlider from "@/components/CardSlider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProcedureTabs from "@/components/ProcedureTabs";
import Link from "next/link";
import { internationalPatientServices } from "@/data/internationalServices";

const medicalImage = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const centres = [
  ["♜", "Advanced Urology"], ["⚕", "Laparoscopy & GI Surgery"],
  ["♿", "Orthopaedics, Spine & Sports Injury"], ["♡", "Laparoscopic Gynaecology"],
  ["♨", "Bariatric & Metabolic Surgery"], ["✣", "Oncology"],
  ["▥", "Internal Medicine & Critical Care"],
];
const hospitals = [
  ["MASSH Super Speciality Hospital, South Delhi", medicalImage("photo-1586773860418-d37222d8fce3")],
  ["MASSH MANAS Super Speciality Hospital, Noida", medicalImage("photo-1538108149393-fbbd81895907")],
  ["MASSH PROLIFE Super Speciality Hospital, Ludhiana", medicalImage("photo-1519494026892-80bbd2d6fd0d")],
  ["MSSH MASSH Super Speciality Hospital, Patel Nagar", medicalImage("photo-1576091160399-112ba8d25d1d")],
];
const surgeries = [
  ["Bariatric & Metabolic Surgery", "⚕", "Achieve long-term weight loss and better control of diabetes with advanced bariatric and metabolic surgery."],
  ["Kidney Stones", "◉", "Kidney stones are hard deposits formed in the kidneys. Advanced laser care offers fast relief and recovery."],
  ["Hernia", "◌", "A hernia occurs when an organ pushes through a weak spot. Minimal access repair means smaller scars."],
  ["Gallstones", "◒", "Gallstones can cause pain and inflammation. Laparoscopic treatment enables a shorter hospital stay."],
];
const doctors = [
  ["Dr. Sumit Paria", "MIS, GI & Bariatric Surgery", medicalImage("photo-1612349317150-e413f6a5b16d", 500)],
  ["Dr. Priya Tayal", "Consultant - Radiology", medicalImage("photo-1594824476967-48c8b964273f", 500)],
  ["Dr. Varun Rehani", "Director - Neurology", medicalImage("photo-1582750433449-648ed127bb54", 500)],
  ["Dr. Abhinav Gupta", "Consultant Radiologist", medicalImage("photo-1537368910025-700350fe46c7", 500)],
];
const news = [
  ["MASSH Prolife Hospital, in association with IMA, organises a CME programme", medicalImage("photo-1579684385127-1ef15d508118", 600)],
  ["Patient Success Story: Emergency Bariatric Surgery", medicalImage("photo-1551076805-e1869033e561", 600)],
  ["Successful RIRS Surgery for Large Kidney Stone", medicalImage("photo-1581595219315-a187dd40c322", 600)],
  ["MASSH - PROLIFE Hospital Launching ROSA Robot", medicalImage("photo-1516841273335-e39b37888115", 600)],
];
const blogs = [
  ["Learn About The Crucial Gallbladder Stone Symptoms in Women", medicalImage("photo-1559757175-0eb30cd8c063", 600)],
  ["Appendix Pain: Location, Symptoms & When to See a Doctor", medicalImage("photo-1579684453423-f84349ef60b0", 600)],
  ["10 Early Signs of Kidney Stones You Should Never Ignore", medicalImage("photo-1551601651-2a8555f1a136", 600)],
  ["Fatty Liver Symptoms You Should Not Ignore", medicalImage("photo-1471864190281-a93a3070b6de", 600)],
];
const videos = ["MASSH Hospital Care","Advanced Treatment at MASSH","Patient Care Services","MASSH Medical Excellence"];

function Heading({ children, intro }: { children: React.ReactNode; intro?: string }) {
  return <div className="section-heading"><h2>{children}</h2>{intro && <p>{intro}</p>}</div>;
}

export default function MasshHome() {
  return <div className="massh-site">
    <SiteHeader />
    <main id="top">
      <section className="hero"><div className="hero-copy"><span>Leading</span><h1>Minimal Access Surgery Hospital</h1><p>South Delhi | West Delhi | Noida | Meerut | Ludhiana</p></div></section>
      <section className="section centres" id="centres"><div className="shell"><Heading intro="Bringing you the best in technology and patient care at our network of super speciality hospitals where your health is our priority.">Centres of Excellence</Heading><div className="centre-grid">{centres.map(([icon,name])=><Link href={name==="Advanced Urology"?"/specialities/urology":name==="Laparoscopy & GI Surgery"?"/specialities/laparoscopic-general-surgery":name==="Orthopaedics, Spine & Sports Injury"?"/specialities/orthopaedics-spine-and-sports-injury":name==="Internal Medicine & Critical Care"?"/specialities/internal-medicine-and-critical-care":"#procedures"} className="centre" key={name}><b>{icon}</b><span>{name}</span></Link>)}</div></div></section>
      <section className="section procedures" id="procedures"><div className="shell procedure-layout"><div className="doctor-scene"><img src="/images/key-procedures-and-treatments-img.png" alt="Doctor consulting a patient about key procedures and treatments"/></div><div><Heading>Key Procedures and Treatments</Heading><p>Experience medical care that is at par with international standards at MASSH Group of Hospitals. With cutting-edge equipment and world-class surgical techniques, we ensure groundbreaking medical achievements and exceptional outcomes.</p><ProcedureTabs/></div></div></section>
      <section className="international" id="international"><img src={medicalImage("photo-1576765608866-5b51046452be", 1800)} alt="International patient receiving specialist care"/><div className="international-card"><h2>MASSH International Patient Care</h2><p>Committed to providing world-class medical services to patients from all over the world. Our dedicated team of medical professionals, language interpreters, and comprehensive medical services ensure that international patients receive the care they need. We provide full support throughout the entire process, from pre-arrival to post-discharge.</p><div className="care-list">{internationalPatientServices.map(service=><Link href={`/international-patients/${service.slug}`} key={service.slug}><b>{service.icon}</b><span>{service.title}</span><i>→</i></Link>)}</div><Link className="international-explore" href="/international-patients">Explore More</Link></div></section>
      <section className="section hospitals" id="hospitals"><div className="shell"><Heading intro="MASSH Group of Hospitals is a trusted name in delivering advanced healthcare solutions with a network of premier super speciality hospitals.">Hospitals</Heading><CardSlider label="hospitals" className="card-grid">{hospitals.map(([name,img])=><article className="hospital-card" key={name}><img src={img} alt=""/><h3>{name}</h3><button>☎ Call Now</button></article>)}</CardSlider></div></section>
      <section className="section surgery"><div className="shell"><Heading>Minimal Access Surgery</Heading><CardSlider label="minimal access surgery services" className="card-grid">{surgeries.map(([name,icon,desc])=><article className="surgery-card" key={name}><div className="medical-icon">{icon}</div><h3>{name}</h3><p>{desc}</p>{name==="Gallstones"&&<Link className="treatment-link" href="/specialities/laparoscopic-general-surgery/gallstones">View Treatment</Link>}</article>)}</CardSlider></div></section>
      <section className="section doctors"><div className="shell"><Heading intro="Embark on a journey of exceptional healthcare guided by industry's top luminaries who consistently exceed expectations and set new benchmarks for excellence.">Meet Our Doctors</Heading><CardSlider label="doctors" className="card-grid">{doctors.map(([name,speciality,img])=><article className="doctor-card" key={name}><img src={img} alt={name}/><h3>{name}</h3><p>{speciality}</p><button data-quick-enquiry>▣ Book Appointment</button></article>)}</CardSlider></div></section>
      <section className="section videos"><div className="shell"><Heading>Videos</Heading><CardSlider label="videos" className="video-grid">{videos.map((title,index)=><article className="youtube-video-card" key={title}><div className="youtube-frame"><iframe src={`https://www.youtube.com/embed/jvlwR1jTW4A?start=${index*10}`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div><h3>{title}</h3></article>)}</CardSlider></div></section>
      <section className="section why" id="about"><div className="shell"><Heading intro="Choosing us as your healthcare provider means you are choosing a smart hospital, where we bring more than 25 years of experience in healthcare services and innovative practices.">Why Choose MASSH?</Heading><div className="why-layout"><img src={medicalImage("photo-1626315869436-d6781ba69d6e", 1000)} alt="MASSH hospital facility"/><div className="why-list"><article><b>●</b><div><h3>State-of-the-Art Facilities</h3><p>Advanced equipment and technology ensure accuracy, speed and world-class treatment.</p></div></article><article><b>●</b><div><h3>Expert Medical Professionals</h3><p>Our specialists are nationally and internationally recognised for exceptional outcomes.</p></div></article><article><b>●</b><div><h3>Minimal Access Surgery</h3><p>Advanced surgery using the latest incision-less and 3D laparoscopic methods.</p></div></article><article><b>●</b><div><h3>Digital Integration & Patient Centric Care</h3><p>Seamless, personalised care supported by modern digital systems.</p></div></article></div></div></div></section>
      <section className="section news" id="news"><div className="shell"><Heading>News & Events</Heading><CardSlider label="news and events" className="card-grid">{news.map(([title,img])=><article className="story-card" key={title}><img src={img} alt=""/><h3>{title}</h3><p>MASSH continues to deliver advanced healthcare, innovation and meaningful patient outcomes.</p></article>)}</CardSlider></div></section>
      <section className="section blogs"><div className="shell"><Heading>Health Blogs</Heading><CardSlider label="health blogs" className="card-grid">{blogs.map(([title,img],index)=><article className="blog-card" key={title}><img src={img} alt=""/><h3>{title}</h3><p>By MASSH · 2026</p><Link className="blog-read-link" href={`/blogs/${["learn-about-the-crucial-gallbladder-stone-symptoms-in-women","appendix-pain-location","early-kidney-stone-signs","fatty-liver-symptoms"][index]}`}>Read More</Link></article>)}</CardSlider><div className="explore"><Link className="explore-blogs-link" href="/blogs">● Explore More</Link></div></div></section>
    </main>
    <SiteFooter />
  </div>;
}
