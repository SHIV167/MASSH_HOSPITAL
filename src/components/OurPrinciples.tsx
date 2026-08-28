export default function OurPrinciples() {
  const principles = [
    {
      icon: "🏥",
      title: "Patient-Centric Approach",
      description: "Putting patients first with personalized care and attention"
    },
    {
      icon: "🔬",
      title: "Advanced Technology",
      description: "State-of-the-art equipment and cutting-edge surgical techniques"
    },
    {
      icon: "👨‍⚕️",
      title: "Experienced Surgeons",
      description: "Highly skilled surgeons with years of specialized experience"
    },
    {
      icon: "❤️",
      title: "Comprehensive Care",
      description: "Holistic care from diagnosis to recovery and beyond"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center text-4xl group-hover:bg-teal-200 transition-colors">
                {principle.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {principle.title}
              </h3>
              <p className="text-gray-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
