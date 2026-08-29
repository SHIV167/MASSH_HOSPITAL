import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getInternationalService, internationalPatientServices } from "@/data/internationalServices";

export function generateStaticParams(){return internationalPatientServices.map(service=>({service:service.slug}))}

export async function generateMetadata({params}:PageProps<"/international-patients/[service]">):Promise<Metadata>{
  const {service:slug}=await params; const service=getInternationalService(slug);
  return service?{title:`${service.title} | International Patients | MASSH`,description:service.summary}:{};
}

export default async function Page({params}:PageProps<"/international-patients/[service]">){
  const {service:slug}=await params; const service=getInternationalService(slug); if(!service) notFound();
  const others=internationalPatientServices.filter(item=>item.slug!==slug).slice(0,4);
  return <div className="massh-site patient-service-page"><SiteHeader/><main>
    <section className="patient-service-hero"><div className="shell patient-service-hero-layout"><div><p>International Patient Services</p><h1>{service.title}</h1><span>{service.summary}</span></div><img src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=1100&q=85`} alt={service.title}/></div></section>
    <section className="patient-service-content shell"><div className="patient-service-intro"><div><p className="eyebrow">MASSH International Care</p><h2>Complete Support, Every Step of the Way</h2><p>{service.description}</p><button data-quick-enquiry>Speak to Our International Desk</button></div><aside><b>{service.icon}</b><h3>{service.title}</h3><p>Dedicated assistance from enquiry through recovery.</p></aside></div>
      <div className="patient-service-columns"><article><h2>How We Help</h2><ul>{service.benefits.map(item=><li key={item}>{item}</li>)}</ul></article><article><h2>Your Journey</h2><ol>{service.steps.map(item=><li key={item}>{item}</li>)}</ol></article></div>
      <div className="related-services"><div className="section-heading"><h2>Explore Other Services</h2></div><div className="related-service-grid">{others.map(item=><Link href={`/international-patients/${item.slug}`} key={item.slug}><b>{item.icon}</b><span>{item.title}</span><i>→</i></Link>)}</div></div>
    </section>
  </main><SiteFooter/></div>;
}
