export default function HomePageCentres() {
  const centres = [
    {
      name: "Advanced Urology",
      link: "/specialities/urology"
    },
    {
      name: "Laparoscopy & GI Surgery",
      link: "/specialities/laparoscopic-general-surgery"
    },
    {
      name: "Orthopaedics, Spine & Sports Injury",
      link: "/specialities/orthopaedics-spine-and-sports-injury"
    },
    {
      name: "Laparoscopic Gynaecology",
      link: "/specialities/laparoscopic-gynaecology-and-obstretics"
    },
    {
      name: "Bariatric & Metabolic Surgery",
      link: "/specialities/bariatric-surgery-in-delhi"
    },
    {
      name: "Oncology",
      link: "/specialities/surgical-oncology-and-chemotherapy"
    },
    {
      name: "Internal Medicine & Critical Care",
      link: "/specialities/internal-medicine-and-critical-care"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Centres of Excellence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Bringing you the best in technology and patient care at our network of super speciality hospitals where your health is our priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centres.map((centre, index) => (
            <a
              key={index}
              href={centre.link}
              className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all group border border-teal-100 hover:border-teal-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                  {centre.name}
                </h3>
              </div>
              <div className="text-teal-600 font-semibold flex items-center group-hover:text-teal-700 transition-colors">
                Learn More 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
