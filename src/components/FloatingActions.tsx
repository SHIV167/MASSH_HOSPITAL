"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 350);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="floating-actions"><a className="floating-phone" href="tel:+917290975999" aria-label="Call MASSH at +91 72909 75999"><b>24/7</b><span>+91-72909-75999</span></a><button className={`scroll-top ${visible ? "is-visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">↑</button></div>;
}
