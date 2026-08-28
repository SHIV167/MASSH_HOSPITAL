export default function CentresOfExcellence() {
  const centres = [
    {
      name: "Advanced Urology",
      description: "Comprehensive urological care with advanced treatments"
    },
    {
      name: "Laparoscopy & GI Surgery",
      description: "Minimally invasive gastrointestinal surgeries"
    },
    {
      name: "Orthopaedics, Spine & Sports Injury",
      description: "Expert care for bone, joint and sports injuries"
    },
    {
      name: "Laparoscopic Gynaecology",
      description: "Advanced gynecological procedures with minimal invasion"
    },
    {
      name: "Bariatric & Metabolic Surgery",
      description: "Weight loss and metabolic surgery solutions"
    },
    {
      name: "Oncology",
      description: "Comprehensive cancer care and chemotherapy"
    },
    {
      name: "Internal Medicine & Critical Care",
      description: "Expert critical care and internal medicine services"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Centres of Excellence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bringing you the best in technology and patient care at our network of super speciality hospitals where your health is our priority. With our cutting edge technology and expert clinical team expect nothing but the best quality care in every domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centres.map((centre, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                  {centre.name}
                </h3>
              </div>
              <p className="text-gray-600">
                {centre.description}
              </p>
              <div className="mt-4 text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
