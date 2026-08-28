export default function WhyChooseMassh() {
  const reasons = [
    {
      icon: "🏥",
      title: "State-of-the-Art Facilities",
      description: "Modern infrastructure with advanced medical equipment and technology"
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Medical Professionals",
      description: "Highly skilled surgeons and medical staff with years of specialized experience"
    },
    {
      icon: "🔬",
      title: "Minimal Access Surgery",
      description: "Advanced laparoscopic and minimally invasive surgical techniques"
    },
    {
      icon: "💻",
      title: "Digital Integration & Patient Centric Care",
      description: "Comprehensive digital healthcare solutions with patient-focused approach"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose MASSH?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choosing us as your healthcare provider means you are choosing a smart hospital, where we bring more than 25 years of experience in healthcare services and innovative practices to provide the highest level of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-3xl mr-4 flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
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
