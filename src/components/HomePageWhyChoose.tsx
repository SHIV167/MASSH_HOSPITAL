export default function HomePageWhyChoose() {
  const reasons = [
    {
      title: "State-of-the-Art Facilities",
      description: "Modern infrastructure with advanced medical equipment and technology"
    },
    {
      title: "Expert Medical Professionals",
      description: "Highly skilled surgeons and medical staff with years of specialized experience"
    },
    {
      title: "Minimal Access Surgery",
      description: "Advanced laparoscopic and minimally invasive surgical techniques"
    },
    {
      title: "Digital Integration & Patient Centric Care",
      description: "Comprehensive digital healthcare solutions with patient-focused approach"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose MASSH?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Choosing us as your healthcare provider means you are choosing a smart hospital, where we bring more than 25 years of experience in healthcare services and innovative practices to provide the highest level of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all border border-teal-100 hover:border-teal-300 transform hover:-translate-y-1 group">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mr-6 flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
