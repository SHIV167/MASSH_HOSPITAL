export default function MasshInfo() {
  const infoItems = [
    "About MASSH",
    "Our Mission",
    "Our Vision",
    "Our Values",
    "Our Team",
    "Infrastructure",
    "Quality & Safety",
    "Patient Testimonials"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
              <div className="text-6xl mb-4">👨‍⚕️👩‍⚕️🤝👨‍⚕️</div>
              <p className="text-xl font-semibold text-gray-800 mb-2">
                MASSH Information & Insight Care
              </p>
              <p className="text-gray-600">
                Our dedicated team of medical professionals working together for your health
              </p>
            </div>
          </div>

          {/* Right side - Info List */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              MASSH Information & Insight Care
            </h2>

            <div className="space-y-3">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white mr-4 group-hover:bg-teal-700 transition-colors">
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-teal-700 transition-colors">
                    {item}
                  </span>
                  <svg
                    className="w-5 h-5 ml-auto text-gray-400 group-hover:text-teal-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
