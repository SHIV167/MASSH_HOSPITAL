export default function MinimalAccessSurgery() {
  const surgeries = [
    {
      icon: "🫁",
      title: "Thoracic Surgery",
      description: "Minimally invasive procedures for chest and lung conditions"
    },
    {
      icon: "🫃",
      title: "Abdominal Surgery",
      description: "Advanced laparoscopic techniques for abdominal conditions"
    },
    {
      icon: "🦴",
      title: "Orthopedic Surgery",
      description: "Minimal access procedures for joint and bone conditions"
    },
    {
      icon: "🧠",
      title: "Neurosurgery",
      description: "Precision minimal access brain and spine surgeries"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Minimal Access Surgery
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our specialized minimal access surgery procedures offer faster recovery, less pain, and smaller incisions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {surgeries.map((surgery, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="w-20 h-20 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center text-4xl group-hover:bg-teal-200 transition-colors">
                {surgery.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {surgery.title}
              </h3>
              <p className="text-gray-600 text-center">
                {surgery.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors">
            Learn More About Our Procedures
          </button>
        </div>
      </div>
    </section>
  );
}
