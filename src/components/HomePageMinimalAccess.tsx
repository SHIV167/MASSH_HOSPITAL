export default function HomePageMinimalAccess() {
  const procedures = [
    {
      name: "Bariatric & Metabolic Surgery",
      description: "Achieve long-term weight loss and better control of diabetes with advanced bariatric and metabolic surgery.",
      link: "/specialities/metabolic-bariatric-surgery"
    },
    {
      name: "Kidney Stones",
      description: "Advanced treatment for kidney stones using minimally invasive techniques for faster recovery.",
      link: "/specialities/urology/kidney-stones"
    },
    {
      name: "Hernia",
      description: "Expert hernia repair using laparoscopic techniques for minimal pain and quick recovery.",
      link: "/specialities/laparoscopic-general-surgery/hernia"
    },
    {
      name: "Gallstones",
      description: "Safe and effective gallstone removal using advanced laparoscopic surgery.",
      link: "/specialities/laparoscopic-general-surgery/gallstones"
    },
    {
      name: "Fibroids",
      description: "Minimally invasive fibroid removal for women's health and well-being.",
      link: "/specialities/laparoscopic-gynaecology-and-obstretics/fibroids"
    },
    {
      name: "Enlarged Prostate (BPH)",
      description: "Advanced treatment for enlarged prostate using minimally invasive procedures.",
      link: "/specialities/urology/benign-prostatic-hyperplasia-bph"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Minimal Access Surgery
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our specialized minimal access surgery procedures offer faster recovery, less pain, and smaller incisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <a
              key={index}
              href={procedure.link}
              className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100 hover:shadow-2xl transition-all group transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                {procedure.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {procedure.description}
              </p>
              <span className="text-teal-600 font-semibold flex items-center group-hover:text-teal-700 transition-colors">
                Learn More 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
