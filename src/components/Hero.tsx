export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Minimal Access Surgery Hospital
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-teal-100 font-medium">
            South Delhi | West Delhi | Noida | Meerut | Ludhiana
          </p>
          <p className="text-lg md:text-xl mb-8 text-teal-100">
            Bringing you the best in technology and patient care at our network of super speciality hospitals where your health is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors">
              Book an Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="white" />
          <circle cx="100" cy="100" r="60" fill="white" />
          <circle cx="100" cy="100" r="40" fill="white" />
        </svg>
      </div>
    </section>
  );
}
